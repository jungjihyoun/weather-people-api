import User from './userModel';

export default {
  Mutation: {
    async createUser(root, {input}) {
      return await User.create(input);
    },
    async updateUser(root, {_id, input}) {
      return await User.findOneAndUpdate({_id}, input, {new: true});
    },
    async deleteUser(root, {_id}) {
      return await User.findOneAndDelete({_id});
    },
  },
};
