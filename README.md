# 10x Academy 🎓

An online learning platform where anyone can learn from great courses — and anyone with real knowledge can teach them. Two worlds, one app: students discover and watch courses, educators build, publish, and track their own.

Built with **React + Vite**, styled with **Tailwind CSS**, and powered by **Clerk** for authentication.

---

## ✨ What it does

**For students**
- Browse and search a catalog of courses (JavaScript, Python, Data Science, Web Dev, Cybersecurity, Cloud…)
- Open a course to see its full breakdown: chapters, lectures, ratings, review stars, what's on sale, and how long the whole thing takes
- Stream lectures right in the browser
- Track the courses you've enrolled in under **My Enrollments**

**For educators**
- A dedicated dashboard for managing your teaching side of things
- Create and publish courses from the **Add Course** area
- See a **My Courses** list and the students enrolled in your courses
- Follow along with who's learning what

> **Heads up:** This is very much a work in progress. Right now the course catalog and educator data live as static sample data (see `src/assets/assets.js`), and a few pages are still stubs waiting for their real functionality. Think of it as a solid front-end shell with the UI and data flow in place, ready to be wired to a backend.

---

## 🧱 Tech stack

| What | Why |
|------|-----|
| [React 19](https://react.dev) + [Vite](https://vite.dev) | Fast, modern UI and dev experience |
| [Tailwind CSS](https://tailwindcss.com) | All the styling, utility-first |
| [React Router](https://reactrouter.com) | Client-side routing between pages |
| [Clerk](https://clerk.com) | Authentication — sign in, sign up, and user profiles |
| [Quill](https://quilljs.com) | Rich text editing for course descriptions |
| [react-youtube](https://www.npmjs.com/package/react-youtube) | Embedded video lectures |
| `humanize-duration` | Turn minutes into friendly "2h 30m" labels |

---

## 🚀 Getting started

### Prerequisites
- **Node.js** (a recent LTS version — Vite 8 needs Node 20.19+ / 22.12+)
- A free [Clerk](https://dashboard.clerk.com) account to get your keys

### 1. Install dependencies

```bash
cd client
npm install
```

### 2. Set up your environment variables

Create a `.env.local` file inside `client/` with your own keys:

```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_CURRENCY='$'
```

Grab the publishable key from your Clerk dashboard (it's safe to ship in the client). **Never commit your `CLERK_SECRET_KEY`** — that one stays server-side only.

### 3. Run it

```bash
npm run dev
```

Your app will be running at `http://localhost:5173` — editing a file hot-reloads it right in your browser.

---

## 🔑 Setting up Clerk

Authentication is a big part of this app, and Clerk handles it all for us. The app is wired up in `src/main.jsx` with a `ClerkProvider` that wraps everything, and `SignInButton` / `SignUpButton` / `UserButton` live in the student `Navbar`.

The short version:
1. Create a Clerk application at [dashboard.clerk.com](https://dashboard.clerk.com)
2. Copy the **publishable key** into `.env.local`
3. Sign in / sign up buttons appear automatically

If you'd like the long, friendly, example-driven walkthrough of exactly how this was set up, open `client/CLERK_SETUP.md` — it explains every step in plain English.

---

## 📁 Project structure

```
10x-Academy/
└── client/                      # The entire app lives here
    ├── src/
    │   ├── main.jsx             # Entry point — Clerk + Router + context providers
    │   ├── App.jsx              # All the routes
    │   ├── assets/              # Images, icons, and sample data
    │   ├── context/
    │   │   └── AppContext.jsx   # Shared state (courses, ratings, durations…)
    │   ├── components/
    │   │   ├── student/         # Navbar, Hero, course cards, search, footer…
    │   │   └── educator/        # NavBar, Sidebar, Footer
    │   └── pages/
    │       ├── student/         # Home, course list & details, player, enrollments
    │       └── educator/        # Dashboard, add course, my courses, students
    ├── .env.local               # Your keys (never commit this!)
    ├── CLERK_SETUP.md           # Step-by-step auth setup notes
    ├── vite.config.js           # Vite + React + Tailwind plugins
    └── package.json
```

**Key routes** (defined in `client/src/App.jsx`):

| Route | Page |
|-------|------|
| `/` | Home |
| `/course-list` | All courses (with search results via `/course-list/:input`) |
| `/course/:id` | Course details |
| `/my-enrollments` | Courses you've signed up for |
| `/player/:courseID` | Course player |
| `/educator` | Educator area |
| `/educator/add-course` | Create a new course |

---

## 🛠️ Available scripts

Run these from inside `client/`:

```bash
npm run dev       # Start the dev server with hot reload
npm run build     # Build for production
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

---

## 📌 Roadmap

- [ ] Wire the app to a real backend / database instead of static data
- [ ] Finish the educator pages (Dashboard, Add Course, My Courses)
- [ ] Live course player with progress tracking
- [ ] Actual enrollment & payment flow
- [ ] Ratings and reviews from real users

---

## 📄 License

Not specified yet.
