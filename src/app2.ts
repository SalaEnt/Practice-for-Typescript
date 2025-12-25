type User = {
  id: number;
  profile?: {
    email?: string;
    age?: number;
  };
};
function getUserEmail(user: User): string {
 
 switch(typeof user.profile?.email){


    case "string" :{
        return user.profile.email;
    }
    default:
        return"there is no email"
 }
 
    // اگر ایمیل نبود "no-email"
}

console.log(getUserEmail({profile : {age : 50}} as User));

/*Optional Chaining "?" ==> theres no problem if we dont have anything on our Variables
and if theres nothing on . we wont recieve any Errors. 

type User = {
  id: number;
  profile?: {
    email?: string;
    age?: number;
  };
};
*/  

/*Nullish Coalescing "??" ==> if the value of the Varriable was a 'null' | 'undefided'
replace something on it 

function getUserEmail(user: User): string {
  return user.profile?.email ?? "no-email";
}
*/

/* Non-null Assertion "!" ==>  im sure about it , that the value of the variable is not 'null
or 'undefided' but if my variable was null i will recieve an Error. 

type User = { profile?: { email?: string } };
const user: User = { profile: { email: "a@test.com" } };

console.log(user.profile!.email); 

' */