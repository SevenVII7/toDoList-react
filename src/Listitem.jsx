import {useEffect, useState} from 'react'

function ListItem(props){
  const { text } = props;
  const [test, setText] = useState(text);
  return (
    <>
      {
        text.map((item) => {
          return (
            <div class="item">
              <div class="check">
                <input type="checkBox" class="checkBox"></input>
              </div>
              <div class="something">
                {/* <p class="somethingText">{text}</p> */}
                <p class="somethingText">{item}</p>
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
          )
        })
      }
    </>
  )
}

export default ListItem;