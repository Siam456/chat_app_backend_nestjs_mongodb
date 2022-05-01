import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

import { UserModule } from './user-module/user.module';
import { AuthModule } from './auth/auth.module';
import { InboxModule } from './inbox/inbox.module';

@Module({
  imports: [UserModule, DatabaseModule, AuthModule, InboxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
