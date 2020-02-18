import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  get(): string {
    return 'mike';
  }
}
