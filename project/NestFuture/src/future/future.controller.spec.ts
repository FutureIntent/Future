import { Test, TestingModule } from '@nestjs/testing';
import { FutureController } from '@app/future/future.controller';
import { FutureService } from '@app/future/future.service';

describe('FutureController', () => {
  let controller: FutureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FutureController],
      providers: [FutureService],
    }).compile();

    controller = module.get<FutureController>(FutureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
