/* =========================================
   ACHIEVERS HUB
   MAIN JAVASCRIPT
========================================= */


/* POINTS */

let points =
    Number(localStorage.getItem("achieversPoints")) || 0;


/* HELPERS */

function contentBox() {
    return document.getElementById("appContent");
}


function scrollToContent() {

    setTimeout(function () {

        contentBox().scrollIntoView({
            behavior: "smooth"
        });

    }, 100);

}


function button(
    text,
    action,
    className = "action-button"
) {

    return `
        <button
            class="${className}"
            onclick="${action}">
            ${text}
        </button>
    `;
}


/* HOME */

function goHome() {

    contentBox().innerHTML = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* CLASSES */

function showClasses() {

    let html = `
        <section>

            <h2>📚 Classes 1–12</h2>

            <p>Select your class</p>
    `;


    for (let i = 1; i <= 12; i++) {

        html += button(
            `📘 Class ${i}`,
            `openClass(${i})`,
            "action-button class-button"
        );

    }


    html += button(
        "🏠 Home",
        "goHome()",
        "action-button back-button"
    );


    html += `</section>`;


    contentBox().innerHTML = html;

    scrollToContent();
}


/* OPEN CLASS */

function openClass(classNumber) {

    const classData =
        curriculum[classNumber];


    if (!classData) {

        contentBox().innerHTML = `

            <section>

                <h2>
                    📚 Class ${classNumber}
                </h2>

                <div class="info-card">

                    <h3>🚧 Coming Soon</h3>

                    <p>
                        Curriculum is not available yet.
                    </p>

                </div>

                ${button(
                    "⬅️ Back",
                    "showClasses()",
                    "action-button back-button"
                )}

            </section>
        `;

        scrollToContent();

        return;
    }


    let html = `

        <section>

            <h2>
                📚 Class ${classNumber}
            </h2>

            <p>
                Select a subject
            </p>
    `;


    Object.keys(classData).forEach(
        function(subject) {

            html += button(
                `📖 ${subject}`,
                `openSubject('${subject}', ${classNumber})`,
                "action-button subject-button"
            );

        }
    );


    html += button(
        "⬅️ Back to Classes",
        "showClasses()",
        "action-button back-button"
    );


    html += `</section>`;


    contentBox().innerHTML = html;

    scrollToContent();
}


/* SUBJECT */

function openSubject(
    subject,
    classNumber
) {

    const subjectData =
        curriculum[classNumber][subject];


    if (!subjectData) {

        alert("Subject not found.");

        return;
    }


    const chapters =
        subjectData.chapters || [];


    let html = `

        <section>

            <h2>
                📖 ${subject}
            </h2>

            <p>
                Class ${classNumber}
            </p>

            <div class="info-card">

                <h3>📚 Book</h3>

                <p>
                    ${subjectData.book}
                </p>

            </div>

            <h3>
                📚 Chapters
            </h3>
    `;


    if (chapters.length === 0) {

        html += `

            <div class="info-card">

                <h3>
                    🚧 Coming Soon
                </h3>

                <p>
                    Chapters will be added soon.
                </p>

            </div>
        `;

    } else {

        chapters.forEach(
            function(chapter, index) {

                html += button(
                    `📖 ${chapter.title}`,
                    `openCurriculumLesson(
                        ${classNumber},
                        '${subject}',
                        ${index}
                    )`,
                    "action-button lesson-button"
                );

            }
        );

    }


    html += button(
        "⬅️ Back to Subjects",
        `openClass(${classNumber})`,
        "action-button back-button"
    );


    html += `</section>`;


    contentBox().innerHTML = html;

    scrollToContent();
}


/* CHAPTER */

function openCurriculumLesson(
    classNumber,
    subject,
    chapterIndex
) {

    const subjectData =
        curriculum[classNumber][subject];


    const chapter =
        subjectData.chapters[chapterIndex];


    if (!chapter) {

        alert("Chapter not found.");

        return;
    }


    contentBox().innerHTML = `

        <section>

            <h2>
                📖 ${chapter.title}
            </h2>

            <p>
                Class ${classNumber}
                • ${subject}
            </p>


            <div class="info-card">

                <h3>
                    📚 Study Notes
                </h3>

                <p>
                    ${chapter.content}
                </p>

            </div>


            <div class="info-card">

                <h3>
                    💡 Learning Tip
                </h3>

                <p>
                    Read the lesson carefully
                    and practise the examples.
                </p>

            </div>


            ${button(
                "⭐ Complete Chapter +10 Points",
                `completeChapter(
                    ${classNumber},
                    '${subject}',
                    ${chapterIndex}
                )`
            )}


            ${button(
                "⬅️ Back to Chapters",
                `openSubject(
                    '${subject}',
                    ${classNumber}
                )`,
                "action-button back-button"
            )}

        </section>
    `;


    scrollToContent();
}


/* COMPLETE */

function completeChapter(
    classNumber,
    subject,
    chapterIndex
) {

    addPoints(10);


    alert(
        "🎉 Chapter completed!\n\n+10 Points ⭐"
    );


    openCurriculumLesson(
        classNumber,
        subject,
        chapterIndex
    );
}


/* POINTS */

function addPoints(amount) {

    points += amount;


    localStorage.setItem(
        "achieversPoints",
        points
    );
}


/* PROGRESS */

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


            <div class="info-card">

                <h3>
                    🎯 Keep Going!
                </h3>

                <p>
                    Complete chapters and
                    quizzes to earn points.
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


/* STUDY MATERIALS */

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


            ${button(
                "🏠 Home",
                "goHome()",
                "action-button back-button"
            )}

        </section>
    `;


    scrollToContent();
}


/* QUIZ */

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


/* QUIZ ANSWER */

function answerQuiz(
    element,
    correct
) {

    if (correct) {

        element.classList.add("correct");

        element.innerText =
            "✅ Correct! +10 Points";

        addPoints(10);

        element.disabled = true;

    } else {

        element.classList.add("wrong");

        element.innerText =
            "❌ Incorrect";

        element.disabled = true;

    }
   }
