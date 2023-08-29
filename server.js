const express = require("express");
const errHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const app = express();


connectDb();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/contacts', require("./routes/contactRoutes"));// need contactRouts whch r exported
app.use("/api/users", require("./routes/userRoutes"));
app.use(errHandler);

app.listen(port, () => {console.log(`server on ${port}`);});
