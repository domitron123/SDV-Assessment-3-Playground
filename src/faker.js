//import * as faker from '@faker-js/faker';
const faker = require('@faker-js/faker');
const fs = require('fs');

// Rest of your code...



const fs = require('fs')

const createUser = () => {
    return {
        id: faker.datatype.uuid(),
        image: faker.image.image(),
        bio: faker.person.bio(),
        phone: faker.phone.imei(),
    }
}

//  ---------------------------------------------
// NOTE - create an array of number of users

const createUsers = (createUser = 100) => {
    return Array.from({length: numUser}, createUser)
}

let dummyData = createUsers(100)

// ----------------------------------------------

// NOTE - save the dummy data in a json file using Node file systems libary

fs.writeFile('./db.json', json.stringify(dummyData, null, 4), (err) => {})

