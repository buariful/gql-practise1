import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver.js";
import transactionResolver from "./transactoin.resolver.js";

const merge_resolvers = mergeResolvers([userResolver, transactionResolver]);

export default merge_resolvers;
