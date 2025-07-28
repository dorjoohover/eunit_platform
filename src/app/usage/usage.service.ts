import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Usage, UsageDocument } from 'src/schema/usage.schema';
import { UsageDto } from './usage.dto';
import { ServiceService } from '../service/service.service';
import { InjectModel } from '@nestjs/mongoose';
import { ADMIN, DRIVE, GEARBOX, serviceValues } from 'src/base/constants';
import axios from 'axios';

@Injectable()
export class UsageService {
  constructor(
    @InjectModel(Usage.name) private readonly model: Model<UsageDocument>,
    private readonly service: ServiceService,
  ) {}

  public async create(dto: UsageDto, user: string, role: number) {
    try {
      const type = serviceValues[dto.service];
      const value = dto.value;
      const plateNumber = value.plateNumber;
      console.log(plateNumber);
      const drive = DRIVE[(value.drive as string).toLowerCase()];
      const gearbox = GEARBOX[(value.gearbox as string).toLowerCase()];
      if (!type || !plateNumber || plateNumber.length != 7)
        throw new HttpException('Алдаатай хүсэлт', HttpStatus.BAD_REQUEST);
      console.log(process.env.MODEL_URL);
      const res = await axios.post(
        process.env.MODEL_URL,
        JSON.stringify({
          num: plateNumber,
          milleage: value.milleage,
          drive: drive,
          gearbox: gearbox,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (!res.data || !res.data.prediction || res.data.prediction == 0)
        throw new HttpException('Алдаа гарлаа', HttpStatus.BAD_REQUEST);
      const estimatedPrice =
        Math.round(+res.data.prediction.predicted_price / 100000) * 100000;
      if (role != ADMIN) {
        let service = await this.service.getType(+type, user);
        await this.model.create({
          ...dto,
          user,
          service: service._id,
          amount: service.price * (dto.quantity ?? 1),
          estimatedPrice: estimatedPrice,
          value: {
            plateNumber,
            gearbox,
            drive,
            milleage: value.milleage,
          },
        });
      }
      return estimatedPrice;
    } catch (error) {
      console.log(error);
    }
  }

  public async findByUsers(user: string) {
    return await this.model.find({
      user,
    });
  }

  public async findOne(id: string) {
    return await this.model.findById(id);
  }
}
