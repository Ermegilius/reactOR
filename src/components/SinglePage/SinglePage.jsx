import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from "../Button/Button";
import Alert from '@mui/material/Alert';
import useAxios from '../../utilis/useAxios.js';

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
        <div className="singlePage">
            <div className="personalCard">
                <div className="imageSide"></div>
                <div className="infoSide">
                    <h2>Profile of: {selectedPerson.name}</h2>
                    <p>Position: {selectedPerson.initRole}</p>
                    <p>Department: {selectedPerson.department}</p>
                    <p>Salary: {selectedPerson.salary}</p>
                    <p>Birth: {selectedPerson.birth}</p>
                    <p>Location: {selectedPerson.location}</p>
                </div>
            </div>
            <Button onClick={() => navigate(-1)} text="Back" />
        </div>
    )
}

export default SinglePage;