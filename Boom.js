import { Link, Outlet } from "react-router-dom";
import explosion from "./explosion.png";

function Boom(){
document.getElementById("body").style.backgroundImage = `url('${explosion}')`;
//document.getElementById("body").style.backgroundRepeat = "no-repeat";
document.getElementById("body").style.backgroundSize = "cover";

return(

	<div className = "final">
	<a> <Link to= "/">Try again?</Link></a>
	</div>
)
}

export default Boom;