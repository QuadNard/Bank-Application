import { Response, Request} from 'express';

// login user
const loginUser = (req: Request, res: Response) => {
    res.status(200).json({message: `login user ${req.params.id}`})
}


// signup user 
const signupUser = (req: Request, res: Response) => {
    res.status(200).json({message: `signup user ${req.params.id}` })
}


module.exports = {
    loginUser, 
    signupUser,
};