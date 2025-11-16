import { Author } from "../user/author.model";

export interface Blog {
  _id?: string;
  title: string;
  coverImageUrl?: string | null;
  contentHtml: string;
  author?: Author; // authorId იქნება
  // tags?: string[];
  // views?: number;
  isPublished?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}