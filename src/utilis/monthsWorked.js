'use strict'

//calculates the months worked in company using as arguments start date and current date
const monthsWorked = (startDate, currentDate) => {
    let yearsDifference = currentDate.getFullYear() - new Date(startDate).getFullYear();
    let monthsDifference = currentDate.getMonth() - new Date(startDate).getMonth();
    if (monthsDifference < 0) {
        yearsDifference -= 1;
        monthsDifference += 12;
    }
    const monthsWorked = yearsDifference * 12 + monthsDifference;
    return monthsWorked;
};

export default monthsWorked;