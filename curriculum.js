/* =========================================
   ACHIEVERS HUB
   CLASS 10 MATHEMATICS
   CHAPTER-WISE QUIZZES
========================================= */

const curriculum = {

    /* Classes 1–9 */
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},


    /* =====================================
       CLASS 10
    ===================================== */

    10: {

        /* ================================
           MATHEMATICS
        ================================= */

        "Mathematics": {

            book: "Class 10 Mathematics",

            chapters: [

                /* CHAPTER 1 */

                {
                    title: "1. Real Numbers",

                    content: `
                        <h3>📚 Study Notes</h3>

                        <p>
                        Real numbers include rational and irrational numbers.
                        </p>

                        <p>
                        Euclid's division algorithm can be used
                        to find the HCF of two positive integers.
                        </p>

                        <h3>💡 Key Point</h3>

                        <p>
                        Every rational number can be written in
                        the form p/q, where q ≠ 0.
                        </p>
                    `,

                    quiz: [

                        {
                            question: "Which of the following is a rational number?",
                            options: [
                                "√2",
                                "3/4",
                                "√5",
                                "π"
                            ],
                            answer: 1
                        },

                        {
                            question: "What is the HCF of 12 and 18?",
                            options: [
                                "2",
                                "3",
                                "6",
                                "9"
                            ],
                            answer: 2
                        },

                        {
                            question: "Which algorithm is used to find HCF?",
                            options: [
                                "Euclid's division algorithm",
                                "Sorting algorithm",
                                "Search algorithm",
                                "None"
                            ],
                            answer: 0
                        }

                    ]
                },


                /* CHAPTER 2 */

                {
                    title: "2. Polynomials",

                    content: `
                        <h3>📚 Study Notes</h3>

                        <p>
                        A polynomial is an algebraic expression
                        containing variables and coefficients.
                        </p>

                        <p>
                        The values of x for which a polynomial
                        becomes zero are called its zeroes.
                        </p>
                    `,

                    quiz: [

                        {
                            question: "What is a zero of a polynomial?",
                            options: [
                                "A value that makes the polynomial zero",
                                "The highest coefficient",
                                "The constant term",
                                "The degree"
                            ],
                            answer: 0
                        },

                        {
                            question: "What is the degree of 3x² + 2x + 1?",
                            options: [
                                "1",
                                "2",
                                "3",
                                "0"
                            ],
                            answer: 1
                        },

                        {
                            question: "A polynomial of degree 2 is called:",
                            options: [
                                "Linear",
                                "Quadratic",
                                "Cubic",
                                "Constant"
                            ],
                            answer: 1
                        }

                    ]
                },


                /* CHAPTER 3 */

                {
                    title: "3. Pair of Linear Equations",

                    content: `
                        <h3>📚 Study Notes</h3>

                        <p>
                        A pair of linear equations contains
                        two equations with two variables.
                        </p>

                        <p>
                        They can be solved using substitution,
                        elimination and graphical methods.
                        </p>
                    `,

                    quiz: [

                        {
                            question: "How many variables are generally used?",
                            options: [
                                "1",
                                "2",
                                "3",
                                "4"
                            ],
                            answer: 1
                        },

                        {
                            question: "Which is a method of solving linear equations?",
                            options: [
                                "Substitution",
                                "Integration",
                                "Differentiation",
                                "Factorial"
                            ],
                            answer: 0
                        },

                        {
                            question: "The graph of a linear equation in two variables is a:",
                            options: [
                                "Circle",
                                "Parabola",
                                "Straight line",
                                "Triangle"
                            ],
                            answer: 2
                        }

                    ]
                },


                /* CHAPTER 4 */

                {
                    title: "4. Quadratic Equations",

                    content: `
                        <h3>📚 Study Notes</h3>

                        <p>
                        A quadratic equation is generally written as:
                        </p>

                        <p>
                        ax² + bx + c = 0
                        </p>

                        <p>
                        where a ≠ 0.
                        </p>
                    `,

                    quiz: [

                        {
                            question: "What is the highest power in a quadratic equation?",
                            options: [
                                "1",
                                "2",
                                "3",
                                "4"
                            ],
                            answer: 1
                        },

                        {
                            question: "Which is the general form of a quadratic equation?",
                            options: [
                                "ax + b = 0",
                                "ax² + bx + c = 0",
                                "ax³ + bx = 0",
                                "a + b = c"
                            ],
                            answer: 1
                        },

                        {
                            question: "If the discriminant is positive, the roots are:",
                            options: [
                                "Real and distinct",
                                "Equal",
                                "Not real",
                                "Zero"
                            ],
                            answer: 0
                        }

                    ]
                },


                /* CHAPTER 5 */

                {
                    title: "5. Arithmetic Progressions",

                    content: `
                        <h3>📚 Study Notes</h3>

                        <p>
                        An arithmetic progression is a sequence
                        in which the difference between consecutive
                        terms is constant.
                        </p>

                        <p>
                        nth term:
                        aₙ = a + (n − 1)d
                        </p>
                    `,

                    quiz: [

                        {
                            question: "What is the common difference of 2, 5, 8, 11?",
                            options: [
                                "2",
                                "3",
                                "4",
                                "5"
                            ],
                            answer: 1
                        },

                        {
                            question: "What is the first term of 4, 7, 10?",
                            options: [
                                "4",
                                "7",
                                "10",
                                "3"
                            ],
                            answer: 0
                        },

                        {
                            question: "The nth term of an AP is:",
                            options: [
                                "a + nd",
                                "a + (n − 1)d",
                                "a − nd",
                                "an + d"
                            ],
                            answer: 1
                        }

                    ]
                },


                /* CHAPTER 6 */

                {
                    title: "6. Triangles",

                    content: `
                        <h3>📚 Study Notes</h3>

                        <p>
                        Triangles are studied using similarity,
                        proportionality and their properties.
                        </p>

                        <p>
                        Similar triangles have the same shape,
                        although their sizes may be different.
                        </p>
                    `,

                    quiz: [

                        {
                            question: "How many sides does a triangle have?",
                            options: [
                                "2",
                                "3",
                                "4",
                                "5"
                            ],
                            answer: 1
                        },

                        {
                            question: "Similar triangles have the same:",
                            options: [
                                "Shape",
                                "Area always",
                                "Perimeter always",
                                "Size always"
                            ],
                            answer: 0
                        },

                        {
                            question: "The sum of angles of a triangle is:",
                            options: [
                                "90°",
                                "180°",
                                "270°",
                                "360°"
                            ],
                            answer: 1
                        }

                    ]
                },


                /* CHAPTER 7 */

                {
                    title: "7. Coordinate Geometry",

                    content: `
                        <h3>📚 Study Notes</h3>

                        <p>
                        Coordinate geometry uses the Cartesian plane
                        to study geometric figures.
                        </p>

                        <p>
                        A point is represented as (x, y).
                        </p>
                    `,

                    quiz: [

                        {
                            question: "A point is represented as:",
                            options: [
                                "(x, y)",
                                "(x + y)",
                                "x/y",
                                "xy"
                            ],
                            answer: 0
                        },

                        {
                            question: "The horizontal axis is called:",
                            options: [
                                "Y-axis",
                                "X-axis",
                                "Z-axis",
                                "Origin"
                            ],
                            answer: 1
                        },

                        {
                            question: "The point (0,0) is called:",
                            options: [
                                "Axis",
                                "Quadrant",
                                "Origin",
                                "Vertex"
                            ],
                            answer: 2
                        }

                    ]
                },


                /* CHAPTER 8 */

                {
                    title: "8. Introduction to Trigonometry",

                    content: `
                        <h3>📚 Study Notes</h3>

                        <p>
                        Trigonometry studies the relationship between
                        angles and sides of a right-angled triangle.
                        </p>

                        <p>
                        sin θ = Opposite / Hypotenuse
                        </p>

                        <p>
                        cos θ = Adjacent / Hypotenuse
                        </p>

                        <p>
                        tan θ = Opposite / Adjacent
                        </p>
                    `,

                    quiz: [

                        {
                            question: "sin θ is equal to:",
                            options: [
                                "Adjacent/Hypotenuse",
                                "Opposite/Hypotenuse",
                                "Opposite/Adjacent",
                                "Hypotenuse/Opposite"
                            ],
                            answer: 1
                        },

                        {
                            question: "cos θ is equal to:",
                            options: [
                                "Opposite/Hypotenuse",
                                "Adjacent/Hypotenuse",
                                "Opposite/Adjacent",
                                "Hypotenuse/Adjacent"
                            ],
                            answer: 1
                        },

                        {
                            question: "tan θ is equal to:",
                            options: [
                                "Opposite/Adjacent",
                                "Adjacent/Opposite",
                                "Opposite/Hypotenuse",
                                "Hypotenuse/Adjacent"
                            ],
                            answer: 0
                        }

                    ]
                },


                /* CHAPTER 9 */

                {
                    title: "9. Some Applications of Trigonometry",

                    content: `
                        <h3>📚 Study Notes</h3>

                        <p>
                        Trigonometry can be used to find
                        heights and distances.
                        </p>

                        <p>
                        Angles of elevation and depression
                        are commonly used in these problems.
                        </p>
                    `,

                    quiz: [

                        {
                            question: "Trigonometry can be used to find:",
                            options: [
                                "Heights and distances",
                                "Only mass",
                                "Only temperature",
                                "Only time"
                            ],
                            answer: 0
                        },

                        {
                            question: "The angle looking upward from a horizontal line is called:",
                            options: [
                                "Angle of elevation",
                                "Angle of depression",
                                "Right angle",
                                "Reflex angle"
                            ],
                            answer: 0
                        },

                        {
                            question: "The angle looking downward is called:",
                            options: [
                                "Elevation",
                                "Depression",
                                "Acute",
                                "Straight"
                            ],
                            answer: 1
                        }

                    ]
                },


                /* CHAPTER 10 */

                {
                    title: "10. Circles",

                    content: `
                        <h3>📚 Study Notes</h3>

                        <p>
                        A circle is the set of all points
                        at a fixed distance from a fixed point.
                        </p>

                        <p>
                        The fixed point is called the centre.
                        </p>
                    `,

                    quiz: [

                        {
                            question: "The fixed point of a circle is called:",
                            options: [
                                "Radius",
                                "Centre",
                                "Chord",
                                "Arc"
                            ],
                            answer: 1
                        },

                        {
                            question: "A line segment joining the centre to a point on the circle is:",
                            options: [
                                "Diameter",
                                "Radius",
                                "Chord",
                                "Tangent"
                            ],
                            answer: 1
                        },

                        {
                            question: "A diameter is equal to:",
                            options: [
                                "Radius",
                                "2 × Radius",
                                "3 × Radius",
                                "Radius/2"
                            ],
                            answer: 1
                        }

                    ]
                },


                /* CHAPTER 11 */

                {
                    title: "11. Areas Related to Circles",

                    content: `
                        <h3>📚 Study Notes</h3>

                        <p>
                        Areas and perimeters of circles,
                        sectors and segme
