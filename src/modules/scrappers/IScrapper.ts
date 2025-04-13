export interface IScrapper {
    search(product: string): Promise<any>;
}