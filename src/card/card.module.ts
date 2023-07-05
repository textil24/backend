import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardResolver } from './card.resolver';
import { StepService } from 'src/step/step.service';

@Module({
  providers: [CardResolver, CardService, StepService]
})
export class CardModule {}
