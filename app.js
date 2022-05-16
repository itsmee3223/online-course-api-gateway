require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const mediaRouter = require("./routes/media");
const coursesRouter = require("./routes/courses");
const paymentsRouter = require("./routes/orderPayments");
const refreshTokenRouter = require("./routes/refreshTokens");
const mentorsRouter = require("./routes/mentors");
const chaptersRouter = require("./routes/chapters");
const lessonsRouter = require("./routes/lessons");
const imageCourseRouter = require("./routes/imageCourse");
const myCourseRouter = require("./routes/myCourses");
const reviewsRouter = require("./routes/reviews");
const webhookRouter = require("./routes/webhook");

const verifyToken = require("./middlewares/verifyToken");
const can = require("./middlewares/permission");

const app = express();

app.use(cors);
app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/courses", coursesRouter);
app.use("/chapters", verifyToken, can("admin"), chaptersRouter);
app.use("/lessons", verifyToken, can("admin"), lessonsRouter);
app.use("/media", verifyToken, can("admin", "student"), mediaRouter);
app.use("/orders", verifyToken, can("admin", "student"), paymentsRouter);
app.use("/refresh-tokens", refreshTokenRouter);
app.use("/mentors", verifyToken, can("admin"), mentorsRouter);
app.use("/image-courses", verifyToken, can("admin"), imageCourseRouter);
app.use("/my-courses", verifyToken, can("admin", "student"), myCourseRouter);
app.use("/reviews", verifyToken, can("admin", "student"), reviewsRouter);
app.use("/webhook", webhookRouter);

module.exports = app;
