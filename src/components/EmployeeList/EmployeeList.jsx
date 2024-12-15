import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx';
import './EmployeeList.css';
import useAxios from '../../utilis/useAxios.js';

function EmployeeList() {
    const { data: persons = [], alert, loading, get, remove, update } = useAxios('http://localhost:3001/persons'); // use custom hook to get data from the server
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]); // Define the state for employees

    useEffect(() => {
        const getPersons = async () => {
            await get('');
        };
        getPersons();
    }, []);

    useEffect(() => {
        setEmployees(persons);
    }, [persons]);

    const handleNavigate = (id) => {
        navigate(`/employees/${id}`);
    };

    const updatePerson = (updatedPerson) => {
        setEmployees((prevPersons) =>
            prevPersons.map((person) =>
                person.id === updatedPerson.id ? updatedPerson : person
            )
        );
    };

    return (
        <div className='list'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                employees.map((person) => (
                    // Spreading all properties of the employee object as props for EmployeeCard
                    <EmployeeCard key={person.id} {...person} handleNavigate={handleNavigate} updatePerson={updatePerson} />
                ))
            )}
        </div>
    );
}

export default EmployeeList;