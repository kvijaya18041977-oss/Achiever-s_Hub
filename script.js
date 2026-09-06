/* =========================================
   ACHIEVERS HUB
   CHAPTER-WISE QUIZ SYSTEM
========================================= */

let points = Number(localStorage.getItem("achieversPoints")) || 0;

function contentBox() {
    return document.getElementById("appContent");
}

function scrollToContent() {
    setTimeout(() => {
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

    const classData = curriculum[classNumber];

    if (!classData) {
        alert("Class not found.");
        return;
    }

    if (Object.keys(classData).length === 0) {

        contentBox().innerHTML = `
            <section>
                <h2>📚 Class ${classNumber}</h2>

                <div class="info-card">
                    <h3>🚧 Coming Soon</h3>
                    <p>
                        Curriculum for this class will be
                        added soon.
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
            <h2>📚 Class ${classNumber}</h2>
            <p>Select a subject</p>
    `;

    Object.keys(classData).forEach(subject => {

        html += button(
            `📖 ${subject}`,
            `openSubject('${subject}', ${classNumber})`,
            "action-button subject-button"
        );

    });

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

function openSubject(subject, classNumber) {

    const subjectData =
        curriculum[classNumber][subject];

    const chapters =
        subjectData.chapters || [];

    let html = `
        <section>

            <h2>📖 ${subject}</h2>

            <p>Class ${classNumber}</p>

            <div class="info-card">
                <h3>📚 Book</h3>
                <p>${subjectData.book}</p>
            </div>

            <h3>📚 Chapters</h3>
    `;


    if (chapters.length === 0) {

        html += `
            <div class="info-card">
                <h3>🚧 Coming Soon</h3>
                <p>
                    Chapters will be added soon.
                </p>
            </div>
        `;

    } else {

        chapters.forEach((chapter, index) => {

            html += `
                <div class="info-card">

                    <h3>
                        📖 ${chapter.title}
                    </h3>

                    ${button(
                        "📚 Study Chapter",
                        `openCurriculumLesson(
                            ${classNumber},
                            '${subject}',
                            ${index}
                        )`
                    )}

                    ${button(
                        "📝 Take Quiz",
                        `openChapterQuiz(
                            ${classNumber},
                            '${subject}',
                            ${index}
                        )`,
                        "action-button subject-button"
                    )}

                </div>
            `;

        });
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


/* STUDY CHAPTER */

function openCurriculumLesson(
    classNumber,
    subject,
    chapterIndex
) {

    const chapter =
        curriculum[classNumber][subject]
        .chapters[chapterIndex];

    if (!chapter) {
        alert("Chapter not found.");
        return;
    }

    contentBox().innerHTML = `

        <section>

            <h2>📖 ${chapter.title}</h2>

            <p>
                Class ${classNumber} • ${subject}
            </p>

            <div class="info-card">
                ${chapter.content}
            </div>

            ${button(
                "📝 Take Chapter Quiz",
                `openChapterQuiz(
                    ${classNumber},
                    '${subject}',
                    ${chapterIndex}
                )`,
                "action-button subject-button"
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


/* =========================================
   CHAPTER QUIZ
========================================= */

function openChapterQuiz(
    classNumber,
    subject,
    chapterIndex
) {

    const chapter =
        curriculum[classNumber][subject]
        .chapters[chapterIndex];

    if (!chapter) {
        alert("Chapter not found.");
        return;
    }


    /* QUESTIONS */

    const questions =
        chapter.quiz || [];


    if (questions.length === 0) {

        contentBox().innerHTML = `

            <section>

                <h2>📝 Chapter Quiz</h2>

                <div class="info-card">

                    <h3>🚧 Quiz Coming Soon</h3>

                    <p>
                        Questions for this chapter
                        will be added soon.
                    </p>

                </div>

                ${button(
                    "⬅️ Back to Chapter",
                    `openCurriculumLesson(
                        ${classNumber},
                        '${subject}',
                        ${chapterIndex}
                    )`,
                    "action-button back-button"
                )}

            </section>
        `;

        scrollToContent();
        return;
    }


    let html = `

        <section>

            <h2>📝 ${chapter.title} Quiz</h2>

            <p>
                Answer all questions
            </p>

    `;


    questions.forEach((question, index) => {

        html += `

            <div class="quiz-question">

                <h3>
                    Question ${index + 1}
                </h3>

                <p>
                    ${question.question}
                </p>

        `;


        question.options.forEach(
            (option, optionIndex) => {

                html += `

                    <button
                        class="action-button quiz-option"
                        onclick="checkAnswer(
                            this,
                            ${classNumber},
                            '${subject}',
                            ${chapterIndex},
                            ${index},
                            ${optionIndex}
                        )">

                        ${option}

                    </button>

                `;

            }
        );


        html += `</div>`;

    });


    html += `

        <div class="points-box">

            ⭐ Current Points

            <div class="points-number">
                ${points}
            </div>

        </div>

        ${button(
            "⬅️ Back to Chapter",
            `openCurriculumLesson(
                ${classNumber},
                '${subject}',
                ${chapterIndex}
            )`,
            "action-button back-button"
        )}

        </section>
    `;


    contentBox().innerHTML = html;

    scrollToContent();
}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(
    element,
    classNumber,
    subject,
    chapterIndex,
    questionIndex,
    selectedIndex
) {

    const question =
        curriculum[classNumber][subject]
        .chapters[chapterIndex]
        .quiz[questionIndex];


    const allButtons =
        element.parentElement
        .querySelectorAll(".quiz-option");


    /* Prevent answering twice */

    allButtons.forEach(btn => {
        btn.disabled = true;
    });


    if (selectedIndex === question.answer) {

        element.classList.add("correct");

        element.innerText =
            "✅ Correct! +10 Points";

        addPoints(10);

    } else {

        element.classList.add("wrong");

        element.innerText =
            "❌ Incorrect";

        allButtons[
            question.answer
        ].classList.add("correct");

    }


    /* Show updated points */

    const pointsNumber =
        document.querySelector(
            ".points-number"
        );

    if (pointsNumber) {
        pointsNumber.innerText = points;
    }
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

            <h2>🏆 My Progress</h2>

            <div class="points-box">

                ⭐ Your Points

                <div class="points-number">
                    ${points}
                </div>

            </div>

            <div class="info-card">

                <h3>🎯 Keep Going!</h3>

                <p>
                    Complete chapters and quizzes
                    to earn points.
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

            <h2>📖 Study Materials</h2>

            <div class="info-card">

                <h3>📚 Class-wise Materials</h3>

                <p>
                    Select a class to access
                    study materials.
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


/* GENERAL QUIZ */

function showQuiz() {

    contentBox().innerHTML = `

        <section>

            <h2>📝 Quick Quiz</h2>

            <div class="quiz-question">

                <h3>Question 1</h3>

                <p>What is 5 + 5?</p>

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


function answerQuiz(element, correct) {

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
