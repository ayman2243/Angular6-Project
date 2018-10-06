import { Folder } from '../models/Folders.model';

export class Annotation{
    _id: String;
    body: String;
    type: String;
    publicNumber: Number;
    folder: Folder | String;
    pageNumber: Number;
    privateType: String;
    charLocation: Number;

    constructor(input:any){    
     Object.assign(this,input)
     return this;
    }
}