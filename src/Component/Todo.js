import React from "react";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Delete, Update_Data } from "../redux/actions/actions";
import { useDispatch } from "react-redux";



const Todo = () => {
  const { UserData } = useSelector((state) => state.addTodo);
  console.log(UserData);


   const [showEye, setShowEye] = useState(false);
   const [showEyeValue, setShowEyeValue] = useState('');
   const [show, setShow] = useState(false);
   const [update, setUpdate] = useState('')
   const [ind, setInd] = useState('')


   const dispatch = useDispatch()

  const handleShowTodo = (elem) =>{
      setShow(true);
      setUpdate(elem)

  }

  const deleteData=(id)=>{
         dispatch(Delete(id))
  }

   const updateChanges =()=>{
       dispatch(Update_Data(update,ind))
       setShow(false); 
   }

  return (
    <div>
      {UserData.map((elem, k) => (
        <>
          <div className="" key={k}>
            <div className="d-flex  justify-content-between">
              <li>{elem}</li>
              <div className="d-flex justify-content-between">
                <button
                  onClick={() => {
                    handleShowTodo(elem);
                    setInd(k);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deleteData(k)}>Delete</button>
                <button
                  onClick={() => {
                    setShowEye(true);
                    setShowEyeValue(elem);
                  }}
                >
                  View
                </button>
              </div>
            </div>
          </div>

          <Modal show={showEye}>
            <Modal.Footer>
              <p className="text-center ">{showEyeValue}</p>
              <Button onClick={() => setShowEye(false)}>Close</Button>
            </Modal.Footer>
          </Modal>

          <Modal show={show}>
            <Modal.Body>
              <input
                type="text"
                 value={update}
                onChange={(e) => setUpdate(e.target.value)}
                className="form-control"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShow(false)}>Close</Button>
              <Button onClick={() => updateChanges()}>Save cahnges</Button>
            </Modal.Footer>
          </Modal>
        </>
      ))}
    </div>
  );
};

export default Todo;
