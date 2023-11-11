import { Test, TestingModule } from '@nestjs/testing';
import { MorseController } from './morse.controller';

describe('MorseController', () => {
  let controller: MorseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MorseController],
    }).compile();

    controller = module.get<MorseController>(MorseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
