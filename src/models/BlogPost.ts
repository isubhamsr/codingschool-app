export type BlogPost = {
  photo: string;
  _id: string;
  title: string;
  description: string;
  category: { name: string; _id: string };
  slug: string;
  postedBy: {};
};
