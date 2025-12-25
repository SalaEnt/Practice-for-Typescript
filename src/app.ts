let fruits = ["Apple" , "Mango" , "Banane"];
// 1. forEach: Loop through the array and print each item
fruits.forEach(fruit => {

console.log(fruit)

});


console.log("----------------------------------------------");
// 2. map: Create a new array by modifying each element
let upperfruits = fruits.map( fruit => fruit.toUpperCase());
console.log(upperfruits);



console.log("----------------------------------------------");
// 3. filter: Create a new array with elements that pass a test
let fruitsfilter = fruits.filter( fruit => fruit.length>5);
console.log(fruitsfilter);


console.log("----------------------------------------------");
// 4. find: Find the first element that matches a condition
let findfruits = fruits.find(fruit => fruit === "Mango");
console.log(findfruits);



console.log("----------------------------------------------");
// 5. reduce: Combine all elements into one value (e.g., sum)
let totalfruits = fruits.reduce((total, fruit)  => total+ fruit.length, 0 );
console.log(totalfruits);



console.log("----------------------------------------------");
// 6. push: Add a new element to the end of the array
fruits.push("Zitrone");
console.log(fruits);

// 7. pop: Remove the last element of the array
console.log("----------------------------------------------");
fruits.pop();
console.log(fruits);





// Object

const user ={

name : "salar",
age: 22,

sayHi(){

    return `i i am ${this.name}`;
}, 

dateBirth(){

    this.age++;
    return this.age;

}

};

console.log(user.sayHi());
console.log(user.dateBirth());


console.log("-----------------------------------------");
// Object.keys -> list of keys
const person = { name : "jack", city : " Berlin" , age : 25 };
console.log(Object.keys(person));
// Object.values -> list of values
console.log(Object.values(person));
// Object.entries -> pairs (key, value)
console.log(Object.entries(person));
// Object.assign -> merge objects (copies into first one)
console.log(Object.assign({}, person , {age : 30}));
// hasOwnProperty -> check if key exists in the objec
console.log(person.hasOwnProperty("name"));

/* Type	Description
String	A text of characters enclosed in quotes => let lastName = "Johnson";
Number	A number representing a mathematical value => let length = 16;
Bigint	A number representing a large integer => let y = BigInt(1234567890123456789012345)
Boolean	A data type representing true or false => let x = true;
Object	A collection of key-value pairs of data => const person = {firstName:"John", lastName:"Doe"};
Undefined	A primitive variable with no assigned value => let y;
Null	A primitive value representing object absence => let y = null;
Symbol	A unique and primitive identifier (Symbols are often used as object property keys to avoid name collisions.)
=> const y = Symbol(); */



enum Orderstatus {

    PAYED = " Payed ",
    EXEPT = " Exept ",
    CANSELED = "Canseled"



}

let order :Orderstatus = Orderstatus.PAYED;


const Mode : "dark" | "light" = "dark";


// type-alias

type student={name:string, age:number}
type students = student[]

const amirsalar:student ={name:"amirsalr" , age : 22}

const melika:student = {name: " melika " , age : 224}

const javad:student= {name: "javad" , age : 31}

const students:students=[

    amirsalar,
    melika,
    javad
]


// Practice
type  Curency = 'EUR' | 'USD' | 'IRR'
const produckt = (p : number, c:Curency) :  string => {


    return p + c 


} 
console.log(produckt);



let y : unknown = "AMir";
//y.toUpperCase();
// here i recieve an Error about y becauce its an Unknown Type  now i shuold clearfy a Type for that
if (typeof y === "string"){

    y.toUpperCase();
}

// but about "any" i can say its not a safe way . bacaute when we use it . normaly we dont use
// Type script and with a high persent its possible to reciece a Bogg

let x : any= 5;
x.toUpperCase();

let newarr : (number|string )[] = [];
newarr=["Ali" , 22 ];
newarr=[22 , "Ali", "salar" , 54];
newarr.push("another ali " , 25) ; 
//newarr.push(true); // here i recieve an Error because i didnt tell the var clearly abot the boolian type
// as we see there is no problem to add some othe parametr and index to arry 

