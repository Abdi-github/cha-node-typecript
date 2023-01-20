import Logger from 'bunyan';
import mongoose from 'mongoose';
import { config } from './config';

const log: Logger = config.createLogger('database');

export const dbConnect = () => {
  const connect = () => {
    mongoose
      .connect('mongodb+srv://abdi:xKzKIQeytplnm00i@cluster0.lyrw6oq.mongodb.net/?retryWrites=true&w=majority')
      .then(() => {
        log.info('DB CONNECTED');
      })
      .catch((err) => {
        log.error('DB CONNECTION ERROR', err);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
