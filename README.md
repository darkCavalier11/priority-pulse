# Priority Pulse
## A node.js server with MongoDB

## Packages used
    - Mongoose, Express, nodemon

## Starting of server and DB
    - install packages
    ```bash
        npm i
    ``` 
    - run local mongodb server(port 27017)
    - start the server
    ```bash
        npm run start
    ```
# Performing operations
## Data should be supplied in body in JSON format for add and update
## Adding user(POST)
    localhost:3000/add
### template
    ```json
    {
        "name":"Sumit",
        "age": 20,
        "gender": "Male",
        "contact": 7750860059,
        "location": "cuttack, odisha"
    }
    ```
### criteria: 
    -duplicate phone number and names are rejected(case sensitive).
    -phone number of size less than 10 and name of size less than 10 rejected.

## Updating user(POST)
    localhost:3000/update
### template
    ```json{
        "cred":{
            "name":"Sumit",
            "contact": 7750860059
        },
        "updateQuery":{
            "age": 21,
            "contact": 7750860058,
            "location": "Varnasi, UP"
        }
    }
    ```

### criteria:
    -name and gender updates are prohibited

## Querying user(GET)
    localhost:3000/getUserCred
### template
    ```json{
        "age": 18
    }
    ```
    ```json{
        "age": 18,
        "gender": "Male"
    }
    ```
### {} query is the wild card i.e. return all