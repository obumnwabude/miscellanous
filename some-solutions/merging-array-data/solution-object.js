const arr1 = [
  ["name", "id", "age", "weight", "Cool"],
  ["Susan", "3", "20", "120", true],
  ["John", "1", "21", "150", true],
  ["Bob", "2", "23", "90", false],
  ["Ben", "4", "20", "100", true],
];

const arr2 = [
  ["name", "id", "height"],
  ["Bob", "2", "50"],
  ["John", "1", "45"],
  ["Ben", "4", "43"],
  ["Susan", "3", "48"]
];

const arr3 = [
  ["name", "id", "parent"],
  ["Bob", "2", "yes"],
  ["John", "1", "yes"]
];

function transpose(arr) {
  const [titles, ...body] = arr;
  return body.reduce((prev, next) => {
    // loop over the titles, and assign the props to an object.
    const person = {};
    for(const [index, title] of titles.entries()) {
      person[title] = next[index];
    }
    return [...prev, person];
  }, []);
}

const datas = [
  ...transpose(arr1),
  ...transpose(arr2),
  ...transpose(arr3),
];
const mergedArray = datas.reduce((prev, currentPerson) => {
  // if currentPerson is already in the prev, then merge their objects, otherwise add them
  const existingPersonIndex = prev.findIndex(eachPerson => eachPerson.id === currentPerson.id);
  if (existingPersonIndex >= 0) {
    prev[existingPersonIndex] = {
      ...prev[existingPersonIndex],
      ...currentPerson // add the new fields
    }
    return prev;
  }
  // otherwise add a new person
  return [...prev, currentPerson];
}, []);

//console.log(transpose(arr1))
console.log(mergedArray);
