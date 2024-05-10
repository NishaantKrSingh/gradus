---
title: "Discord chat bot with Gemini"
description: "This CodeLab demonstrates how to make a Discord bot that used Gemini AI in the to reply to your messages."
slug: ""
authors:
  [
    {
      name: "Nishant Singh",
      image: "/authors/vrijraj.jpeg",
      socials:
        {
          linkedin: "https://www.linkedin.com/in/vrijrajsingh/",
          github: "https://github.com/vrijraj",
          web: "https://vrijraj.xyz",
        }
    },
    {
      name: "Abhinav Verma",
      image: "/authors/abhinav.jpg",
      socials:
        {
          linkedin: "https://www:linkedin.com/in/abhinavv9",
          github: "https://github.com/abhinavv9",
          web: "https://sudoboink.me",
        }
    }
  ]
date: 2024-05-07
categories: "Technology"
duration: 30
image: "/codelabs/getting-started-with-gradus/hero.png"
tags: ["GRADUS"]
draft: true
---

# Introduction

Gradus is an open-source tool that enables you to create codelabs using both markdown and rich markdown components. It offers the flexibility to operate either server-side or client-side, depending on your preference. Additionally, Gradus is experimenting with AI-enabled features to enhance its capabilities.

<img src="/codelabs/getting-started-with-gradus/hero.png" alt="hero">

## Features

- Gradus is user-friendly, allowing you to effortlessly create codelabs with markdown and its rich components.
- Features a mobile-friendly user interface.
- SEO-optimized to ensure all content is indexed, boosting visibility in search results.
- Equipped with experimental AI-enabled functionalities.
- Suitable for both individual developers and tech communities.
- Fast and optimized for performance.

## Contributing

Awesome! Contributions of all kinds are greatly appreciated. To help smoothen the process we have a few non-exhaustive guidelines to follow which should get you going in no time.

