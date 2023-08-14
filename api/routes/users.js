import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is users endpoint");
});

//CREATE
//UPDATE
//DELETE
//GET
//GET ALL

export default router;
