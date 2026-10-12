import express from "express";

const app = express();

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Programmer's Diet",
      content: "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 2,
      title: "JavaScript Joke",
      content: "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
    },
    {
      id: 3,
      title: "Debugging",
      content: "Debugging is like being the detective in a crime movie where you are also the murderer.",
    },
    {
      id: 4,
      title: "Coffee",
      content: "Programmers are tools for converting coffee into code.",
    },
    {
      id: 5,
      title: "Computer",
      content: "Why did the computer go to the doctor? Because it caught a virus!",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 