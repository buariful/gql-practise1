import { users } from "../dummyData/data.js";

const userResolver = {
  Query: {
    // user:(parent, args, contex,info)=>{}
    users: () => {
      return users;
    },
    user: (_, { userId }) => {
      return users.find((user) => user._id === userId);
    },
  },
  // Mutations: {},
};

export default userResolver;