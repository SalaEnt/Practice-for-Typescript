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