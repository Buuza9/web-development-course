const fs = require("fs");

//To wrtie a file with data, you should follow the following format
//fs.writeFile(path, [options], callback)
// fs.writeFile("message.txt", "Hello from Mohammed Salah", (err) => {
// 	if (err) throw err;
// 	console.log("File has been created successfully");
// });

fs.readFile("message.txt", "utf8", (err, data) => {
	if (err) throw err;
	console.log(data);
});
