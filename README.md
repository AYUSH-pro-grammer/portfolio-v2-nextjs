# project-v2-nextjs 

Hello! This is my personal portfolio website that I made using Next.js. The main aim for making this portfolio was to highlight my skills, projects, learnings, and technology stack that I like working on.

As you know, there are a lot of portfolios out there but I decided to create one which will have fluid transitions, responsiveness, and an overall pleasant UX.

Image of home page:

<img width="1511" height="864" alt="Screenshot 2026-05-23 at 2 37 30 AM" src="https://github.com/user-attachments/assets/3956700d-7b5b-4667-bed7-452b6ec65fc6" />




## About the Project

Below are some of the features of this portfolio:

- Responsive UI
- Animated sections powered by Lottie Animations
- Information about me and my projects
- Seamless navigation between pages
- Contact details and social profiles

The main purpose of building this project is that recruiters, clients, and other developers can get all the information about me in just one go.

## Custom Blog System

One thing I wanted in my portfolio was a way to write project logs and development blogs without depending on a third-party CMS.

So I built my own blog system.

Instead of writing posts in Markdown, every blog is made up of blocks. A block can be a heading, paragraph, image, gallery, code snippet, quote, table, FAQ section, timeline, and more.

I also built a visual editor for it. The editor lets me:

* Add new blocks
* Move blocks up and down
* Edit content directly on the page
* Delete blocks
* Save the entire blog in one click

The content is stored as JSON and rendered dynamically by the frontend.

This project taught me a lot about designing data structures, building custom editors, handling dynamic rendering, and connecting a Next.js frontend with a FastAPI backend.

It is probably one of the most fun parts of the entire portfolio because I got to build my own mini CMS from scratch.

## Backend API

This portfolio has a distinct backend that I have implemented using FastAPI along with the frontend application.

Repository:
https://github.com/AYUSH-pro-grammer/portfolio-backend

The backend takes care of:

* Creation and management of blogs
* Storage of dynamic blog blocks
* Rendering the content based on JSON data
* Database queries on PostgreSQL
* Editing APIs for blog content
* Media reference URLs
* Publishing process of the blog

One of the unique things in the backend part of this project is the storage of blog content. Rather than keeping all content as a single document, each blog entry has different blocks. It allows one to customize their own editor and create dynamic movement, deletion, and edition of contents.

By working on this backend, I gained valuable experience in FastAPI, SQLAlchemy, database management, API designing, and communication between frontend editors and backends.


## Tech Stack

- Next.js
- TypeScript
- JavaScript
- CSS
- Lottie Animations
- Deployed using Vercel
