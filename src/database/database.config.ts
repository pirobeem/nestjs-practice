import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'test_db',
  entities: [UserEntity],
  synchronize: false,
};
