const testarray = ("r", ["robi", "géza"], [" márton"], ["hammadata"]);

const concatArrays = (char, ...arrays) =>
  [char, ...arrays]
    .flat()
    .filter((item, index, self) => self.indexOf(item) === index)
    .filter((item) => !item.includes(char))
    .map((item) => item.trimEnd());

console.log(concatArrays("r", ["robi", "géza"], [" márton"], ["hammadata"]));

//export default concatArrays;

const concatArrays2 = (char, ...arrays) => [char, ...arrays].flat();

console.log(concatArrays2("r", ["robi", "géza"], [" márton"], ["hammadata"]));

const removeDuplicates = (duplicatesArray) =>
  duplicatesArray.filter((item, index, self) => self.indexOf(item) === index);

console.log(removeDuplicates(["r", "robi", "robi", "géza", "géza"]));

const trimArray = (untrimmedArray) => untrimmedArray.map((item) => item.trim());

console.log(trimArray(["   robi       ", "     r       ", "géza      "]));

export default concatArrays;
