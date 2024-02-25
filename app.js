const yargs = require("yargs");
const { addPerson, deleteData, read, list } = require("./data.js");

yargs.command({
  command: "add",
  describe: "to add an item",
  builder: {
    id: {
      describe: "this is the id description in add command",
      demandOption: false,
      type: "number",
    },
    fname: {
      describe: "this is the first name description in add command",
      demandOption: false,
      type: "string",
    },
    lname: {
      describe: "this is the last name description in add command",
      demandOption: false,
      type: "string",
    },
    age: {
      describe: "this is the age description in add command",
      demandOption: false,
      type: "number",
    },
    city: {
      describe: "this is the city description in add command",
      demandOption: false,
      type: "string",
    },
  },
  handler: (x) => {
    addPerson(x.id, x.fname, x.lname, x.age, x.city);
  },
});

yargs.command({
  command: "delete",
  describe: "to delete an item",
  handler: (x) => {
    deleteData(x.id);
  },
});

yargs.command({
  command: "read",
  describe: "to read data",
  builder: {
    id: {
      describe: "this is id desc in read command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    read(x.id);
  },
});

yargs.command({
  command: "list",
  describe: "to list data",
  handler: () => {
    list();
  },
});

yargs.parse();
