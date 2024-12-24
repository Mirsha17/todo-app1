import express from "express";
import {create,fetch1,deleteUser} from "../Controllers/UserController.js"
const route=express.Router();
route.post("/create",create);
route.get("/pipeline",fetch1);
route.delete("/delete/:id",deleteUser);
export default route;