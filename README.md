# HomePro Website

A modern, minimalist website for HomePro - the primary care physician for your home.

## 🏠 About HomePro

HomePro connects homeowners with trusted experts and AI-powered insights to provide proactive, intelligent home care. We help you make smarter decisions about repairs, maintenance, and long-term home care.

## 🌟 Features

- **Expert Guidance**: Connect with trusted home experts who guide you through every situation
- **Contractor Negotiation**: Get help negotiating with contractors for fair deals
- **Critical Information Access**: Instantly find important home details when you need them
- **Organized Home Records**: Keep all your home information in one secure place
- **AI-Powered Insights**: Behind-the-scenes AI analysis for better decision making

## 🛠 Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS with modern design patterns
- **Form Integration**: Tally.so for waitlist management

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd home-pro-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Home.tsx        # Home page with logo and waitlist
│   ├── Product.tsx     # Product features page
│   ├── Team.tsx        # Team information page
│   └── Navigation.tsx  # Navigation component
├── assets/             # Static assets
│   └── homepro-logo.png
├── App.tsx             # Main app component with routing
├── App.css             # Global styles
└── main.tsx            # Application entry point
```

## 🎨 Design System

- **Color Scheme**: Monochrome (Black & White)
- **Typography**: Inter font family
- **Layout**: Responsive design with mobile-first approach
- **Navigation**: Fixed positioning with clean text links

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🌐 Pages

### Home (`/`)
- HomePro logo and branding
- Waitlist signup integration with Tally.so
- Clean, centered design

### Product (`/product`)
- Expert guidance features
- Critical information access
- Home organization tools
- AI assistance capabilities

### Team (`/team`)
- Founder information
- Company background
- Team member profiles

## 🔧 Configuration

### Environment Setup
This project uses standard Vite configuration with:
- TypeScript support
- React 19 features
- ESLint integration
- Hot module replacement (HMR)

### Deployment
The project can be deployed to any static hosting service:
```bash
npm run build
# Deploy the 'dist' folder to your hosting service
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential.

## 👤 Contact

**Vikrant Singh** - CEO (Chief Everything Officer)
- Company: HomePro
- Role: The mastermind behind the tech and the wearer of many hats

---

© 2025 HomePro. All rights reserved.