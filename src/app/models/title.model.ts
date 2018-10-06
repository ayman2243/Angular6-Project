import { Surah } from "./surah.models";
import { Aya } from "./aya.models";

export class Title {


    _id: String;
    name: String;
    type: String;
    surah: Array<Surah>;
    aya: Array<Aya>;

    constructor(input: any) {
        Object.assign(this, input);
        return this;
    }
}
