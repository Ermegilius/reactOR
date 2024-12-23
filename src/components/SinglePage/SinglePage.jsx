import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from "../Button/Button";
import useAxios from '../../utilis/useAxios.js';
import styles from './SinglePage.module.css';


function SinglePage() {
    const { data: selectedPerson = {}, loading, get } = useAxios('http://localhost:3001/persons');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getPerson = async () => {
            await get(`${id}`);
        };
        getPerson();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.singlePage}>
            <div className={styles.personalCard}>
                <h2>Profile of: {selectedPerson.name}</h2>
                <div className={styles.imageSide}>
                    <img src={`https://robohash.org/${selectedPerson.name}?set=set5`} alt={selectedPerson.name} />
                </div>
                <div className={styles.infoSide}>
                    <p>Role: {selectedPerson.initRole}</p>
                    <p>Department: {selectedPerson.department}</p>
                    <p>Salary: {selectedPerson.salary}</p>
                    <p>Birth: {selectedPerson.birth}</p>
                    <p>Start date: {selectedPerson.startDate}</p>
                    <p>Location: {selectedPerson.location}</p>
                </div>
            </div>
            <Button onClick={() => navigate(-1)} text="Back" />
        </div>
    )
}

export default SinglePage;