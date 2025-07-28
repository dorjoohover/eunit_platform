import { Log, LogSchema } from 'src/schema/action.log.schema';
import { Service, ServiceSchema } from 'src/schema/service.schema';
import { Usage, UsageSchema } from 'src/schema/usage.schema';
import { User, UserSchema } from 'src/schema/users.schema';

export const LogConst = {
  name: Log.name,
  schema: LogSchema,
};

export const UserConst = {
  name: User.name,
  schema: UserSchema,
};

export const UsageConst = {
  name: Usage.name,
  schema: UsageSchema,
};

export const ServiceConst = {
  name: Service.name,
  schema: ServiceSchema,
};
