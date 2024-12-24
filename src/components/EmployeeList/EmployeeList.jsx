import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx';
import styles from './EmployeeList.module.css';
import useAxios from '../../utilis/useAxios.js';
import { backEndUrl } from '../../data/globalVariables.js';

function EmployeeList() {
    const { data: persons = [], loading, get, update } = useAxios(`${backEndUrl}/persons`); // use custom hook to get data from the server
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]); // Define the state for employees

    useEffect(() => {
        const getPersons = async () => {
            await get('');
        };
        getPersons();
    }, []);

    useEffect(() => {
        if (Array.isArray(persons)) {
            setEmployees(persons);
        } else {
            setEmployees([]);
        }
    }, [persons]);

    const handleNavigate = (id) => {
        navigate(`/employees/${id}`);
    };

    const updatePerson = async (updatedPerson) => {
        try {
            await update(`/${updatedPerson.id}`, updatedPerson);
            setEmployees((prevPersons) =>
                Array.isArray(prevPersons) ? prevPersons.map((person) =>
                    person.id === updatedPerson.id ? updatedPerson : person
                ) : []
            );
        } catch (error) {
            console.error("Failed to update person data", error);
        }
    };

    return (
        <div className={styles.list}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                Array.isArray(employees) && employees.map((person) => (
                    // Spreading all properties of the employee object as props for EmployeeCard
                    <EmployeeCard key={person.id} {...person} handleNavigate={handleNavigate} updatePerson={updatePerson} />
                ))
            )}
        </div>
    );
}

export default EmployeeList;