export class Symbol {

    _id: String;
    refersTo: String;
    color: String;
    bookSection: String;
    symbolType: String;
    pageNumber: Number;

    constructor(input: any) {
        Object.assign(this, input);
        return this;
    }

}
