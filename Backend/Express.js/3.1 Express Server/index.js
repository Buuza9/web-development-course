import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Your server is running on port ${port}`);
});
