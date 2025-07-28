import { Body, Controller, Post, Req } from '@nestjs/common';
import { UsageService } from './usage.service';
import { UsageCarDto, UsageDto, UsageRealstateDto } from './usage.dto';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
@ApiBearerAuth('access-token')
@Controller('usage')
export class UsageController {
  constructor(private readonly service: UsageService) {}

  @ApiBody({
    type: UsageDto,

    examples: {
      a: {
        summary: 'Car',
        value: UsageCarDto,
      },
      b: {
        summary: 'Realstate',
        value: UsageRealstateDto,
      },
    },
  })
  @Post()
  async create(@Body() dto: UsageDto, @Req() { user }) {
    return await this.service.create(dto, user['userId'], user.role);
  }
}
