<div align="left" style="position: relative;">
<h1>TASKS-APP</h1>
<p align="left">
	<img src="https://img.shields.io/github/license/iquldev/tasks-app?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/iquldev/tasks-app?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/iquldev/tasks-app?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/iquldev/tasks-app?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="left"><!-- default option, no dependency badges. -->
</p>
<p align="left">
	<!-- default option, no dependency badges. -->
</p>
</div>
<br clear="right">

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

A simple application that allows you to record your notes.

---

##  Features

<ul>
	<li>Ability to set priority and status</li>
	<li>Pleasant and minimalistic design</li>
	<li>Dark and light theme</li>
</ul>

---

##  Project Structure

```sh
└── tasks-app/
    ├── .github
    │   └── workflows
    ├── LICENSE
    ├── README.md
    ├── app.config.ts
    ├── app.vue
    ├── assets
    │   └── css
    ├── components
    │   ├── Card.vue
    │   ├── NewTask.vue
    │   └── TitleBar.vue
    ├── nuxt.config.ts
    ├── package-lock.json
    ├── package.json
    ├── pages
    │   └── index.vue
    ├── public
    │   ├── favicon.ico
    │   └── robots.txt
    ├── server
    │   └── tsconfig.json
    ├── tailwind.config.js
    └── tsconfig.json
```

---
##  Getting Started

###  Prerequisites

Before getting started with tasks-app, ensure your runtime environment meets the following requirements:

- **Programming Language:** Vue.js
- **Package Manager:** Npm


###  Installation

Install tasks-app using one of the following methods:

**Build from source:**

1. Clone the tasks-app repository:
```sh
❯ git clone https://github.com/iquldev/tasks-app
```

2. Navigate to the project directory:
```sh
❯ cd tasks-app
```

3. Install the project dependencies:
```sh
❯ npm i
```




###  Usage
Run tasks-app using the following command:
**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ npm run dev
```


###  Build
Build tasks-app using the following command:
**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ npm run build
```


---
##  Project Roadmap

- [X] **`Task 1`**: <strike>Storing tasks via Local Storage</strike>
- [ ] **`Task 2`**: Pinia and MongoDB 
- [ ] **`Task 3`**: Optimization for smartphones
- [ ] **`Task 4`**: Backend implementation
- [ ] **`Task 5`**: AI???

---

##  Contributing

- **💬 [Join the Discussions](https://github.com/iquldev/tasks-app/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/iquldev/tasks-app/issues)**: Submit bugs found or log feature requests for the `tasks-app` project.
- **💡 [Submit Pull Requests](https://github.com/iquldev/tasks-app/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/iquldev/tasks-app
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/iquldev/tasks-app/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=iquldev/tasks-app">
   </a>
</p>
</details>

---

##  License

This project is protected under the MIT License. For more details, refer to the LICENSE file.

---
