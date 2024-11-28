import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx';
import './EmployeeList.css';

//import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function EmployeeList() {
    //const navigate = useNavigate();
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

/*     const handleNavigate = (id) => {
        navigate(`/${id}`);
    }; */

    return (
        <>
            {isLoading ?
                (<p>Loading...</p>):
                (<div className='list'>
                    {persons.map((elem) => (
                        // Spreading all properties of the employee object as props for EmployeeCard
                        <EmployeeCard key={elem.id} {...elem} />
                    ))}
                </div>)
            }
        </>
    );
};

export default EmployeeList;