function addSubject() {
    const container = document.getElementById("gpa-inputs");
    const div = document.createElement("div");
    div.className = "subject";
    div.innerHTML = `
    <input type="text" placeholder="Subject Name">
    <select class="grade">
      <option value="10">S</option>
      <option value="9">A</option>
      <option value="8">B</option>
      <option value="7">C</option>
      <option value="6">D</option>
      <option value="5">E</option>
      <option value="0">F</option>
    </select>
    <input type="number" placeholder="Credits" class="credit" min="1">
  `;
    container.appendChild(div);
}

function calculateGPA() {
    const subjects = document.querySelectorAll("#gpa-inputs .subject");
    let totalPoints = 0, totalCredits = 0;

    for (let subject of subjects) {
        const name = subject.children[0].value.trim();
        const grade = parseFloat(subject.children[1].value);
        const credit = parseFloat(subject.children[2].value);

        if (!name || isNaN(credit) || credit <= 0) {
            alert("Please enter valid subject name and credits.");
            return;
        }

        totalPoints += grade * credit;
        totalCredits += credit;
    }

    const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0;
    document.getElementById("gpa-result").innerText = `🎯 Your GPA is: ${gpa}`;
}

function addSemester() {
    const container = document.getElementById("cgpa-inputs");
    const div = document.createElement("div");
    div.className = "semester";
    div.innerHTML = `
    <input type="number" placeholder="GPA" class="gpa" step="0.01" min="0" max="10">
    <input type="number" placeholder="Credits" class="credit" min="1">
  `;
    container.appendChild(div);
}

function calculateCGPA() {
    const semesters = document.querySelectorAll("#cgpa-inputs .semester");
    let totalPoints = 0, totalCredits = 0;

    for (let semester of semesters) {
        const gpa = parseFloat(semester.children[0].value);
        const credit = parseFloat(semester.children[1].value);

        if (isNaN(gpa) || gpa < 0 || gpa > 10 || isNaN(credit) || credit <= 0) {
            alert("Please enter GPA between 0-10 and valid credits.");
            return;
        }

        totalPoints += gpa * credit;
        totalCredits += credit;
    }

    const cgpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0;
    document.getElementById("cgpa-result").innerText = `🎯 Your CGPA is: ${cgpa}`;
}
