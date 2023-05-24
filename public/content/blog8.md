# Building a SaaS template 🚀

&nbsp;

TBD

&nbsp;

Those who are in the business of software development might be familiar with the phenomenon of people coming up to you with a business pitch, asking you for a technical implementation. I always admire entrepreneurship and when I can, I try to help out. After a litte bit of [idea evaluation](https://www.ycombinator.com/library/6e-how-to-evaluate-startup-ideas) of course. After speaking to several people with several ([SaaS](https://en.wikipedia.org/wiki/Software_as_a_service)) ideas, I realised that implementing these ideas would involve common components, such as user authentication, a billing system and a [CRM](https://en.wikipedia.org/wiki/Customer_relationship_management), to name a view.

To make things easy I went for a Typescript stack: backend services with [Express](https://expressjs.com/) and a frontend with [React](https://react.dev/). There are several arguments for and against these frameworks, I chose them because they're familiar and I wanted to build something with relative speed. One advantage of using Typescript in either frontend and backend is that I'm able to share types across them, which is pretty neet in a client-server architecture. Pro tip: check out [path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping).

With the anticipation that a SaaS project can become complex quickly, I opted for a micro services architecture, where the backend in split in several services where each service is separated from the other based on their responsibilities. I also decided to place them in a single repository. This approach also goes by the alias of [monorepo](https://en.wikipedia.org/wiki/Monorepo). Despite the fact that services are not isolated in separate repositories, it should still be convenient to collaborate, since each service has its own depedencies and build scripts (e.g. `package.json` and `Dockerfile`s). The advantage of a monorepo, especially at the start of a project, is that it's easy to navigate through and allows for [atomic commits](https://en.wikipedia.org/wiki/Atomic_commit). At work, we keep services in dedicated repositories, each which its own CI/CD pipeline Terraform components. This has advantages when you're scaling, but also increases overhead since there are more than twenty pipelines that need to be green and because each repository requires boilerplate code that gets outdated quickly. Hence, I wanted to experience the alternative: monorepo.
