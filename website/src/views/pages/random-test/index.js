import "./random-test.scss";
import React, { useState, useEffect } from 'react';
import testApi from "../../../api/testApi";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';


function Index(props) {
  const {test_id, note_id} = useParams();
  const [classOfFlipCard, setClassOfFlipCard] = useState("flip-card-inner");
  const [sendResultForm, setSendResultForm] = useState({
    keyword:"",
    test_id:test_id,
    node_id:note_id,
  });
  const [note, setNote] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:8000/api/test/${test_id}/firstnote`).then((res) => {
      const note = res.data.note;
      setNote(note);
    })
  },[]);
  const {keyword} = sendResultForm;
  const updateKeyword=(event)=>{
    setSendResultForm({...sendResultForm, [event.target.name]: event.target.value });
    console.log(keyword);
  }
  let answerBox=(Math.floor(Math.random() * 2)===1)?(
    <>
      <div>
        <input type="text" name="keyword" value={keyword}  onChange={updateKeyword} placeholder="回答"　required/>
      </div>
    </>
  ):(
    <>
      <div>
        <div>
          <input type="text" name="keyword" value={keyword}  onChange={updateKeyword}　placeholder="回答"　required/>
        </div>
      </div>
    </>
  )
  const sendResult = (event) => {
    event.preventDefault();
    setClassOfFlipCard("flip-card-inner-after-submit");
    console.log(classOfFlipCard);
  };  

  return (
    <>
      <div className="container">
        <div className="flip-card-container">
          <div className="flip-card">
            <div className={classOfFlipCard}>
              <div className="flip-card-front">
                <img src={note.image_url} alt="Avatar" style={{"width":"300px","height":"300px"}}/>
              </div>
              <div className="flip-card-back">
                <h1>{note.keyword}</h1>
                <p>{note.memo}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="question-container">
          <form>
            {/* {answerBox} */}
            <input type="text" name="keyword" value={keyword}  onChange={updateKeyword}　placeholder="回答"　required/>
            <label>Xác nhận</label>
            <input type="submit" value="Submit" onClick={sendResult}/>
          </form>
        </div>
      </div>
    </>
  );
}

export default Index;
