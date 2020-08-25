const router = require("express").Router();
const Item = require("../model/item.model");

/* 
    @route GET api/items/:id
    @desc Gets one item
    @access public
*/
router.get("/:id", async (req, res) => {});
/* 
    @route PUT api/items/:id
    @desc updates one item
    @access public
*/
router.put("/:id", async (req, res) => {});
/* 
    @route GET api/items/:id
    @desc deletes one item
    @access public
*/
router.delete("/:id", async (req, res) => {});
/* 
    @route GET api/items
    @desc Gets all items
    @access public
*/
router.get("/", async (req, res) => {});

module.exports = router;
