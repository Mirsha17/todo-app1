/*import { Router } from 'express';
import User from '../Models/UserModel.js';

// Create a new user
export const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        const savedUser = await userData.save();
        res.status(200).json(savedUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

// Fetch all users
export const fetch = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json({ message: "No users found." });
        }
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

// Fetch users with search, sorting, and pagination
export const fetch1 = async (req, res) => {
    const { search = '', sort = 'createdAt', limit = 10 } = req.query;
    try {
        const documents = await User.find({
            $or: [
                { title: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } },
            ],
        })
            .sort({ [sort]: -1 })
            .limit(Number(limit));
        if (documents.length === 0) {
            return res.status(404).json({ message: "No matching documents found." });
        }
        res.status(200).json(documents);
    } catch (error) {
        console.error("Error fetching documents:", error);
        res.status(500).json({ error: "Failed to fetch documents." });
    }
};

// Delete a user
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: "User not found." });
        }
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).json({ deletedUser, message: "User deleted successfully." });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};
*/
import { Router } from 'express';
import User from '../Models/UserModel.js'

export const create=async(req,res)=>{
    try{
        const userData=new User(req.body);
        const savedUser=await userData.save();
        res.status(200).json(savedUser);
}
catch(error){
    res.status(500).json({error:"Internal server error."})
}
};

export const fetch=async(req,res)=>{
    try{
        const users=await User.find();
        if(users.length==0){
            
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({error:"Internal server error."})
    }
};
export const fetch1=async(req,res)=> {
    const{search ='',sort='createdAt',limit=10}=req.query;
    try{
        const documents=await User.find({
            $or:[
                {title:{ $regex:search,$options:'i'}},
                {content:{ $regex:search,$options:'i'}},
            ],
        })
        .sort({[sort]:-1})
        .limit(Number(limit));
        res.json(documents);
    }catch(errorr){
        res.status(500).json({error:'Failed to fetch documents'});
    }
    };
    export const deleteUser=async(req,res)=>{
        try{
            const id=req.params.id;
            const userExist=await User.findOne({_id:id})
            if(!userExist){
                return res.status(404).json({message:"User not found."});
            }
            const deleteUser=await User.findByIdAndDelete(id);
            res.status(201).json({deleteUser,message:" Post Deleted Successfully"});
        }catch(error){
            res.status(500).json({error:"Internal server error."});
        }
    };