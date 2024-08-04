function getcurrentage() {
    const dob = document.getElementById('DOB').value;
    const currentDate = document.getElementById('cDOB').value;
    if (!dob || !currentDate) {
        alert('Enter both Date of Birth and Current Date.');
        return;
    }
    const actualdob = new Date(dob);
    const currentdate = new Date(currentDate);
    let age = currentdate.getFullYear() - actualdob.getFullYear();
    const monthdifference = currentdate.getMonth() - actualdob.getMonth();
    if (monthdifference < 0 || (monthdifference === 0 && currentdate.getDate() < actualdob.getDate())) {
        age--;
    }
    document.getElementById('currentAge').textContent = `Your age is ${age}.`;
}