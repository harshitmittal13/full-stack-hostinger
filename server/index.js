import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// API Route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Harshit's server" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server is running at http://localhost:${PORT}`),
);
