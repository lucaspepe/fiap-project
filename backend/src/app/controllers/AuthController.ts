import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'

class AuthController {
    async authenticate (req: Request, res: Response) {
        const {email, password} = req.body;

        if(!email.includes('@verzel.com.br')) {
            return res.sendStatus(401).end();
        }

        const isValidPassword = password === 'S3nh@.S3cr3t@'

        if(!isValidPassword) {
            return res.sendStatus(401).end();
        }
        
        const token = jwt.sign({ id: 1 }, 'secret', { expiresIn: '1d' }) 
        
        res.send({
            user: {
                email 
            },
            token,
        }).status(200)
    }
}

export default new AuthController();
