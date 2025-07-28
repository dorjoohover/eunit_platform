import { applyDecorators } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { P } from '../const/app.const';

// id param
export function IDP() {
  return applyDecorators(ApiParam(P.ID));
}
