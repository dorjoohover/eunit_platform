import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { BaseController } from 'src/base/base.controller';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { Q } from 'src/common/const/app.const';
import { Pagination } from 'src/common/decorator/pagination.decorator';
import { PaginationDto } from 'src/common/decorator/pagination.dto';
import { PQ } from 'src/common/decorator/use-pagination-query.decorator';
import { UsersDto } from './users.dto';
import { IDP } from 'src/common/decorator/use-param.decorator';
import { Public } from 'src/auth/guards/public.decorator';
import { RolesGuard } from 'src/auth/guards/role/role.guard';
import { ADMIN } from 'src/base/constants';
import { Admin, Roles } from 'src/auth/guards/role/role.decorator';

@Controller('users')
@ApiBearerAuth('access-token')
export class UsersController extends BaseController {
  constructor(private readonly service: UsersService) {
    super();
  }
  @Admin()
  @Get()
  @PQ()
  async find(@Pagination() pg: PaginationDto) {
    const result = await this.service.find(pg.page, +pg.limit, pg.sort);
    return this.mapResult(result);
  }
  @Post()
  create(@Body() dto: UsersDto, @Request() { user }) {
    return this.service.create(dto, user);
  }

  @IDP()
  @Get('i/:id')
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }
}
