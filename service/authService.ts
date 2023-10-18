
import { PrismaClient } from "@prisma/client";
import type Auth from '../interface/Auth'
import type User from "../interface/User";

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

// ログイン処理
    const login=async(authData:Auth):Promise<User>=>{
        try {
            //ログインユーザ検索
            const isSignupedUser=await prisma.user.findUnique({
                where:{
                    email:authData.email
                }
            })
            //該当ユーザいない場合
            if(isSignupedUser==null){
                throw new Error("ユーザが見つかりません")
            }
            return isSignupedUser;
        } catch (error) {
            throw new Error("ログインに失敗しました")
        }
    }
export default {
    login,
}