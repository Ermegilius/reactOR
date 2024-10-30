import EmployeeCard from './EmployeeCard.jsx';
import './EmployeeList.css'

function EmployeeList() {
    return (
        <>
            <EmployeeCard name="Vova" initRole="expert" department="procurement" salary = "666" birth = "26.01.1988" />
            <EmployeeCard name="John" initRole="expert" department="procurement" salary = "31415" birth = "01.02.1999"/>
            <EmployeeCard name="Vika" initRole="expert" department="procurement" salary = "6021023" birth = "20.10.1980"/>
        </>
    );
}

export default EmployeeList;