export type TableSearchParams<T> = {
  orderBy?: keyof T;
  order?: string;
  page?: string;
  size?: string;
};
