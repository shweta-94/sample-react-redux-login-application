# react-redux-login-app
Simple User Management App using react-redux, bootstrap and testing using Jest.


This is an example User Management Application using React-Redux.

The data is stored in localStorage which is a persistent storage. 

At the backend, fake Apis are used to perform operations like store, delete, retrieve the JSON of the User data from and into localStorage. Also UserService is created to call the corresponding APIs with the correct parameters and handles the responses. Also, there are Reducers used to keep a track of the state change. Used Node.js for the Backend with REST api calls from the frontend.

There are 5 features in the applications as follows:
1. Sign Up -  Register using username, password, first name and last name. 

2. Login - Enter username and password to login in. If the login is successful you will be redirected to the /user page where you will have the permission to "See All User" and "Search for all users". Otherwise you will get a "Login Error" alert and you can try again

3. See all Users - This will return a List of all the registered users and a "Delete button" next to it. 

4. Delete - You can delete the users form the localStorage by clicking this button and the user will be removed from the storage.

5. Search - On the search Page you can enter the username of the User you want to look for and hit "enter". It will return an Alert message if "user found" else "user not found"

  To run,

  1. git clone "https://github.com/shweta-94/sample-react-redux-login-application.git"
  2. cd sample-react-redux-login-application
  3. Run npm install
  4. Run npm start to start the app server.
  5. Navigate to localhost:8080
  
  To run the tests
  1. cd Test
  2. npm test

Stepwise running and explanation of how frontend and backend are integrated:

1. The First Page you will see is the LoginPage and also a link to sign up. If you are visiting this application for the first time, you need to Sign Up first.
2. Click on Sign up and enter the user details. These details are collected from the form and sent to the user.service which makes the POST request to the register API with the authenticationHeader and user details. The post url will be to a fake api which is http://localhost:2323/users/register. Once the Post request is made, API checks if the user with same details is already available, if Yes then throws an exception else stores the details of the user in the JSON format in localStorage and returns with response “OK”. This response is handled with handleResponse() and the alert message is sent saying “Sign Up Successful”.
3. You can now login with username and password. Once you enter the values, userService makes an API call http://localhost:2323/user/authentication, where the credentials are verified from the localStorage. If found, you can successfully login else try again.
4. Only if you logged in, you will be able to see all the users, delete them and also search for each users in the similar flow.
