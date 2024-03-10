const { person: prs, position } = require("./../data");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// import { person as prs } from "./../data.js";

async function person(parent, args, context) {
  // context.prisma.link.findMany();
  const user = await context.prisma.person.findMany({
    where: { id: +args.id },
  });

  const pos = position.filter(
    (item) => item.id == user[0].positionId
  );
  const data = {
    ...user[0],
    positionId: pos[0],
  };
  return data;
}

async function persons(parent, args, context) {
  const user = await context.prisma.person.findMany();
  // console.log("user", user);
  const persons = user.map((item) => ({
    ...item,
    positionId: position.find((pos) => pos.id == item.positionId),
  }));
  return persons;
}

const feed = async (parent, args, context) => {
  return await context.prisma.link.findMany();
};

module.exports = {
  person,
  persons,
  feed,
};
