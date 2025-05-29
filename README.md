# NeuronEdge AI - Enterprise AI Assistants

A modern, responsive website for NeuronEdge, a fictional AI company that provides cutting-edge AI assistants for enterprise productivity and automation.

## 🚀 Features

- **Modern React + Vite + TypeScript** - Fast development with hot module replacement
- **Dark Mode Design** - Sleek, futuristic interface optimized for enterprise users
- **Responsive Layout** - Mobile-first design that works on all devices
- **AI Chatbot Integration** - Embedded Copilot Studio iframe for interactive AI assistance
- **Component Architecture** - Clean, modular TypeScript components with CSS Modules
- **Accessibility** - WCAG compliant with proper focus management and screen reader support

## 🛠️ Tech Stack

- **React 18+** - Modern React with hooks and concurrent features
- **Vite** - Next-generation frontend build tool
- **TypeScript** - Type-safe development
- **CSS Modules** - Component-scoped styling
- **ESLint** - Code quality and consistency

## 📦 Project Structure

```
src/
├── components/           # React components
│   ├── NavBar.tsx       # Navigation with mocked links
│   ├── HeroSection.tsx  # Hero section with CTA
│   └── Chatbot.tsx      # AI chatbot integration
├── config.ts            # Configuration (Agent ID, etc.)
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## 🚦 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure the AI Agent:**
   - Open `src/config.ts`
   - Replace `your-copilot-studio-agent-id-here` with your actual Copilot Studio Agent ID

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🤖 Chatbot Setup

To enable the live chatbot functionality:

1. Create a Copilot Studio agent
2. Get your Agent ID from the Copilot Studio dashboard
3. Update the `AGENT_ID` constant in `src/config.ts`
4. The chatbot will automatically load in the iframe

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🎨 Design System

- **Primary Color**: `#00d4ff` (Cyan blue)
- **Background**: `#0a0a14` (Dark navy)
- **Text**: `#ffffff` (White)
- **Secondary**: `#9ca3af` (Gray)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is created for demonstration purposes.
    ...reactDom.configs.recommended.rules,
  },
})
```
