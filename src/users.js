import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList,
  GraphQLString
} from 'graphql/type';

const database = require('./../database.json');
const users = database.users;

/**
 * User type
 */
export const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User id',
    },
    name: {
      type: GraphQLString,
      description: 'User name',
    }
  })
});


const UserQuery = {
  type: new GraphQLList(UserType),
  args: {
    _id: {
      name: '_id',
      type: GraphQLInt,
    },
  },
  // Filter out the matching element from the source data array
  resolve: (root, { _id = null }) => _id ? users.filter(u => u._id === _id) : users
};

export default UserQuery;
