import { HttpException, Injectable } from '@nestjs/common';
import { ServiceDto } from './service.dto';
import { Model } from 'mongoose';
import { Service, ServiceDocument } from 'src/schema/service.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ServiceService {
  constructor(
    @InjectModel(Service.name) private readonly model: Model<ServiceDocument>,
  ) {}
  public async create(dto: ServiceDto) {
    const service = await this.model.findOne({
      user: dto.user,
      type: dto.type,
    });
    if (service) {
      return await this.model.updateOne(
        { _id: service._id },
        { price: dto.price, name: dto.name },
      );
    }
    return await this.model.create(dto);
  }
  public async findAll() {
    return await this.model.find();
  }
  public async findByUser(user: string) {
    return await this.model.find({ user });
  }

  public async findOne(id: string) {
    return await this.model.findById(id);
  }

  public async getType(type: number, user: string) {
    const res = await this.model.findOne({ user: user, type });
    if (!res) throw new HttpException('Олдсонгүй', 500);
    return res;
  }

  public async update(_id: string, dto: ServiceDto) {
    return await this.model.updateOne({ _id, dto });
  }

  public async remove(_id: string) {
    return await this.model.deleteOne({ _id });
  }
}
