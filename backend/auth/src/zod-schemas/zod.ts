import z from "zod";

export const signupSchema = z.object({
    fullName:z.string(),
    email:z.string().email(),
    password:z.string(),
})

export const signinSchema = z.object({
    email:z.string().email(),
    password:z.string()
})

export const CompanyRegistration = z.object({
    name:z.string(),
    email:z.string().email(),
    address:z.string(),
    gstNumber:z.string(),

})