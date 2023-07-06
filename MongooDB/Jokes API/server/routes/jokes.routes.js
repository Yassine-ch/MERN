const JokesControllers = require("../controllers/jokes.controllers");
console.log("Jokes controllers is => ", JokesControllers);
module.exports=(app)=> {
    // all Jokes
    app.get("/api/jokes", JokesControllers.readAll);
    //get a single joke
    app.get("/api/jokes/:id",JokesControllers.findOneSingleJokes);
    //create new jokes
    app.post("/api/jokes/",JokesControllers.create);
    //update Jokes
    app.put("/api/jokes/:id",JokesControllers.update);
    //delete a joke
    app.delete("/api/jokes/:id",JokesControllers.deleteAnExistingJokes);
}