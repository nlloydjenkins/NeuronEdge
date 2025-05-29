// Configuration for NeuronEdge AI Assistant
// Original URL from your iframe code
export const WEBCHAT_URL = 'https://copilotstudio.microsoft.com/environments/Default-de6b5354-c00a-4c06-888c-81936c42d6f2/bots/cr41e_sharePointDocSearch/webchat?__version__=2';

// Alternative URL formats to try if the main one doesn't work
export const ALTERNATIVE_URLS = {
  // Sometimes the URL needs different parameters
  withAuth: 'https://copilotstudio.microsoft.com/environments/Default-de6b5354-c00a-4c06-888c-81936c42d6f2/bots/cr41e_sharePointDocSearch/webchat',
  // Canvas URL (your original)
  canvas: 'https://copilotstudio.microsoft.com/environments/Default-de6b5354-c00a-4c06-888c-81936c42d6f2/bots/cr41e_sharePointDocSearch/canvas?__version__=2&enableFileAttachment=true',
  // Direct bot URL without webchat
  direct: 'https://copilotstudio.microsoft.com/environments/Default-de6b5354-c00a-4c06-888c-81936c42d6f2/bots/cr41e_sharePointDocSearch'
};

// Fallback chatbot configuration
export const FALLBACK_CHATBOT = {
  enabled: true,
  responses: [
    "Hello! I'm the NeuronEdge AI Assistant. How can I help you today?",
    "I can assist you with information about our AI solutions and services.",
    "Feel free to ask about our neural network technologies, edge computing solutions, or pricing.",
    "For technical support, please contact our team at support@neuronedge.ai",
    "Would you like to know more about our enterprise AI solutions?"
  ]
};

// API Configuration
export const API_CONFIG = {
  COPILOT_STUDIO_BASE_URL: 'https://powerva.microsoft.com/api/botmanagement/v1',
  IFRAME_BASE_URL: 'https://copilotstudio.microsoft.com/environments',
} as const;

// UI Configuration
export const UI_CONFIG = {
  CHATBOT_WIDTH: '400px',
  CHATBOT_HEIGHT: '600px',
  ANIMATION_DURATION: '0.3s',
} as const;

export default {
  WEBCHAT_URL,
  API_CONFIG,
  UI_CONFIG,
};
