import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

// Update the interface to match your actual token structure
interface JwtPayload {
  payload: string;  // This is your userId
  iat: number;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.log('Invalid or missing authorization header');
       res.status(411).json({
        message: 'Invalid authorization header',
      });
      return;
    }

    const token = authHeader.split(' ')[1];
    
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
      console.log("Decoded token:", decoded);

      if (!decoded.payload) {
        console.log('No payload in token');
         res.status(403).json({
          message: 'Invalid token structure',
        });
        return;
      }

      // Use decoded.payload as the userId
      req.body.userId = decoded.payload;
      console.log(req.body.userId);
      
      console.log('Auth middleware - userId added:', req.body.userId);
      
      next();
    } catch (jwtError) {
      console.log('JWT verification failed:', jwtError);
       res.status(403).json({
        message: 'Invalid token',
      });
      return
    }
  } catch (error) {
    console.error('Auth middleware error:', error);
     res.status(500).json({
      message: 'Internal server error in authentication',
    });
    return
  }
};