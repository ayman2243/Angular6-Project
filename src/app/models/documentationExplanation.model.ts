import {Topics} from './topics.model';

export class DocumentationExplanation {

name :String;
type: String;
description:Topics | String;


constructor(input: any) {
    Object.assign(this, input);
    return this;
}

}