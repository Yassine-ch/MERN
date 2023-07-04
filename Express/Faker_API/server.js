// imports
const express = require("express");
const faker = require("@faker-js/faker");

// initialize app
const app = express();

// set the port for localhost
const port = 8000;
//createUser Function
const createUser =()=>{
    const newFake = {
        _id: faker.datatype.id(),
        firstname: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newFake;
}
// createCompany Function
const craeteCompany =()=>{
    const newFake = {
        _id: faker.datatype.id(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
    };
    return newFake;

}

//******MIDDELWARE******* *///
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//createRouteNewUser
app.get("/api/users/new", (req, res) => {
    return res.json(createUser());
});

//createRouteNewCompany
app.get("/api/companies/new",(req,res)=>{
    return res.json(craeteCompany());
});
//createRouteForBothUser&Company




app.listen(port, () => console.log(`Listening on port: ${port}`));