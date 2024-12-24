import { useState} from 'react';
import Button from '../Button/Button';
import styles from './EmployeeCard.module.css';
import monthsWorked from '../../utilis/monthsWorked';
import getDepartmentClass from "../../utilis/styleUtils";
import Alert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';

const currentDate = new Date();

const EmployeeCard = ({ id, name, initRole, department, startDate, location, salary, birth, handleNavigate, updatePerson, deletePerson }) => {
  const [isTeamLead, setIsTeamLead] = useState(false); // rerenders in case of promotion
  const [isFormEditing, setIsFormEditing] = useState(false); // rerenders in case of editing
  const [person, setPerson] = useState({
    name: name,
    initRole: initRole,
    department: department,
    startDate: startDate,
    location: location,
    salary: salary,
    birth: birth,
  });
  const avatarUrl = `https://robohash.org/${name}?set=set5`;
  const yearsWorked = currentDate.getFullYear() - new Date(startDate).getFullYear();
  const congrats = "Schedule recognition meeting"//use it if it's time for a recognition meeting

  const toggleTeamLead = () => {
    setIsTeamLead((prev) => !prev);//toggles the team lead status
  };

  const personEditHandler = async () => {
    try{
      if (isFormEditing) {
        const updatedPerson = { ...person, id }; 
        await updatePerson(updatedPerson); // update the parent component's state
      }
      setIsFormEditing((prev) => !prev);
      
    } catch (error) {
      console.error("Failed to update person data", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className={`${styles.card} ${styles[getDepartmentClass(person.department)]}`}>
      <div className={styles.cardHeader}>
        <DeleteIcon className={styles.deleteIcon} onClick={() => deletePerson(id)} />
      </div>
      <div className={styles.cardImage}>
        <img src={avatarUrl} alt={name} />
      </div> 
      {isFormEditing ? (
        <div className={styles.inputBox}>
          <input name="name" type="text" value={person.name} onChange={handleChange} />
          <input name="initRole" type="text" value={person.initRole} onChange={handleChange} />
          <input name="department" type="text" value={person.department} onChange={handleChange} />
          <input name="startDate" type="date" value={person.startDate} onChange={handleChange} />
          <input name="location" type="text" value={person.location} onChange={handleChange} />
          <input name="salary" type="number" value={person.salary} onChange={handleChange} />
          <input name="birth" type="date" value={person.birth} onChange={handleChange} />
        </div>
      ) : (
        <>
          <p>Name: {name}</p>
          <p>Role: {isTeamLead ? <span>⭐</span> : ''}{initRole}</p>
          <p>Department: {department}</p>
        </>
      )}

      {/* display message about recognition if the number of years worked is a multiple of 5 and not zero:*/}
      {(yearsWorked % 5 === 0 && yearsWorked !== 0) ? (<p>&#127183;{congrats}</p>) : ('')}
      {/* display message about probation review if the worker is in company less than 6 months:*/}
      {(monthsWorked(startDate, currentDate) < 6) ? (<p>&#9997;Schedule probation review</p>) : ('')}
      
      {alert.show && <Alert sx={{mt:1}} severity={alert.type}>{alert.message}</Alert>}   

      <div className={styles.buttonContainer}>
        <Button
          text={isTeamLead ? 'Demote Team Lead' : 'Promote to Team Lead'}
          onClick={toggleTeamLead}
          role={isTeamLead ? 'primary' : 'secondary'}
          type='button'
        />

        <Button
          text={isFormEditing ? 'Save' : 'Edit'}
          onClick={personEditHandler}
          role={isFormEditing ? 'primary' : 'secondary'}
          type='button'
        />

        <Button
          text="More"
          onClick={() => handleNavigate(id)}
        />
      </div>
    </div>
  );
}

export default EmployeeCard;