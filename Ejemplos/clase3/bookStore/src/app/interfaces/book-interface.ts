export interface BookInterface {
    bookTitle: string;
    bookAuthor: string;
    productCode?: string;
    publishedOn: Date;
    bookDescription: string;
    genre?: string;
    specifications?: string;
    inStock: string;
    bookPrice: number;
    bookReviews: number;
    bookImageUrl: string;
}
