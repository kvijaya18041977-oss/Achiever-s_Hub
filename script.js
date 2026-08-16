function showClasses() {
    const content = document.getElementById("content");

    content.innerHTML = `
        <h2>📚 Select Your Class</h2>

        <button onclick="openClass(1)">Class 1</button>
        <button onclick="openClass(2)">Class 2</button>
        <button onclick="openClass(3)">Class 3</button>
        <button onclick="openClass(4)">Class 4</button>
        <button onclick="openClass(5)">Class 5</button>
        <button onclick="openClass(6)">Class 6</button>
        <button onclick="openClass(7)">Class 7</button>
        <button onclick="openClass(8)">Class 8</button>
        <button onclick="openClass(9)">Class 9</button>
        <button onclick="openClass(10)">Class 10</button>
        <button onclick="openClass(11)">Class 11</button>
        <button onclick="openClass(12)">Class 12</button>
    `;
}

function openClass(classNumber) {
    document.getElementById("content").innerHTML =
        `<h2>📖 Class ${classNumber}</h2>
         <p>Subjects will be added here soon.</p>`;
}

function showQuiz() {
    document.getElementById("content").innerHTML =
        "<h2>📝 Quizzes</h2><p>Quiz section coming soon!</p>";
}

function showMaterials() {
    document.getElementById("content").innerHTML =
        "<h2>📖 Study Materials</h2><p>Study materials coming soon!</p>";
}