import { ApiProperty } from '@nestjs/swagger';
import { SERVICE, serviceValues } from 'src/base/constants';

export class UsageDto {
  @ApiProperty()
  service: number;
  @ApiProperty()
  value: Record<string, any>;
  @ApiProperty()
  quantity: number;
}
class CarValueDto {
  @ApiProperty({ example: 10000 })
  milleage: number;

  @ApiProperty({ example: ['front-wheel', 'rear-wheel'] })
  drive: string[];
}

export const UsageCarDto = {
  service: serviceValues[SERVICE.CAR],
  value: {
    milleage: 10000,
    drive: 'урдаа',
    plateNumber: '1234УБА',
    gearbox: 'mechanic',
  },
  // quantity: 1,
};

export const UsageRealstateDto = {
  service: serviceValues[SERVICE.REALSTATE],
  value: {},
  quantity: 1,
};
