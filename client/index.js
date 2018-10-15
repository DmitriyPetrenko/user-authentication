// Core
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Containers
import App from "./containers/App";

render(<Router><App /></Router>, document.getElementById("root"));
