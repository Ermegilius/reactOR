# HR application (React + Vite)

This is my study project for several weeks during November-December 2024. The application is designed to manage employee information, including adding new employees, editing existing employee details, and promoting or demoting personnel.

## Core features

- **Employee List**: Displays a list of all employees.
- **Employee Card**: Shows detailed information about an employee, including the ability to edit details and promote/demote the employee.
- **Add New Employee**: A form to add new employees to the system.
- **Error Handling**: Displays an error page when a route is not found.
- **Custom Hooks**: Utilizes a custom hook (`useAxios`) for making API requests.

## Components

### EmployeeList

Displays a list of employees fetched from the server.

### EmployeeCard

Shows detailed information about an employee and allows editing and promotion/demotion.

### Form

A form to add new employees to the system.

### ErrorPage

Displays an error message when a route is not found.

### Button

A reusable button component with primary and secondary styles.

### Header

The header of the application, containing navigation links.

## Custom Hooks

### useAxios

A custom hook to make requests to the server via axios. It takes the URL as an argument and returns an object with data, alert, loading, get, post, update, and remove properties.

## User Guide

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

## Reflection

This project helped me understand React components, props, useState and useEffect better. I also gained experience with custom hooks and API requests using axios.

## Future Improvements

Add detailed validation to the forms.
Add "delete" button to remove employees.
Implement user authentication.
Improve the UI/UX with more styling and responsive design.
Somehow find out how to deploy.
