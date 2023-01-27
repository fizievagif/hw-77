import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {TredMutation} from "../../types";
import FileInput from "../UI/FileInput/FileInput";

interface Props {
  onSubmit: (message: TredMutation) => void;
}

const FormChat: React.FC<Props> = ({onSubmit}) => {
  const [message, setMessage] = useState<TredMutation>({
    author: '',
    message: '',
    image: null,
  });

  const resetForm = () => {
    setMessage({author: '', message: '', image: null});
  }

  const onFormChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...message,
      author: message.author,
      message: message.message,
    });
    resetForm();
  };

  const onTredMesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setMessage(prev => ({...prev, [name]: value}));
  };
  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;
    if (files) {
      setMessage(prevState => ({
        ...prevState, [name]: files[0]
      }));
    }
  };

  return (
    <form onSubmit={onFormChatSubmit}>
      <div>
        <TextField
          id="author"
          value={message.author}
          label="Type an author"
          onChange={onTredMesChange}
          name="author"
          sx={{mt: 4}}
        />

        <TextField
          id="message"
          value={message.message}
          label="Type a message"
          onChange={onTredMesChange}
          name="message"
          sx={{my: 2}}
          required
        />

        <FileInput
          label="Image"
          name="image"
          onChange={fileInputChangeHandler}
        />

        <div style={{textAlign: "center"}}>
          <Button type="submit" variant="contained" color="secondary">
            Send
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormChat;