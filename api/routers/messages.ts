  import express from "express";
import fileDb from "../fileDb";
  import {MessagesWithoutId} from "../types";
  import {imagesUpload} from "../multer";
const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  const items = await fileDb.getItems();
  res.send(items);
});

messagesRouter.post('/', imagesUpload.single('image'), async (req, res) => {
  if (!req.body.message) {
    return res.status(400).send({error: "Message must be present in the request"});
  }

  const messagesData: MessagesWithoutId = {
    author: req.body.author,
    message: req.body.message,
    image: req.file ? req.file.filename : null
  }

  const saveMessages = await fileDb.addItem(messagesData);
  res.send(saveMessages);
});

export default messagesRouter;
