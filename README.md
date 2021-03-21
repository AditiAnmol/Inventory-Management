#CS649

#Assignment 4

Building on the previous assignment by taking advantage of MongoDB and other tools. Eliminating the array-based storage of the application and instead, creating a new MongoDB database and collection. Reconfiguring the inventory management application to begin creating data within and retrieving data from the MongoDB database.

Steps to setup and start the project

1. For API server, open the terminal then run the command below command in orderly fashion:
   i. cd api
   ii. npm i
   iii. npm start ->> Leave it started.

2. For UI server, open another terminal then run the command below command in orderly fashion:

   i. cd ui
   ii. npm i
   iii. npm run compile
   iv. npm start ->> Leave it started.
3. Now hit this URL: http://localhost:8000 to test the project.

4. If there is a need to reinitialize the product list again, make sure the mongoDb shell is preinstalled in the system. Then follow:
    i. If not already in the api folder -> cd api
    ii. Copy and run -> mongo mongodb+srv://cs649mongouser:mongopwd@self-learn-cluster.df4am.mongodb.net/cs649-inventory-management scripts/init.mongo.js
