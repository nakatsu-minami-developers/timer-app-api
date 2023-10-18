import type User from '../interface/User'
import type { Response } from 'express';
import authService from '../service/authService';




// ログイン処理
const login = async (req:any, res: Response):Promise<void> => {
    try {
        const authData=req.body;
        if (authData==null) {
            res.status(400).json({ error: '無効なリクエストデータです。' });
            return 
        }
        const login: User = await authService.login(authData);
        res.status(200).json(login);
    } catch (error) {
        res.status(500).json({ error: '会員登録に失敗しました。' });
    }
};





export default {
    login,
}