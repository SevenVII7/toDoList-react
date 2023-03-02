import logo from './logo.svg';
import './assets/css/App.css';
import './assets/css/toDoList.css';
import Listitem from './Listitem.jsx'
import React, {useState, useRef} from 'react';

function App() {
const [text, setText] = useState('')
const inputRef = useRef()
const testText = [
  'qwe', 'test', 'hello'
]
console.log('inputRef', inputRef)

  return (
    <div className="App">
      <nav className="nav"> 
        <div className="navItem act">My Tasks</div>
        <div className="navItem">In Progress</div>
        <div className="navItem">Completed</div>
      </nav>

      <div className="content">
        <div className="enter">
          <div className="plus" onClick={() => {

          }}>
            <div className="plus01"></div>
            <div className="plus02"></div>
          </div>
          <input ref={inputRef} type="text" className="input" placeholder="Add task" onChange={(e) => {
            setText(e.target.value)
          }}></input>
        </div>
        
        <div className="itembox">
            <Listitem text={testText}/>

            {/* <div class="item great">
                <div class="check">
                    <input type="checkBox" class="checkBox"></input>
                </div>
                <div class="something">
                    <p class="somethingText">Type something here</p>
                    <div class="faso">
                        <i class="far fa-calendar-alt"></i>
                        <i class="far fa-file"></i>
                        <i class="far fa-comment"></i>
                    </div>
                </div>
                <div class="control">
                    <i class="fas fa-pencil-alt"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
            <div class="item">
                <div class="check">
                    <input type="checkBox" class="checkBox"></input>
                </div>
                <div class="something">
                    <p class="somethingText">Type something here</p>
                    <div class="faso">
                        <i class="far fa-calendar-alt"></i>
                        <i class="far fa-file"></i>
                        <i class="far fa-comment"></i>
                    </div>
                </div>
                <div class="control">
                    <i class="fas fa-pencil-alt"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
