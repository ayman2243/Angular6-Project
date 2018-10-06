import { Folder } from "./Folders.model";

export class Surah {

_id: String;
surahName: String;
surahNumber: Number;
numberOfAyat: Number;
folder_id: Folder | String;
pageNumber: Number;

constructor(input: any) {
    Object.assign(this, input);
    return this;
}

}
