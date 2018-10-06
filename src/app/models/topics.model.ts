import { Annotation } from '../models/Annotation.model'
import { Folder } from '../models/Folders.model'

export class Topics {
    _id: String;
    folder: Folder | String;
    pageNumber: Number;
    headline: String;
    body: String;
    annotationTitle: any;
    annotation: any;
    tags: Array<Object>;

    constructor(input: any, view = false) {
        Object.assign(this, input);
        return this;
    }
}