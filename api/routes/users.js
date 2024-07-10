import express from "express";
import {getUsers, addUser, deleteUser, updateUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", addUser);

router.put("/:tar_id", updateUsers);

router.delete("/:tar_id", deleteUser);

export default router; 