const express = require('express');
const { asyncHandler } = require('../../utils');

const router = express.Router();
const db = require('../../db/models');

const { Tweet } = db;

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const tweets = await Tweet.findAll();
    res.json(tweets);
  })
);

router.post('/new', async (req, res) => {
  console.log("this is the req body ------------------------------------", req.body)
   const { message } = req.body;
   const newTweet = await Tweet.create({ message });
   res.status(201).json(newTweet);
})


// router.post(
//   '/',
//   asyncHandler(async (req, res) => {
//     console.log("this is the req body ------------------------------------" ,req.body)
//     const { message } = req.body;
//     const newTweet = await Tweet.create({message });
//     res.status(201).json(newTweet);
//   })
// );

module.exports = router;
