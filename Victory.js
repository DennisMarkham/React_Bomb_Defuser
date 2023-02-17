import { Link, Outlet } from "react-router-dom";
import victory from "./victory.png";


function Victory(){

	document.getElementById("body").style.backgroundImage = `url('${victory}')`;
return(
	<div className = "final">

<a> <Link to = "/">Try again?</Link></a>
</div>
	)
}

export default Victory;