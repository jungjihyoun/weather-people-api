import Record from './recordModel';
import s3 from '../../routes/image';

export default {
  Mutation: {
    async createRecord(root, {input}) {
      return await Record.create(input);
    },
    async uploadImage(root, {_id, input}) {
      return await Record.findOneAndUpdate({_id}, {image: input}, {new: true});
    },
    async updateRecord(root, {_id, input}) {
      return await Record.findOneAndUpdate({_id}, input, {new: false});
    },
    async deleteRecord(root, {_id}) {
      return await Record.findOneAndDelete({_id});
    },
  },
};
