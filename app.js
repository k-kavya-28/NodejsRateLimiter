const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
	max: 5,
	windowMs: 60 * 1000,
	message: "Too many request from this IP"
});

app.use(limiter);

app.get("/", (req, res) => {
	res.status(200).json({
		status: "success",
		message: "Hello"
	});
});

const port = 3000;
app.listen(port, () => {
	console.log(`app is running on port ${port}`);
});