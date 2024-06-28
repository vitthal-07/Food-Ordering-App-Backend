import { Request, Response } from "express";
import User from "../models/user";

export const createCurrentUser = async (req: Request, res: Response) => {
    try {
        const { auth0Id } = req.body;
        const existingUser = await User.findOne({ auth0Id });
        if (existingUser) {
            return res.status(200).send();
        }
        const newUser = new User(req.body);
        await newUser.save();
        console.log("saved data");
        return res.status(201).json(newUser.toObject());
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating user" });
    }
};
