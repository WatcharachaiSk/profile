# Project Summary: Watcharachai's Portfolio

## 🌟 Overview
This project is a personal portfolio website for **Watcharachai**, a Full-Stack Developer. The application showcases professional experience, skillsets, and personal projects in a responsive and interactive web interface. It supports multi-language functionality (English and Thai) and features a modern, clean design.

## 🛠 Tech Stack

### Frontend
- **React 18.2.0**: UI library.
- **TypeScript**: Ensuring type safety and better developer experience.
- **Vite**: Modern build tool and development server.

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Material UI (MUI)**: For pre-built accessible components and icons.
- **Styled-components**: CSS-in-JS for component-level styling.
- **Flowbite**: UI components built on top of Tailwind CSS.
- **Custom Fonts**: Specifically `THSarabunNew` for Thai language support.

### State Management & Data Fetching
- **Redux Toolkit**: For global state management (e.g., handling viewer data).
- **Axios**: For making HTTP requests to a backend API.

## 📂 Project Structure
```text
/src
├── app/            # Redux store configuration
├── assets/         # Images, icons, fonts, GIFs, and PDFs
├── axios/          # Axios instance and API endpoints configuration
├── components/     # Reusable UI components (e.g., NavBar)
├── configs/        # Configuration files for images, languages, and assets
├── enums/          # TypeScript enums for links and scroll targets
├── features/       # Redux slices (counter, viewer)
└── pages/          # Main page sections (Home, About Me, Skillset, CV, etc.)
```

## ✨ Key Features
- **Multi-language Support**: Seamlessly switch between English and Thai.
- **Smooth Navigation**: Ref-based smooth scrolling to different sections (Home, About, Works, CV).
- **Dynamic Experience Counter**: Automatically calculates the duration of work experience from a start date.
- **Interactive Skillset**: Displays a wide range of technologies and tools used.
- **Downloadable CVs**: Multiple versions of CVs available in PDF format.
- **Viewer Analytics**: Tracks and updates view counts using a combination of `localStorage` and a backend service.
- **Responsive Design**: Optimized for various screen sizes using Tailwind's responsive utilities.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [Bun](https://bun.sh/) (optional, but project includes a `bun.lockb`)

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install
# or
bun install
```

### Running Locally
```bash
# Start development server
npm run dev
```

### Building for Production
```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment
The project is configured for automated deployment via **GitHub Actions**. The workflow is defined in `.github/workflows/deploy.yml`, which handles the build and deployment process (typically to GitHub Pages or a similar hosting service).

## 📜 Scripts
- `dev`: Runs the Vite dev server.
- `build`: Generates production-ready files in the `dist/` folder.
- `lint`: Runs ESLint to check for code quality issues.
- `preview`: Serves the built production application.

---
*Created by Gemini CLI*
