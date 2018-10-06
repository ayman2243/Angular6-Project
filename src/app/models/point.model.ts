import { Interpreter } from "./interpreters.model";
import { Annotation } from "./Annotation.model";
import { Folder } from "./Folders.model";
import { Timeline } from "./timelineExplanation";
import { Resources } from "./Resources.model";
import { Aya } from "./aya.models";
import { Surah } from "./surah.models";
import { Title } from "./title.model";
import { DocumentationExplanation } from "./documentationExplanation.model";


export class Point {

    interpeters: any;
    _id: String;
    text: String;
    annotation: any;
    pageNumber: Number;
    documents: any;
    folder_id: Folder | String;
    typeOfTafser: String;
    interpreters: any;
    timeline_id: Timeline | String;
    resources: any;
    aya_id: Aya | String;
    surah_id: Surah | String;
    pointNumber: Number;
    title_id: Title | String;

    constructor(input: any) {
        Object.assign(this, input);
        return this;
    }
}
