export enum FilterNames {
  Title = "Title",
  Rating = "Rating",
  Categories = "Categories",
}

export interface FilterTerm {
  name: FilterNames;
  value: string[];
}
