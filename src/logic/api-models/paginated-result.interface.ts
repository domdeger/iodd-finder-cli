export interface PaginatedResult<T> {
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  sort: any[];
  content: T[];
}
