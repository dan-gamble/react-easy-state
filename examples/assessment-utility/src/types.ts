export type Maybe<T> = T | null;

export enum Priorities {
  LOW,
  MEDIUM,
  HIGH,
  VERY_HIGH,
}

// export type Issue = {
//     problem: string
//     impacts: string
//     priority?: Priorities
//     description: string
//     proposedSolution: string
// }

export class Issue {
  priority?: Priorities
  constructor(
    public problem: string = "",
    public impacts: string = "",
    public description: string = "",
    public proposedSolution: string = ""
  ) { }
}