import { Module, forwardRef } from '@nestjs/common';
import { CatsService } from './cats.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [forwardRef(() => UserModule)],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
