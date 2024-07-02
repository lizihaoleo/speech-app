import React from 'react';
import './AboutDialog.css';

const AboutDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="about-dialog">
      <div className="about-content">
        <span className="close-btn" onClick={onClose}>X</span>
        <p>
          这是一个非盈利开源项目（MIT LICENSE)，将日常生活语言里常用词汇分割成模块按钮，语言障碍儿童可以通过按按钮的方式与他人进行沟通。
        </p>
        <p>
          更多细节请访问 https://github.com/lizihaoleo/speech-app
        </p>
      </div>
    </div>
  );
};

export default AboutDialog;
