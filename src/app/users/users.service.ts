import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schema/users.schema';
import { UsersDto } from './users.dto';
import { Meta } from 'src/base/base.interface';
import { generateUsername } from 'src/common/utils/name.util';
import {
  generateRandomPassword,
  hashPassword,
} from 'src/common/utils/password.util';
import { LogService } from 'src/base/log/log.service';
import { UD } from 'src/common/const/dto.const';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
    private log: LogService,
  ) {}
  private readonly logger = new Logger('User service', { timestamp: true });

  public async create(dto: UsersDto, user: UD) {
    try {
      let username = generateUsername(dto.name);

      let password = generateRandomPassword();
      console.log(password);
      this.log.log('user register', user?._id, user?.role, {
        password,
        username,
      });
      password = await hashPassword(password);
      await this.model.create({ ...dto, username, password });
      return true;
    } catch (error) {
      this.logger.error(error);
    }
  }

  public async findById(id: string) {
    try {
      return await this.model.findById(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async findByUsername(name: string) {
    return await this.model.findOne({ username: name });
  }

  public async find(page = 1, limit = 20, sort = true): Promise<Meta> {
    try {
      const skip = (page - 1) * limit;

      const [items, total] = await Promise.all([
        this.model
          .find()
          .skip(skip)
          .limit(limit)
          .sort({ createdAt: sort ? 1 : -1 })
          .lean(),
        this.model.countDocuments(),
      ]);

      return {
        items,
        total,
        count: Math.ceil(total / limit),
        page,
        limit,
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
