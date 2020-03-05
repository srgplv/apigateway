import {
    GraphQLObjectType,
    GraphQLSchema,
} from 'graphql/type';

import userQuery from './users';
import quoteQuery from './quote';

const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: userQuery,
        quote: quoteQuery
    },
});

export default new GraphQLSchema({
    query,
});

