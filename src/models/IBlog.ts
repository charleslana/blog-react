export default interface IBlog {
  id: number;
  date: Date;
  category: string;
  tags: string[];
  title: string;
  description: string;
}
