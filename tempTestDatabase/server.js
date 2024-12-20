const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const dbFilePath = "./db.json";

// Utility to read the JSON database
const readDB = () => JSON.parse(fs.readFileSync(dbFilePath, "utf-8"));

// Utility to write to the JSON database
const writeDB = (data) => fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));

// **API Endpoints**

// Sign Up
app.post("/signup", (req, res) => {
  const { email, password, name, profilePicture } = req.body;
  const db = readDB();

  // Check if user already exists
  if (db.users.find((user) => user.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = {
    email,
    password,
    name,
    profilePicture: profilePicture || "default.png",
    clubsFollowing: [],
    clubsPartOf: [],
  };

  db.users.push(newUser);
  writeDB(db);
  res.status(201).json({ message: "User created successfully" });
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Login request received:", { email, password });  // Log the received data

  const db = readDB();

  const user = db.users.find((user) => user.email === email && user.password === password);
  if (!user) {
    console.log("Invalid credentials for:", email); // Log if credentials are invalid
    return res.status(401).json({ message: "Invalid credentials" });
  }

  console.log("User found:", user); // Log the found user data
  res.json(user);
});

// Fetch all events
app.get("/api/events", (req, res) => {
  const db = readDB();
  res.json(db.events);
});

// Fetch a specific event by eventId
app.get("/api/events/:eventId", (req, res) => {
  const db = readDB();
  const eventId = parseInt(req.params.eventId);

  const event = db.events.find((event) => event.eventId === eventId);
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  res.json(event);
});

// Fetch all clubs
app.get("/api/clubs", (req, res) => {
  const db = readDB();
  res.json(db.clubs);
});

// Fetch a specific club by club name
app.get("/api/clubs/:clubName", (req, res) => {
  const db = readDB();
  const clubName = req.params.clubName;

  const club = db.clubs.find((club) => club.name === clubName);
  if (!club) {
    return res.status(404).json({ message: "Club not found" });
  }

  res.json(club);
});

// Register user to a club
app.post("/api/clubs/join", (req, res) => {
  const { email, clubName } = req.body;
  const db = readDB();

  const user = db.users.find((user) => user.email === email);
  const club = db.clubs.find((club) => club.name === clubName);

  if (!user || !club) {
    return res.status(404).json({ message: "User or Club not found" });
  }

  // Add user to the club
  if (!user.clubs.includes(clubName)) {
    user.clubs.push(clubName);
    club.members.push(email);

    writeDB(db);
    return res.status(200).json({ message: `${user.name} has successfully joined ${clubName}` });
  }

  return res.status(400).json({ message: `User is already part of the ${clubName}` });
});

// Fetch events for a specific club
app.get("/api/clubs/:clubName/events", (req, res) => {
  const db = readDB();
  const clubName = req.params.clubName;

  const events = db.events.filter((event) => event.club === clubName);
  if (events.length === 0) {
    return res.status(404).json({ message: `No events found for ${clubName}` });
  }

  res.json(events);
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