# Setup Guide

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en) (version 18 or later)
<!-- - [Nuxt 3](https://nuxt.com/) (a modern Vue.js framework)
- [Vuetify](https://vuetifyjs.com/en/) (a Vue UI Library)
- [Nuxt Content](https://content.nuxt.com/) -->

## Installing Gradus

Follow these steps to set up the GRADUS project on your local machine:

1. **Fork and Clone the Repository:** Start by forking [this repository](https://github.com/oss-labs/gradus) from GitHub and then clone it to your local machine.  
<!-- :::md-button{type="tonal" color="primary" link="https://github.com/oss-labs/gradus"}
<img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github" width="20"/>
::: -->

2. **Install Dependencies:** Navigate to the project directory and run the following command to install all the required dependencies.
  ```bash
npm install
```
3. **Run Locally:** Execute the following command to start the development server and view the project in your browser.
```bash
npm run dev
```


:::md-alert{type="success"}
#title
✨ Your development server should be up and running at [localhost:300](http://localhost:3000/).

:::

<br>

:::md-alert{type="failure"}
#title
Note:
#content
In case localhost:3000 is pre-occupied it will automtically be mapped to another port visible in terminal while running the project. 
:::
4. **Setup Complete:** Your setup is now complete, and you're ready to start using GRADUS!

<br>

5. **Prepare for Production:** When you're ready to build for production, use the following command. This will create a `./output` directory containing the production build of your project.
```bash
npx nuxi generate
```
<!-- Learn more about production deployment [here](/getting-started-with-gradus?page=6) -->


# Customization
Gradus is highly customizeable, you can customize ever aspect of it according to your needs.

## Project Structure Overview

Here’s a breakdown of the project's file structure:

```text
└── 📁gradus-app
    ├── .env
    ├── nuxt.config.ts            # Main configuration file for Nuxt.js.
    ├── 📁.output                 # This directory is generated during production builds, containing the server and client code.
    ├── 📁assets
    │   └── config.js             # Stores configuration for project metadata, AI settings, and other customization options.
    ├── 📁components
    │   ├── 📁core                # Core reusable Vue components.
    │   └── 📁content             # Content-specific components like custom Markdown components used in codelabs.
    ├── 📁content
    │   └── getting-started-with-gradus.md  # Markdown file for the codelab content, where users start their learning journey.
    ├── 📁pages
    │   ├── index.vue             # The main landing page of the application.
    │   └── [...slug].vue         # Dynamic route handler for Vue.js, handles all the slugs and displays corresponding content.
    ├── 📁public
    │   ├── favicon.ico
    │   ├── logo.png              # General logo for the project, used across the site.
    │   └── 📁authors             # Contains images and other static content related to authors contributing to the codelabs.
    │   └── 📁codelabs
    |       └── 📁getting-started-with-gradus       # Codelab specific folder to store images and assets
    |           └── image.png
    └── 📁server                  # Server-side scripts and configuration files, possibly including API endpoints or server middleware.


```
<br>

#### Following files can be modified to make Gradus truly yours:

1. **Project Meta Information:** Navigate to `assets/config.js` to customize your codelab’s metadata, such as the project name, description, and social media links, along with SEO and AI-related settings.
2. **Images:** Upload thumbnail images and favicon to the `public` directory.



# Configuration

Customize your project to suit your needs with the following configuration options:

## Google Analytics Integration

To add Google Analytics to your project:

- **File Location:** Open the `nuxt.config.ts` file.
- **Configuration:** Insert your Google Analytics tracking code here to start monitoring your application's traffic.

```ts[nuxt.config.ts]
gtag: {
  id: "G-your-tag"
}
```

## Banner Management

Manage the display banner easily:

- **File Location:** Navigate to the `config.js` file.
- **Toggle Banner:** You can easily enable or disable the banner. Additionally, you can modify the content of the banner directly within this file.

## Enabling AI Features

To leverage AI functionalities within your project:

- **Configuration Steps:**

  1. Go to the `config.js` file.
  2. Set `aiFlag` to `true` to enable AI features.
  3. Adjust `aiFlagType` to specify the type of AI you want to activate ([openai](https://platform.openai.com/api-keys) or [gemini](https://aistudio.google.com/)).
  4. Create a `.env` file in the project root to securely store API keys.

- **Environment File Setup:** Provide your API keys in the `.env` file as follows:

  ```
  OPENAI_API_KEY="YOUR-API-KEY"
  GEMINI_API_KEY="YOUR-API-KEY"
  ```

# Create Your First Codelab

Start by creating a new codelab using Markdown. This will guide you through setting up your first interactive tutorial.

## Step 1: Create a Markdown File

- **Location:** Place your new Markdown file inside the `/content` folder.
- **Example:** Name the file `hello-world.md`.

## Step 2: Define Metadata for the Codelab

Metadata plays a vital role not only in informing users about your codelab but also in configuring how it interacts with the system’s user interface and functionalities:

- **Purpose:** Metadata sets up the codelab's user interface and enables crucial functionalities like search and filtering. It ensures that the codelab is properly categorized and accessible, enhancing user engagement and organization.
- **Syntax:** Insert the following JavaScript object at the top of your Markdown file to include metadata:

```js
---
title: "Share Your Thought with Firebase";
description: "This Codelab demonstrates the use of Firebase for web developers.";
slug: "share-your-thought-with-firebase";
authors: [
  {
    name: "Abhinav Verma",
    image: "/authors/abhinav.png",
    socials: {
      linkedin: "https://linkedin.com/in/abhinavv9",
      github: "",
      twitter: "",
      web: "",
    },
  },
];
date: 2024 - 04 - 28;
categories: "Setup";
image: "/codelabs/getting-started-with-gradus/hero.png";
tags: ["GRADUS"];
draft: false;
---
```


- **Details Explained:**
  - `title`: The name of your codelab.
  - `description`: A brief summary of what the codelab is about.
  - `slug`: A URL-friendly version of the title for navigation.
  - `authors`: Details about the author(s), including social media links.
  - `date`: The publication date.
  - `categories`: The category under which the codelab falls.
  - `image`: A path to an image file related to the codelab.
  - `tags`: Keywords associated with the codelab to help in search and organization.
  - `draft`: A boolean indicating if the codelab is a draft or ready for publication.

## Step 3: Define the Structure of Your Codelab

Organize your codelab content using H1 tags to define major sections. **Each H1 tag will automatically start a new step** in the codelab, making it easy to follow.

```md
# Introduction

Introduce the goals and background of your codelab here.

# Resources

List resources or additional reading materials here.
```

## Important Note on Tags

<br>

:::md-alert{type="error"}
#content
Make sure to add tags in `/assets/config.js` file (case sensitive) for the filtering to work correctly in your codelab.
:::

# Markdown Components

We currently support specific custom components in markdown such as `md-alert` and `md-button`.

## Using Markdown Components

To incorporate markdown components into your document, use the custom component syntax `:::<md-component>:::`.

### Alert

For adding an alert message:

```md
:::md-alert
#content
This is an alert
:::
```
:::md-alert
#content
This is an alert
:::

#### Customization

Customizing these components allows you to tailor their appearance and behavior to better fit your content's needs.

- **Customize `md-alert`**
  - **Purpose:** Modify the appearance and information of alert boxes.
  - **Properties:**
    - `type`: Specifies the style of the alert (e.g., success, error).

 <br>

- **Example:**



```md
:::md-alert{type="success" }
#title
This is the title
#content
This is the content
:::
```

:::md-alert{type="success"}

#title
This is titile

#content
This is content

:::

<br>



<br>

### Button

For adding a button.
- **Customize `md-button`**
- **Purpose:** Adjust the look and functionality of buttons.
- **Properties:**
  - **type:** Defines the button style (e.g. `elevated`, `flat`, `tonal`, `outlined`, `text`, `plain`).
  - **color:** Sets the button color (e.g., primary, secondary).
  - **text:** Specifies the text displayed on the button.
  - **link:** Specifies the link for the action on the button.

```md
:::md-button{type="tonal" color="primary" link="https://trygradus.web.app/"}
Click me!
:::
```


:::md-button{type="tonal" color="primary" link="https://trygradus.web.app/"}
Click me!
:::


# Deployment

This codelab can be deployed using one of two methods, each suited to different hosting environments and use cases.

## Server Side Rendering (SSR)

Server Side Rendering (SSR) enhances SEO and improves performance for users by serving pre-rendered pages from the server.

- **How to Generate Server-Side Code:**
  - Run the command `npm run build` in your project directory. This builds the application and prepares it for deployment.
- **Hosting Options:**

  - **Netlify:** Follow Netlify’s documentation to deploy your SSR application.
  - **Vercel:** Use Vercel for advanced server-side rendering capabilities. Both platforms support automatic deployment from your git repository.

  <br>

:::md-alert{type="error"}
#content
**Note on AI Features:** Currently, AI features are only supported in SSR deployments.
:::

## Static Site Generation (SSG)

Static Site Generation (SSG) offers fast loading times and reliable performance by generating HTML files at build time, which can be hosted on any static hosting service.

- **How to Generate Static Code:**
  - Execute the command `npx nuxi generate`. This command will produce a fully static version of your site, which can be deployed without needing a server.
- **Hosting Options:**
  - **Firebase:** Ideal for hosting static files with benefits like integrated security features and easy scaling.
  - **GitHub Pages:** A straightforward option for hosting static websites, especially if your project is already managed in a GitHub repository.

<br>

Choose the deployment method that best fits your project needs and the expected traffic. SSR is generally better for dynamic sites with heavy user interaction, while SSG is excellent for sites with fewer updates and high performance requirements.

# Contribution

Awesome! We greatly appreciate contributions of all kinds. To make the process smoother, here are some guidelines that should help you get started quickly.

### Using GitHub Issues

- **What to Use Issues For:** Feel free to use GitHub issues for questions, bug reports, and feature requests.
- **Searching:** Before creating a new issue, use the search feature to check if there is already an existing discussion about it.
- **Information and Resources:** Include as much information as possible when creating an issue. Relevant resources like screenshots are very helpful.
- **Bug Reports:** For bug reports, ensure you provide a reproducible test case. A pull request with a failing test is ideal, though not required.

### Submitting a Pull Request

- **Commit Management:** Squash your commits to keep the history clean.
- **Code Quality:** Lint your code with eslint, using the provided configuration, to maintain code quality.
- **Tests:** Include updates or additions to tests relevant to your changes.
- **Branch Policy:** Make pull requests against the `dev-contribution` branch. Pull requests to other branches will be rejected unless specified by the maintainers.

# List Your Project

You can highlight your project in the `readme.md` file and also fill out the provided [Google form](https://bit.ly/gradus-directory) to share more about what you’ve built.

# Future Roadmap

Our future enhancements include exciting features such as:

- **Dark Theme Mode:** A user-friendly option for better night-time viewing.
- **Internationalization:** To make our project accessible in multiple languages.
- **Progressive Web App (PWA):** For a near-native app experience on mobile and desktop devices.
- **AI Integration:** Implementing AI to enhance functionality and user experience.

# Team and Support

:::g-team
:::

If you encounter any issues or have queries, post them in the issues section. Our dedicated team will strive to address your concerns within 10-12 hours.
