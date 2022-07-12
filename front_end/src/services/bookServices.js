import { baseServices } from "./baseServices";
export class bookServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllBook = (name) => {
        return this.get(`/book/get-list-book?name=${name}`);
    }





export const BookServices = new bookServices();
