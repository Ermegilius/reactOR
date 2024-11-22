import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx'
import './EmployeeList.css'
import employees from '../../data/employeesData.js'

function EmployeeList() {
    return (
        <>
            {employees.map((elem) => (
                // Spreading all properties of the employee object as props for EmployeeCard
                <EmployeeCard key={elem.id} {...elem} />
            ))}
        </>
    );
};

export default EmployeeList;