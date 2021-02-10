const express = require("express");
const path = require("path");

// importing scripts
const isPrime = require("../bin/is_prime");
const isNumber = require("../bin/is_number");

// database setup
const MongoClient = require("mongodb").MongoClient;
const uri = "placeholder";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 4
const hello_params = (req, res) => {
  res.send("hello " + req.params.name);
};

// 3 and 1
const hello_query = (req, res) => {
  if (req.query["name"]) {
    res.send("hello " + req.query.name);
  } else if (Object.keys(req.query).length === 0) {
    res.send("hello banana");
  } else {
    res.status(404).send({
      status: 404,
      error: "Not found",
    });
    return;
  }
};

// 2
const stopwatch = (req, res) => {
  res.sendFile(path.join(__dirname + "/stopwatch.html"));
};

// 5. we need to check if the param input is indeed a string. if not, return an error status
const is_prime = (req, res) => {
  if (!isNumber(req.params.n)) {
    res.status(400).send({
      status: 400,
      error: "Param entered is not a number. Please enter a number instead",
    });
  } else {
    res.send(isPrime(req.params.n));
  }
};

// 6. we need to check if the param input is indeed a string. if not, return an error status
const previous_number = (req, res) => {
  // we return a status error if param is not valid number representation
  if (!isNumber(req.params.n)) {
    res.status(400).send({
      status: 400,
      error: "Param entered is not a number. Please enter a number instead",
    });
    return;
  }

  // connecting to mongodb atlas
  client.connect((err) => {
    if (err) {
      res.status(500).send({
        status: 500,
        error: "Error connecting to database",
      });
    } else {
      const collection = client
        .db("arclab-tinkertank-assessment")
        .collection("previous_number");
      // finding previous number
      collection
        .findOne({ _id: 1 })
        .then((doc) => {
          // replacing it if we find it
          collection
            .findOneAndReplace(
              { _id: 1 },
              { _id: 1, previous_number: req.params.n }
            )
            .catch((err) => {
              res.status(500).send({
                status: 500,
                error: err,
              });
              return;
            });
          res.send(doc.previous_number);
        })
        .catch((err) => {
          res.status(500).send({
            status: 500,
            error: err,
          });
          return;
        });
      // collection.insertOne({ _id: 1, previous_number: req.params.n });
    }
  });
};

module.exports = {
  previous_number,
  is_prime,
  stopwatch,
  hello_query,
  hello_params,
};
