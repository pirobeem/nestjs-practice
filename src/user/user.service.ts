import { Injectable } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';

@Injectable()
export class UserService {
  private logger;

  constructor(private readonly catsService: CatsService) {}
  async findAll(): Promise<void> {
    this.logger.info('test');
    this.catsService.get();
    return null;
  }
}
