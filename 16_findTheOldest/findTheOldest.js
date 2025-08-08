function getAge(person) {
    if (Object.hasOwn(person, 'yearOfDeath')) {
        return person.yearOfDeath - person.yearOfBirth
    }
    else {
        return new Date().getFullYear() - person.yearOfBirth
    }
}
const findTheOldest = function(people_array) {
    people_array.sort((personA, personB) => getAge(personB) - getAge(personA))
    return people_array[0]
};

// Do not edit below this line
module.exports = findTheOldest;
