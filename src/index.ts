import { coelloFamily } from "./data";
import { Person } from "./types";

export function plus(a: number, b: number) {
  return a + b;
}

export function minus(a: number, b: number) {
  return a - b;
}

export function findSinglePeople(people: Person[]) {
  return people.filter((person) => {
    return person.status === "single";
  });
}
export function findInRelationshipPeople(people: Person[]) {
  return people.filter((person) => {
    return person.status === "relationship";
  });
}

export function findPeopleWithNoChildren(people: Person[]) {
  return people.filter((person) => {
    const numberOfKids = person.children?.length ?? 0;

    if (numberOfKids > 0) {
      return false;
    } else {
      return true;
    }
  });
}

console.log(findPeopleWithNoChildren(coelloFamily) ?? []);
