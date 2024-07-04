import React, { useState, useEffect } from 'react';
import Syntax from './Syntax';
import FeelingItems from './itemsList/FeelingItems';
import PeopleItems from './itemsList/PeopleItems';
import FoodItems from './itemsList/FoodItems';
import PlaceItems from './itemsList/PlaceItems';
import PictureCardMatrix from './PictureCardMatrix';
import DialogueBox from './DialogueBox';
import AboutDialog from './AboutDialog';
import './App.css';
import ActionItems from './itemsList/ActionItems';
import DescribeItems from './itemsList/DescribeItems';
import ChatItems from './itemsList/ChatItems';

const App = () => {
  const [sentence, setSentence] = useState([]);
  const [displayItems, setDisplayItems] = useState(Syntax);
  const [aboutDialogOpen, setAboutDialogOpen] = useState(false);

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
      case "食物":
        setDisplayItems(FoodItems);
        break;
      case "地点":
          setDisplayItems(PlaceItems);
          break;
      case "动作":
          setDisplayItems(ActionItems);
          break;
      case "描述":
        setDisplayItems(DescribeItems);
        break;
      case "对话":
        setDisplayItems(ChatItems);
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


  const toggleAboutDialog = () => {
    setAboutDialogOpen(!aboutDialogOpen);
  };

  const closeAboutDialog = () => {
    setAboutDialogOpen(false);
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
      <div className="about-btn" onClick={toggleAboutDialog}>
        关于
      </div>
      <AboutDialog isOpen={aboutDialogOpen} onClose={closeAboutDialog} />
    </div>
  );
};

export default App;
