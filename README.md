# assignment-3

CS649
Assignment 3
In this assignment, you will build on your previous assignment by taking advantage of GraphQL. Your job will be to establish a GraphQL schema and then build out both create and retrieve APIs for your inventory management application.

General Points to Consider:

When building out the API using GraphQL, keep these general points in mind:

  •	Your project should include a schema.graphql file. 
    o	Your schema.graphql file should include an enum for inventory categories (Shirts, Jeans, Jackets, Sweaters, and Accessories).
    o	Create a type for Product that outlines the following data / scalar types:
      	id: Int!
      	Category: [your_enum_here]!
      	Name: String!
      	Price: Float
      	Image: String
    o	Create an input for Product
    o	Create a query and a mutation
    
  •	Modify your server.js file to include:
    o	A reference to Apollo Server. Don’t forget to pass in type definitions (schema.graphql) and resolvers.
    o	An API to retrieve products.
    o	An API to add a product.
    o	A resolvers object that sets Query and Mutation properties.
    
  •	Modify your app.jsx file to use your new GraphQL API. This should include, amongst other things:
    o	A list function with a GraphQL query to retrieve data.
    o	A create (add) function with a GraphQL query to create (add) data.

Note: Although you learned about dates, validation, handling errors, and displaying errors, you won’t need to use any of that in this assignment.


