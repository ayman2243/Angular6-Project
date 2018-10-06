export class Permission{
    
    _id: String;
    name: String;
    action: String;

    constructor(input:any){
     Object.assign(this,input)
     return this;
    }
}