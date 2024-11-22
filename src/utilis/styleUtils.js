const getDepartmentClass = (dept) => {
    switch (dept) {
        case "Marketing":
            return "departmentMarketing";
        case "HR":
            return "departmentHR";
        case "IT":
            return "departmentIT";
        default:
            return "default";
    }
};

export default getDepartmentClass;