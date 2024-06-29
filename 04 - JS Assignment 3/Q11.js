/*
    Q11.
    Input:
    [
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        },
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        },
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    ]
        
    Output: -
    [
        student1: {
            average: 44
        },
        student2: {
            average: 44
        },
        student3: {
            average: 44
        }
    ]
    Write code to find average as mentioned above. Use array and object methods.
*/

const students = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};


let output = Object.keys(students).map((student) => {
    let total = Object.values(students[student]).reduce((a, b) => (a + b));
    let average = total / Object.values(students[student]).length;
    return { [student]: { average: average } };
});

console.log(output);
