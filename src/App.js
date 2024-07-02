import React, { useState, useEffect } from 'react';
import Syntax from './Syntax';
import FeelingItems from './itemsList/FeelingItems';
import PeopleItems from './itemsList/PeopleItems';
import PictureCardMatrix from './PictureCardMatrix';
import DialogueBox from './DialogueBox';
import './App.css';

const App = () => {
  const [sentence, setSentence] = useState([]);
  const [displayItems, setDisplayItems] = useState(Syntax);

  useEffect(() => {
    document.title = '宝贝说说APP';
  }, []);

  const rerenderItemList = (word) => {
    //TODO: finish all folder items here
    switch (word.label) {
      case "返回":
        setDisplayItems(Syntax);
        break;
      case "感觉":
        setDisplayItems(FeelingItems);
        break;
      case "人物":
        setDisplayItems(PeopleItems);
        break;
      default:
        break;
    }
  };

  const addWord = (word) => {
    if (word.isFolder) {
      rerenderItemList(word);
    } else {
      setSentence([...sentence, word]);
    }
  };

  const clearSentence = () => {
    setSentence([]);
  };

  const deleteLastWord = () => {
    setSentence(sentence.slice(0, -1));
  };

  return (
    <div className="App">
      <DialogueBox 
        sentence={sentence} 
        setSentence={setSentence} 
        clearSentence={clearSentence} 
        deleteLastWord={deleteLastWord} 
      />
      <PictureCardMatrix 
        items={displayItems} 
        onCardClick={addWord} 
      />
    </div>
  );
};

export default App;
