export interface Option {
  value: string;
  label: string;
}

export interface LastNewsPost {
  title: string;
  date: Date;
}

export enum Order {
  ASC = 'asc',
  DESC = 'desc',
}
