export interface INote {
  id: number;
  title: string;
  description: string;
  tags: string[] | null;
  isEdit: boolean;
}
