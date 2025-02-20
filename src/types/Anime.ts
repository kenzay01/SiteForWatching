export type Anime = {
  name: string;
  img: string;
  logo: string;
  link: string;
  description: string;
  epidsodes_screens: string[];
  avg_rating: number;
  genres: string[];
  author: string;
  views: number;
  commentsList:{
    user: string;
    comment: string;
    date: string;
  }[];
};
