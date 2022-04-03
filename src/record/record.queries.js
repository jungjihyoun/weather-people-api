import record from './recordModel';

export default {
  Query: {
    async getRecord(root, {_id}) {
      return await record.findById(_id);
    },
    async allRecord() {
      return await record.find();
    },
  },
};
