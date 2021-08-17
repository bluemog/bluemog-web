import { Module } from '@nestjs/common';
import { UserModule } from 'user/user.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [UserModule, BookModule],
})
export class AppModule {}
