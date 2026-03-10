import express from "express";
import dotenv from "dotenv";
import { db } from "./dbConnection";
import movieRoutes from "./routes/main.route";
import upload from "./config/multer";

dotenv.config();

const app = express();
const port = process.env.PORT || 301;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", movieRoutes);

app.post("/upload", upload.single("image"), (req, res) => {
  try {
    if (req.file) {
      console.log(`Uploaded: ${req.file.filename}`);
      res.json({
        message: "File uploaded successfully",
        filename: req.file.filename,
      });
    } else {
      res.status(400).json({ message: "No file uploaded" });
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ message: "Server error during file upload" });
  }
});

db.then(() => {
  app.listen(port, () =>
    console.log(`server running at http://localhost:${port}`),
  );
});
