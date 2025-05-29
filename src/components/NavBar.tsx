import React from 'react';
import styles from './NavBar.module.css';

interface NavBarProps {
  onChatbotToggle: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onChatbotToggle }) => {
  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>        <div className={styles.logo}>
          <span className={styles.logoText}>NeuronEdge</span>
          <span className={styles.logoSubtext}>AI</span>
        </div>
        
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${styles.navLink} ${link.active ? styles.active : ''}`}
              onClick={(e) => e.preventDefault()}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          <button 
            className={styles.chatButton}
            onClick={onChatbotToggle}
            aria-label="Talk to our AI agent"
          >
            Talk to Our Agent
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
