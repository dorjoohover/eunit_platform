import { ApiProperty } from '@nestjs/swagger';
import { SERVICE, serviceValues } from 'src/base/constants';
export type VehicleInfo = {
  archiveDate: string | null;
  archiveFirstNumber: string | null;
  archiveNumber: string | null;
  axleCount: number;
  buildYear: number;
  cabinNumber: string | null;
  capacity: number;
  certificateNumber: string | null;
  className: string | null;
  colorName: string | null;
  countryName: string | null;
  fueltype: string | null;
  height: number;
  importDate: string | null;
  intent: string | null;
  length: number;
  manCount: number;
  markName: string | null;
  mass: number;
  modelName: string | null;
  motorNumber: string | null;
  ownerAddress: {
    apartment: string | null;
    door: string | null;
    soum: string | null;
    state: string | null;
    street: string | null;
    town: string | null;
  };
  ownerCountry: string | null;
  ownerFirstname: string | null;
  ownerHandphone: string | null;
  ownerHomephone: string | null;
  ownerLastname: string | null;
  ownerRegnum: string | null;
  ownerType: string | null;
  ownerWorkphone: string | null;
  plateNumber: string | null;
  transmission: string | null;
  type: string | null;
  typeId: number;
  weight: number;
  wheelPosition: string | null;
  width: number;
};
export class UsageDto {
  @ApiProperty()
  service: number;
  @ApiProperty()
  value: Record<string, any>;
  @ApiProperty()
  quantity: number;
  @ApiProperty()
  vehicle: VehicleInfo;
}
class CarValueDto {
  @ApiProperty({ example: 10000 })
  milleage: number;

  @ApiProperty({ example: ['front-wheel', 'rear-wheel'] })
  drive: string[];
}

export const UsageRealstateDto = {
  service: serviceValues[SERVICE.REALSTATE],
  value: {},
  quantity: 1,
};
export enum BODY {
  ORIGINAL = 10,
  MODIFIED = 20,
  DAMAGED = 30,
}
export const body = {
  [BODY.ORIGINAL]: 'Өөрчлөгдөөгүй',
  [BODY.MODIFIED]: 'Зассан / өөрчилсөн / сольсон',
  [BODY.DAMAGED]: 'Гэмтэлтэй',
};

export enum RIM {
  GOOD = 10,
  MINOR_SCRATCHES = 20,
  MAJOR_SCRATCHES = 30,
  REPLACEMENT_NEEDED = 40,
}

export const rim = {
  [RIM.GOOD]: 'Асуудалгүй',
  [RIM.MINOR_SCRATCHES]: 'Бага зэргийн сэв зураастай. Засаж болно',
  [RIM.MAJOR_SCRATCHES]: 'Их хэмжээний сэв зураастай. Солих шаардлагатай',
  [RIM.REPLACEMENT_NEEDED]: 'Солих шаардлагатай',
};

export enum WINDSHIELD {
  NONE = 10,
  MINOR = 20,
  MAJOR = 30,
}

export const windshield = {
  [WINDSHIELD.NONE]: 'Гэмтэлгүй',
  [WINDSHIELD.MINOR]: 'Бага зэргийн сэв, гэмтэлтэй. Засаж болно',
  [WINDSHIELD.MAJOR]: 'Их хэмжээний сэв, гэмтэлтэй. Засах боломжгүй',
};

export enum PAINTWORK {
  NONE = 10,
  MINOR = 20,
  MODERATE = 30,
  MAJOR = 40,
}

export const paintwork = {
  [PAINTWORK.NONE]: 'Засвар ороогүй',
  [PAINTWORK.MINOR]: 'Бага зэргийн косметик засвар орсон',
  [PAINTWORK.MODERATE]: 'Дунд хэмжээний засвар, будаг орсон',
  [PAINTWORK.MAJOR]: 'Их хэмжээний засвар, будаг орсон',
};

export enum OVERALL {
  GOOD = 10,
  MINOR_DEFECTS = 20,
  MODERATE_DEFECTS = 30,
  MAJOR_DEFECTS = 40,
}

