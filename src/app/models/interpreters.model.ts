
export class Interpreter {
    _id: String;
    name: String;
    type: String;
    rank: String;
    subRank: String;
    dateDeath: String;
    numbersExplanation: Number;
    information: String;
    
    constructor(input: any) {
        Object.assign(this, input)
        return this;
    }
}