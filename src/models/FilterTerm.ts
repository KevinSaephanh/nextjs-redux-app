export enum FilterNames {
  Title,
  Rating,
  Categories,
}

export interface FilterTerm {
  name: FilterNames;
  value: string[];
}
