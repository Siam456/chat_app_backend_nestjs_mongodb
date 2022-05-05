import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

import { UserModule } from './user-module/user.module';
import { AuthModule } from './auth/auth.module';
import { InboxModule } from './inbox/inbox.module';
import { ChatGetWay } from './app.gateway';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    AuthModule,
    InboxModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'), // <-- path to the static files
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ChatGetWay],
})
export class AppModule {}
