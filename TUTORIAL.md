# **Tutorial**

This guide walks you through installing, running, exploring, and extending the React Blog Platform.

---

## **1. Installation**

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd blog-yt
npm install
```

---

## **2. Running the Development Server**

Start the Vite dev server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## **3. Project Structure Overview**

Here are the main files and what they do:

| File / Folder    | Purpose                                                             |
| ---------------- | ------------------------------------------------------------------- |
| **Home.jsx**     | Main homepage component that renders the search bar + list of posts |
| **Search.jsx**   | Handles the search input and tag selection logic                    |
| **BlogList.jsx** | Renders the filtered list of blog posts                             |
| **logger.js**    | Custom logging utility used across components                       |
| **blogs.json**   | Static dataset containing blog posts                                |
| **tests/**       | Contains unit tests for core UI components                          |

---

## **4. Filtering Blogs**

The platform includes simple blog filtering based on tags (e.g., _Metalcore_, _Rock_, _alternative metal_, etc.).

**How filtering works:**

1. Click on any tag in the UI.
2. The `onTagChange` callback updates the selected tag.
3. `BlogList.jsx` filters posts based on the active tag.
4. Only matching posts are displayed.

This logic makes it easy to add new tags or extend filtering features.

---

## **5. Running Tests**

Run all unit tests with:

```bash
npm test
```

This executes:

- **blogList.test.jsx** — tests blog filtering behavior
- **search.test.jsx** — tests search bar and tag selection behavior

You can add additional tests inside `tests/`.

---

## **6. Customizing or Extending the Project**

Here are simple ways to extend the platform:

- **Add new blog posts** → edit `blogs.json`
- **Change the UI** → update `Home.jsx` or `Search.jsx`
- **Add new filters** → modify `onTagChange` logic
- **Improve logging** → expand the custom `logger.js` module

The project is structured to be simple, educational, and easy to extend.

---

## **7. Troubleshooting**

If you encounter issues:

- Make sure dependencies are installed correctly
- Restart the dev server if hot reload behaves strangely
- Run ESLint to check for errors:

```bash
npm run lint
```

---

## **NOTE**

AS OF NOW THIS PROJECT IS NOT COMPLETE

Although this submission demonstrates the foundational architecture and build-tool usage, it currently represents a **bare scaffolding of a larger project**.

I plan to expand it into a complete, production-quality blog platform with:

- a real backend
- user authentication
- markdown support
- blog editor
- dynamic content
- improved UI/UX

---
