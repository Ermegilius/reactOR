import './EmployeeCard.css'
import {useState} from 'react'

function EmployeeCard(props) {
  const [teamLead, setTeamLead] = useState(props.teamLead);

  const clickHandler = () => {
    setTeamLead(!teamLead);
  }
  
  return (
    <div className="card">

      <p>Name: {props.name}</p>
      <p>Role:{(teamLead === true)?
        (<span>⭐</span>):('')
        }{props.initRole}</p>
      <p>Department: {props.department}</p>
      <p>Salary: {props.salary}</p>
      <p>Birth: {props.birth}</p>
      <p>Location: {props.location}</p>
      <p></p>
      <button onClick={clickHandler}>
        {(teamLead === false) ?
        ('Promote to Team Lead'):('Demote from Team Lead')}
      </button>
    </div>
  );
}

export default EmployeeCard;