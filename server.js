const express = require("express");
const connectToDB = require("./config/db");

const app = express();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

// app.use('/', (req, res)=>{
//     res.send("welcome")
// });

const PORT = process.env.PORT || 3032;
app.listen(PORT, async () => {
  console.log("server running...");

  await connectToDB();
  console.log(`server running on port ${PORT}`);
});
