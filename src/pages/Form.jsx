import { useState } from "react";
import useAxios from '../utilis/useAxios';
import Button from "../components/Button/Button";
import styles from "./Form.module.css";
import Alert from '@mui/material/Alert';
import { backEndUrl } from '../data/globalVariables.js';

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

    const { post, alert } = useAxios(`${backEndUrl}/persons`);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]:value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await post('', formData);
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
        } catch (error) {
        console.error("There was an error submitting the form!", error);
        };
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formBase}>
            {alert.show && <Alert sx={{mt:1}} severity={alert.type}>{alert.message}</Alert>}
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="write name here"
            />
            <label htmlFor="initRole">Role:</label>
            <input
                type="text"
                name="initRole"
                value={formData.initRole}
                onChange={handleChange}
                placeholder="write role here"
            />
            <label htmlFor="department">Department:</label>
            <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="write department here"
            />
            <label htmlFor="startDate">Start Date:</label>
            <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
            />
            <label htmlFor="location">Location:</label>
            <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="write location here"
            />
            <label htmlFor="salary">Salary:</label>
            <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="write salary here"
            />
            <label htmlFor="birth">Birth Date:</label>
            <input
                type="date"
                name="birth"
                value={formData.birth}
                onChange={handleChange}
            />
            <Button text="Add new" type="submit" />
        </form>
    );
};

export default Form;