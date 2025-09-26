import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UsageService } from './usage.service';
import { UsageCarDto, UsageDto, UsageRealstateDto } from './usage.dto';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
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

  @Get('get/:id')
  @ApiParam({ name: 'id' })
  async getId(@Param('id') id: string) {
    return await this.service.findOne(id);
  }
}
