
# **Technological Foundations of Software Development — Assignment #4**

### **Author:** Muhammad Talha

# **React Blog Platform — Built with Vite**

This project is a simple blog website built using **React** and **Vite**.
It demonstrates modern build tool usage, including:

* Dependency management
* Compilation
* Version management
* Packaging (build output)
* Script-based automation
* Reproducible builds
* Build tool–specific configuration files and metadata

This README documents how to build, run, and understand this project.

---

## **Build Tool Overview (Vite)**

---

## **Dependency Management**

The project uses **Vite** as the build tool.

`npm` + `package.json` track all external libraries:

* react
* react-dom
* react-router-dom
* tailwindcss
* @tailwindcss/vite
* react-icons

Install all dependencies using:

```
npm install
```

---

## **Compilation**

Development server with hot reloading:

```
npm run dev
```

Vite compiles:

* JSX → JavaScript
* Tailwind classes → optimized CSS
* All modules → transformed ES modules

---

## **Project Version Management**

Versioning is handled through:

* `"version"` field in `package.json`
* Semantic Versioning (SemVer)
* `package-lock.json` to ensure deterministic installation

Example from this project:

```
"packages": {
  "": {
    "name": "blog-yt",
    "version": "0.0.0",
    "dependencies": {
      "@tailwindcss/vite": "^4.1.17",
      "react": "^19.2.0",
      "react-dom": "^19.2.0",
      "react-icons": "^5.5.0",
      "react-router-dom": "^7.9.6",
      "tailwindcss": "^4.1.17"
    }
  }
}
```

---

## **Packaging (Production Build)**

Create an optimized production bundle using:

```
npm run build
```

This output is similar to JAR/Wheel packaging in backend ecosystems.

Preview production build:

```
npm run preview
```

---

# **Reproducible Build Process**

The entire build is fully reproducible using:

```
git clone https://github.com/mtmab2408/blog-yt
cd blog-yt
npm install
npm run dev
npm run build
npm run preview
```

This ensures:

* All dependencies install identically
* Builds are reproducible thanks to `package-lock.json`
* No global configuration required

---

# **Project Structure**

```
src/
  components/
    Header.jsx
    Search.jsx
    BlogList.jsx
  pages/
    Home.jsx
  data/
    blogs.json
  assets/
    banner.png

public/
  images/
    metal1.jpg
    rock1.jpg
    alt1.jpg
```

---

# **Build Tool Configuration Files**

## **Vite Configuration — `vite.config.js`**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**This configuration demonstrates:**

* Tailwind plugin integration
* React JSX transform plugin
* Build metadata
* Automated asset and module handling

---

## **package.json Metadata**

```json
{
  "name": "blog-yt",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.17",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.9.6",
    "tailwindcss": "^4.1.17"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.2",
    "@types/react-dom": "^19.2.2",
    "@vitejs/plugin-react": "^5.1.0",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "vite": "^7.2.2"
  }
}
```

**This file includes:**

* Project metadata (name, version)
* Scripts for automation
* Dependency definitions
* Locked versions for deterministic builds

---

# **Conclusion**

This project demonstrates a clean, modern build system using Vite and React, fulfilling:

* Build automation
* Compilation pipeline
* Dependency & version management
* Packaging workflow
* Reproducible builds
* Proper documentation

Although this submission demonstrates the foundational architecture and build-tool usage, it currently represents a **bare scaffolding of a larger project**.

I plan to expand it into a complete, production-quality blog platform with:

* a real backend
* user authentication
* markdown support
* blog editor
* dynamic content
* improved UI/UX

This submission serves as the **initial technical foundation**, and future versions (updated with each TFSD assignment) will evolve into a full working application.


