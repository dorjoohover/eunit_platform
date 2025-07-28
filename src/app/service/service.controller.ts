import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceDto } from './service.dto';
import { Admin } from 'src/auth/guards/role/role.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { BaseController } from 'src/base/base.controller';
import { ADMIN } from 'src/base/constants';
import { AuthService } from 'src/auth/auth.service';

@ApiBearerAuth('access-token')
@Controller('service')
export class ServiceController extends BaseController {
  constructor(
    private readonly serviceService: ServiceService,
  ) {
    super();
  }
  @Admin()
  @Post()
  create(@Body() dto: ServiceDto) {
    return this.serviceService.create(dto);
  }

  @Get()
  findAll(@Req() { user }) {
    return user.role == ADMIN
      ? this.serviceService.findAll()
      : this.serviceService.findByUser(user['userId']);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: ServiceDto) {
    return this.serviceService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceService.remove(id);
  }
}
