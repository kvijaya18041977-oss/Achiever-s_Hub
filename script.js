/* =========================================
   ACHIEVERS HUB
   Main JavaScript
========================================= */


/* ---------- DATA ---------- */

const subjects = [
    "தமிழ்",
    "English",
    "Mathematics",
    "Science",
    "Social Science"
];


const lessons = [
    "Lesson 1",
    "Lesson 2",
    "Lesson 3",
    "Lesson 4"
];


/* ---------- POINTS ---------- */

let points =
    Number(
        localStorage.getItem(
            "achieversPoints"
        )
    ) || 0;


/* ---------- HELPERS ---------- */

function contentBox() {

    return document.getElementById(
        "appContent"
    );

}


function scrollToContent() {

    setTimeout(function () {

        contentBox().scrollIntoView({
            behavior: "smooth"
        });

    }, 100);

}


function button(text, action, className = "action-button") {

    return `
        <button
            class="${className}"
            onclick="${action}">
            ${text}
        </button>
    `;

}


/* ---------- HOME ---------- */

function goHome() {

    contentBox().innerHTML = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ---------- CLASSES ---------- */

function showClasses() {

    let html = `

        <section>

            <h2>📚 Classes 1–12</h2>

            <p>
                Select your class
            </p>

    `;


    for (
        let i = 1;
        i <= 12;
        i++
    ) {

        html += button(
            `Class ${i}`,
            `openClass(${i})`,
            "action-button class-button"
        );

    }


    html += button(
        "🏠 Home",
        "goHome()",
        "action-button back-button"
    );


    html += `

        </section>

    `;


    contentBox().innerHTML = html;

    scrollToContent();

}


/* ---------- CLASS ---------- */

function openClass(classNumber) {

    let html = `

        <section>

            <h2>
                📚 Class ${classNumber}
            </h2>

            <p>
                Select a subject
            </p>

    `;


    subjects.forEach(function(subject) {

        html += button(
            subject,
            `openSubject('${subject}', ${classNumber})`,
            "action-button subject-button"
        );

    });


    html += button(
        "⬅️ Back to Classes",
        "showClasses()",
        "action-button back-button"
    );


    html += `

        </section>

    `;


    contentBox().innerHTML = html;

    scrollToContent();

}


/* ---------- SUBJECT ---------- */

function openSubject(
    subject,
    classNumber
) {

    let html = `

        <section>

            <h2>
                📖 ${subject}
            </h2>

            <p>
                Class ${classNumber}
            </p>

            <h3>
                📚 Lessons
            </h3>

    `;


    lessons.forEach(function(
        lesson,
        index
    ) {

        html += button(
            lesson,
            `openLesson('${subject}', ${classNumber}, ${index + 1})`,
            "action-button lesson-button"
        );

    });


    html += button(
        "⬅️ Back",
        `openClass(${classNumber})`,
        "action-button back-button"
    );


    html += `

        </section>

    `;


    contentBox().innerHTML = html;

    scrollToContent();

}


/* ---------- LESSON ---------- */

function openLesson(
    subject,
    classNumber,
    lessonNumber
) {

    contentBox().innerHTML = `

        <section>

            <h2>
                📖 ${subject}
            </h2>

            <div class="info-card">

                <h3>
                    Class ${classNumber}
                    • Lesson ${lessonNumber}
                </h3>

                <p>
                    📚 Study Notes
                </p>

                <p>
                    This lesson area is ready
                    for your educational content.
                </p>

                <p>
                    Add your notes, explanations,
                    examples and exercises here.
                </p>

            </div>


            ${button(
                "⭐ Complete Lesson +10 Points",
                `completeLesson(${classNumber}, '${subject}', ${lessonNumber})`
            )}


            ${button(
                "⬅️ Back to Lessons",
                `openSubject('${subject}', ${classNumber})`,
                "action-button back-button"
            )}

        </section>

    `;


    scrollToContent();

}


/* ---------- COMPLETE LESSON ---------- */

function completeLesson(
    classNumber,
    subject,
    lessonNumber
) {

    addPoints(10);


    alert(
        "🎉 Lesson completed!\n\n" +
        "+10 Points"
    );


    openLesson(
        subject,
        classNumber,
        lessonNumber
    );

}


/* ---------- POINTS ---------- */

function addPoints(amount) {

    points += amount;


    localStorage.setItem(
        "achieversPoints",
        points
    );

}


/* ---------- PROGRESS ---------- */

function showProgress() {

    contentBox().innerHTML = `

        <section>

            <h2>
                🏆 My Progress
            </h2>


            <div class="points-box">

                <div>
                    ⭐ Your Points
                </div>

                <div class="points-number">
                    ${points}
                </div>

            </div>


            <p>
                Keep learning and earn more
                points!
            </p>


            ${button(
                "🏠 Home",
                "goHome()",
                "action-button back-button"
            )}

        </section>

    `;


    scrollToContent();

}


/* ---------- STUDY MATERIALS ---------- */

function showMaterials() {

    contentBox().innerHTML = `

        <section>

            <h2>
                📖 Study Materials
            </h2>


            <div class="info-card">

                <h3>
                    📚 Class-wise Materials
                </h3>

                <p>
                    Select a class to access
                    your study materials.
                </p>

            </div>


            ${button(
                "📚 Browse Classes",
                "showClasses()"
            )}


            <div class="info-card">

                <h3>
                    🚧 More Coming
                </h3>

                <p>
                    Notes, exercises and other
                    learning resources can be
                    added here.
                </p>

            </div>


            ${button(
                "🏠 Home",
                "goHome()",
                "action-button back-button"
            )}

        </section>

    `;


    scrollToContent();

}


/* ---------- QUIZ ---------- */

function showQuiz() {

    contentBox().innerHTML = `

        <section>

            <h2>
                📝 Quick Quiz
            </h2>


            <div class="quiz-question">

                <h3>
                    Question 1
                </h3>

                <p>
                    What is 5 + 5?
                </p>


                ${button(
                    "10",
                    "answerQuiz(this, true)",
                    "action-button quiz-option"
                )}


                ${button(
                    "15",
                    "answerQuiz(this, false)",
                    "action-button quiz-option"
                )}


                ${button(
                    "20",
                    "answerQuiz(this, false)",
                    "action-button quiz-option"
                )}

            </div>


            ${button(
                "🏠 Home",
                "goHome()",
                "action-button back-button"
            )}

        </section>

    `;


    scrollToContent();

}


/* ---------- QUIZ ANSWER ---------- */

function answerQuiz(
    element,
    correct
) {

    if (correct) {

        element.classList.add(
            "correct"
        );

        element.innerText =
            "✅ Correct! +10 Points";


        addPoints(10);


    } else {

        element.classList.add(
            "wrong"
        );

        element.innerText =
            "❌ Incorrect";

    }

}
