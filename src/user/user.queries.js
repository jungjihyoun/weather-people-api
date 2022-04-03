import User from './userModel';

export default {
  Query: {
    async getUser(root, {_id}) {
      return await User.findById(_id);
    },
    async allUser() {
      return await User.find();
    },
  },
};
