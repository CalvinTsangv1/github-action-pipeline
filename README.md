# github-action-pipeline
build up demo github action, which is for understanding CI/CD in github

Building blocks of Nest application, we'll build a basic CRUD (Create, Retrieve, Update and Delete) application with features that cover a lot of ground at an introductory level.

Controller:
    are responsible for handling incoming requests and returning responses to the client

Provider:
    are a fundamental concept in Nest. Nest classes are treated as services. Service is that it can be injected as a dependency; this means objects can create various relationship with each other

Middleware:
    is a function which is called before the route handler. Middleware functions have access to the request and response objects.


project directory structure
    src
     |
     |---- app.controller.spec.ts
     |
     |---- app.controller.ts
     |
     |---- app.module.ts
     |
     |---- app.service.ts
     |
     |---- main.ts