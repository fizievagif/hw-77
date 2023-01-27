import React, {useState} from 'react';
import {TredMutation} from "../types";
import './App.css';
import TredForm from "../Components/TredForm/TredForm";
import axiosApi from "../axiosApi";

function App() {
  const [messages, setMessages] = useState<TredMutation[]>([]);
  const reversed = [...messages].reverse();

  const onSubmit = async (message: TredMutation) => {
    try {
      await axiosApi.post('/messages', message);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <TredForm onSubmit={onSubmit}/>
    </div>
  );
}

export default App;

