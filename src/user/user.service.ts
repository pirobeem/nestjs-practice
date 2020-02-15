import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async notify(inquiry: any): Promise<void> {
    inquiry = null;
    return null;
  }
}
