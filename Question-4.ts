export class Employee{
    private _name: string
    private _color: string
    private _birthYear: string
    constructor(name: string,color: string ,birthYear: string){
        this._name = name;
        this._color = color;  
        this._birthYear = birthYear;  
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string){
        this._name = value;
    }
    public get color(): string {
        return this._color;
    }
    public set color(value: string){
         this._color = value;    
    }
    public get birthyear(): string {
        return this._birthYear;
    }
    public set birthyear(value: string){
         this._birthYear = value;    
    }
}

class AdhocEmployee extends Employee{
    private _hoursworked: string
    constructor(name,color,birthYear,hoursworked){
        super(name,color,birthYear);
        this._hoursworked = hoursworked;
    }
    public get hoursworked(): string {
        return this._hoursworked;
    }
    public set hoursworked(value: string){
         this._hoursworked = value;    
    }
}

let p = new Employee("mohit","fair","1993");
p.name = "name changed";
console.log(p.name);



