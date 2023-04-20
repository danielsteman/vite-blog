# Integrating a ML model in an API 🔀

&nbsp;

Tue 25 Apr, 2023

&nbsp;


It's time to talk about the tech stack used for this website. Since some time I started with Rust because I was longing for a statically-typed language after doing a series of projects in Python and because I heared [so many good things](https://survey.stackoverflow.co/2022/#overview) about the language. However, it's tough a find use cases for Rust (unless you're building graphics engines or contributing to the Linux kernel), as most companies haven't adopted it in their stack. Because of that, I decided to clone this tech blog using only Rust. My weapons of choice for this assigned are [Yew](https://yew.rs/) and [Rocket](https://rocket.rs/), which make up the foundation for the frontend and backend, respectively. 

&nbsp;

The original website is a backendless React project with an Nginx web server that renders markdown files. This is fairly simple to maintain and use: everytime I want to add an article, I can add a markdown file and merge the changes, which will trigger a new build and deployment. 

You could save the markdown files in your backend and serve them as HTML to the frontend upon request. The advantage is that the HTML will be server-side rendered and won't depend on computations of the client, which might provide a performance advantage. Also, it won't be necessary to write a bunch of methods and accompanying tests to interact with a database, because you're just serving files that are already present.
