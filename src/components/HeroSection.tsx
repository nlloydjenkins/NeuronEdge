import React from 'react';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  onChatbotToggle: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onChatbotToggle }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Supercharge your workforce with{' '}
            <span className={styles.highlight}>AI Agents</span>
          </h1>
          
          <p className={styles.subtitle}>
            Transform your enterprise productivity with NeuronEdge's cutting-edge AI assistants. 
            Automate complex workflows, enhance decision-making, and unlock unprecedented efficiency 
            across your organization.
          </p>
          
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🚀</div>
              <span>Boost Productivity by 300%</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🤖</div>
              <span>Enterprise-Grade AI</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>⚡</div>
              <span>Real-time Automation</span>
            </div>
          </div>
          
          <div className={styles.actions}>
            <button 
              className={styles.primaryButton}
              onClick={onChatbotToggle}
              aria-label="Talk to our AI agent"
            >
              Talk to Our Agent
            </button>
            <button className={styles.secondaryButton}>
              Watch Demo
            </button>
          </div>
        </div>
        
        <div className={styles.visual}>
          <div className={styles.aiOrb}>
            <div className={styles.orbCore}></div>
            <div className={styles.orbRing1}></div>
            <div className={styles.orbRing2}></div>
            <div className={styles.orbRing3}></div>
          </div>
        </div>
      </div>
      
      <div className={styles.backgroundGrid}></div>
    </section>
  );
};

export default HeroSection;
