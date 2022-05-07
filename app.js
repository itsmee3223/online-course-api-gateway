require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const mediaRouter = require("./routes/media");
const coursesRouter = require("./routes/courses");
const paymentsRouter = require("./routes/orderPayments");
const ordersRouter = require("./routes/orderPayments");
const refreshTokenRouter = require("./routes/refreshTokens");
const mentorsRouter = require("./routes/mentors");
const chaptersRouter = require("./routes/chapters");
const lessonsRouter = require("./routes/lessons");
const imageCourseRouter = require("./routes/imageCourse");
const myCourseRouter = require("./routes/myCourses");
const webhookRouter = require("./routes/webhook");

const verifyToken = require("./middlewares/verifyToken");

const app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/media", mediaRouter);
app.use("/courses", coursesRouter);
app.use("/payments", paymentsRouter);
app.use("/orders", verifyToken, ordersRouter);
app.use("/refresh-tokens", refreshTokenRouter);
app.use("/mentors", verifyToken, mentorsRouter);
app.use("/chapters", verifyToken, chaptersRouter);
app.use("/lessons", verifyToken, lessonsRouter);
app.use("/image-courses", verifyToken, imageCourseRouter);
app.use("/my-courses", verifyToken, myCourseRouter);
app.use("/webhook", webhookRouter);

module.exports = app;
