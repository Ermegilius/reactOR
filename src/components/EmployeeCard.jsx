import './EmployeeCard.css'
import {useState} from 'react'

function EmployeeCard(props) {
  const [role, setRole] = useState(props.initRole);

  const clickHandler = () => {
      if (role === props.initRole) {
        setRole("team lead");
      } else if (role === "team lead") {
        setRole(props.initRole);
      }
  }
  
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <p>Role:<span className='hidden'>⭐</span>{role}</p>
      <p>Department: {props.department}</p>
      <p>Salary: {props.salary}</p>
      <p>Birth: {props.birth}</p>
      <p>Location: {props.location}</p>
      {(role === props.initRole) ?
      (<button onClick={clickHandler}>Promote to Team Lead</button>)
      :
      (<button onClick={clickHandler}>Demote from Team Lead</button>)
      }
    </div>
  );
}

export default EmployeeCard;