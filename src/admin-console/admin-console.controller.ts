import { Controller, Get } from '@nestjs/common';

@Controller('admin-console')
export class AdminConsoleController {
  @Get()
  sayHello(): string {
    return 'Hello from github';
  }
}
