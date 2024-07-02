import React, { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash, faEarListen, faPause } from '@fortawesome/free-solid-svg-icons';
import "./DialogueBox.css";

const DialogueBox = ({ sentence, setSentence, clearSentence, deleteLastWord }) => {
  const [speaking, setSpeaking] = useState(false);

  const utterance = useMemo(() => {
    const newUtterance = new SpeechSynthesisUtterance(sentence.map(item => item.label).join(' '));
    newUtterance.lang = 'zh-CN';
    return newUtterance;
  }, [sentence]);

  useEffect(() => {
    const handleEndSpeech = () => {
      setSpeaking(false);
      console.log("Speaking end.");
    };

    utterance.addEventListener('end', handleEndSpeech);

    return () => {
      utterance.removeEventListener('end', handleEndSpeech);
    };
  }, [utterance]);

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
    <div className="dialogue-box">
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
    </div>
  );
};

export default DialogueBox;
