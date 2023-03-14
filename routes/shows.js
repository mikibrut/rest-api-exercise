const express = require('express');
const router = express.Router();
const Show = require('../models/Show');

    /* GET all shows */
    /* ROUTE /shows */
router.get('/', async function (req, res, next) {
    try {
      const shows = await Show.find({});
      res.status(200).json(shows);
    } catch (error) {
      next(error)
    }
  });

    /* GET one show */
    /* ROUTE /shows/:showId */
router.get('/:showId', async function (req, res, next) {
    const { showId } = req.params;
    try {
      const show = await Show.findById(showId);
      res.status(200).json(show);
    } catch (error) {
      next(error)
    }
  });

    /* POST create new show */
    /* ROUTE /shows */
router.post('/', async function (req, res, next) {
    try {
      const createdShow = await Show.create(req.body);
      res.status(200).json(createdShow);
    } catch (error) {
      next(error)
    }
  });

    /* PUT edit show */
    /* ROUTE /shows/:showId */

router.put('/:showId', async function (req, res, next) {
    const { showId } = req.params;
        try {
          await Show.findByIdAndUpdate(showId, req.body, {new: true});
          res.redirect(`/shows/${showId}`);
        } catch (error) {
          next(error)
        }
      });

    /* DELETE delete show */
    /* ROUTE /shows/:showId */

router.delete('/:showId', async function (req, res, next){
    const { showId } = req.params;
    try {
        const deletedShow = await Show.findByIdAndDelete(showId)
        res.status(201).json(deletedShow)
    } catch (error) {
        next(error)
    }
})



module.exports = router;