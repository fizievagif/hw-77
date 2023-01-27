import React from 'react';
import {TredMutation} from "../../types";
import {Card, CardContent, Typography} from "@mui/material";

interface Props {
  message: TredMutation;
}

const MessagesChat: React.FC<Props> = ({message}) => {
  return (
    <Card sx={{ minWidth: 600, margin: "20px 20px 20px 20px"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {message.author ? message.author : 'Anonymous'}
        </Typography>
        <Typography variant="body2">
          {message.message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MessagesChat;