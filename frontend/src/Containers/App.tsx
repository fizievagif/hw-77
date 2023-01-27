import React, {useEffect} from 'react';
import {TredMutation} from "../types";
import './App.css';
import TredForm from "../Components/TredForm/TredForm";
import TredMessage from "../Components/TredMessage/TredMessage";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectMessages} from "../store/messagesSlice";
import {createMessage, fetchMessages} from "../store/messagesThunks";

function App() {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);

  let onSubmit = async (message: TredMutation) => {
    await dispatch(createMessage(message));
    await dispatch(fetchMessages());
  };

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="App">
        {messages.map(message => (
          <TredMessage
            key={message.id}
            message={message}
          />
        ))}
      </div>

      <TredForm onSubmit={onSubmit}/>
    </div>
  );
}

export default App;

