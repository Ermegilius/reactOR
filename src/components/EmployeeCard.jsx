import './EmployeeCard.css';
import {useState} from 'react';

function EmployeeCard(props) {
    const [role, setRole] = useState(props.initRole);

    const clickHandler = () => {
        if (role === props.initRole) {
            setRole("team lead");
            document.querySelector("button").innerText="Demote";
        } else if (role ==="team lead") {
            document.querySelector("button").innerText="Promote";
            setRole(props.initRole);
        }
    }
   
    return (
      <div className="card">
        <p>Name: {props.name}</p>
        <p>Role: {role}</p>
        <p>Department: {props.department}</p>
        <p>Salary: {props.salary}</p>
        <p>Birth: {props.birth}</p>
        <button onClick={clickHandler}>Promote</button>
      </div>
    )
}

export default EmployeeCard;