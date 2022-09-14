A Vite + React TS blog project scaffolded with `npm create vite`. The project makes use of the [Chakra UI](https://chakra-ui.com/) UI library to get darkmode 🌙 out of the box. This project turned from a small experiment to a blog, to keep track of projects I'm working on. Feel free to fork it and make it your own.  

Build Docker image:  
`docker build -t techblog -f deploy/Dockerfile .`

To deploy on Heroku, set the following repository secrets which are used by the Github action:  

- HEROKU_EMAIL  
- HEROKU_API_KEY  
- HEROKU_APP_NAME  
- PAT  

The `PAT` refers to your Github token, to allow for repository scraping on the `Work` route.  

code asfasf