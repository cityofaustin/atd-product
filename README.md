# atd-product

A website about ATD's Data & Technology Services team.

## Get it running

Local development requires `git` and `npm`.

Clone this repo

```
$ git clone git@github.com:cityofaustin/atd-product.git
```

Install packages

```
$ npm install
```

Start server

```
$ npm run dev
```

### Icon attributions

- [Change](https://thenounproject.com/search/?q=alternate&i=3026571)
- [Grow](https://thenounproject.com/term/grow/204852/)
- [Unlock](https://thenounproject.com/term/unlock/10608/)
- [Empower](https://thenounproject.com/term/astronaut/2527039/)
- [Heart](https://thenounproject.com/term/heart-user/327074/)

## Migration to Next.js

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-next.js">About Next.js</a>
    </li>
    <li>
        <a href="#changes">Changes</a>
        <ul>
        <li><a href="#architecture">Architecture Differences</a></li>
        <li><a href="#code-change">Code Changes</a></li>
      </ul>
    </li>
    <li>
      <a href="#what's-next">What's Next</a>
    </li>
  </ol>
</details>

### About Next.js

Next.js is a JavaScript framework created by Zeit. It lets you build server-side rendering and static web applications using React. It’s a great tool to build your next website. It has many great features and advantages, which can make Nextjs your first option for building your next web application.

### Architecture Differences

This app contains both create react app and next.js architectures. The app, however, is configured to run next.js and this can be seen in the scripts property of the package.json. I decided to intentionally leave the create react app architecture so components and file structure can be compared while making the migration. The create react app file structure can be found in the craSrc folder.

Some differences between the 2 file structures

- The views in the craSrc folder are now located in the pages folder (I tried to copy the name structure, but Next.js uses the folder name as the route. So I translated the name nView.jsx -> n.js where n is the component name)
- The landing page is located in /pages/index.js file.
- The contexts and head component (this was the head html in the index.html file) are located in the file /pages/\_app.js file. This file is analagous to the App.js file except there are no routes. It also contains an import for the custom.scss file (If you want to import global css, you need to import the file here).
- Folder names are routes and folders that have the name \[n\] are routes for params. EX: /products/307 -> /products/\[issue_number\]
- The styles folder contains the custom.scss file.
- The components associated with the views (or pages in this case), wrappers, and shared components are located in the components folder.
- Context files are located in the contexts folder.
- Assets are located in the public folder (same as before)

### Code Changes

### What's Next
