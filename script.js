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
    const content = document.getElementById("content");

    if (classNumber === 1) {

        content.innerHTML = `
            <h2>📚 Class 1</h2>
            <p>Select a subject</p>

            <button onclick="openSubject('Tamil')">தமிழ்</button>
            <button onclick="openSubject('English')">English</button>
            <button onclick="openSubject('Mathematics')">Mathematics</button>
            <button onclick="openSubject('Science')">Science</button>

            <button onclick="showClasses()">⬅️ Back to Classes</button>
        `;

    } else {

        content.innerHTML = `
            <h2>📚 Class ${classNumber}</h2>
            <p>Subjects will be added soon.</p>

            <button onclick="showClasses()">⬅️ Back to Classes</button>
        `;
    }
}


function openSubject(subject) {
    const content = document.getElementById("content");

    if (subject === "Tamil") {

        content.innerHTML = `
            <h2>📕 Class 1 - தமிழ்</h2>

            <button onclick="openLesson('Tamil Lesson 1')">
                பாடம் 1
            </button>

            <button onclick="openLesson('Tamil Lesson 2')">
                பாடம் 2
            </button>

            <button onclick="openLesson('Tamil Lesson 3')">
                பாடம் 3
            </button>

            <button onclick="openLesson('Tamil Lesson 4')">
                பாடம் 4
            </button>

            <button onclick="openClass(1)">⬅️ Back</button>
        `;

    } else if (subject === "English") {

        content.innerHTML = `
            <h2>📘 Class 1 - English</h2>

            <button onclick="openLesson('English Lesson 1')">
                Lesson 1
            </button>

            <button onclick="openLesson('English Lesson 2')">
                Lesson 2
            </button>

            <button onclick="openLesson('English Lesson 3')">
                Lesson 3
            </button>

            <button onclick="openClass(1)">⬅️ Back</button>
        `;

    } else if (subject === "Mathematics") {

        content.innerHTML = `
            <h2>📐 Class 1 - Mathematics</h2>

            <button onclick="openLesson('Math Lesson 1')">
                Chapter 1
            </button>

            <button onclick="openLesson('Math Lesson 2')">
                Chapter 2
            </button>

            <button onclick="openLesson('Math Lesson 3')">
                Chapter 3
            </button>

            <button onclick="openClass(1)">⬅️ Back</button>
        `;

    } else if (subject === "Science") {

        content.innerHTML = `
            <h2>🔬 Class 1 - Science</h2>

            <button onclick="openLesson('Science Lesson 1')">
                Lesson 1
            </button>

            <button onclick="openLesson('Science Lesson 2')">
                Lesson 2
            </button>

            <button onclick="openClass(1)">⬅️ Back</button>
        `;
    }
}


function openLesson(lesson) {
    const content = document.getElementById("content");

    content.innerHTML = `
        <h2>📖 ${lesson}</h2>

        <h3>📚 Study Notes</h3>

        <p>
            Welcome to the lesson!
        </p>

        <p>
            Lesson content will be added here.
            You can learn, practise and revise this topic.
        </p>

        <button onclick="showClasses()">⬅️ Back to Classes</button>
    `;
}


function showQuiz() {
    const content = document.getElementById("content");

    content.innerHTML = `
        <h2>📝 Quizzes</h2>

        <p>Quiz section coming soon!</p>
    `;
}


function showMaterials() {
    const content = document.getElementById("content");

    const contentBox = document.getElementById("content");

    contentBox.innerHTML = `
        <h2>📖 Study Materials</h2>

        <p>Study materials coming soon!</p>
    `;
}  
      
