let points = Number(localStorage.getItem("achieversPoints")) || 0;

const subjects = [
    "தமிழ்",
    "English",
    "Mathematics",
    "Science",
    "Social Science"
];

function getContent() {
    return document.getElementById("appContent");
}

function showClasses() {

    getContent().innerHTML = `
        <section>
            <h2>📚 Select Your Class</h2>

            ${Array.from({length: 12}, (_, i) =>
                `<button onclick="openClass(${i + 1})">
                    Class ${i + 1}
                </button>`
            ).join("")}

            <button onclick="goHome()">🏠 Home</button>
        </section>
    `;

    scrollToContent();
}


function openClass(classNumber) {

    let subjectButtons = "";

    subjects.forEach(subject => {
        subjectButtons += `
            <button onclick="openSubject('${subject}', ${classNumber})">
                ${subject}
            </button>
        `;
    });

    getContent().innerHTML = `
        <section>
            <h2>📚 Class ${classNumber}</h2>
            <p>Select a subject</p>

            ${subjectButtons}

            <button onclick="showClasses()">⬅️ Back</button>
        </section>
    `;

    scrollToContent();
}


function openSubject(subject, classNumber) {

    getContent().innerHTML = `
        <section>
            <h2>📖 ${subject}</h2>

            <p>Class ${classNumber}</p>

            <h3>📚 Lessons</h3>

            <button onclick="openLesson('${subject}', ${classNumber}, 1)">
                Lesson 1
            </button>

            <button onclick="openLesson('${subject}', ${classNumber}, 2)">
                Lesson 2
            </button>

            <button onclick="openLesson('${subject}', ${classNumber}, 3)">
                Lesson 3
            </button>

            <button onclick="openLesson('${subject}', ${classNumber}, 4)">
                Lesson 4
            </button>

            <button onclick="openClass(${classNumber})">
                ⬅️ Back
            </button>
        </section>
    `;

    scrollToContent();
}


function openLesson(subject, classNumber, lessonNumber) {

    getContent().innerHTML = `
        <section>

            <h2>📖 ${subject}</h2>

            <p>Class ${classNumber} • Lesson ${lessonNumber}</p>

            <div class="card">

                <h3>📚 Study Notes</h3>

                <p>
                    Welcome to this lesson!
                </p>

                <p>
                    Study the lesson carefully and practise
                    the important concepts.
                </p>

            </div>

            <button onclick="addPoints(10)">
                ⭐ Complete Lesson +10 Points
            </button>

            <button onclick="openSubject('${subject}', ${classNumber})">
                ⬅️ Back to Lessons
            </button>

        </section>
    `;

    scrollToContent();
}


function showQuiz() {

    getContent().innerHTML = `
        <section>

            <h2>📝 Quick Quiz</h2>

            <div class="card">

                <h3>What is 5 + 5?</h3>

                <button onclick="checkAnswer(this, true)">
                    10
                </button>

                <button onclick="checkAnswer(this, false)">
                    15
                </button>

                <button onclick="checkAnswer(this, false)">
                    20
                </button>

            </div>

            <button onclick="goHome()">🏠 Home</button>

        </section>
    `;

    scrollToContent();
}


function checkAnswer(button, correct) {

    if (correct) {

        button.classList.add("correct");

        addPoints(10);

        button.innerText = "✅ Correct! +10 points";

    } else {

        button.classList.add("wrong");

        button.innerText = "❌ Try again";

    }
}


function addPoints(amount) {

    points += amount;

    localStorage.setItem("achieversPoints", points);

    alert(`🎉 You earned ${amount} points!`);
}


function showProgress() {

    getContent().innerHTML = `
        <section>

            <h2>🏆 My Progress</h2>

            <div class="points">
                ⭐ ${points} Points
            </div>

            <p>
                Keep learning and earn more points!
            </p>

            <button onclick="goHome()">🏠 Home</button>

        </section>
    `;

    scrollToContent();
}


function showMaterials() {

    getContent().innerHTML = `
        <section>

            <h2>📖 Study Materials</h2>

            <button onclick="showClasses()">
                📚 Class-wise Materials
            </button>

            <div class="card">
                <h3>📌 Coming Soon</h3>
                <p>
                    Notes, PDFs and learning resources
                    will be added here.
                </p>
            </div>

            <button onclick="goHome()">🏠 Home</button>

        </section>
    `;

    scrollToContent();
}


function goHome() {

    getContent().innerHTML = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function scrollToContent() {

    setTimeout(() => {

        getContent().scrollIntoView({
            behavior: "smooth"
        });

    }, 100);
}
