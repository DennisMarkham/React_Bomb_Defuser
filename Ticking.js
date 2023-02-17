import {useState, useEffect} from "react";
import bomb from "./bomb.png";
import white from "./white.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

function Ticking()
{

document.getElementById("body").style.backgroundImage = `url('${white}')`;
	
	const [countdown, setCountDown] = useState(30);
	const [phantomZero, setPhantomZero] = useState("");
	const [correctWire, setCorrectWire] = useState(Math.floor(Math.random() * 3))
	


	//modal stuff:
	const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

useEffect(() => { console.log({correctWire})
  }, []);


 useEffect(() => {
    setTimeout(() => {
      setCountDown((countdown) => countdown - 1);
    }, 1000);
  }, [countdown]);
 //using count as th dependency prevents the countdown from accelerating when I do something
 //else which causes a rerender, like opening the modal

useEffect(() => {
	if (countdown < 10)
	{
		setPhantomZero("0");
	}
})



 if(countdown == 0)
 {
 	window.location = "/boom"
 }


function cut(choice){
	if(choice  == correctWire)
	{
		window.location = "/victory";
	}
	else
	{
	   window.location = "/boom";	
	}
}
	return(
		<div id ="main">
		<span id = "countbox">00:{phantomZero}{countdown}</span>
		<br />
		<br />
		<img src = {bomb} alt = "bomb" />
		<br />
		<br />
		
		<Link onClick={handleShow} style={{float: "right"}}>
        help?
      </Link>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bomb Defuser help</Modal.Title>
        </Modal.Header>
        <Modal.Body>Check console for hint</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

		<button onClick = {() => cut(0)} style={{color: "red"}}>Red Wire</button>
		<button onClick={() => cut(1)} style ={{color: "blue"}}>Blue Wire</button>
		<button onClick = {() => cut(2)} style = {{color: "green"}}>Green Wire</button>
		</div>
		)
}


export default Ticking;