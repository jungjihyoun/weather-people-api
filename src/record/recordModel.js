import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  image: {
    type: String,
  },
  content: {
    type: String,
  },
  weather: {
    type: Number,
  },
});

export default mongoose.model('record', RecordSchema);
