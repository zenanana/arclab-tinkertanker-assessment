const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// importing routes
const {
  previous_number,
  is_prime,
  stopwatch,
  hello_query,
  hello_params,
} = require("./routes/index");

// 4.
app.get("/hello/:name", hello_params);

// 3. and 1.
app.get("/hello", hello_query);

// 2.
app.get("/stopwatch", stopwatch);

// 5.
app.get("/isprime/:n", is_prime);

// 6.
app.get("/previous_number/:n", previous_number);

// error handling for all other routes
app.use("/", (req, res) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
  return;
});

app.listen(port, () => {
  console.log("App listening on port.");
});
