import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx';
import './EmployeeList.css';

function EmployeeList() {
    const navigate = useNavigate();
    const [persons, setPersons] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/persons')
        .then((response) => {
            setPersons(response.data);
            console.log(response.data);
            setLoading(false);
        })
        .catch((error) =>{
            console.log(error);
        });
    }, []);

    const handleNavigate = (id) => {
        navigate(`/employees/${id}`);
    };

    const updatePerson = (updatedPerson) => {
        setPersons((prevPersons) =>
            prevPersons.map((person) =>
                person.id === updatedPerson.id ? updatedPerson : person
            )
        );
    };

    return (
        <div className='list'>
            {isLoading ?
                (<p>Loading...</p>
                ) : (
                    persons.map((person) => (
                        // Spreading all properties of the employee object as props for EmployeeCard
                        <EmployeeCard key={person.id} {...person} handleNavigate={handleNavigate} updatePerson={updatePerson}/>
                    ))
                )
            }
        </div>
    );
};

export default EmployeeList;