import express from "express";

import { CompanyRegistration } from "../zod-schemas/zod";
import { prisma } from "../db/db";
import { authMiddleware } from "../middlewares/auth";
export const CompanyRouter = express.Router();

CompanyRouter.use("/register",authMiddleware ,async (req, res) => {
    
    const data = req.body;

    const parsedResult =  CompanyRegistration.safeParse(data);

    console.log(parsedResult.data);
    

    if (!parsedResult.success) {
        res.status(400).json({
            message: 'Validation failed',
            errors: parsedResult.error.errors, // Provide detailed error information
        });
        return;
    }

    try {
        const {address, email, gstNumber, name} = parsedResult.data;

        //check if user exists

        const userId = req.body.userId;

        console.log(userId);
        

        const user = await prisma.user.findUnique({
            where :{
                id:req.body.userId
            }
        })

        if (!user) {
            res.status(404).json({ msg: 'User not found' });
            return;
        }

        // Create the company and link it to the user

        const company = await prisma.company.create({
            data: {
                name,
                email,
                address,
                gstNumber,
                users: {
                    connect:{id:userId}
                }
            }
        })

        // Update the user to link with the company

        await prisma.user.update({
            where: {
                id:userId
            },

            data: {
                companyId:company.id
            }
           
        })
        res.status(201).json({ msg: 'Company created successfully', company });
        return;

    } catch (error) {
        console.log("error of catch block of /register route");
        
    }


})