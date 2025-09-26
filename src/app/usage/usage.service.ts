import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Usage, UsageDocument } from 'src/schema/usage.schema';
import {
  body,
  brakeSystem,
  climateSystem,
  drive,
  electronicSystem,
  engineAndTransmission,
  extraFeatures,
  gearbox,
  overall,
  paintwork,
  rim,
  salon,
  suspensionAndSteering,
  tire,
  UsageDto,
  VehicleCondition,
  windshield,
} from './usage.dto';
import { ServiceService } from '../service/service.service';
import { InjectModel } from '@nestjs/mongoose';
import { ADMIN, DRIVE, serviceValues } from 'src/base/constants';
import axios from 'axios';
import { InfoService } from '../info/info.service';

@Injectable()
export class UsageService {
  constructor(
    @InjectModel(Usage.name) private readonly model: Model<UsageDocument>,
    private readonly service: ServiceService,
    private readonly info: InfoService,
  ) {}

  public async create(dto: UsageDto, user: string, role: number) {
    try {
      const type = serviceValues[dto.service];
      const value = dto.value;
      const {
        milleage,
        drive: d,
        plateNumber,
        gearbox: gb,
        vehicleCondition: vc,
        body: b,
        rim: r,
        windshield: ws,
        paintwork: pw,
        overall: oa,
        electronicSystem: es,
        salon: s,
        climateSystem: cs,
        suspensionAndSteering: ss,
        engineAndTransmission: et,
        brakeSystem: bs,
        tire: t,
        extraFeatures: ef,
      } = value;
      const data = {
        milleage,
        drive: drive[d]?.toLowerCase(),
        gearbox: gearbox[gb]?.toLowerCase(),
        vehicleCondition: VehicleCondition[vc]?.toLowerCase(),
        body: body[b]?.toLowerCase(),
        rim: rim[r]?.toLowerCase(),
        windshield: windshield[ws]?.toLowerCase(),
        paintwork: paintwork[pw]?.toLowerCase(),
        overall: overall[oa]?.toLowerCase(),
        electronicSystem: electronicSystem[es]?.toLowerCase(),
        salon: salon[s]?.toLowerCase(),
        climateSystem: climateSystem[cs]?.toLowerCase(),
        suspensionAndSteering: suspensionAndSteering[ss]?.toLowerCase(),
        engineAndTransmission: engineAndTransmission[et]?.toLowerCase(),
        brakeSystem: brakeSystem[bs]?.toLowerCase(),
        tire: tire[t]?.toLowerCase(),
        extraFeatures: extraFeatures[ef]?.toLowerCase(),
      };

      // const drive = DRIVE[(value.drive as string).toLowerCase()];
      if (!type || !plateNumber || plateNumber.length != 7)
        throw new HttpException('Алдаатай хүсэлт', HttpStatus.BAD_REQUEST);

      const driveIndex = DRIVE.findIndex(
        (r) => r.toLowerCase() == data.drive.toLowerCase(),
      );
      const res = await axios.post(
        `${process.env.MODEL_URL}predict/car`,
        JSON.stringify({
          num: plateNumber,
          drive: DRIVE[driveIndex],
          ...data,
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
      let service = await this.service.getType(+type, user);
      const usage = await this.model.create({
        ...dto,
        user,
        service: service._id,
        amount: service.price * (dto.quantity ?? 1),
        estimatedPrice: estimatedPrice,
        value: {
          plateNumber,
          ...data,
        },
      });
      return usage._id;
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
    const res = await this.model.findById(id).lean();
    const vehicle = await this.info.car(res.value.plateNumber);
    return {
      ...res,
      ...vehicle,
    };
  }
}
