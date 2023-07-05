import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStepInput, UpdateStepInput } from 'src/types/graphql';

@Injectable()
export class StepService {
  constructor(private prisma: PrismaService) { }

  create({ question, cardId }: CreateStepInput) {
    return this.prisma.step.create({
      data: { question, cardId }
    });
  }

  findAll() {
    return this.prisma.step.findMany();
  }

  findOne(id: number) {
    return this.prisma.step.findUnique({
      where: { id },
      select: { id: true, question: true }
    });;
  }

  update(id: number, { question }: UpdateStepInput) {
    return this.prisma.step.update({
      where: { id },
      data: { question }
    });
  }

  remove(id: number) {
    return this.prisma.step.delete({
      where: { id }
    });
  }
}
