A Vite + React TS blog project scaffolded with `npm create vite`. The project makes use of the [Chakra UI](https://chakra-ui.com/) UI library to get darkmode 🌙 out of the box.  

Build Docker image:  
`docker build -t techblog -f deploy/Dockerfile .`

To deploy on Heroku, set the following repository secrets which are used by the Github action:  

- HEROKU_EMAIL  
- HEROKU_API_KEY  
- HEROKU_APP_NAME  