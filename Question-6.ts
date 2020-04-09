export class student{
    enrolmentNumber: number
    studentName: string
    
    constructor(enrolmentNumber: number,studentName: string ){
        this.enrolmentNumber = enrolmentNumber;
        this.studentName = studentName;  
    }
    
    displayName = () => console.log(this.enrolmentNumber + ' ' + this.studentName);
}

let emp = new student(100, 'Mohit');
emp.displayName();
