import { SignupUser } from "../model/signup_user";
import { userService} from "../service/userService"



//新規会員登録
    const signupUser=async (userData:SignupUser,res:any)=>{
        try {
            userService.signupUser(userData);

            
        } catch (error) {
            
        }

    }






module.exports={
    signupUser,
}