'user strict';

const STORE = [
    {
    //1
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
]

const counter = {
    correct: 0,
    questionNumber: 1,
}



function generateQuestion(item){
    return `
    <form action="/question2.html" method="POST">
        <legend class = "question">${item.question}</legend>
        <input type="radio" name="question-${counter.questionNumber}" id="ans-q${counter.questionNumber}-1" value="0" checked required>
        <label for = "ans-q${counter.questionNumber}-1">${item.choices[0]}</label>
        <br>
        <input type="radio" name="question-${counter.questionNumber}" id="ans-q${counter.questionNumber}-2" value="0">
        <label for = "ans-q${counter.questionNumber}-2">${item.choices[1]}</label>
        <br>
        <input type="radio" name="question-${counter.questionNumber}" id="ans-q${counter.questionNumber}-3" value="0">
        <label for = "ans-q${counter.questionNumber}-3">${item.choices[2]}</label>
        <br>
        <input type="radio" name="question-${counter.questionNumber}" id="ans-q${counter.questionNumber}-4" value="0">
        <label for = "ans-q${counter.questionNumber}-4">${item.choices[3]}</label>
        <br>
        <button class="submit-button" type="submit">Submit</button>
    </form>`
}




function renderQuestion(){
    $('main').on('click', '.submit-button', function(event) {
        event.preventDefault();
        console.log("click welcome working");
        $(this).closest('main').html(generateQuestion(STORE[counter.questionNumber - 1]));
        counter.questionNumber++;
    });
    }

function renderQuestionNumber(){}

function evalCorrect(selectAnswer){
    if(selectAnswer === STORE[counter.questionNumber-1].answer){
        return true;
    }else{
        return false;
    }
}

function scoreCount(answerBool){
    if(answerBool === true){
        counter.correct++;
    }
}

function renderScore(){}

function renderPopUp(){}

function handleQuestionnaire(){
    renderQuestion();
    renderQuestionNumber();
    renderScore();
    renderPopUp();
}

$(handleQuestionnaire);