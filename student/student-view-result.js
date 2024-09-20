import { db, doc, getDoc } from '../all file/firebase.js';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('viewResultForm').addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevent form from submitting

        const studentId = document.getElementById('studentId').value; // Get student ID from input field
       
        if (studentId) {
            // Reference the document by studentId (assuming it's the document ID)
            const docRef = doc(db, "studentMarks", studentId);

            try {
                const docSnap = await getDoc(docRef);
             

                if (docSnap.exists()) {
                    const data = docSnap.data();
                  
                    // Update result fields with student data
                    document.getElementById('course').textContent = data.course;
                    document.getElementById('marks').textContent = data.marks;
                    document.getElementById('totalMarks').textContent = data.totalMarks;
                    document.getElementById('grade').textContent = data.grade;
                } else {
              
                    alert("No student found with this ID.");
                }
            } catch (error) {
                console.error("Error fetching student data: ", error);
            }
        } else {
            alert("Please enter a valid student ID.");
        }
    });
});
