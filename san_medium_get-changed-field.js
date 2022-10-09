/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */
const data = [
  { firstName: 'Adi', lastName: 'Nugroho', age: 25 },
  { firstName: 'Deddy', lastName: 'Dores', age: 25 },
];

function result(data) {
  let map = {};
  let differentFields = [];
  data.forEach(element => {
    for(let key in element) {
      console.log(key);
      if (!map[key]) {
        map[key] = element[key];
        continue;
      }

      if (map[key]) {
        if (map[key] === element[key]) continue;
        if (map[key] !== element[key]) {
          differentFields.push(key);
        }
      }
    }
  });
  return differentFields;
}

console.log(result(data));
