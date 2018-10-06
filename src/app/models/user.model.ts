export class User {
    _id: string;
    fullName: string;
    email: string;
    phone: string;
    isBlocked: boolean;
    isConfirmed: boolean;
    signupDate: string;
    age: number;
    isSuspended: string;

    constructor(input: any) {
        Object.assign(this, input);
        return this;
    }
}
