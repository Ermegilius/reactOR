import './EmployeeCard.css'
import {useState} from 'react'

import monthsWorked from './functionsLibrary';
import Button from './Button';

const currentDate = new Date();

const EmployeeCard = ({id, name,initRole,department,startDate, location, salary, birth, teamLead}) => {
  const [isTeamLead, setTeamLead] = useState(teamLead);
  const [isEditing, setIsEditing] = useState(false);
  const [toggleFormEdit, setToggleFormEdit] = useState(false);

  // const clickHandler = (e) => 
  //   if (e.target.type === 'promoteButton') {
  //     setTeamLead((isTeamLead)=>!isTeamLead);
  //   } else if (e.target.type === editButton) {
  //    setIsEditing((prevState)=>!prevState)
  //   }


  const yearsWorked = currentDate.getFullYear() - new Date(startDate).getFullYear();

  const congrats = "Schedule recognition meeting."

  const departmentClassName =
    department === "Marketing" ? 'card departmentMarketing':
    department === "HR" ? 'card departmentHR':
    department === "IT" ? 'card departmentIT':
    'card'; 
  
  return (
      <div className = {departmentClassName}>
      <p>Name: {name}</p>
      <p>Role:{(isTeamLead === true)?
        (<span>⭐</span>):('')
        }{initRole}</p>
      <p>Department: {department}</p>
      <p>Salary: {salary}</p>
      <p>Birth: {birth}</p>
      <p>Location: {location}</p>
      <p>Years in the company: {yearsWorked}</p>
      {(yearsWorked%5===0&&yearsWorked!==0)?
        (<p>&#127183;{congrats}</p>):('')
      }
      {(monthsWorked(startDate, currentDate)<6)?
        (<p>&#9997;Schedule probation review.</p>):('')
      }

      <Button
        text={isTeamLead ? ('Demote from Team Lead'):('Promote to Team Lead')}
        click={clickHandler}
        role='secondary'
        type = 'promoteButton'
      />

      <Button
        text={isTeamLead ? ('Demote from Team Lead'):('Promote to Team Lead')}
        click={clickHandler}
        role='primary'
        type = 'editButton'
      />

    <Button 
      click = {()=> setToggleFormEdit(!toggleFormEdit)}
      text={toggleFormEdit ? "Save" : "Edit"}
    />
    {toggleFormEdit && (
      <Form role={role} department={department} location={location}/>
    )}
    </div> 
  );
}

export default EmployeeCard;