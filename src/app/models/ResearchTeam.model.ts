export class ResearchTeam {
    _id: string;
    name: string;
    scientificDegree: string;
    role: string;
    committee: string;
    constructor(input: any) {
        Object.assign(this, input)
        return this;
    }
}