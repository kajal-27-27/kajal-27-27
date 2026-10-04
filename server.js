
import app from "./app.js";
import { PORT } from "./solution.js";
import dotenv from "dotenv";

dotenv.config();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
