import casual from 'casual';
import Mongoose from 'mongoose';
import _ from 'lodash';
import DATABASE from '../config/database';

// const mongo = Mongoose.connect(DATABASE.URL + 'users');

const UserSchema = Mongoose.Schema({
  username: String,
  password: String,
  email: String
});

const User = Mongoose.model('users', UserSchema);

export { User };
