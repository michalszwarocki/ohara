export type Page<T, PropertyName extends string> = {
  [P in PropertyName]: T[];
} & { pageInfo: PageInfo };

export interface PageInfo {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}
