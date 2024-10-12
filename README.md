# NestJs Messages App

Hello! This is a simple messages app created in **NestJS**. This app uses a local JSON file which stores the messages the user has. User can now using this app, either get the message or save a new message. 

> **Note:** This is a project created while learning NestJs to gain hands-on experience.

# API Routes


| Name                            | Type | Url           | Body                |
|---------------------------------|------|---------------|---------------------|
| Get all messages                | GET  | /messages     |        -             |
| Post a new message              | POST | /messages     | {content: "string"} |
| Get message for a particular id | GET  | /messages/:id |        -            |


# Project setup

```bash
$ npm install
```

# Compile and run the project

```bash
$ npm run start
```







