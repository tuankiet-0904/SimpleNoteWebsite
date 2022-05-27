import "./random-test.scss";
import React, { useState, useEffect } from 'react';
import testApi from "../../../api/testApi";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function Index(props) {
  var duration=0;
  const [displayDuration, setDisplayDuration] = useState(0);
  const navigate = useNavigate();
  var {test_id} = useParams();
  const [uiStatus, setUiStatus] = useState({
    classOfFlipCard: "flip-card-inner",
    waitResult: false,
    submitStatus: false,
    result: false,
  });

  const increment = () => {
    ++duration;
    setDisplayDuration(duration);
  }
  const [mainDataForm, setMainDataForm] = useState({
    keyword:"",
    test_id:test_id,
    note_id:null,
    duration:0
  });
  const [note, setNote] = useState({});
  const [nextNote, setNextNote] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8000/api/test/${test_id}/firstnote`).then((res) => {
      const note = res.data.note;
      if(!note) navigate("/404/");
      setNote(note);
      setMainDataForm({...mainDataForm, ["note_id"]: note.id});
    })
    setInterval(increment, 1000);
  },[]);
  var {keyword} = mainDataForm;
  const updateKeyword=(event)=>{
    setMainDataForm({...mainDataForm, [event.target.name]: event.target.value });
    console.log(keyword);
  }
  const sendResult = (event, duration) => {
    event.preventDefault();
    console.log(displayDuration)
    setMainDataForm({...mainDataForm, [duration]: displayDuration});
    axios.put(`http://localhost:8000/api/test/`, mainDataForm).then((res) => {
      setNextNote(res.data.newNote);
      setUiStatus({...uiStatus, ["result"]: res.data.result, ["classOfFlipCard"]: "flip-card-inner-after-submit", ["submitStatus"]: true});
    })
  };  

  const nextQuestion = (event) =>{
    if(!nextNote) {
      navigate(`/test/${mainDataForm.test_id}`);
      return;
    }
    setNote(nextNote);
    setMainDataForm({...mainDataForm, ["keyword"]:"", ["note_id"]:nextNote.id});
    setUiStatus({...uiStatus, ["result"]: false, ["classOfFlipCard"]: "flip-card-inner", ["submitStatus"]: false});
    nextNote = null;
  }
  return (
    <>
      <div className="login-container-main">
      <div id="timing">{displayDuration}</div>
        <div className="login-card">
          <div className="login-container-sub">
            <div className="container-parent">
              <div className="flip-card-container">
                <div className="flip-card">
                  <div className={uiStatus.classOfFlipCard}>
                    <div className="flip-card-front">
                      <img id="image-note" src={note.image_url} alt="Avatar"/>
                    </div>
                    <div className="flip-card-back">
                      <h1>{note.keyword}</h1>
                      <p>{note.memo}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="question-container" onSubmit={sendResult}>
                <form>
                  <input id="text-answer" className="form-control" type="text" name="keyword" value={keyword}  onChange={updateKeyword}　placeholder="Your answer"　required/>
                  <input className={(!uiStatus.submitStatus)?("btn-form btn btn-primary"):("btn-hide")} type="submit" value="Submit"/>
                </form>
                <button className={(uiStatus.submitStatus)?("btn-form btn btn-success"):("btn-hide")} onClick={nextQuestion}>Next question</button>
                <i id="submit-status">{(uiStatus.submitStatus)?((uiStatus.result)?"Correct answer":"Wrong answer"):("")}</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
