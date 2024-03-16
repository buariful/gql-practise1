import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDef from "./user.typeDef.js";
import transactionTypeDef from "./transaction.typeDef.js";

const merge_typeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default merge_typeDefs;
