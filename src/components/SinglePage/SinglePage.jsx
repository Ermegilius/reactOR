import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios';
import Button from "../Button/Button"

function SinglePage() {
    const [selectedPerson, setSelectedPerson] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/persons/${id}`).
            then((response) => {
                setSelectedPerson(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching person data", error);
            });
    }, [id]);

    if (isLoading) {
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