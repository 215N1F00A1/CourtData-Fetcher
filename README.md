# ECourts Scraper

A **web-based interface** for searching and retrieving case information from Indian eCourts services.  
This application provides a guided step-by-step process to query court records across different states and districts.

---

## 🚀 Features

- **Multi-step Form** – Guided step-by-step interface for case search  
- **State & District Selection** – Choose from Indian states and their respective districts  
- **Case Type Selection** – Support for various case types (civil, criminal, etc.)  
- **Captcha Verification** – Built-in captcha with refresh capability  
- **Search Results** – View case details and court orders  
- **PDF Download** – Download court orders in PDF format  
- **Statistics Dashboard** – View most searched cases and recent query logs  
- **Raw JSON Viewer** – Inspect detailed query data in JSON format  

---

## 📦 Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [shadcn/ui](https://ui.shadcn.com/)  

---

## ⚙️ Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or higher  
- npm or bun package manager  

### Local Development

```bash
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Step 2: Install dependencies
npm install
# or
bun install

# Step 3: Start development server
npm run dev
# or
bun run dev
App will be available at: http://localhost:8080

Build for Production
npm run build
# or
bun run build
📂 Project Structure
src/
 ├─ components/    # UI Components
 ├─ pages/         # Multi-step form & views
 ├─ hooks/         # Custom React hooks
 ├─ utils/         # Helper functions
 ├─ assets/        # Images, icons, styles
⚠️ Current Limitations
Runs in demo/mock mode with simulated data (no real eCourt API integration yet)

Captcha is simulated only

Generated PDFs are basic text files, not formatted judgments

Frontend-only: no backend, database, or persistent storage

No authentication or user sessions

🌐 Deployment
You can deploy this project on any hosting platform like Vercel, Netlify, or your own server.

npm run build
# Deploy the dist/ folder
🛠️ Contribution
Contributions are welcome!

Fork the repo

Create a feature branch

Commit your changes

Submit a Pull Request

📜 License
This project is licensed under the MIT License.
Feel free to use, modify, and distribute.

