import { Test, TestingModule } from '@nestjs/testing';
import { CardService } from './card.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('CardService', () => {
  let cardService: CardService;
  let prismaService: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardService, PrismaService],
    }).compile();

    cardService = module.get<CardService>(CardService);
  });

  it('should be defined', () => {
    expect(cardService).toBeDefined();
  });
});