export const overall = {
  [OVERALL.GOOD]: 'Асуудалгүй',
  [OVERALL.MINOR_DEFECTS]: 'Бага зэргийн сэв зураастай',
  [OVERALL.MODERATE_DEFECTS]: 'Дунд зэргийн сэв зураас / хонхор / халцархаатай',
  [OVERALL.MAJOR_DEFECTS]:
    'Гэмтэлтэй, том хэмжээний хонхор / халцархай / сэвтэй',
};

export enum ELECTRONICSYSTEM {
  NORMAL = 10,
  PARTIAL_ISSUES = 20,
  REPAIR_NEEDED = 30,
}
export const electronicSystem = {
  [ELECTRONICSYSTEM.NORMAL]: 'Бүгд хэвийн ажиллагаатай',
  [ELECTRONICSYSTEM.PARTIAL_ISSUES]: 'Зарим нэг зүйл доголдолтой',
  [ELECTRONICSYSTEM.REPAIR_NEEDED]: 'Засах шаардлагатай',
};
export enum SALON {
  CLEAN = 10,
  MINOR_WEAR = 20,
  WORN = 30,
  DAMAGED = 40,
}
export const salon = {
  [SALON.CLEAN]: 'Цэвэрхэн / шинэвтэр',
  [SALON.MINOR_WEAR]: 'Бага зэргийн элэгдэлтэй',
  [SALON.WORN]: 'Элэгдэлтэй, хуучирсан',
  [SALON.DAMAGED]: 'Урагдсан, түлэгдсэн',
};

export enum CLIMATESYSTEM {
  WORKING = 10,
  NOT_INSTALLED = 20,
  NEEDS_REPAIR = 30,
}
export const climateSystem = {
  [CLIMATESYSTEM.WORKING]: 'Бүрэн ажиллагаатай',
  [CLIMATESYSTEM.NOT_INSTALLED]: 'Байхгүй',
  [CLIMATESYSTEM.NEEDS_REPAIR]: 'Засвар шаардлагатай',
};
export enum SUSPENSIONANDSTEERING {
  ORIGINAL = 10,
  MINOR_WEAR = 20,
  MODIFIED_OR_REPAIR_NEEDED = 30,
}
export const suspensionAndSteering = {
  [SUSPENSIONANDSTEERING.ORIGINAL]: 'Асуудалгүй / үйлдвэрийн хэвээрээ',
  [SUSPENSIONANDSTEERING.MINOR_WEAR]: 'Хөнгөн элэгдэлтэй',
  [SUSPENSIONANDSTEERING.MODIFIED_OR_REPAIR_NEEDED]:
    'Өөрчлөгдсөн / Засвар шаардлагатай',
};

export enum ENGINEANDTRANSMISSION {
  NORMAL_FLUID_REQUIRED = 10,
  WORKING_NEEDS_DIAGNOSIS = 20,
  NEEDS_REPAIR = 30,
  NEEDS_REPLACEMENT = 40,
}
export const engineAndTransmission = {
  [ENGINEANDTRANSMISSION.NORMAL_FLUID_REQUIRED]:
    'Ямар ч асуудалгүй, шингэн дүүргэх хэрэгтэй',
  [ENGINEANDTRANSMISSION.WORKING_NEEDS_DIAGNOSIS]:
    'Бүрэн ажиллагаатай ч оношилгоо, үйлчилгээ шаардаж болзошгүй',
  [ENGINEANDTRANSMISSION.NEEDS_REPAIR]: 'Засах шаардлагатай',
  [ENGINEANDTRANSMISSION.NEEDS_REPLACEMENT]:
    'Хөдөлгүүр / дамжуулагч солих шаардлагатай',
};

export enum BRAKESYSTEM {
  NEW = 10,
  MINOR_WEAR = 20,
  MODERATE_WEAR = 30,
  NEEDS_REPLACEMENT = 40,
}
export const brakeSystem = {
  [BRAKESYSTEM.NEW]: 'Шинэ',
  [BRAKESYSTEM.MINOR_WEAR]: 'Бага зэргийн элэгдэлтэй',
  [BRAKESYSTEM.MODERATE_WEAR]: 'Дунд зэргийн элэгдэлтэй',
  [BRAKESYSTEM.NEEDS_REPLACEMENT]: 'Солих шаардлагатай',
};

