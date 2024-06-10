import { prisma } from "./db.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";
import cors from "cors";
import { Position } from "@prisma/client";

// index.ts - > index.js
// db.ts - > db.js

(async function () {
  // .gql
  const typeDefs = gql`
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
      phone1: String
      phone2: String
      dateIn: String
      dateOut: String
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
      createPositiont(position: String): Position
      updatePerson(
        id: ID!
        lastName: String
        firstName: String
        surname: String
        birthday: String
        address: String
        phone1: String
        phone2: String
        dateIn: String
        dateOut: String
        data: String
        positionId: String
      ): Person
      createPosition(position: String): Position
      updatePosition(id: ID!, position: String): Position
    }
  `;

  interface createPostInput {
    title: string;
    username: string;
  }

  interface createPositiontInput {
    id: string;
    position: string;
  }

  interface createPersonInput {
    id: string;
    positionId: string;
    lastName: string;
    firstName: string;
    surname: string;
    birthday: string;
    address: string;
    phone1: string;
    phone2: string;
    dateIn: string;
    dateOut: string;
    // data: string;
  }

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
      },
      getAllPositions: async () => {
        return await prisma.position.findMany({
          include: {
            persons: true,
          },
        });
      },
      getPersonById: async (_parent: any, args: any) => {
        return await prisma.person.findUnique({
          where: {
            id: args.id,
          },
          include: {
            position: true,
          },
        });
      },
    },
    Mutation: {
      createPost: async (_parent: any, args: createPostInput) => {
        const post = await prisma.post.create({
          data: {
            title: args.title,
            username: args.username,
          },
        });
        return post;
      },
      updatePerson: async (_parent: any, args: createPersonInput) => {
        const person = await prisma.person.update({
          where: {
            id: args.id,
          },
          data: {
            lastName: args.lastName,
            firstName: args.firstName,
            surname: args.surname,
            birthday: args.birthday,
            address: args.address,
            phone1: args.phone1,
            phone2: args.phone2,
            dateIn: args.dateIn,
            dateOut: args.dateOut,
            positionId: args.positionId,
          },
          include: {
            position: true,
          },

          // },
          // data: args.data,
        });
        return person;
      },
      createPosition: async (
        _parent: any,
        args: createPositiontInput
      ) => {
        const position = await prisma.position.create({
          data: {
            position: args.position,
          },
        });
        return position;
      },

      updatePosition: async (
        _parent: any,
        args: createPositiontInput
      ) => {
        const position = await prisma.position.update({
          where: {
            id: args.id,
          },
          data: {
            position: args.position,
          },
        });
        return position;
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