let  newtup : [string,number];
newtup= ["amir" , 22];
newtup= ["Ali" , 21];
newtup=["alli",]; // here i have a recieve an Error because thers no Nubmer. 
newtup= ["alli", 22 "ljkjj"] // and here i have a Error too becaus of that i have 3 Index


function Test1 (id : String | number) {

    if (typeof id === "string"){

        return id.toUpperCase();
    }

    return Test1("amir");    
}

// Throw
function f (num1 : number , num2:number) {
 
    if ( num1 === 0 ) {

        throw new Error("its impossible")
    }

    return (num1 + num2)


}
f(5, 6);
f(4 , 0 ); // here i get the Error becuse of my condition and Throw


//never 
function s (mass : string): never {

    throw new Error(mass);

}

// ????????!!!!!i coudent actually fide the difrece between tow last functions !!!!!!!?????????


// exhative check

type Status= "loading" | "saved" | "success";
function show(status:Status) {

    switch(status){

        case "loading":return "is loading pleas wait"
        case "saved":return " its saved"
        case "success":return " the conction is successed"

    }
}

/*after That i or anotheone add another Type to the Status. and now with the help of 
"Exhaustive Check" . it will check all of my Union / Enum Type and if somthing was attended
to them it wonts work and get an Error  --without this servive, its really dangeor to code 
somthing          the best Version of that is this code : >            */

type Statu= "loading" | "saved" | "success" ;
function read(statu:Statu) {

    switch(statu){

        case "loading":return "is loading pleas wait"
        case "saved":return " its saved"
        case "success":return " the conction is successed"
        default:
            const _never: never = statu;
            return _never;

    }
}

// thats my Homework and done

type Square = {

    sidelength : number
    kind : "Square"


}
type Rectangle = {

    
    width : number;
    hight : number;
    kind : "Rectangle"

}

type Circle  = {

    radiuce : number;
    kind : "Circle"
}


type Shape = Circle | Square | Rectangle;

function districtArea (shape : Shape ) {

    switch (shape.kind) {

        case "Square" :
            return shape.sidelength * shape.sidelength ; 

            case "Rectangle" :
            return shape.width * shape.hight ; 

            case "Circle" :
            return shape.radiuce * shape.radiuce * Math.PI  ; 

}

}

districtArea({kind: "Square" , sidelength : 10});
districtArea({kind: "Rectangle" , width : 10 , hight : 5});
districtArea({kind: "Circle" , radiuce : 10});



/*یک فانکشن بنویس که ورودی‌اش می‌تونه:
	•	string
	•	number
	•	string[]

باشد.

قوانین
	•	اگر string بود → طولش
	•	اگر number بود → مربعش
	•	اگر string[] بود → تعداد آیتم‌ها*/ 

   /*type NP ={

    X1 : number;
   } 
    type ST ={

    X1 : string;
   } */
    
    type Entrie = number|string|string[];
    function inf (entrie: Entrie) {

    if (typeof entrie === "string"){

        return entrie.length;

        
    }
    if (typeof entrie === "number") {

            return entrie*entrie
        }
        else {

            return entrie.length;
        }

 }
 
 
 
 /**یک فانکشن وضعیت پرداخت را بررسی کند


type PaymentStatus = "pending" | "paid" | "failed";

function getPaymentMessage(status: PaymentStatus): string {
  // switch یا if
}




اگر status خارج از این‌ها بود، TS نباید اجازه بده */


type PaymentStatus = "pending" | "paid" | "failed" ;
function checktype (n : never ):never {

    throw new Error("its not clear , please try agin")

}

function getPaymentMessage(status : PaymentStatus):string {

    switch(status) {

        case "paid":
            return "that was successful"
            case "pending":
                return "we are waiting for the paying"
                case "failed":
                    return "that was unsuccessful "
                    default :
                    return checktype(status);

    }
}





     




