export class Role{
    
    _id: String;
    name: String;
    permissions: Array<any>;
    
    constructor(input:any){
     Object.assign(this,input)
     return this;
    }
}