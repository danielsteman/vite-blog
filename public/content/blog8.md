# Building a full stack web app completely in Rust :crab:

&nbsp;

TBD

&nbsp;


Since some time I started with Rust because I was longing for a statically-typed language after doing a series of projects in Python and because it's [a developer favorite](https://survey.stackoverflow.co/2022/#overview) for several years. And as I discussed in [my previous post]() about WASM, it also has great potential for web development. As most companies haven't adopted it in their stack I find it hard to gain more experience with the Rust ecosystem, hence I decided to clone my tech blog using only Rust. My weapons of choice for this assignment are [Yew](https://yew.rs/) and [Rocket](https://rocket.rs/). To me it's quite refreshing to see these frameworks enter the javascript-dominated world of web development. 

&nbsp;

The original website is a backendless React project with an Nginx web server that renders markdown files. This is fairly simple to maintain and use: everytime I want to add an article, I can add a markdown file and merge the changes, which will trigger a new build and deployment. I guess this has some similarities with [Hugo]().

You could save the markdown files in your backend and serve them as HTML to the frontend upon request. The advantage is that the HTML will be server-side rendered and won't depend on computations of the client, which might provide a performance advantage. Also, it won't be necessary to write a bunch of methods and accompanying tests to interact with a database, because you're just serving files that are already present on the server.
