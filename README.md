# Vyanktesh Hande — Developer Portfolio

A modern, responsive portfolio built with React, Vite, and Tailwind CSS. The
contact form writes directly to a Firebase Firestore collection.

## Stack

- React 19 + Vite
- Tailwind CSS
- Firebase (Firestore) for the contact form
- lucide-react for icons

## Folder structure

```
src/
  components/     Reusable UI pieces (Navbar, ContactForm, ProjectCard, ...)
  sections/       Page sections (Hero, About, Skills, Projects, Contact, Footer)
  data/           Static content (skills.js, projects.js) — edit these to update copy
  lib/            firebase.js — Firestore setup
```

## 1. Install dependencies

```bash
npm install
```

## 2. Set up Firebase

1. Create a project at console.firebase.google.com.
2. Enable **Firestore Database** (start in production mode).
3. Go to **Project settings -> General -> Your apps**, add a Web app, and copy
   the config values.
4. Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

5. In Firestore, set up rules that allow public **create-only** access to the
   `contact_messages` collection so visitors can submit the form but can't
   read or edit other submissions:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contact_messages/{id} {
      allow create: if request.resource.data.keys().hasAll(['name','email','phone','subject','message'])
                    && request.resource.data.name is string
                    && request.resource.data.email is string;
      allow read, update, delete: if false;
    }
  }
}
```

Every submission is stored as a document in `contact_messages` with `name`,
`email`, `phone`, `subject`, `message`, and a `createdAt` server timestamp.

## 3. Run locally

```bash
npm run dev
```

## 4. Build for production

```bash
npm run build
```

## 5. Deploy on Vercel

1. Push this project to a GitHub repo.
2. Import the repo in vercel.com.
3. Add the same six `VITE_FIREBASE_*` variables under **Project Settings ->
   Environment Variables**.
4. Deploy — Vercel auto-detects Vite (`npm run build`, output `dist`).

## Editing content

- **Projects** — `src/data/projects.js`
- **Skills** — `src/data/skills.js`
- **Bio / education** — `src/sections/About.jsx`
- **Contact links** — `src/sections/Contact.jsx`
