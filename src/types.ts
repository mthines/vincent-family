
/* eslint-disable @typescript-eslint/no-unused-vars */
export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  alive: boolean;
  status?: "relationship" | "single";
  children?: Person[];
};
