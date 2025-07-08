# Framely

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-blue?logo=next.js)](https://nextjs.org/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Image%20Hosting-blue?logo=cloudinary)](https://cloudinary.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

Framely is a blazing-fast media processing platform to upload, preview, and transform images/videos — built for creators, marketers, and developers.

---

## 🚀 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- 🎬 Video upload with metadata and size validation
- 🖼️ Social media image creator with instant format transformation
- 📥 Download processed videos and images
- ⚡ Fast, serverless backend with Next.js API routes
- ☁️ Cloudinary integration for media storage and transformation
- 🔒 Secure and user-friendly UI
- 👀 **Preview videos by hovering over them in the gallery**

---

## 🛠️ Tech Stack

<p align="center">
  <a href="https://nextjs.org/" target="_blank">
    <img src="https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=fff&style=for-the-badge" alt="Next.js" />
  </a>
  <a href="https://react.dev/" target="_blank">
    <img src="https://img.shields.io/badge/React-20232a?logo=react&logoColor=61dafb&style=for-the-badge" alt="React" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=fff&style=for-the-badge" alt="TypeScript" />
  </a>
  <a href="https://clerk.com/" target="_blank">
    <img src="https://img.shields.io/badge/Clerk-3A1C78?logo=clerk&logoColor=fff&style=for-the-badge" alt="Clerk" />
  </a>
</p>
<p align="center">
  <a href="https://tailwindcss.com/" target="_blank">
    <img src="https://img.shields.io/badge/TailwindCSS-38b2ac?logo=tailwindcss&logoColor=fff&style=for-the-badge" alt="TailwindCSS" />
  </a>
  <a href="https://daisyui.com/" target="_blank">
    <img src="https://img.shields.io/badge/DaisyUI-4F46E5?logo=daisyui&logoColor=fff&style=for-the-badge" alt="DaisyUI" />
  </a>
  <a href="https://www.prisma.io/" target="_blank">
    <img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=fff&style=for-the-badge" alt="Prisma" />
  </a>
  <a href="https://nodejs.org/" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=fff&style=for-the-badge" alt="Node.js" />
  </a>
  <a href="https://cloudinary.com/" target="_blank">
    <img src="https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=fff&style=for-the-badge" alt="Cloudinary" />
  </a>
</p>

---

## 📸 Screenshots

### Video Upload

<img src="screenshots/video-upload.png" alt="Video Upload" width="100%" />

### Social Share Image Creator

<img src="screenshots/social-share.png" alt="Social Share" width="100%" />

### Home - Video Gallery

<img src="screenshots/home.png" alt="Home Gallery" width="100%" />

---

## 🏁 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Pragyat-Nikunj/Framely.git
cd Framely
npm install
```

Set up your environment variables for Cloudinary, Clerk, and your database in a `.env.local` file.

### Example `.env.local` structure

```env
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLOUDINARY_API_KEY=your_cloudinary_api_key
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
DATABASE_URL=your_database_url
NEXT_PUBLIC_CLERK_SIGN_IN_URL=your_clerk_sign_in_url
NEXT_PUBLIC_CLERK_SIGN_UP_URL=your_clerk_sign_up_url
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💡 Usage

- **Upload Video:** Go to `/video-upload` to upload and process your videos.
- **Create Social Images:** Go to `/social-share` to transform images for various social media formats.
- **Browse Videos:** Visit the home page to view and download uploaded videos with compressed size.

---

## 🤝 Contributing

Contributions are welcome! Please open issues and submit pull requests for improvements.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  <b>Made with ❤️ using Next.js, Cloudinary, and modern web tech.</b>
</p>
