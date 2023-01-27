import {createSlice} from "@reduxjs/toolkit";
import {Tred} from "../types";
import {RootState} from "../app/store";
import {createMessage, fetchMessages} from "./messagesThunks";

interface MessagesState {
  items: Tred[],
  fetchLoading: boolean,
  createLoading: boolean,
}

const initialState: MessagesState = {
  items: [],
  fetchLoading: false,
  createLoading: false,
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchMessages.fulfilled, (state, {payload: messages}) => {
      state.fetchLoading = false;
      state.items = messages;
    });
    builder.addCase(fetchMessages.rejected, (state) => {
      state.fetchLoading = false;
    });

    builder.addCase(createMessage.pending, (state) => {
      state.createLoading = true;
    });
    builder.addCase(createMessage.fulfilled, (state) => {
      state.createLoading = false;
    });
    builder.addCase(createMessage.rejected, (state) => {
      state.createLoading = false;
    });
  }
})

export const messagesReducer = messagesSlice.reducer;
export const selectMessages = (state: RootState) => state.messages.items;
export const selectMessagesFetching = (state: RootState) => state.messages.fetchLoading;
export const selectMessagesCreating = (state: RootState) => state.messages.createLoading;