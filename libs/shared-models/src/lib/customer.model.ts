export const GENDER = ['male', 'female'] as const;

export type Customer = {
  id?: string;
  name: string;
  gender: typeof GENDER[number];
  description: string;
}
