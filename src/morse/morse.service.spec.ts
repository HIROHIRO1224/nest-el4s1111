import { Test, TestingModule } from '@nestjs/testing';
import { MorseService } from './morse.service';

describe('MorseService', () => {
  let service: MorseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MorseService],
    }).compile();

    service = module.get<MorseService>(MorseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
