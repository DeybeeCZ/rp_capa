import { BookInterface } from "../interfaces/book-interface";

export class Book implements BookInterface{
    constructor(public bookTitle: string,
        public bookAuthor: string,
        public productCode: string,
        public publishedOn: Date,
        public bookDescription: string,
        public genre: string,
        public specifications: string,
        public inStock: string,
        public bookPrice: number,
        public bookReviews: number,
        public bookImageUrl: string){}
}
