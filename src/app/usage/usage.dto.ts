import { ApiProperty } from '@nestjs/swagger';
import { SERVICE, serviceValues, VehicleCondition } from 'src/base/constants';

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
    vehicleCondition: VehicleCondition[10],
  },
  // quantity: 1,
};

export const UsageRealstateDto = {
  service: serviceValues[SERVICE.REALSTATE],
  value: {},
  quantity: 1,
};

export const BODY = {
  ORIGINAL: 'Өөрчлөгдөөгүй',
  MODIFIED: 'Зассан / өөрчилсөн / сольсон',
  DAMAGED: 'Гэмтэлтэй',
};

export const RIM = {
  GOOD: 'Асуудалгүй',
  MINOR_SCRATCHES: 'Бага зэргийн сэв зураастай. Засаж болно',
  MAJOR_SCRATCHES: 'Их хэмжээний сэв зураастай. Солих шаардлагатай',
  REPLACEMENT_NEEDED: 'Солих шаардлагатай',
};
export const WINDSHIELD = {
  NONE: 'Гэмтэлгүй',
  MINOR: 'Бага зэргийн сэв, гэмтэлтэй. Засаж болно',
  MAJOR: 'Их хэмжээний сэв, гэмтэлтэй. Засах боломжгүй',
};

export const PAINTWORK = {
  NONE: 'Засвар ороогүй',
  MINOR: 'Бага зэргийн косметик засвар орсон',
  MODERATE: 'Дунд хэмжээний засвар, будаг орсон',
  MAJOR: 'Их хэмжээний засвар, будаг орсон',
};

export const OVERALL = {
  GOOD: 'Асуудалгүй',
  MINOR_DEFECTS: 'Бага зэргийн сэв зураастай',
  MODERATE_DEFECTS: 'Дунд зэргийн сэв зураас / хонхор / халцархаатай',
  MAJOR_DEFECTS: 'Гэмтэлтэй, том хэмжээний хонхор / халцархай / сэвтэй',
};

export const ElectronicSystem = {
  NORMAL: 'Бүгд хэвийн ажиллагаатай',
  PARTIAL_ISSUES: 'Зарим нэг зүйл доголдолтой',
  REPAIR_NEEDED: 'Засах шаардлагатай',
};
export const Salon = {
  CLEAN: 'Цэвэрхэн / шинэвтэр',
  MINOR_WEAR: 'Бага зэргийн элэгдэлтэй',
  WORN: 'Элэгдэлтэй, хуучирсан',
  DAMAGED: 'Урагдсан, түлэгдсэн',
};

export const ClimateSystem = {
  WORKING: 'Бүрэн ажиллагаатай',
  NOT_INSTALLED: 'Байхгүй',
  NEEDS_REPAIR: 'Засвар шаардлагатай',
};
export const SuspensionAndSteering = {
  ORIGINAL: 'Асуудалгүй / үйлдвэрийн хэвээрээ',
  MINOR_WEAR: 'Хөнгөн элэгдэлтэй',
  MODIFIED_OR_REPAIR_NEEDED: 'Өөрчлөгдсөн / Засвар шаардлагатай',
};

export const EngineAndTransmission = {
  NORMAL_FLUID_REQUIRED: 'Ямар ч асуудалгүй, шингэн дүүргэх хэрэгтэй',
  WORKING_NEEDS_DIAGNOSIS:
    'Бүрэн ажиллагаатай ч оношилгоо, үйлчилгээ шаардаж болзошгүй',
  NEEDS_REPAIR: 'Засах шаардлагатай',
  NEEDS_REPLACEMENT: 'Хөдөлгүүр / дамжуулагч солих шаардлагатай',
};

export const BrakeSystem = {
  NEW: 'Шинэ',
  MINOR_WEAR: 'Бага зэргийн элэгдэлтэй',
  MODERATE_WEAR: 'Дунд зэргийн элэгдэлтэй',
  NEEDS_REPLACEMENT: 'Солих шаардлагатай',
};

export const Tire = {
  NEW: 'Бүх дугуй шинэвтэр',
  MINOR_WEAR: 'Бүх дугуй бага зэргийн элэгдэлтэй',
  MODERATE_WEAR: 'Бүх дугуй дунд зэргийн элэгдэлтэй',
  NEEDS_REPLACEMENT: 'Солих шаардлагатай',
};
export const ExtraFeatures = {
  AUTO_GEARBOX: 'Автомат багаж',
  SOFT_CLOSE_DOORS: 'Хаалга сордог',
  PARKING_SENSOR: 'Зай мэдрэгч',
  LEATHER_SEATS: 'Арьсан суудал',
  FRONT_OR_360_CAMERA: 'Урд талын/360 камер',
  REAR_CAMERA: 'Ухрахын камер',
  SEAT_MEMORY: 'Суудал сануулагч',
  STEERING_HEATED_COOL: 'Руль халдаг/хөрдөг',
  SEAT_HEATED_COOL: 'Суудал халдаг/хөрдөг',
  SUNROOF: 'Люк',
};
