import { Test, TestingModule } from '@nestjs/testing';
import { MorseGateway } from './morse.gateway';
import { MorseService } from './morse.service';

describe('MorseGateway', () => {
  let gateway: MorseGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MorseGateway, MorseService],
    }).compile();

    gateway = module.get<MorseGateway>(MorseGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
