var table = document.getElementById("Student_Grades");

// function AddRow() {
//     var newRow = table.insertRow();
//     var columnCount = table.rows[0].cells.length; 
    
//     for (var i = 0; i < columnCount; i++) {
//         newRow.insertCell().textContent = "New Cell " + (i + 1); 
//     }
// }



function AddColumn() {
    var rowCount = table.rows.length;
    for (var i = 0; i < rowCount; i++) {
        var cell = table.rows[i].insertCell(5); 
        cell.contentEditable = true; 
            cell.textContent = "-";
    }

     
}




var students_data = [
    
        {
            "First_name": "John",
            "Last_name": "Doe",
            "Student_Id": "22376745",
            "Assignment_1": "80%",
            "Assignment_2": "67%",
            "Assignment_3": "93%"
        },
        {
            "First_name": "Paul",
            "Last_name": "Attradies",
            "Student_Id": "22345745",
            "Assignment_1": "92%",
            "Assignment_2": "76%",
            "Assignment_3": "85%"
        },
        {
            "First_name": "Luke",
            "Last_name": "Skywalker",
            "Student_Id": "22123745",
            "Assignment_1": "78%",
            "Assignment_2": "89%",
            "Assignment_3": "72%"
        },
        {
            "First_name": "Luke",
            "Last_name": "Skywalker",
            "Student_Id": "22123745",
            "Assignment_1": "84%",
            "Assignment_2": "98%",
            "Assignment_3": "61%"
        },
        {
            "First_name": "Luke",
            "Last_name": "Skywalker",
            "Student_Id": "22123745",
            "Assignment_1": "95%",
            "Assignment_2": "62%",
            "Assignment_3": "70%"
        },
        {
            "First_name": "Luke",
            "Last_name": "Skywalker",
            "Student_Id": "22123745",
            "Assignment_1": "73%",
            "Assignment_2": "88%",
            "Assignment_3": "96%"
        }
    
    
    
];

TableBuilder(students_data);



function TableBuilder(data) {
    var table = document.getElementById('Table_Data');
    var checkboxesContainer = document.getElementById('checkboxes');

    for (var i = 0; i < data.length; i++) {
        var total = 0;
        var assignmentCount = 0;

        for (var key in data[i]) {
            if (key.startsWith('Assignment_')) {
                var assignment = parseInt(data[i][key]);
                total += assignment;
                assignmentCount++;
            }
        }

        var average = Math.round(assignmentCount > 0 ? total / assignmentCount : 0);

        var row = `<tr>
                        <td>${data[i].First_name}</td>
                        <td>${data[i].Student_Id}</td>`;

        for (var j = 1; j <= assignmentCount; j++) {
            row += `<td>${data[i]['Assignment_' + j]}</td>`;
        }

        row += `<td><button id="Grade" onclick="ChangeGrade(this, ${average})">${average}</button></td>
                </tr>`;
        table.innerHTML += row;

        // Create a checkbox for each row
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkbox_' + i; // Unique ID for each checkbox
        checkbox.dataset.rowIndex = i;
        checkbox.addEventListener('change', function() {
            var rowIndex = this.dataset.rowIndex;
            var rows = table.getElementsByTagName('tr');
            if (this.checked) {
                rows[rowIndex].classList.add('highlighted');
            } else {
                rows[rowIndex].classList.remove('highlighted');
            }
        });
        checkboxesContainer.appendChild(checkbox);

        
    }
}





function ChangeGrade(button) {
   
    var average = parseFloat(button.textContent.replace('%', ''));
    var letterGrade = LetterGrade(average);
    var gpa = GPA(average);
    button.textContent = `${letterGrade} (GPA: ${gpa.toFixed(2)})`;
    button.removeEventListener('click', ChangeGrade); 

    button.disabled = true;
    button.classList.add('disable');
}



function LetterGrade(grade) {
    if (grade >= 93) {
        return 'A';
    } else if (grade >= 90) {
        return 'A-';
    } else if (grade >= 87) {
        return 'B+';
    } else if (grade >= 83) {
        return 'B';
    } else if (grade >= 80) {
        return 'B-';
    } else if (grade >= 77) {
        return 'C+';
    } else if (grade >= 73) {
        return 'C';
    } else if (grade >= 70) {
        return 'C-';
    } else if (grade >= 67) {
        return 'D+';
    } else if (grade >= 63) {
        return 'D';
    } else if (grade >= 60) {
        return 'D-';
    } else {
        return 'F';
    }
}

function GPA(grade) {
    if (grade >= 93) {
        return 4.0;
    } else if (grade >= 90) {
        return 3.7;
    } else if (grade >= 87) {
        return 3.3;
    } else if (grade >= 83) {
        return 3.0;
    } else if (grade >= 80) {
        return 2.7;
    } else if (grade >= 77) {
        return 2.3;
    } else if (grade >= 73) {
        return 2.0;
    } else if (grade >= 70) {
        return 1.7;
    } else if (grade >= 67) {
        return 1.3;
    } else if (grade >= 63) {
        return 1.0;
    } else if (grade >= 60) {
        return 0.7;
    } else {
        return 0.0;
    }
}


