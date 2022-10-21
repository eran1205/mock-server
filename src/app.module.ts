import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminConsoleController } from './admin-console/admin-console.controller';

@Module({
  imports: [],
  controllers: [AppController, AdminConsoleController],
  providers: [AppService],
})
export class AppModule {}
