# Project Title

Multi Assignment App

# Project Description

This is a MERN (Mongo, Express, React, Node) application purposelly build for the Fabric Developer application to server the 4 Unique microservices 

# Getting Started with the Project Assignment Structure

|--- frontend
|--- useredu-api
|--- userjob-api
|--- userdetails-api
|--- useraddress-api
|- .dockerignore


## Frontend App created with Create React App

This application was bootstrapped using Create-React-App

- Typescript
- Create-React-App
- Axios
- react-router-dom
- Bulma 
- Cors

## User Address API service | User Details API service | User Education API service | User Jobs/Occupation API service

This simple server express-based projects were created using the simple_server image from our previous session. 

- Express
- Mongoose
- Dotenv
- Nodemon


## setup

Please note: this project use the npm package manager to install all our dependencies. 

1. Click on the link to open the github repository
2. On the far top right hand side of the screen: you'll see a green button labelled CODE, click on it once
3. A small modal window will open, by default HTTPS will be selected, if not select HTTPS
4. Copy the URL to clone it in your computer
5. After succefully cloning it, wait for further instructions 

## checkout "development" branch

- $`git checkout -b development`
- $`git pull origin development`



### Assessment Exercise


We are going to apply the knowledge we have gained from Week 1 modules to write a docker-compose yaml file to spin up all these applications services and boot them. Furthermore, we are going to submit formdata into the 4 backend applications provided. Dockerfiles to create each custom image has been provided in the application itself. Further alteration of the Dockerfile is not required unless the individual deems it necessary. The goal of this assessment is outlined below. 



1. In the root directory of the application, create a docker-compose.yml 
2. There are 5 applications 1 frontend web application and 4 backend server api
3. Write detailed development enviroment docker-compose commands following the specifications of docker compose version "3.8" 
4. Run `docker-compose build` then 'docker-compose up` to test and run a multi-container services
5. Test if you're able to submit formdata
6. Assessment completion 
