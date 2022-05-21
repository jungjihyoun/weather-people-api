import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  image: {
    type: [String],
  },
  weather: {
    type: [String],
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  detail: {
    coat: {
      type: String,
    },
    top: {
      type: String,
    },
    bottom: {
      type: String,
    },
    score: {
      type: String,
    },
  },
});

export default mongoose.model('record', RecordSchema);
