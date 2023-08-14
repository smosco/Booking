import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is rooms endpoint");
});

//CREATE
//UPDATE
//DELETE
//GET
//GET ALL

export default router;
