import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const headers = {
  headers: {
    "X-Api-Key": "7Edg+szihBrax1upKTl0sw==kqDb8HhSkVobSg1P",
  },
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", async (req, res) => {

  let response = await axios.get(
    `https://api.api-ninjas.com/v1/exercises?muscle=${req.body.muscle}`,
    headers
  );

  res.render("index.ejs", { data: response.data });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
