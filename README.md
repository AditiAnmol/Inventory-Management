#CS649  
#Assignment 7    
In this assignment, Implementing  aggregation in React/MongoDB to add a row/record total to the existing application.  

Steps to setup and start the project  
1. For API server, open the terminal then run the command below command in orderly fashion:  
   a. cd api  
   b. npm i  
   c. npm start ->> Leave it started.  
2. For UI server, open another terminal then run the command below command in orderly fashion:  
   a. cd ui  
   b. npm i  
   c. npm start ->> Leave it started.  
3. Now hit this URL: http://localhost:8000 to test the project.  
4. If there is a need to reinitialize the product list again, make sure the mongoDb shell is preinstalled in the system. Then follow:  
    a. If not already in the api folder -> cd api  
    b. Copy and run -> mongo mongodb+srv://cs649mongouser:mongopwd@self-learn-cluster.df4am.mongodb.net/cs649-inventory-management scripts/init.mongo.js
