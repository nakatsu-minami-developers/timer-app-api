
import { PrismaClient } from "@prisma/client";
import type User from '../interface/User'
import bcrypt from 'bcrypt';

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

// 新規会員登録
    const signupUser=async(userData:any):Promise<User>=>{
        try {
        // パスワードハッシュ化
        const saltRounds = 10;
        const hassedPassword:string=await bcrypt.hash(userData.password,saltRounds)
        const newUser:User=await prisma.user.create({
            data:{
                email:userData.email,
                name:userData.name,
                password:hassedPassword
            },
        })
        await prisma.$disconnect();
        return newUser;
        } catch (error) {
            await prisma.$disconnect();
            throw new Error("そのメールアドレスはすでに登録されています");
        }
        
    }
export default {
    signupUser,
}