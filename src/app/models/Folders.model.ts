
export class Folder {

    _id: String;
    name: String;
    number: Number;
    description: String;

    constructor(input: any) {

        Object.assign(this, input)
        return this;
    }

}