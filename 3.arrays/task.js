function compareArrays(arr1, arr2) {
  if(arr1.length === arr2.length) {
		if(arr1.every((item, inx) => item === arr2[inx])) {
			return true;
		}
	}
	return false;
}

function getUsersNamesInAgeRange(users, gender) {
	let person = users.filter((item) => item.gender === gender).map((item) => item.age);
	let result = person.reduce((acc, item) => acc + item, 0);

	if(person.length === 0 ) {
		return 0;
	}
 
	return result/person.length;
}