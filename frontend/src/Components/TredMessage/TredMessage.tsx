import React from 'react';
import {Tred} from "../../types";
import {Card, CardContent, CardMedia, styled, Typography} from "@mui/material";

const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '20%',
  width: '70%',
  margin: '0 auto'
})

interface Props {
  message: Tred;
}

const MessagesChat: React.FC<Props> = ({message}) => {
  const cardImage = 'http://localhost:8000/' + message.image;

  return (
    <Card sx={{ minWidth: 600, margin: "20px 20px 20px 20px"}}>
      {message.image ? <ImageCardMedia image={cardImage}/> : null}
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