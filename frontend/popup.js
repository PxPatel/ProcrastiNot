var data = {
    'access_token': "ya29.a0AcM612z-s88qdgz6340g6_GBKU58hsc3FQBw8B7iUodOypirgNadbP86GNrOMIpbqZLS4dQF9J7ttO1Y4VfCqtPvoPb-Zek7fTN02TC70bY_6eZUuwmh4TVGwKZT9hgYdXx1xSX4DZbBH1llwBYWbxwfHDGryJMZdQDtqQLpaCgYKAWMSARMSFQHGX2Mii2dNClF4aiO06trqxNc7BQ0175",
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
        document.getElementById('newStatusLabel').style.display = "block";
        document.getElementById('newStatusLabel').innerText = data['response'];
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
