import React, {useEffect, useState} from 'react';
import {TredMutation} from "../types";
import './App.css';
import TredForm from "../Components/TredForm/TredForm";
import axiosApi from "../axiosApi";
import TredMessage from "../Components/TredMessage/TredMessage";

function App() {
  const [messages, setMessages] = useState<TredMutation[]>([]);
  const reversed = [...messages].reverse();

  const run = async () => {
    try {
      const response = await axiosApi.get('/messages');
      const messageData: TredMutation[] = response.data;

      setMessages(messageData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    run().catch(console.error);
  }, []);

  const onSubmit = async (message: TredMutation) => {
    try {
      await axiosApi.post('/messages', message);
      run();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container">
      <div className="App">
        {reversed.map(message => (
          <TredMessage
            key={Math.random().toString()}
            message={message}
          />
        ))}
      </div>

      <TredForm onSubmit={onSubmit}/>
    </div>
  );
}

export default App;

