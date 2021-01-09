const student = [
    {
        name: 'Francis Lamb',
        number: 50037624
    },
    {
        name: 'Hugh Pole',
        number: 50037566
    },
    {
        name: 'Dwight Saints',
        number: 50037782
    },
    {
        name: 'Andy Passion',
        number: 50037236
    },
    {
        name: 'Charles Martins',
        number: 50037128
    },
];

const units = [
    {
        name: 'Mathematics',
        semester: '3rd Semester',
        ects: 6
    },
    {
        name: 'Literature',
        semester: '2nd Semester',
        ects: 6
    },
    {
        name: 'Laws',
        semester: '1st Semester',
        ects: 3
    },
    {
        name: 'Informatics',
        semester: '1st Semester',
        ects: 6
    },
    {
        name: 'Cooking',
        semester: '2nd Semester',
        ects: 3
    },
];


window.onload = () => {

    addOptions();
    document.getElementById('calculate').onclick = () => {
        calculate();
    };

    document.getElementById('reset').onclick = () => {
        var fields = document.querySelectorAll('input[type=text]');
        for (field of fields) {
            field.value = '';
        }
    };
};
