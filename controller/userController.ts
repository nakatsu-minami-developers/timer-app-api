import SignupUser from '../interface/SignupUser'
import { Response } from 'express';
import userService from '../service/userService';




//新規会員登録
const signupUser = async (req:any, res: Response) => {
    try {
        const userData=req.body;
        console.log("userData")
        console.log(userData)
        if (!userData) {
            res.status(400).json({ error: '無効なリクエストデータです。' });
            return 
        }
        const newUser: SignupUser = await userService.signupUser(userData);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ error: '会員登録に失敗しました。' });
    }
};





export default {
    signupUser,
}