export interface Author {
  _id: string;             // Mongoose-ს ObjectId
  fullName: string;
  userName: string;
  birthDate?: Date;        // გაუთვალისწინებელი, შეიძლება იყოს undefined
  gender?: number;         // რადგან default არის false, Number ტიპად ვწერ
  email: string;
  password?: string;       // select: false-ს გამო შეიძლება აირჩიოს თუ არა
  posts: string[];         // ObjectId-ების მასივი
  createdAt?: Date;        // timestamps
  updatedAt?: Date;        // timestamps
}
