import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { Q } from '../const/app.const';

export function PQ() {
  return applyDecorators(
    ApiQuery(Q.LIMIT),
    ApiQuery(Q.PAGE),
    ApiQuery(Q.SORT),
  );
}