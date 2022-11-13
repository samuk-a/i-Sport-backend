import {model, Schema} from 'mongoose';

import IUser from '@interface/User';

const userSchema = new Schema<IUser>({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  taxId: {type: String, required: true},
});

export default model<IUser>('User', userSchema);
