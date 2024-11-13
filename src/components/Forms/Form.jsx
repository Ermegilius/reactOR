const Form = ({toggleFormEdit,role, department, location}) => {
    const [formData, setFormData] = useState({
        role,
        department,
        location
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]:value}));
    }
    return (
        <div>
            <form>
                <input name='role' value={formData.role} onChange={handleChange} type='text'/>
                <input name='department' value={formData.department} onChange={handleChange} type='text'/>
                <input name='location' value={formData.location} onChange={handleChange} type='text'/>
            </form>
        </div>
    )
};

export default Form;