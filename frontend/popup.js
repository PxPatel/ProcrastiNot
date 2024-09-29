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

document.getElementById('analyzeButton').addEventListener('click', () => {
    document.getElementById('statusLabel').innerText = "Analyzing...";
    setTimeout(() => {
        document.getElementById('statusLabel').innerText = "Analysis successful!";
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
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
