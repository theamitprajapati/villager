const mongoose = require("mongoose");

try {
    let client = mongoose.connect("mongodb://localhost:27017/villager")

    client.then(value => console.log("connect DB")).catch(err => console.log("ERROR", err))

    //test d 
} catch (error) {
    console.log("ERROR", error)
}

