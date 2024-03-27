# Vanilla JS Template

![screenshot](/public/screenshot.png)

Initially built for personal use, I created this template for starting a new project with Vite.js using Vanilla Javascript, Bootstrap, sass, Gulp. It is already set up with standard development tools like ESLint and Prettier for easy code formatting and linting, with Vite for a robust, modern build process.

## Dependencies

This template uses the following dependencies:

- **[Vite](https://vitejs.dev/):** A next-generation frontend build tool that offers a fast dev server and optimized builds.
- **[Bootstrap](https://getbootstrap.com/):** A next-generation frontend build tool that offers a fast dev server and optimized builds.
- **[ESLint](https://eslint.org/):** An open-source JavaScript linting utility that helps maintain a consistent code style.
- **[Prettier](https://prettier.io/):** An opinionated code formatter that enforces a consistent style across your project.
- **[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) and [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier):** ESLint configurations adhering to Airbnb's base JS style guide and disabling stylistic rules that might conflict with Prettier.
- **[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) and [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier):** ESLint plugins that enforce ES2015+ import/export syntax and integrate Prettier with ESLint.
- **[autoprefixer](https://www.npmjs.com/package/autoprefixer) and [postcss](https://postcss.org/):** Autoprefixer automatically adds vendor prefixes to CSS, while PostCSS provides a way to transform CSS with JavaScript.
- **[cssnano](https://cssnano.co/):** A tool that helps to compress and optimize CSS files.
- **[vite-plugin-eslint](https://www.npmjs.com/package/vite-plugin-eslint):** Integrates ESLint into the Vite build process for on-the-fly linting.

## Cloning

1. To start using this template, clone the repository with this command:

```bash
git clone https://github.com/Rakib0061/know-git.git
```
- - If you want to original source code for this repository 

```bash
git clone https://github.com/Barata-Ribeiro/vite-vanilla-js-template.git
```

2. Then proceed to the folder and install dependencies:

```bash
cd KNOW_GIT
yarn
```
## Post-Cloning Steps

After cloning the template, make sure to clean up and update the following:

1. Remove the .git directory and run `git init` to clean the commit history.
2. Clean up the README.md file.
3. Adapt the LICENSE file to your project.
4. Delete `public/screentshot.png`
6. In the `src/js/main.js` file, leave only these import statements: `import { Tooltip, Toast, Popover } from 'bootstrap';`
7. Adapt the `package.json` file with your project's own information.
8. Delete the .github folder.

## Scripts

Use the following scripts for your development workflow:

```bash
# Start the development server
npm run dev

# Checks your code for any linting errors
npm run lint

# Tries to automatically fix any linting errors present in your code
npm run lint:fix

# Formats your code in a consistent, predefined style using Prettier
npm run format

# Build for production
npm run build

# Preview the build
npm run preview

# Build and preview the project
npm run buildpreview
```

## Folder Structure

This is the structure of the project:

```plaintext
/
├── .github                 # Github actions and workflows
├── node_modules            # Node.js dependencies for the project.
├── public                  # Public assets and resources
├── src                     # Source code
│   ├── images              # Store your images here
│   ├── js                  # Javascript files of 
│   ├── sass                # CSS styles using scss 
│   ├── pages               # multipage  
│   ├── partials            # reuseable html component project
├── .editorconfig           # Configuration for the EditorConfig plugin
├── .eslintignore           # Files to be ignored by ESLint
├── .eslintrc.json          # Configuration for ESLint
├── .gitignore              # Files and folders to be ignored by Git
├── .prettierignore         # Files to be ignored by Prettier
├── .prettierrc             # Configuration for Prettier
├── index.html              # The HTML file for your project
├── gulp.js                 # handling some task
├── LICENSE                 # The license for your project
├── yarn.lock               # Lockfile for your project's dependencies
├── package.json            # Defines your project and its dependencies
├── postcss.config.cjs      # Configuration for PostCSS
├── README.md               # This file
├── vite.config.js          # Configuration for Vite
```

## License

This template was created under the [MIT License](LICENSE.md).

**Happy coding!** 👨‍💻
