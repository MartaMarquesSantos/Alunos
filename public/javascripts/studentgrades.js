let studentname;

const allgrades = [
    [
        {
            name: 'Mathematics',
            grade: 8.3,
            semester: '3rd Semester',
            ects: 6
        },
        {
            name: 'Literature',
            grade: 11.2,
            semester: '2nd Semester',
            ects: 6
        },
        {
            name: 'Laws',
            grade: 18.5,
            semester: '1st Semester',
            ects: 3
        },
        {
            name: 'Informatics',
            grade: 14.3,
            semester: '1st Semester',
            ects: 6
        },
        {
            name: 'Cooking',
            grade: 7.4,
            semester: '2nd Semester',
            ects: 3
        },
    ],
    [
        {
            name: 'Mathematics',
            grade: 14.5,
            semester: '3rd Semester',
            ects: 6
        },
        {
            name: 'Literature',
            grade: 10.6,
            semester: '2nd Semester',
            ects: 6
        },
        {
            name: 'Laws',
            grade: 8.7,
            semester: '1st Semester',
            ects: 3
        },
    ],
    [
        {
            name: 'Mathematics',
            grade: 12.3,
            semester: '3rd Semester',
            ects: 6
        },
        {
            name: 'Literature',
            grade: 14.8,
            semester: '2nd Semester',
            ects: 6
        },
    ],
];

window.onload = function() {
    studentname = sessionStorage.getItem('studentname');
    setstudent(`${studentname} allgrades`); 
    showcard(allgrades[studentname]); 
    for(let i=0 ; i < allgrades.length; i++)
    {let html = `
    <section class="cardcontainer">
        <div class="cardhead">
        <h2 class="abbreviation">
            ${allgrades[i].name.substring(0,2)}
        </h2>
        <h3 class="full name">${allgrades[i].name}</h3>
        </div>
        <div class="card ${(allgrades[i]<9.5) ? 'failed' : ''}">
        <p class="full-name">${allgrades[i].grade}</p>
    </section>
        </div>`;
    document.getElementById('allgrades').innerHTML += html;
    }
}
    function setstudent(text) {
        document.getElementById('student').innerHTML = text;
    }




     
