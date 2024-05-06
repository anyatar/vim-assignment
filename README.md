# Vim task
The ``` Vim task ``` is a API Server! 

The application is built according to compliance with the [system requirements]().

# Rest API with MySQL 

| Methods	| Urls	          | Actions
| --------- | ----------------| ----------------------------------------- |
| POST      | /signup         | Signs the user up to the application
| PUT       | /update         | Updates the users total running distance
| GET       | /mystats        | Returns the users' ranking


## Project Structure
```bash

```

## Database
The system uses a mysql database which stores the signed up runners with table structure in : ```init-scripts/init.sql```

## Local Installation
#### Runnning locally as standalone app. 

\* *Environment variables are not required*, application can run with predefined defaults
```sh
$ cd vim-assignment
$ npm install
$ npm run start
```

 #### Runnning locally as production simulation 

- Using docker from the application folder, run ```docker-compose build``` and ```docker-compose up```

![Docker snapshot](image.png)


## Testing application 

Please use attached [Postman](https://www.getpostman.com/) JSON [collection](./test/xxx.postman_collection.json) in order to test API requests
You can import this collaction with prepared requests for tests

![Postman tests](postman.png)

## Useful docs

[title](url)



