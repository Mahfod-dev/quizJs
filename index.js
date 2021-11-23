const quizData = [
	{
		question: 'Quelle est le langage qui fonctionne sur le navigateur?',
		a: 'Java',
		b: 'C',
		c: 'Python',
		d: 'JavaScript',
		correct: 'd',
	},
	{
		question: 'Que veut dire CSS?',
		a: 'Central Style Sheets',
		b: 'Cascading Style Sheets',
		c: 'Cascading Simple Sheets',
		d: 'Cars SUVs Sailboats',
		correct: 'b',
	},
	{
		question: 'Que veut dire HTML?',
		a: 'Hypertext Markup Language',
		b: 'Hypertext Markdown Language',
		c: 'Hyperloop Machine Language',
		d: 'Helicopters Terminals Motorboats Lamborginis',
		correct: 'a',
	},
	{
		question: 'En quelle année a éte créé Javascript?',
		a: '1996',
		b: '1995',
		c: '1994',
		d: 'none of the above',
		correct: 'b',
	},
]

let currentQuiz = 0
let score = 0

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

function loadQuiz() {
	const currentQuizData = quizData[currentQuiz]

	questionEl.innerText = currentQuizData.question

	a_text.innerText = currentQuizData.a
	b_text.innerText = currentQuizData.b
	c_text.innerText = currentQuizData.c
	d_text.innerText = currentQuizData.d
}

loadQuiz()

function deselectAnswers() {
	deselectAnswers()
	answerEls.forEach((answerEl) => (answerEl.checked = false))
}

const getSelected = () => {
	let answer

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id
		}
	})
	console.log(answer)
	return answer
}

submitBtn.addEventListener('click', () => {
	const answer = getSelected()

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++
		}

		currentQuiz++

		if (currentQuiz < quizData.length) {
			loadQuiz()
		} else {
			quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
		}
	}
})





