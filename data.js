const fs = require("fs");

const addPerson = (id, fname, lname, age, city) => {
  const allData = loadData();

  const duplicatedDate = allData.filter((obj) => {
    return obj.id === id;
  });
  if (duplicatedDate.length == 0) {
    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age,
      city: city,
    });

    savaAllData(allData);
  } else {
    console.log("ERROR DUPLICATED ID");
  }
};

const savaAllData = (allData) => {
  const AllDataJson = JSON.stringify(allData);
  fs.writeFileSync("data-source.json", AllDataJson);
};

const loadData = () => {
  try {
    const DataJson = fs.readFileSync("data-source.json").toString();
    return JSON.parse(DataJson);
  } catch {
    return [];
  }
};

const deleteData = (id) => {
  const allData = loadData();

  const dataToKeep = allData.filter((obj) => {
    return obj.id !== id;
  });
  savaAllData(dataToKeep);

  console.log("you have already deleted an Item");
};

const read = (id) => {
  const data = loadData();

  const result = data.find((obj) => {
    return obj.id == id;
  });
  if (result) {
    console.log(result.fname, result.lname, result.age, result.city);
  } else {
    console.log("Data not found");
  }
};

const list = () => {
  const data = loadData();

  data.forEach((person) => {
    console.log(person.fname, person.lname, person.age, person.city);
  });
};

module.exports = {
  addPerson,
  deleteData,
  read,
  list,
};
