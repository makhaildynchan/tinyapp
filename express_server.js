const express = require("express");
const app = express();
const PORT = 8081; // default port 8080

app.set("view engine", "ejs");

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.use(express.urlencoded({ extended: true }));

// Our database of users
let data = {
  "b2xVn2": {
      id: "b2xVn2",
      email: "user@example.com",
      password: "$2a$10$kgyaDXX1IsqUW0LQKkobSuwsZhvnb6Xvavpxg29Ep3J9oGCoIBtcq", // "purple-monkey-dinosaur"
  },
  "9sm5xK": {
      id: "9sm5xK",
      email: "user2@example.com",
      password: "$2a$10$LXPRQJXfvWkxSokQ/CM.9OOZo.OUjKQcdCHXHPyhYzOaJOnN5aCD2", // "dishwasher-funk"
  },
};

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/hello", (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
});

app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});

app.get("/urls", (req, res) => {
  const templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});

app.get("/urls/:id", (req, res) => {
  const urlId = req.params.id;
  const longURL = urlDatabase[urlId];
  const templateVars = { shortURL: urlId, longURL }; // { id: req.params.id, longURL: urlDatabase[req.params.id] };

  // console.log(urlDatabase[req.params.id], "database");
  res.render("urls_show", templateVars);
});

app.post("/urls", (req, res) => {
  console.log(req.body); // Log the POST request body to the console
  res.send("Ok"); // Respond with 'Ok' (we will replace this)
});

app.post("/urls/:id/delete", (req, res) => {
  const urlId = req.params.id;
  delete urlDatabase[urlId];

  res.redirect("/urls"); 
});

app.get("/u/:id", (req, res) => {
  const longURL = urlDatabase[req.params.id];

  res.redirect(longURL);
});

app.get('/urls', (req, res) => {
  const user = req.user;
  
  res.render('urls_index', { user: user });
});

app.get('/urls/:id', (req, res) => {
  if (!users[req.session["user_id"]]) {
    return res.status(401).send('Please log in');
  }

function generateRandomString() {
  const alphanumericCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < 6; i++) {
    randomString += alphanumericCharacters.charAt(Math.floor(Math.random() * alphanumericCharacters.length));
  }
  return randomString;
}

const randomString = generateRandomString();
console.log(randomString);

});