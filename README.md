# HR application (React + Vite)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Ermegilius_reactor&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Ermegilius_reactor)

This is my study project for several weeks during November-December 2024. The application is designed to manage employee information, including adding new employees, editing existing employee details, deleting employee cards, and promoting or demoting personnel.

## Core features

-   **Employee List**: Displays a list of all employees.
-   **Employee Card**: Shows detailed information about an employee, including the ability to edit details, delete the card and promote/demote the employee.
-   **Add New Employee**: A form to add new employees to the system.
-   **Delete Employee's card**: Allows users to delete an employee card.
-   **Error Handling**: Displays an error page when a route is not found or something unexpected happened.
-   **Custom Hooks**: Utilizes a custom hook (`useAxios`) for making API requests.

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

My artistic choice of deployment is to use two different services for front-end and back-end. I wanted to learn using both of them. It also feels cleaner, when backend json-server "server" is hidden away from people's eyes.

The front-end is deployed on Netlify and can be accessed at [https://hr-app-ermegilius.netlify.app/](https://hr-app-ermegilius.netlify.app/)

The back-end is deployed on Render and can be accessed at [https://reactor-uinv.onrender.com/](https://reactor-uinv.onrender.com/)

The front-end is deployed automatically when changes are pushed to the `main` branch of the Github repository [https://github.com/Ermegilius/reactor/] ( https://github.com/Ermegilius/reactor/).

The back-end is deployed automatically when changes are pushed to the `main` branch of the Github repository [https://github.com/Ermegilius/reactor-backend/] ( https://github.com/Ermegilius/reactor-backend/).

## Authentication

The application includes basic authentication to ensure that only authorized users can access and modify employee information. Users must log in with their credentials to access the main features of the application.
Right now Authentication is using publickly acceced JSON.

User can use, for example, the following credentials:
Username: Margit
Password: isthebest

## Reflection

This project helped me understand React components, props, useState and useEffect better. I gained experience with custom hooks and API requests using axios. And also I learned how to deploy a React application on Netlify and Render.

## Future Improvements

Add detailed validation to the forms.
Add real authentification.
Make normal Error page instead of current plug.
Improve the UI/UX with more styling and responsive design.
Add more features like sorting and filtering employees.
Add more tests to ensure the application is robust and reliable.

### TESTING
