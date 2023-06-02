/* const fs = require("fs");

const register = (name, email, age, address) => {
  const data = {
    name,
    email,
    age,
    address,
  };
  fs.writeFileSync("datos.json", JSON.stringify(data));
  console.log("data created successfully");
};

const read = () => {
  const data = JSON.parse(fs.readFileSync("datos.json", "utf-8"));
  console.log(data);
};

module.exports = {
  register,
  read,
};
 */

const fs = require("fs");

const register = (name, email, age, address) => {
  const data = JSON.parse(fs.readFileSync("datos.json", "utf-8"));
  data.push({ name, email, age, address });
  fs.writeFileSync("datos.json", JSON.stringify(data));
  console.log("data created successfully");
};

const read = () => {
  const data = fs.readFileSync("datos.json", "utf-8");
  if (data === "[]") {
    console.log("data is empty");
  } else {
    console.log(data);
  }
};

module.exports = {
  register,
  read,
};
