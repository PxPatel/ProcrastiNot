var data = [
    {
        "courseName" : "Principles of Operating Systems",
        "assignments" : [
            {
                "assignmentName": "HW01",
                "dueDate": "Oct 05"
            },
            {
                "assignmentName": "HW01",
                "dueDate": "Nov 05"
            }
        ]
    },
    {
        "courseName" : "Financial Markets and Systems",
        "assignments" : [
            {
                "assignmentName": "HW01",
                "dueDate": "Oct 15"
            },
            {
                "assignmentName": "HW02",
                "dueDate": "Nov 15"
            },
            {
                "assignmentName": "Midterm Practice",
                "dueDate": "Dec 01"
            }
        ]
    },
    {
        "courseName": "Psychology Intro",
        "assignments" : [
            {
                "assignmentName": "Homework Questions Chapter 1",
                "dueDate": "Oct 15"
            },
            {
                "assignmentName": "Midterm Paper",
                "dueDate": "Oct 15"
            }
        ]
    }
];
document.getElementById('scrapeButton').addEventListener('click', () => {
    document.getElementById('statusLabel').innerText = "Scanning...";
    setTimeout(() => {
        document.getElementById('statusLabel').innerText = "Scanning successful!";
        document.getElementById('analyzeButton').style.display = "block";
    }, 2000);
});


document.getElementById('analyzeButton').addEventListener('click', () => {
    fetch('http://127.0.0.1:8000/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        let response = {
            "response": data
        };

        let coursesContainer = document.getElementById('coursesContainer');

        if(Array.isArray(data)) {
            data.forEach(course => {
                let courseDiv = document.createElement('div');
                let courseName = document.createElement('h2');
                courseName.textContent = course.courseName;
                courseDiv.appendChild(courseName);

                if(Array.isArray(course.data)) {
                    course.data.forEach(assignment => {
                        let assignmentDiv = document.createElement('div');
                        let assignmentName = document.createElement('h3');
                        assignmentName.textContent = assignment.assignmentName;
                        assignmentDiv.appendChild(assignmentName);

                        let duration = document.createElement('p');
                        duration.textContent = `Duration: ${assignment.duration}`;
                        assignmentDiv.appendChild(duration);

                        let suggestedStartDate = document.createElement('p');
                        suggestedStartDate.textContent = `Suggested Start Date: ${assignment.suggestedStartDate}`;
                        assignmentDiv.appendChild(suggestedStartDate);

                        let suggestedStartTime = document.createElement('p');
                        suggestedStartTime.textContent = `Suggested Start Time: ${assignment.suggestedStartTime}`;
                        assignmentDiv.appendChild(suggestedStartTime);

                        courseDiv.appendChild(assignmentDiv);
                    });
                }

                coursesContainer.appendChild(courseDiv);
            });
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
