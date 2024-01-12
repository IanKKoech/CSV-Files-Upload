This project uses [Next.js](https://nextjs.org/) 
## Getting Started

First, run the development server:
Use node >= 18

## Selecting a package manager

This project uses `pnpm` to manage packags so you should install it using these [instructions](https://pnpm.io/installation).

## Using a shorter alias

`pnpm` might be hard to type, so you may use a shorter alias like `pn` instead. 

#### Adding a permanent alias on POSIX systems

Just put the following line to your `.bashrc`, `.zshrc`, or `config.fish`:

```
alias pn=pnpm
```

#### Adding a permanent alias in Powershell (Windows):

In a Powershell window with admin rights, execute:

```
notepad $profile.AllUsersAllHosts
```

In the `profile.ps1` file that opens, put:

```
set-alias -name pn -value pnpm
```

Save the file and close the window. You may need to close any open Powershell window in order for the alias to take effect.

## Setting up environment variables
Copy the contents of the `.env.example` file into a file called `.env` and use correct values you get from any person in the dev team who has the project running locally.

```bash
cp .env.example .env
```

## Installing packages and running the project
After setting up the project install the required packages and run the project like so:

```bash
pnpm install
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Contributing to the project
This should be updated when complete

## Conventions
All small reusable components are exported from the `components/ui` directory. Shared components like the Navigation, Footers and Sidebars are exported from the `components/shared` directory. Page specific components are in `components/pages` directory in their respective directories.

*NB* Before contributing to the repo checkout the coding style and conventions in the repo.

We use `prettier` for formatting. We use `single quotes` and variable names should be clear.

If you have a list of employees *DO NOT* call `employeesList` rather call it `employees`. variables should be named the way you call them in the real world. 

Our `tsconfig` file is configured such that if you for example want to import a `Button` component you can do it like so `import { Button } from '@/components/ui'`. Everything should be imported like that and in each high level folder we export everything inside using the `index.ts` file which acts as a barrel.

### Languages
We are using typescript as our main language and all components should be properly typed.

## Other packages
We are using tailwindcss fro styling and when you create a new component with tailwind clasess that you also want the user to override use the `cn` function exported from the `@/lib` directory as it merges your classes without coflicts.
