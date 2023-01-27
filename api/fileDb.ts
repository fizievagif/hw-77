import { promises as fs } from 'fs';
import crypto from 'crypto';
import {Messages, MessagesWithoutId} from "./types";

const filename = './db.json';
let data: Messages[] = [];

const fileDb = {
  async init() {
    try {
      const fileContents = await fs.readFile(filename);
      data = JSON.parse(fileContents.toString());
    } catch (e) {
      data = [];
    }
  },

  async getItems() {
    return data;
  },

  async addItem(item: MessagesWithoutId) {
    const id = crypto.randomUUID();

    const message = {id, ...item};
    data.push(message);
    await this.save();
    return message;
  },

  async save() {
    return fs.writeFile(filename, JSON.stringify(data));
  }
};

export default fileDb;