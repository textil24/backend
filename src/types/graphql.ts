
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCardInput {
    title: string;
    step: CreateStepInput;
}

export class UpdateCardInput {
    id: number;
    title: string;
}

export class CreateStepInput {
    question: string;
    cardId: number;
}

export class UpdateStepInput {
    id: number;
    question: string;
}

export class Card {
    id: number;
    title: string;
    step: Step;
}

export abstract class IQuery {
    abstract cards(): Nullable<Card>[] | Promise<Nullable<Card>[]>;

    abstract card(id: number): Nullable<Card> | Promise<Nullable<Card>>;

    abstract steps(): Nullable<Step>[] | Promise<Nullable<Step>[]>;

    abstract step(id: number): Nullable<Step> | Promise<Nullable<Step>>;
}

export abstract class IMutation {
    abstract createCard(createCardInput: CreateCardInput): Card | Promise<Card>;

    abstract updateCard(updateCardInput: UpdateCardInput): Card | Promise<Card>;

    abstract removeCard(id: number): Nullable<Card> | Promise<Nullable<Card>>;

    abstract createStep(createStepInput: CreateStepInput): Step | Promise<Step>;

    abstract updateStep(updateStepInput: UpdateStepInput): Step | Promise<Step>;

    abstract removeStep(id: number): Nullable<Step> | Promise<Nullable<Step>>;
}

export class Step {
    id: number;
    question: string;
}

type Nullable<T> = T | null;
