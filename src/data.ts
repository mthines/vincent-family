import { Person } from "./types";

export const coelloFamily = [
  {
    age: 43,
    firstName: "Klara",
    lastName: "Coello",
    status: "relationship",
    alive: true,
    children: [
      { age: 14, firstName: "Vincent", lastName: "Coello Gylvin", alive: true },
      { age: 12, firstName: "Selma", lastName: "Coello Gylvin", alive: true },
      { age: 5, firstName: "Viggo", lastName: "Coello Gylvin", alive: true },
    ],
  },
  {
    age: 43,
    firstName: "Silas",
    lastName: "Hinsch Gylvin",
    status: "relationship",
    alive: true,
    children: [
      { age: 14, firstName: "Vincent", lastName: "Coello Gylvin", alive: true },
      { age: 12, firstName: "Selma", lastName: "Coello Gylvin", alive: true },
      { age: 5, firstName: "Viggo", lastName: "Coello Gylvin", alive: true },
    ],
  },
  {
    age: 43,
    firstName: "Bulder",
    lastName: "Balder",
    alive: false,
    status: "single",
  },
  {
    age: 43,
    firstName: "asdf",
    lastName: "Balder",
    alive: false,
    status: "single",
  },
  {
    age: 43,
    firstName: "qwe",
    lastName: "Balder",
    alive: true,
    status: "single",
  },
  {
    age: 43,
    firstName: "asdf",
    lastName: "Balder",
    alive: true,
    status: "single",
  },
] as const satisfies Person[];
