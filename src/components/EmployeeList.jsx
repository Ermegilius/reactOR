import EmployeeCard from './EmployeeCard.jsx'
import './EmployeeList.css'
import employees from '../data/employeesData.js'

function EmployeeList() {
    return (
        employees.map((elem)=>{
            return(
                <EmployeeCard key={elem.id}{...elem}/>//we are spreading it through all props. So we don't need to list it like that:
                // name={elem.name}
                // initRole={elem.initRole}
                // department={elem.department}
                // startDate={elem.startDate}
                // location={elem.location}
                // salary={elem.salary}
                // birth={elem.birth}
            );
        })
    )
}

export default EmployeeList;