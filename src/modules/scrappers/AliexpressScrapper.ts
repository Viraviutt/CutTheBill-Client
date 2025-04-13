import { IScrapper } from "./IScrapper";

export class AliexpressScrapper implements IScrapper {
    constructor() {}

    async search(product: string) {
        console.log(product);
    }

}