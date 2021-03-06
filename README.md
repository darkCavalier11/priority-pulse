# Priority Pulse
## A node.js server with MongoDB

## package used
- nodemon, mongoose, express

## Starting of server and DB
   - run mongodb locally(port 27017)
```bash
    npm i
    npm run start
``` 
 
# Performing operations
### video at into.mkv above
![alt text](https://github.com/darkCavalier11/priority-pulse/blob/master/demo.gif?raw=true)
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
- duplicate phone number and names are rejected(case sensitive).
- phone number of size less than 10 and name of size less than 3 rejected.

## Updating user(POST)
    localhost:3000/update
### template
```json
    {
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
- cred field is required for validate the user and then update the fields.
- name and gender updates are prohibited

## Querying user(GET)
    localhost:3000/getUserCred
### template
```json
    {
        "age": 18
    }
```
```json
    {
        "age": 18,
        "gender": "Male"
    }
```
##### null query or '{}' query is the wild card i.e. return all