import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import styles from "./EmployeeList.module.css";
import useAxios from "../../utilis/useAxios.js";
import { backEndUrl } from "../../data/globalVariables.js";

function EmployeeList() {
  const {
    data: persons = [],
    loading,
    get,
    update,
    remove,
  } = useAxios(`${backEndUrl}/persons`); // use custom hook to get data from the server
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]); // Define the state for employees

  useEffect(() => {
    const getPersons = async () => {
      await get("");
    };
    getPersons();
  }, [get]);

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

  //function to update the person data
  const updatePerson = async (updatedPerson) => {
    try {
      await update(`/${updatedPerson.id}`, updatedPerson);
      setEmployees((prevPersons) =>
        Array.isArray(prevPersons)
          ? prevPersons.map((person) =>
              person.id === updatedPerson.id ? updatedPerson : person
            )
          : []
      );
    } catch (error) {
      console.error("Failed to update person data", error);
    }
  };

  //function to delete the person
  const deletePerson = async (id) => {
    try {
      await remove(`/${id}`);
      setEmployees((prevPersons) =>
        Array.isArray(prevPersons)
          ? prevPersons.filter((person) => person.id !== id)
          : []
      );
    } catch (error) {
      console.error("Failed to delete person", error);
    }
  };

  return (
    <div className={styles.list}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        Array.isArray(employees) &&
        employees.map((person) => (
          // Spreading all properties of the employee object as props for EmployeeCard
          <EmployeeCard
            key={person.id}
            {...person}
            handleNavigate={handleNavigate}
            updatePerson={updatePerson}
            deletePerson={deletePerson}
          />
        ))
      )}
    </div>
  );
}

export default EmployeeList;
