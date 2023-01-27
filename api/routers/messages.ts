import express from "express";
const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  const datetime = req.query.datetime as string;

  if (datetime) {
    const date = new Date(datetime);

    if (isNaN(date.getDate())) {
      res.status(400).send({'error': 'Invalid datetime!'});
    } else {
    }
  } else {
    res.send();
  }
});

messagesRouter.post('/', async (req, res) => {
  const messagesData = {
    author: req.body.author,
    message: req.body.message,
  }

  if (!req.body.author || !req.body.message) {
    res.status(400).send({"error": "Author and message must be present in the request"});
  } else {
    res.send();
  }
});

export default messagesRouter;
