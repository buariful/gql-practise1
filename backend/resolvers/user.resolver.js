import { users } from "../dummyData/data.js";

const userResolver = {
  Query: {
    // user:(parent, args, contex,info)=>{}
    // req,res expressMiddleware e context er maddhome pathano hoise.
    users: (_parent, _args, { req, res }) => {
      return users;
    },
    user: (_, { userId }) => {
      return users.find((user) => user._id === userId);
    },
  },
  // Mutations: {},
};

export default userResolver;
