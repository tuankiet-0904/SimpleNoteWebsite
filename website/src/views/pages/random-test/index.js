import "./random-test.scss";
import React, { useState, useContext } from 'react';


function index() {
  const [sendResultForm, setSendResultForm] = useState({
    keyword:"",
    test_id,
    node_id,
  });
  const {keyword} = sendResult;
  const updateKeyword=(event)=>{
    setSendResultForm({...sendResult, [event.target.name]: event.target.value });
  }
  let body=(Math.floor(Math.random() * 2)===1)?(
    <>
      <div>
        <input type="text" name="keyword" value={keyword}  onChange={updateKeyword}/>
      </div>
    </>
  ):(
    <>
      <div>
        <div>
          <input type="text" name="keyword" value={keyword}  onChange={updateKeyword}/>
        </div>
      </div>
    </>
  )
  const sendResult = async (values) => {

  };

  return (
    <div className="container">
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://www.toponseek.com/blogs/wp-content/uploads/2019/06/toi-uu-hinh-anh-optimize-image-4-1200x700.jpg" alt="Avatar" style={{"width":"300px","height":"300px"}}/>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="question-container">
        <form pre onSubmit={sendResult}>
          {body}
          <label>Xác nhận</label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
);
}

export default index;
