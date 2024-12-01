import { useState } from "react";
import axios from 'axios';
import Button from "../components/Button/Button";
import "./Form.css";

const Form = ()=>{
    const [formData, setFormData] = useState(
        {
            name: "",
            initRole: "",
            department: "",
            startDate: "",
            location: "",
            salary: "",
            birth: ""
        }
    );

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]:value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/persons",formData);
            console.log("Person added successfully: ", formData);
            //clear the form
            setFormData({
                name: "",
                initRole: "",
                department: "",
                startDate: "",
                location: "",
                salary: "",
                birth: ""
            });
            console.log(formData);
        } catch (error) {
        console.error("There was an error submitting the form!", error);
        };
    };

    return (
        <form onSubmit={handleSubmit} className="formBase">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="text"
                name="initRole"
                value={formData.initRole}
                onChange={handleChange}
                placeholder="Role"
            />
            <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Department"
            />
            <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                placeholder="Start Date"
            />
            <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
            />
            <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="Salary"
            />
            <input
                type="date"
                name="birth"
                value={formData.birth}
                onChange={handleChange}
                placeholder="Birth Date"
            />
            <Button text="Add new" type="submit" />
        </form>
    );
};

export default Form;