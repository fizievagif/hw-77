import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {Tred, TredMutation} from "../types";

export const fetchMessages = createAsyncThunk<Tred[]>(
  'messages/fetchAll',
  async () => {
    const response = await axiosApi.get<Tred[]>('/messages');
    return response.data.reverse();
  }
);

export const createMessage = createAsyncThunk<void, TredMutation>(
  'dishes/create',
  async (message) => {
    const formData = new FormData();

    const keys = Object.keys(message) as (keyof TredMutation)[];
    keys.forEach(key => {
      const value = message[key];

      if (value !== null) {
        formData.append(key, value);
      }
    });

    await axiosApi.post('/messages', formData);
  }
);