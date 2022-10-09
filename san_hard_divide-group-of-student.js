/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
  { firstName: 'Kai', lastName: 'Lyons' },
  { firstName: 'Belle', lastName: 'Norton' },
  { firstName: 'Finnley', lastName: 'Rennie' },
  { firstName: 'Tatiana', lastName: 'Dickerson' },
  { firstName: 'Peyton', lastName: 'Gardner' },
];
const groups = 3;

function result(students, groups) {
  const sortedStudents = students.sort((a,b) => a.firstName.localeCompare(b.firstName));
  const perGroup = Math.ceil(sortedStudents.length / groups);
  const groupedStudents = sortedStudents.reduce((resultArray, item, index) => { 
    const groupIndex = Math.floor(index/perGroup)
  
    if(!resultArray[groupIndex]) {
      resultArray[groupIndex] = []
    }
  
    resultArray[groupIndex].push(item)
  
    return resultArray
  }, [])
  return groupedStudents;
}

console.log(result(students, groups));
