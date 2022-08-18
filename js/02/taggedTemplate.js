const user = {
  firstName: "James",
  lastName: "Bond",
  age: "30",
  nationality: "American",
};

const taggedTemplate = (texts, ...values) =>
  texts
    .map(
      (text, index) =>
        `${text !== " " ? `<em>${text}</em>` : ` `}${
          values[index] ? `<strong>${values[index]}</strong>` : ""
        }`
    )
    .join("");

let result = taggedTemplate`My name is ${user.firstName} ${user.lastName}, and I'm ${user.age} years old. I'm ${user.nationality}.`;
console.log(result);

export default taggedTemplate;
