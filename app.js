const express = require("express"),
	path = require("path"),
	glob = require("glob"),
	http = require("http");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");

global.server = http.createServer(app);
global.server.listen(global.config.PORT);
global.server.on("error", expressListeners.onError);
global.server.on("listening", expressListeners.onListening);
