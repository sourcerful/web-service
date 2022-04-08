import express from "express";
import * as Controller from "../controllers/posts";

const router = express.Router(); 

router.get('/', (req, res) => {
    if(!req.body.text)
    res.json({message: "this works"});
});

router.get('/activator', Controller.getActivator);
router.post('/activator', Controller.setActivator);
router.put('/activator/:id', Controller.updateActivator); // '/:id' -> alternative, mostly used to send one data
router.delete('/activator/:id', Controller.deleteActivator);

export default router;