import express from "express";
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unSubscribe,
  like,
  dislike,
} from "../controllers/user.js";
import { verifyToken } from "../verifytoken.js";

//user router creation
const router = express.Router();
//update user
router.put("/:id", verifyToken, update);

//delete user
router.delete("/:id", verifyToken, deleteUser);
//get a user
router.get("/find/:id", getUser);
//subscribe a user
router.put("/sub/:id", verifyToken, subscribe);
//unsubscribe user
router.put("/unsub/:id", verifyToken, unSubscribe);
//like video
router.put("/like/:id", verifyToken, like);
//dislike a video
router.put("/dislike/:id", verifyToken, dislike);

// router.get("/test", test);
export default router;
