# 📌 Tailwind CSS Setup Guide

This guide explains how to install and configure **Tailwind CSS** in your project from scratch.

---

## ✅ 1. Initialize the Project

Run the following commands in your terminal:

```bash
mkdir my-project
cd my-project
npm init -y
```

This will create a new folder and generate a `package.json` file.

---

## ✅ 2. Install Tailwind CSS

Install **Tailwind CSS**, **PostCSS**, and **Autoprefixer**:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Initialize the configuration files:

```bash
npx tailwindcss init -p
```

This creates two files:

- `tailwind.config.js`
- `postcss.config.js`
  
If this npx command failed than write this command to install tailwindcss v3 than type again the npx command

```
npm i tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

---

## ✅ 3. Configure Tailwind Paths

Open `tailwind.config.js` and update the `content` section to tell Tailwind where your files are located.

If your files are in the `src` folder:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```js
// this is better way
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], //custom font [add in html from google as well]
      },
      colors: {
        primary: "#121212",   // custom blue
        accent: "#F97316",  // custom orange
      },
    },
  },
  plugins: [],
}
```

For React projects, add:

```js
"./src/**/*.{html,js,jsx,ts,tsx}",
```

---

## ✅ 4. Create Your CSS File

Inside the `src` folder, create a CSS file (`src/input.css`) and add the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## ✅ 5. Build Tailwind CSS

Run the following command to compile your CSS:

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

- `-i` → Input file
- `-o` → Output compiled file
- `--watch` → Automatically rebuilds when you save changes

---

## ✅ 6. Link the CSS in Your HTML

In your HTML file (inside `src`), link the compiled CSS:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind Setup</title>
  <link href="../dist/output.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-center">
  <h1 class="text-3xl font-bold text-blue-600">Hello Tailwind!</h1>
</body>
</html>
```

---

## ✅ 7. Start Developing

Now you can use Tailwind utility classes in your HTML or JavaScript files.

Example:

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>
```

---

## ✅ 8. Folder Structure Example

```
my-project/
│
├── src/
│   ├── index.html
│   └── input.css
│
├── dist/
│   └── output.css
│
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

---

## ✅ 9. Optional: Add an NPM Script

To avoid typing the long CLI command every time, add this to your `package.json`:

```json
"scripts": {
  "dev": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
}
```

Then start the Tailwind watcher with:

```bash
npm run dev
```

---

### 🎉 Done!

You now have Tailwind CSS fully working. Start building your UI!
