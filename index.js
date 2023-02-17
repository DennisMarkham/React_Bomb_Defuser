import React from "react";
import ReactDOM from "react-dom";
import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Ticking from "./Ticking.js";
import Victory from "./Victory.js";
import Boom from "./Boom.js";
import "./style.css";

function BombGame()
{


return(
<BrowserRouter>
<Routes>

<Route path = "/" element={<Ticking />} />
<Route path  = "/victory" element = {<Victory />} />
<Route path  = "/boom" element = {<Boom />} />

</Routes>
</BrowserRouter>
	)

}



ReactDOM.render(<BombGame />, document.getElementById("root"));
