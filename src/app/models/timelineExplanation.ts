import { Topics } from './topics.model';

export class Timeline {

    _id: String;
    name: String;
    date: String;
    description: Topics | String;

    constructor(input: any) {
        Object.assign(this, input)
        return this;
    }
}