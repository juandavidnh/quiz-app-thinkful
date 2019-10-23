'user strict';

const STORE = [
    //1
    {questionnaire:[
    {
    id: cuid(), 
    question: "What is the scientific name of the domestic cat?", 
    choices: ["Felis Catus", 
        "Felis Familiaris", 
        "Felinus Alegris", 
        "Felis Silvestris"],
    answer: "Felis Catus",
    correctMes: `Correct! Felis Catus is the scientific name of 
    the domestic cat. Felis means “cat” in latin, whereas catus 
    means “cunning, sly, crafty."`,
    inCorrMes:`Incorrect! The right answer is Felis Catus 
    which means cunning cat in latin.`,

    },

    //2
    {
    id: cuid(), 
    question: "What’s the average lifespan of a cat?", 
    choices: ["5 years", 
            "8 years", 
            "15 years", 
            "20 years"],
    answer: "15 years",
    correctMes: `Correct! In 2018, the average lifespan of a pet cat 
    was 15 years old. Just 23 years ago the average lifespan was 
    below 10. Widespread sterilization, has improved cats’ health and 
    overall quality of life.`,
    inCorrMes: `Incorrect! In 2018, the average lifespan of a pet cat 
    was 15 years old. Just 23 years ago the average lifespan was 
    below 10. Widespread sterilization, has improved cats’ health and 
    overall quality of life.`,
    },

    //3
    {
    id: cuid(), 
    question: "Where’s the earliest evidence of cat domestication?", 
    choices: ["Poland", 
        "Argentina", 
        "Egypt", 
        "Cyprus"],
    answer: "Cyprus",
    correctMes: `Correct! The earliest indication of cat taming was
    found in Cyprus, where a cat skeleton from 7,500 BC was excavated 
    next to a human.`,
    inCorrMes:`Incorrect! Contrary to popular belief, Egyptians were 
    not the first ones to domesticate cats. The earliest indication 
    of cat taming was found in Cyprus, where a cat skeleton from 
    7,500 BC was excavated next to a human.`,
    
    },

    //4
    {
    id: cuid(), 
    question: "On average, how many hours per day do cats sleep?", 
    choices: ["3-4 hours", 
            "13-14 hours", 
            "8 hours", 
            "18-20 hours"],
    answer: "13-14 hours",
    correctMes: `Correct! Cats love to sleep! The average cat sleeps 
    13-14 hours but there are some that sleep up to 20 hours per day.`,
    inCorrMes:`Incorrect! The average cat sleeps 13-14 hours but 
    there are some that sleep up to 20 hours per day.`,
    
    },

    //5
    {
    id: cuid(), 
    question: "In Marvel Comics, what is the name of the alien species that resembles cats?", 
    choices: ["Lioncow", 
            "Makis", 
            "Starlord", 
            "Flerken"],
    answer: "Flerken",
    correctMes: `Correct! Flerkens are alien creatures that look 
    like cats and behave like cats, but unlike cats, flerkens have a 
    few special abilities such as ejecting giant tentacles from their 
    mouths and traveling across dimensions.`,
    inCorrMes: `Incorrect! Flerkens is the right answer. They are 
    alien creatures that look like cats and behave like cats, but 
    unlike cats, flerkens have a few special abilities such as 
    ejecting giant tentacles from their mouths and traveling across 
    dimensions.`,
    
    },
    ]},
    {correct: 0},
    {questionNumber: 1}
]


function renderInitialQuestion(){
    $(main).on('click', '.welcome-button', (function() {
        this.html(`
<form action="/question2.html" >
    <legend class = "question">What is the scientific name of the domestic cat?</legend>
    <input type="radio" name="question-1" id="ans-q1-1" value="0" checked>
    <label for = "ans-q1-1">Felis Catus</label>
    <br>
    <input type="radio" name="question-1" id="ans-q1-2" value="0">
    <label for = "ans-q1-2">Felis Familiaris</label>
    <br>
    <input type="radio" name="question-1" id="ans-q1-3" value="0">
    <label for = "ans-q1-3">Felinus Alegris</label>
    <br>
    <input type="radio" name="question-1" id="ans-q1-3" value="0">
    <label for = "ans-q1-4">Felis Silvestris</label>
    <br>
</form>
<section class="button">
    <a  href="question2.html">Submit</a>
</section>`)
    }),)}


renderInitialQuestion();

