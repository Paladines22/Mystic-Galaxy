import "./App.css";
import { useState } from "react";
import data from "./assets/data.json";
import Phrase from "./components/Phrase/Phrase";
import Author from "./components/Author/Author";

function App() {
  function randomPhrase() {
    let index = Math.floor(Math.random() * data.length);
    return index;
  }

  const [indexPhrase, setIndexPhrase] = useState(randomPhrase(data.length));
  const phraseData = data[indexPhrase];
  const authorData = data[indexPhrase];

  const changePhrase = () => {
    let newPhrase = Math.floor(Math.random() * data.length);

    while (newPhrase === indexPhrase) {
      newPhrase = Math.floor(Math.random() * data.length);
    }
    setIndexPhrase(newPhrase);
  };

  const imgArray = ["/space1.jpg", "/space2.jpg", "/space3.jpg", "/space4.jpg"];
  const [img, setImg] = useState(0);

  const changeImg = () => {
    const changeFond = (img + 1) % imgArray.length;
    setImg(changeFond);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${imgArray[img]})` }}>
      {/* <div className='App__img'>
        <img src={imgArray[img]}  alt="" />
      </div> */}
      <div className="App__content">
        <h1 className="first__title">Mystic Galaxy</h1>
        <Phrase data={phraseData} />
        <div className="button_card">
          <button
            className="change__button" onClick={() => {
              changePhrase();
              changeImg();
            }}
          >
          <i className="fa-solid fa-repeat text-xl btn"></i>
          </button>
        </div>
        <Author data={authorData} />
      </div>
    </div>
  );
}

export default App;
