# MyFirstApp - Getting Started Guide

- Open terminal with file
- Vite --> Get Started -> Scroll

Paste this 👇

```bash
npm create vite@latest
```

- We need to write name of Project
- It asks for framework like Vanilla, Vue, React, Preact,Lit,Svelte, Solid, Qwik & Others
- Choose react
- it will ask What we want to use - typescript or javascript -> choose JS
- then just run these commands one by one

```bash
cd MyFirstApp

npm install

npm run dev
```

**Now we can see that our MyFirstApp have these files**

->**Node modules**:Contains the project's dependencies installed using npm, including React and other libraries.

->**public**:Holds static assets accessible to the public, like images or fonts, can be used for serving static content in a React app.

->**src**: The source folder that contains all the source code for your React project.

->**app.css**: CSS file for styling your React application. It likely contains styles for the overall layout and appearance.

->a**pp.jsx**: JSX file representing a main component or entry point of your React application. This is where the application's structure and components are defined.

->**index.css**: CSS file that may provide global styles for your React application, affecting the entire project.

->**main.jsx**: Main JavaScript/JSX file where the application logic resides. It's often the entry point for bundlers and defines the root component of your React app.

->**.eslintrc.cjs**: ESLint configuration file specifying rules for code linting, ensuring code consistency and identifying potential issues.

->**.gitignore**:Specifies files and directories to be ignored by Git version control, ensuring that certain files don't get committed to the repository.

->**index.html**: The main HTML file, the entry point for your React application, where the root component is usually mounted.

->**main.js**: The main JavaScript file where the application logic may reside, often the entry point for bundlers like Webpack.

->**package-lock.json**: Lock file specifying exact versions of installed npm packages for consistency, ensuring the same dependencies are used across different environments.

->**package.json**: Configuration file with project metadata and dependencies, including React and other project-specific settings.

->**vite.config.js**: Configuration file for Vite, a build tool for modern web development. It includes settings for development and production builds, plugins, and other project-specific configurations.

---

---

---

## What changes do we need to make after getting all these files

->delete app.css  
->empty the file app.jsx  
->empty the index.css

# Learnings

how to create a component  
control + ` = terminal shortcut  
Building Components  
Component folder inside src  
how to export the component like Navbar in App  
We can only write return one thing but in case of multiple components put all them in one div  
Components name should start from capital letter

Creating Card Component  
Reusability of Card Component 
How?->Map Practical use case in cards
*make sure to give different key for every component for to avoid 'key prop' Warning   
What are Fragments (<> or </>)

Conditional Rendering - Example Our items are some in-stock and some are out of stock and want to display accordingly




Using Tailwind CSS in React  
Website Tailwind -> Docs -> FrameWork Guides -> Vite -> 2nd code to copied

Control + C se off karskte ho -> npm run dev wale command ko

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

two files will be downloaded postcss and tailwind

Add this in tailwind file

```js
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

index.css mein yeh code copy karna hain

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start the your build process

```bash
npm run dev
```
Congrats Tailwind CSS is working !

