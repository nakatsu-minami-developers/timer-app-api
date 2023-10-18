
import { Prisma } from "@prisma/client"
import { PrismaClient } from "@prisma/client";
import SignupUser from '../interface/SignupUser'
import User from "../interface/User";

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

//新規会員登録
    const signupUser=async(userData:any):Promise<SignupUser>=>{
        //DB接続処理
        const newUser:SignupUser=await prisma.user.create({
            data:{
                email:userData.email,
                name:userData.name,
                password:userData.password
            },
        })
        return newUser;
    }
export default {
    signupUser,
}