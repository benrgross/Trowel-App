# Next.js + Typescript + Tailwind Starter

Boilerplate repo with a many of Shift Lab's standards built-in.

**Stack**:

- [Next.js](https://nextjs.org/docs)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

## Using this boilerplate

This boilerplate is intended to be used as a starting point for _new_ projects.

### 1. Clone the project

Clone the project, using your new project name; "my-new-project", for example.

```
$ git clone git@github.com:shiftlab/nextjs-typescript-tailwind-starter.git my-new-project
```

### 2. Remove existing git metadata

```bash
cd my-new-project

rm -rf .git

git init -b main
```

### 3. Add new remote

Add a new remote for a new github repository.

```bash
git remote add origin git@github.com:shiftlab/my-new-project.git
```

### 4. Update Readme

Remove the "Using this boilerplate" section from this README and change the project title.

### 5. Update package.json

Update `name` in package.json to the new project's name.

### 6. Update `<head>` titles and icons

Ensure all `<title>` tags and icons are updated for the new website. This boilerplate includes favicons and page titles for Shift Lab specifically.

### 7. Push up changes

Push the new project's changes to the remote repo.

```bash
git push -u origin main
```

## Getting started

### Install dependencies

Make sure you have [NVM](https://github.com/nvm-sh/nvm) installed, then install the dependencies. We recommend specifying the Node version in `.nvmrc` to avoid compatibility issues (_currently `lts/*`_). Setting the Node version to something like `16` will install the latest version within version `16` without having to specify minor & patch versions.

```bash
nvm install

nvm use

npm i
```

## Available commands

- `npm run dev` - Runs the NextJS app in Development mode.
- `npm run start` - Runs the NextJS app in production mode.
- `npm run build` - Builds the NextJS app and places the code in `.next`
- `npm run lint` - Lint the entire project
- `npm run format` - Format the entire project

## VSCode Recommended Extensions

When first opening this repo in VSCode, you should prompted to install the project's recommended extensions. Be sure to accept to install all of them.

If you do not see the prompt or accidentally closed it:

- `CMD`+`SHIFT`+`P` to open the VSCode command prompt
- Type `Show Recommended Extensions` and select the command.
- Install all the extensions shown in the left-side panel.

## Prettier, Husky, and ESLint

This project uses [Prettier](https://prettier.io/) code formatter to automatically format code to a standard format.

Prettier can be run manually with `npm run format`, but it is additionally run in a pre-commit hook before code is pushed to source control. "Husky" is used to wire up those pre-commit hooks.

This project also uses "ESLint" for linting, using industry-standard best-practice rules which are configured in `.eslintrc.js`.

## Best Practices

[Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) - A Git branching model useful for managing feature branches and deployment workflows.
