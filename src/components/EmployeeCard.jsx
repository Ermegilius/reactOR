import './EmployeeCard.css'
import {useState} from 'react'

const currentDate = new Date();

function EmployeeCard(props) {
  const [teamLead, setTeamLead] = useState(props.teamLead);
  const currentDate = new Date();
  const startDate = new Date(props.startDate);

  const clickHandler = () => {
    setTeamLead(!teamLead);
  }
  const yearsWorked = currentDate.getFullYear() - startDate.getFullYear();

  const monthsWorked = () => {
    let yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
    let monthsDifference = currentDate.getMonth() - startDate.getMonth();
    if (monthsDifference < 0) {
        yearsDifference -= 1;
        monthsDifference += 12;
    }
    const monthsWorked = yearsDifference * 12 + monthsDifference;
    return monthsWorked;
  };

  const congrats = "Schedule recognition meeting."
  
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
      <p>Years in the company: {yearsWorked}</p>
      {(yearsWorked%5===0&&yearsWorked!==0)?
      (<p>&#127183;{congrats}</p>):('')
      }
      {(monthsWorked()<6)?
      (<p>&#9997;Schedule probation review.</p>):('')
      }
      <button onClick={clickHandler}>
        {(teamLead === false) ?
        ('Promote to Team Lead'):('Demote from Team Lead')}
      </button>
    </div>
  );
}

export default EmployeeCard;