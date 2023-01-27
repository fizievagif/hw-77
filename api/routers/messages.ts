  import express from "express";
import fileDb from "../fileDb";
const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  const items = await fileDb.getItems();
  res.send(items);
});

messagesRouter.post('/', async (req, res) => {
  if (!req.body.message) {
    return res.status(400).send({error: "Message must be present in the request"});
  }

  const messagesData = {
    author: req.body.author,
    message: req.body.message,
  }

  const saveMessages = await fileDb.addItem(messagesData);
  res.send(saveMessages);
});

export default messagesRouter;
