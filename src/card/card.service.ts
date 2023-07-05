import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StepService } from 'src/step/step.service';
import { CreateCardInput, UpdateCardInput } from 'src/types/graphql';

@Injectable()
export class CardService {
  constructor(
    private prisma: PrismaService,
    private stepService: StepService
  ) { }

  async create({ title, step }: CreateCardInput) {
    const card = await this.prisma.card.create({
      data: { title }
    });

    if (card.id === null) {
      throw new Error("Failed to create card");
    }  

    const createdStep = await this.stepService.create({ question: step.question, cardId: card.id });
    // Use the `step` or its ID in the `create` method of `CardService`

    return {
      ...card,
      step: createdStep
    }
  }

  findAll() {
    return this.prisma.card.findMany();
  }

  findOne(id: number) {
    return this.prisma.card.findUnique({
      where: { id },
      select: { id: true, title: true }
    });
  }

  update(id: number, { title }: UpdateCardInput) {
    return this.prisma.card.update({
      where: { id },
      data: { title }
    });
  }

  remove(id: number) {
    return this.prisma.card.delete({
      where: { id }
    });
  }
}

