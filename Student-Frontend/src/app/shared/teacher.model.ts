export interface Teacher{
    id:number;
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    gender: string;
    password: string;
    dob: Date; 
    teachExp:String;
    approveStatus:Boolean
  }