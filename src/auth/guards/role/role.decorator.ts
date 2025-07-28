import { applyDecorators, SetMetadata } from '@nestjs/common';
import { Role } from './role.enum';
import { ADMIN } from 'src/base/constants';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

export function Admin() {
  return applyDecorators(Roles(ADMIN));
}