export enum TIRE {
  NEW = 10,
  MINOR_WEAR = 20,
  MODERATE_WEAR = 30,
  NEEDS_REPLACEMENT = 40,
}
export const tire = {
  [TIRE.NEW]: 'Бүх дугуй шинэвтэр',
  [TIRE.MINOR_WEAR]: 'Бүх дугуй бага зэргийн элэгдэлтэй',
  [TIRE.MODERATE_WEAR]: 'Бүх дугуй дунд зэргийн элэгдэлтэй',
  [TIRE.NEEDS_REPLACEMENT]: 'Солих шаардлагатай',
};
export enum EXTRAFEATURES {
  AUTO_GEARBOX = 10,
  SOFT_CLOSE_DOORS = 20,
  PARKING_SENSOR = 30,
  LEATHER_SEATS = 40,
  FRONT_OR_360_CAMERA = 50,
  REAR_CAMERA = 60,
  SEAT_MEMORY = 70,
  STEERING_HEATED_COOL = 80,
  SEAT_HEATED_COOL = 90,
  SUNROOF = 100,
}
export const extraFeatures = {
  [EXTRAFEATURES.AUTO_GEARBOX]: 'Автомат багаж',
  [EXTRAFEATURES.SOFT_CLOSE_DOORS]: 'Хаалга сордог',
  [EXTRAFEATURES.PARKING_SENSOR]: 'Зай мэдрэгч',
  [EXTRAFEATURES.LEATHER_SEATS]: 'Арьсан суудал',
  [EXTRAFEATURES.FRONT_OR_360_CAMERA]: 'Урд талын/360 камер',
  [EXTRAFEATURES.REAR_CAMERA]: 'Ухрахын камер',
  [EXTRAFEATURES.SEAT_MEMORY]: 'Суудал сануулагч',
  [EXTRAFEATURES.STEERING_HEATED_COOL]: 'Руль халдаг/хөрдөг',
  [EXTRAFEATURES.SEAT_HEATED_COOL]: 'Суудал халдаг/хөрдөг',
  [EXTRAFEATURES.SUNROOF]: 'Люк',
};

export enum VEHICLECONDITION {
  SUPER = 10,
  GOOD = 20,
  MEDIUM = 30,
  BAD = 40,
}

export const VehicleCondition = {
  [VEHICLECONDITION.SUPER]: 'Маш сайн',
  [VEHICLECONDITION.GOOD]: 'Сайн',
  [VEHICLECONDITION.MEDIUM]: 'Дунд зэрэг',
  [VEHICLECONDITION.BAD]: 'Муу',
};

export enum DRIVE {
  урдаа = 10,
  бүх = 20,
  хойноо = 30,
}
export const drive = {
  [DRIVE.урдаа]: 'Урдаа FWD',
  [DRIVE.бүх]: 'Бүх дугуй 4WD',
  [DRIVE.хойноо]: 'Хойноо RWD',
};

export enum GEARBOX {
  mechanic = 10,
  automanic = 20,
}
export const gearbox = {
  [GEARBOX.mechanic]: 'Механик',
  [GEARBOX.automanic]: 'Автомат',
};

export const UsageCarDto = {
  service: serviceValues[SERVICE.CAR],
  value: {
    plateNumber: '1234УБА',
    milleage: 10000,
    drive: DRIVE.урдаа,
    gearbox: GEARBOX.automanic,
    vehicleCondition: VEHICLECONDITION.SUPER,
    body: BODY.ORIGINAL,
    rim: RIM.GOOD,
    windshield: WINDSHIELD.NONE,
    paintwork: PAINTWORK.NONE,
    overall: OVERALL.GOOD,
    electronicSystem: ELECTRONICSYSTEM.NORMAL,
    salon: SALON.CLEAN,
    climateSystem: CLIMATESYSTEM.WORKING,
    suspensionAndSteering: SUSPENSIONANDSTEERING.ORIGINAL,
    engineAndTransmission: ENGINEANDTRANSMISSION.NORMAL_FLUID_REQUIRED,
    brakeSystem: BRAKESYSTEM.NEW,
    tire: TIRE.NEW,
    extraFeatures: EXTRAFEATURES.AUTO_GEARBOX,
  },
  // quantity: 1,
};
