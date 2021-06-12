import React ,{useState} from 'react'
import {Button,Modal} from "react-bootstrap"

function MovieAdd({add}) {
    const [show, setShow] = useState(false);
    const [newAdd,setNewAdd] = useState([]);
    const handleAdd=(e)=>{
        setNewAdd({...newAdd,[e.target.name]:e.target.value})
    };
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="warning" onClick={handleShow}>
          click to add a new movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add your favorite one:</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{display:'flex',flexDirection:'column'}}>
              <label>Title</label> <input name='title' onChange={handleAdd} type="text" placeholder="Movie's title"></input><br></br>
              <label>Genre</label> <input name='genre' onChange={handleAdd} type="text" placeholder="Drama,Comedy...."></input><br></br>
              <label>synopsis</label> <input name='synopsis' onChange={handleAdd} type="text" placeholder="descrption or summary.."></input><br></br>
              <label>Poster</label><input name='posterUrl'onChange={handleAdd} type="url" placeholder="post url..."></input><br></br>
              <label>Rate</label><input name='rate'onChange={handleAdd} type="number" placeholder="rating.."></input><br></br>
              <label>Trailer</label><input name='trailer'onChange={handleAdd} type="url" placeholder="post url.."></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={()=>add(newAdd)}>
              Add 
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default MovieAdd
