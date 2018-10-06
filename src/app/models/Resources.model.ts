export class Resources {
    _id: String;
    name: String;
    information: String;

    constructor(input: any) {
        Object.assign(this, input)
        return this;
    }
}