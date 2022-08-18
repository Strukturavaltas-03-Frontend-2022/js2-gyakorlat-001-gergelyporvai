// A két objektum:
const johnDoe = {
  firstName: "John",
  lastName: "Doe",
};

const janeDoe = {
  firstName: "Jane",
  lastName: "Doe",
};

const objectsMerge = (...objects) => Object.assign({}, objects);

export default objectsMerge;
console.log(objectsMerge(johnDoe, janeDoe));
