import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CardService } from './card.service';
import { CreateCardInput, UpdateCardInput } from 'src/types/graphql';

@Resolver('Card')
export class CardResolver {
  constructor(private readonly cardService: CardService) {}

  @Mutation('createCard')
  create(@Args('createCardInput') createCardInput: CreateCardInput) {
    return this.cardService.create(createCardInput);
  }

  @Query('cards')
  findAll() {
    return this.cardService.findAll();
  }

  @Query('card')
  findOne(@Args('id') id: number) {
    return this.cardService.findOne(id);
  }

  @Mutation('updateCard')
  update(@Args('updateCardInput') updateCardInput: UpdateCardInput) {
    return this.cardService.update(updateCardInput.id, updateCardInput);
  }

  @Mutation('removeCard')
  remove(@Args('id') id: number) {
    return this.cardService.remove(id);
  }
}
