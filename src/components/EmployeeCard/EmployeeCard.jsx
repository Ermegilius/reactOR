import './EmployeeCard.css'
import {useState} from 'react'

import monthsWorked from '../../utilis/monthsWorked';

import Button from '../Button/Button';
import Form from "../Forms/Form";

const currentDate = new Date();

const EmployeeCard = ({
  id, name,initRole,department,startDate, location, salary, birth, teamLead
}) => {
  const [isTeamLead, setIsTeamLead] = useState(false);
  const [isFormEditing, setIsFormEditing] = useState(false);

  const yearsWorked = currentDate.getFullYear() - new Date(startDate).getFullYear();

  const congrats = "Schedule recognition meeting."

  const departmentClassName =
    department === "Marketing" ? 'card departmentMarketing':
    department === "HR" ? 'card departmentHR':
    department === "IT" ? 'card departmentIT':
    'card'; 
  
  const toggleTeamLead = () => setIsTeamLead((prev) => !prev);
  const toggleFormEditing = () => setIsFormEditing((prev) => !prev);

  return (
      <div className = {departmentClassName}>
      <p>Name: {name}</p>
      <p>Role:{isTeamLead ? <span>⭐</span> : ''} {initRole}</p>
      <p>Department: {department}</p>
      <p>Salary: {salary}</p>
      <p>Birth: {birth}</p>
      <p>Location: {location}</p>
      <p>Years in the company: {yearsWorked}</p>
      {(yearsWorked % 5 === 0 && yearsWorked !== 0) ?
        (<p>&#127183;{congrats}</p>):('')
      }
      {(monthsWorked(startDate, currentDate) < 6) ?
        (<p>&#9997;Schedule probation review.</p>):('')
      }

      <Button
        text={isTeamLead ? 'Demote from Team Lead' : 'Promote to Team Lead'}
        onClick={toggleTeamLead}
        role= {isTeamLead ? 'primary' : 'secondary'}
        type = 'button'
      />

      <Button
        text={isFormEditing ? 'Save' : 'Edit'}
        onClick={toggleFormEditing}
        role= {isFormEditing ? 'primary' : 'secondary'}
        type = 'button'
      />

      {isFormEditing && (
        <Form role={initRole} department={department} location={location}/>
      )}
    </div> 
  );
}

export default EmployeeCard;