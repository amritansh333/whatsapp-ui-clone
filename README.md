# WhatsApp Web UI Clone

A WhatsApp Web inspired chat UI built using **React, Vite, and Tailwind CSS**.
The project focuses on recreating the look, feel, and behavior of WhatsApp Web with smooth interactions and a clean component structure.

**Live Demo:**
https://whatsapp-ui-clone-cyan.vercel.app/

---

## Features

* WhatsApp-like chat interface (left sidebar + right chat window)
* Send messages with instant UI update
* Auto-scroll to latest message
* Typing indicator
* Seen / delivered double ticks
* Inline timestamps (like real WhatsApp)
* Search users in sidebar
* Last message preview in chat list
* Active chat highlighting
* Responsive design (works on mobile & desktop)

---

## Approach

This project was built with a focus on **UI accuracy and real chat behavior**, not just static design.

* Used a **component-based structure**:

  * `Sidebar` → chat list & search
  * `ChatWindow` → messages UI
  * `ChatInput` → message input bar

* Managed state using **React useState**:

  * selected chat
  * messages
  * typing state
  * search filtering

* Messages are stored in a **local JSON file** and rendered dynamically.

* Special attention was given to:

  * message alignment (left/right)
  * compact bubble spacing
  * inline time + ticks positioning
  * scroll behavior without layout breaking

---

## Tech Stack

* React (Vite)
* Tailwind CSS
* JavaScript (ES6)

---

## Project Structure

src/
  components/
    icons/
    Sidebar.jsx
    ChatWindow.jsx
    ChatInput.jsx
  data/
    users.json
  App.jsx


---

## Installation & Setup
git clone https://github.com/amritansh333/whatsapp-ui-clone.git
cd whatsapp-ui-clone
npm install
npm run dev

---

## Run Locally

npm install
npm run dev


---

## Note

This is a **frontend-only project** made for learning and UI practice.
There is no backend or real-time messaging.

---

