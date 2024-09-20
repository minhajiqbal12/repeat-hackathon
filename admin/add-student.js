import { db, setDoc, doc } from '../all file/firebase.js'; 

document.addEventListener('DOMContentLoaded', () => {
    const addStudentForm = document.getElementById('addStudentForm');
    
    if (addStudentForm) {
        addStudentForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const cnic = document.getElementById('cnic').value;
            const studentId = `${cnic}_${Date.now()}`; 
            const studentRef = doc(db, 'students', studentId);

            const studentData = {
                firstName,
                lastName,
                email,
                password,
                cnic,
                createdAt: new Date()
            };

            try {
                await setDoc(studentRef, studentData);
                document.getElementById('message').textContent = 'Student added successfully!';
                addStudentForm.reset();
            } catch (error) {
                console.error('Error adding student: ', error);
                document.getElementById('message').textContent = 'Error adding student. Please try again.';
            }
        });
    } else {
        console.error('Add student form not found');
    }
});
