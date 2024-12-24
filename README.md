# HR application (React + Vite)

This is my study project for several weeks during November-December 2024. The application is designed to manage employee information, including adding new employees, editing existing employee details, deleting employee cards, and promoting or demoting personnel.

## Core features

- **Employee List**: Displays a list of all employees.
- **Employee Card**: Shows detailed information about an employee, including the ability to edit details, delete the card and promote/demote the employee.
- **Add New Employee**: A form to add new employees to the system.
- **Error Handling**: Displays an error page when a route is not found or something unexpected happened.
- **Custom Hooks**: Utilizes a custom hook (`useAxios`) for making API requests.

## Components and pages

### EmployeeList

Displays a list of employees fetched from the server.

### EmployeeCard

Shows detailed information about an employee and allows editing, deleting and promotion/demotion.

### Form

A form to add new employees to the data.

### ErrorPage

Displays an error message when a route is not found.

### Button

A reusable button component with primary and secondary styles.

### Header

The header of the application, containing navigation links.

### Footer

The footer of the application with authors copyright.

### SinglePage

A component to display a single page with delailed information about the person.

## Custom Hooks

### useAxios

A custom hook to make requests to the server via axios. It takes the URL as an argument and returns an object with data, alert, loading, get, post, update, and remove properties.

## Deployment

The front-end is deployed on Netlify and can be accessed at [https://hr-app-ermegilius.netlify.app/](https://hr-app-ermegilius.netlify.app/)

The back-end is deployed on Render and can be accessed at [https://hr-app-ermegilius.onrender.com/](https://hr-app-ermegilius.onrender.com/)

Both the front-end and back-end are deployed automatically when changes are pushed to the `main` branch of the Github repository [https://github.com/Ermegilius/reactor/] ( https://github.com/Ermegilius/reactor/).

## Authentication

The application includes basic authentication to ensure that only authorized users can access and modify employee information. Users must log in with their credentials to access the main features of the application.
Right now Authentication is using publickly acceced JSON.

User can use, for example, the following credentials:
_Username: Margit_
_Password: isthebest_

## User Guide for a local setup

1. Clone the repository:

```shell
   git clone https://github.com/Ermegilius/reactor.git
```

2. Navigate to the project folder:

```shell
cd reactor
```

3. Install dependencies:

```shell
npm install
```

4. Run the application:

```shell
npm run fyl
```

5. Run server in another terminal.

- by default the app uses my server deployed on Render, but you can use your local server.
- If you use local beck-end server change the URL in the data/globalVariables.
- To run the local server use the following command:

```shell
npm run server
```

6. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

## Reflection

This project helped me understand React components, props, useState and useEffect better. I gained experience with custom hooks and API requests using axios. And also I learned how to deploy a React application on Netlify and Render.

## Future Improvements

Add detailed validation to the forms.
Add real authentification.
Make normal Error page instead of current plug.
Improve the UI/UX with more styling and responsive design.
Add more features like sorting and filtering employees.
Add more tests to ensure the application is robust and reliable.
