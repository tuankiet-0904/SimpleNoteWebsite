import "./random-test.scss";
import React, { useState, useEffect } from 'react';
import testApi from "../../../api/testApi";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function Result(props) {
  const navigate = useNavigate();
  var {test_id} = useParams();

  const [test, setTest] = useState(0);
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/test/${test_id}`).then((res) => {
      console.log(res.data.success)
      if(!res.data.success) navigate("/404");
      const newTest = res.data.test;
      setTest(newTest);
    })
  },[]);

  return (
    <>
      <div className="login-container-main">
        <div className="login-card">
          <div className="login-container-sub-result">
            <h2>Congratulation</h2>
            <p>The test {test.id} is done</p>
            <p>Your score: {test.accuracy}</p>
            <p>Duration: {test.duration}</p>
            <p>Create at: {test.createdAt}</p>
          </div>
          <img height="450px" width="470px" id="image-site" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt=""/>
        </div>
      </div>
    </>
  );
}

export default Result;
