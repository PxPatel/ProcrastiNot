import requests
from bs4 import BeautifulSoup
import json

# Replace with the URL of your canvas page
url = 'https://canvas.yourschool.edu/courses'

# Make a request to fetch the page content
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Initialize the data structure
courses_data = []

# Find all course elements (you may need to modify the selectors based on your page structure)
course_elements = soup.find_all('div', class_='course')  # Adjust class name as necessary
print(f"Found {len(course_elements)} course(s).")  # Print the number of courses found

for course in course_elements:
    course_name = course.find('h2', class_='course-name').text.strip()  # Adjust selector
    print(f"Course Name: {course_name}")  # Print the course name
    assignments = []

    # Find assignment elements within each course (modify selectors accordingly)
    assignment_elements = course.find_all('div', class_='assignment')
    print(f"Found {len(assignment_elements)} assignment(s) for {course_name}.")  # Print the number of assignments

    for assignment in assignment_elements:
        assignment_name = assignment.find('h3', class_='assignment-name').text.strip()  # Adjust selector
        due_date = assignment.find('span', class_='due-date').text.strip()  # Adjust selector
        
        assignments.append({
            "assignmentName": assignment_name,
            "dueDate": due_date
        })
        
        print(f"  Assignment Name: {assignment_name}, Due Date: {due_date}")  # Print each assignment's name and due date
    
    courses_data.append({
        "courseName": course_name,
        "assignments": assignments
    })

# Convert the data structure to JSON
json_data = json.dumps(courses_data, indent=4)

# Print or return the JSON data
print("\nScraped Data:\n")
print(json_data)
