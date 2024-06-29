import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash, faEarListen, faPause } from '@fortawesome/free-solid-svg-icons';
import Syntax from './Syntax';
import PictureCard from './PictureCard';
import './App.css';

const App = () => {
  const [sentence, setSentence] = useState([]);
  const [speaking, setSpeaking] = useState(false);
  
  // Memoize the utterance creation using useMemo
  const utterance = useMemo(() => {
    const newUtterance = new SpeechSynthesisUtterance(sentence.map(item => item.label).join(' '));
    newUtterance.lang = 'zh-CN';
    return newUtterance;
  }, [sentence]);

  useEffect(() => {
    document.title = '宝贝说说APP';
  }, []);

  useEffect(() => {
    const handleEndSpeech = () => {
      setSpeaking(false); // Reset speaking flag to false when speech ends
      console.log("Speaking end.")
    };

    utterance.addEventListener('end', handleEndSpeech);

    return () => {
      utterance.removeEventListener('end', handleEndSpeech);
    };
  }, [utterance]);

  const addWord = (word) => {
    setSentence([...sentence, word]);
  };

  const clearSentence = () => {
    setSentence([]);
  };

  const deleteLastWord = () => {
    setSentence(sentence.slice(0, -1));
  };

  const readSentence = () => {
    if (!speaking && sentence.length > 0) {
      window.speechSynthesis.speak(utterance);
      setSpeaking(true);
    }
  };

  const pauseSpeech = () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  };

  return (
    <div className="App">
      <div className="sentence-container">
        {sentence.map((item, index) => (
          <div key={index} className="word">
            <img src={item.icon} alt={item.label} className="word-icon" />
            <span className="word-label">{item.label}</span>
          </div>
        ))}
        <div className='icon-container'>
          {!speaking ? (
            <div onClick={readSentence} className="icon">
              <FontAwesomeIcon icon={faEarListen} />
            </div>
          ) : (
            <div onClick={pauseSpeech} className="icon">
              <FontAwesomeIcon icon={faPause} />
            </div>
          )}
          <div onClick={deleteLastWord} className="icon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div onClick={clearSentence} className="icon">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
        
      </div>
      <div className="picture-cards">
        {Syntax.map((icon, index) => (
          <PictureCard key={index} icon={icon.icon} label={icon.label} onClick={() => addWord(icon)} />
        ))}
      </div>
    </div>
  );
};

export default App;
