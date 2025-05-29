import React from 'react';
import { WEBCHAT_URL } from '../config';
import styles from './Chatbot.module.css';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.chatbotContainer}>
        <div className={styles.header}>
          <div className={styles.headerInfo}>
            <div className={styles.status}>
              <div className={styles.statusDot}></div>
              <span>AI Agent Online</span>
            </div>
            <h3 className={styles.title}>NeuronEdge AI Assistant</h3>
          </div>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close chatbot"
          >
            ✕
          </button>
        </div>
        
        <div className={styles.chatFrame}>
          <iframe
            src={WEBCHAT_URL}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="NeuronEdge AI Assistant"
            allow="microphone"
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
