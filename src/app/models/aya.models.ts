import { Folder } from "./Folders.model";
import { Surah } from "./surah.models";

export class Aya {

    _id: String;
    folder_id: Folder | String;
    pageNumber: Number;
    text: String;
    surah_id: Surah | String;
    ayaNumber: Number;


    constructor(input: any) {
        Object.assign(this, input);
        return this;
    }

}
