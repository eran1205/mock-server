import { Test, TestingModule } from '@nestjs/testing';
import { AdminConsoleController } from './admin-console.controller';

describe('AdminConsoleController', () => {
  let controller: AdminConsoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminConsoleController],
    }).compile();

    controller = module.get<AdminConsoleController>(AdminConsoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
