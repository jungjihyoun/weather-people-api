export {userResolver} from './src/user/userResolver';

// export const resolvers = {
//   Query: {
//     async getUser(root, {_id}) {
//       return await User.findById(_id);
//     },
//     async allUser() {
//       return await User.find();
//     },
//   },
//   Mutation: {
//     async createUser(root, {input}) {
//       return await User.create(input);
//     },
//     async updateUser(root, {_id, input}) {
//       return await User.findOneAndUpdate({_id}, input, {new: true});
//     },
//     async deleteUser(root, {_id}) {
//       return await User.findOneAndDelete({_id});
//     },
//   },
// };
