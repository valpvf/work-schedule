import { prisma } from "./db.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";
// index.ts - > index.js
// db.ts - > db.js
//  type Data {
//       id: ID
//       date: String
//       person: [Person]
//       personId: String
//     }
(async function () {
    // .gql
    const typeDefs = gql `
    type Position {
      id: ID
      position: String
      persons: [Person]
    }

    type Person {
      id: ID
      position: Position
      lastName: String
      firstName: String
      surname: String
      birthday: String
      address: String
      phone1: Int
      phone2: Int
      data: String
    }

    type Post {
      id: ID
      title: String
      username: String
    }

    type Query {
      getAllPosts: [Post]
      getAllPersons: [Person]
      getAllPositions: [Position]
      getPersonById(id: ID!): Person
    }

    type Mutation {
      createPost(title: String, username: String): Post
    }
  `;
    const resolvers = {
        Query: {
            getAllPosts: async () => {
                return await prisma.post.findMany(); // get all posts - > [post1, post2, post3, ...]
            },
            getAllPersons: async () => {
                return await prisma.person.findMany({
                    include: {
                        position: true,
                    },
                });
                //   .map((person) => {
                //   console.log("person.positionId", person.positionId);
                //   return { ...person, positionId: person.positionId };
                // });
            },
            getAllPositions: async () => {
                return await prisma.position.findMany({
                    include: {
                        persons: true,
                    },
                });
                //   .map((position) => {
                //   const persons = prisma.person.findFirst({
                //     where: { positionId: position.id },
                //   });
                //   return { ...position, persons };
                // });
            },
            getPersonById: async (parent, args) => {
                return await prisma.person.findUnique({
                    where: {
                        id: args.id,
                    },
                    include: {
                        position: true,
                    },
                });
                // const pos = await prisma.position.findUnique({
                //   where: { id: data.positionId },
                // });
                // return {
                //   ...data,
                //   // position: pos
                // };
            },
        },
        Mutation: {
            createPost: async (_parent, args) => {
                const post = await prisma.post.create({
                    data: {
                        title: args.title,
                        username: args.username,
                    },
                });
                return post;
            },
        },
    };
    // GraphQL Types vs Prisma Models
    // Post - > id, title, username
    // Prisma - > all the data being saved to your database
    //
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    const PORT = Number(process.env.PORT) || 4000;
    const { url } = await startStandaloneServer(server, {
        listen: { port: PORT },
    });
    console.log(`🚀  Server ready at: ${url}`);
})();
