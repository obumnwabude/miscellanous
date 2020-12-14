const arr1 = [
  ["name", "id", "age", "weight", "cool"],
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
  ["Susan", "3", "48"],
];

const arr3 = [
  ["name", "id", "parents"],
  ["Bob", "2", "yes"],
  ["John", "1", "yes"],
];

// Merge the above array data
//
// =========== solution here =====================
// this solution assumes two things,
// that no matter how the data is tampered,
// 1. the 'name' and 'id' will always be used for reference
// 2. that there will be consistency of heading with data
// across the arrays. In other words, array lengths of
// child arrays will remain the same in each array.
//
//
// get starter results array
let results = [["name", "id"]];

// fill members from all arrays
[arr1, arr2, arr3].forEach((data, index) => {
  if (index === 0) {
    // autofill members from first array
    data.slice(1).forEach((arr) => results.push([arr[0], arr[1]]));
  } else {
    // on consequent members, be sure to fill/add
    // only members that have not been previously added
    data
      .slice(1)
      .filter((arr) => {
        for (let i = 0; i < results.slice(1).length; i++) {
          if (
            results[i + 1][0].toLowerCase() === arr[0].toLowerCase() &&
            results[i + 1][1] === arr[1]
          ) {
            return false;
          }
        }
        return true;
      })
      .forEach((arr) => results.push([arr[0], arr[1]]));
  }
});

// fill headings and data
[arr1, arr2, arr3].forEach((data) => {
  // add headings
  data[0].slice(2).forEach((heading) => results[0].push(heading));

  // add data
  results.slice(1).forEach((result) => {
    // add an empty string instead if it is confirmed
    // that this peculiar result array is not found
    // in the data from which copy is being made
    let isDataMember = false;
    for (let i = 0; i < data.slice(1).length; i++) {
      if (
        data[i + 1][0].toLowerCase() === result[0].toLowerCase() &&
        data[i + 1][1] === result[1]
      ) {
        isDataMember = true;
        break;
      }
    }
    if (isDataMember) {
      data.slice(1).forEach((row) => {
        if (
          result[0].toLowerCase() === row[0].toLowerCase() &&
          result[1] === row[1]
        ) {
          // add values only when the name and id matches
          row.slice(2).forEach((value) => {
            result.push(value);
          });
        }
      });
    } else {
      let headingCount = data[0].slice(2).length;
      while (headingCount) {
        result.push("");
        headingCount--;
      }
    }
  });
});

console.log(results);
