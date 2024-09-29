var data = {
    'access_token': "ya29.a0AcM612yAPfnrE-MzWstuyVXgwkzufQOVv35qr0Lds2apliQajNPbmRzXucZYvnJEH7Se60677OnnOhdVxWvq4ApsIB_hJAGRop569S3eYQB0xP2i0eq-l8l4CcCdrzvTzJgFftKmDyAmXwsk3nXdie2rbRLsavHQfhZa9ij0aCgYKASgSARMSFQHGX2MiBqZmGNyzGWp37g8dP6DxzA0175",
    "data": [
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
]
};
document.getElementById('scrapeButton').addEventListener('click', () => {
    document.getElementById('statusLabel').innerText = "Scanning...";
    setTimeout(() => {
        document.getElementById('statusLabel').innerText = "Scanning successful!";
        document.getElementById('analyzeButton').style.display = "block";
    }, 2000);
});


// document.getElementById('analyzeButton').addEventListener('click', () => {
//     fetch('http://127.0.0.1:8000/api/generate', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('newStatusLabel').style.display = "block";
//         document.getElementById('newStatusLabel').innerText = data['response'];
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// });

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
});