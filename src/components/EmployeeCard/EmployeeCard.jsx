import './EmployeeCard.css'
import {useState} from 'react'
import monthsWorked from '../../utilis/monthsWorked';
import getDepartmentClass from "../../utilis/styleUtils";
import Button from '../Button/Button';

const currentDate = new Date();

const EmployeeCard = ({name,initRole,department,startDate,location,salary,birth}) => {
  const [isTeamLead, setIsTeamLead] = useState(false);//rerenders in case of pomotion
  const [isFormEditing, setIsFormEditing] = useState(false);//rerenders in case of editting
  const [person, setPerson] = useState({ department, location, initRole });

  const yearsWorked = currentDate.getFullYear() - new Date(startDate).getFullYear();

  const congrats = "Schedule recognition meeting."

  const toggleTeamLead = () => setIsTeamLead((prev) => !prev);
  const toggleFormEditing = () => setIsFormEditing((prev) => !prev);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevState) => ({ ...prevState, [name]: value }));
  };

  const renderEditableField = (value, name) =>
    isFormEditing ? (
      <input value={value} name={name} onChange={handleInputChange} />
    ) : (
      <span className={name}>{value}</span>
  );

  return (
    <div className = {`card ${getDepartmentClass(person.department)}`}>
      <p>Name: {name}</p>
      <p>Role:{isTeamLead ? <span>⭐</span> : ''}{renderEditableField(person.initRole, "role")}</p>
      <p>Department: {renderEditableField(person.department, "department")}</p>
      <p>Salary: {salary}</p>
      <p>Birth: {birth}</p>
      <p>Location:  {renderEditableField(person.location, "location")}</p>
      <p>Years in the company: {yearsWorked}</p>
      {(yearsWorked % 5 === 0 && yearsWorked !== 0) ?
        (<p>&#127183;{congrats}</p>):('')
      }
      {(monthsWorked(startDate, currentDate) < 6) ?
        (<p>&#9997;Schedule probation review.</p>):('')
      }
      <div className="card-image">
          <img src={`https://robohash.org/${name}?set=set5`} alt={name} />
      </div>

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