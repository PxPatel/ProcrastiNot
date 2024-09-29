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
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

/** attempt to toggle disco mode

let discoOn = 0; // Initialize discoOn variable

document.getElementById('toggleButton').addEventListener('click', () => {
    const awesomeElements = document.querySelectorAll('.awesome');
    if (discoOn == 1) {
        discoOn = 0;
        awesomeElements.forEach(element => {
            element.style.backgroundColor = "pink";
        });
    } else {
        discoOn = 1;
        awesomeElements.forEach(element => {
            element.style.backgroundColor = "white";
        });
    }
});*/