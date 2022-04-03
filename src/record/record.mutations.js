import Record from './recordModel';

export default {
  Mutation: {
    async createRecord(root, {input}) {
      return await Record.create(input);
    },
    async updateRecord(root, {_id, input}) {
      return await Record.findOneAndUpdate({_id}, input, {new: true});
    },
    async deleteRecord(root, {_id}) {
      return await Record.findOneAndDelete({_id});
    },
  },
};
