const questions = [
    {
      question: "What's your partner's favorite TV show?",
      id: 1,
      category: "Warm Up Questions"
    },
    {
      question: "What's your partner's favorite book?",
      id: 2,
      category: "Warm Up Questions"
    },
    {
      question: "What food does your partner like to cook?",
      id: 3,
      category: "Warm Up Questions"
    },
    {
      question: "What's their favorite color?",
      id: 4,
      category: "Warm Up Questions"
    },
    {
      question: "Where did you two meet?",
      id: 5,
      category: "Warm Up Questions"
    },
    {
      question: "What color are their eyes?",
      id: 6,
      category: "Warm Up Questions"
    },
    {
      question: "What does your partner do at work?",
      id: 7,
      category: "Warm Up Questions"
    },
    {
      question: "What's your partner's go-so social network?",
      id: 8,
      category: "Warm Up Questions"
    },
    {
      question: "What's your partner's favorite dessert?",
      id: 9,
      category: "Warm Up Questions"
    },
    {
      question: "What does your S.O. like to do in their spare time?",
      id: 10,
      category: "Warm Up Questions"
    },
    {
      question: "What's your partner's favorite movie?",
      id: 11,
      category: "Warm Up Questions"
    },
    {
      question: "What's their favorite takeout meal?",
      id: 12,
      category: "Warm Up Questions"
    },
    {
      question: "What makes them laugh the hardest?",
      id: 13,
      category: "Warm Up Questions"
    },
    {
      question: "Where's your partner's dream vacation destination?",
      id: 14,
      category: "Warm Up Questions"
    },
    {
      question: "Do they prefer a cozy night in or a wild night out?",
      id: 15,
      category: "Warm Up Questions"
    },
    {
      question: "What's your partner's ideal Saturday?",
      id: 16,
      category: "Warm Up Questions"
    },
    {
      question: "Do they have a go-to karaoke song?",
      id: 17,
      category: "Warm Up Questions"
    },
    {
      question: "Does your partner sleep in or wake up early?",
      id: 18,
      category: "Warm Up Questions"
    },
    {
      question: "Do they have any tattoos?",
      id: 19,
      category: "Warm Up Questions"
    },
    {
      question: "Are they more into salty or sweet snacks?",
      id: 20,
      category: "Warm Up Questions"
    },
    {
      question: "What's your partner's guilty pleasure?",
      id: 21,
      category: "Warm Up Questions"
    },
    {
      question: "What is your partner's biggest fear?",
      id: 22,
      category: "Warm Up Questions"
    },
    {
      question: "What does your partner want their life to look like in five years?",
      id: 23,
      category: "Questions about the Future"
    },
    {
      question: "Where do they see themselves living in an ideal world?",
      id: 24,
      category: "Questions about the Future"
    },
    {
      question: "Does your partner want to move around a lot in the future, or settle down?",
      id: 25,
      category: "Questions about the Future"
    },
    {
      question: "Would your partner ever relocate to accommodate your job?",
      id: 26,
      category: "Questions about the Future"
    },
    {
      question: "Would your partner ever want a long-distance relationship?",
      id: 27,
      category: "Questions about the Future"
    },
    {
      question: "What's your partner's stance on long-term monogamy?",
      id: 28,
      category: "Questions about the Future"
    },
    {
      question: "What's their five-year plan?",
      id: 29,
      category: "Questions about the Future"
    },
    {
      question: "What are their long-term goals?",
      id: 30,
      category: "Questions about the Future"
    },
    {
      question: "Does your partner want to get married in the future?",
      id: 31,
      category: "Questions about the Future"
    },
    {
      question: "Where would their dream wedding be?",
      id: 32,
      category: "Questions about the Future"
    },
    {
      question: "If they want to get married, what does the wedding look like? Big or small?",
      id: 33,
      category: "Questions about the Future"
    },
    {
      question: "How happy are they with their current work situation?",
      id: 34,
      category: "Questions about the Future"
    },
    {
      question: "How does your partner feel about having kids?",
      id: 35,
      category: "Questions about the Future"
    },
    {
      question: "If your partner wants kids, how soon do they expect to start a family?",
      id: 36,
      category: "Questions about the Future"
    },
    {
      question: "How many children do they want, if any?",
      id: 37,
      category: "Questions about the Future"
    },
    {
      question: "If they do want children, is there anything they want to accomplish (financially or career-wise) before starting a family?",
      id: 38,
      category: "Questions about the Future"
    },
    {
      question: "What role do they want their friends/family to play in your future childrens' lives?",
      id: 39,
      category: "Questions about the Future"
    },
    {
      question: "Does your partner want to own a home one day?",
      id: 40,
      category: "Questions about the Future"
    },
    {
      question: "Does your partner like to plan for the future?",
      id: 41,
      category: "Questions about the Future"
    },
    {
      question: "What kind of adventures does your partner want to have in the future?",
      id: 42,
      category: "Questions about the Future"
    },
    {
      question: "How do they envision your relationship changing or evolving over the years?",
      id: 43,
      category: "Questions about the Future"
    },
    {
      question: "What are your partner's plans for retirement?",
      id: 44,
      category: "Questions about the Future"
    },
    {
      question: "What kind of relationship does your partner have with their parents?",
      id: 45,
      category: "Questions about the Past"
    },
    {
      question: "What kind of relationship does your partner have with their siblings?",
      id: 46,
      category: "Questions about the Past"
    },
    {
      question: "Are they still in touch with any friends from childhood?",
      id: 47,
      category: "Questions about the Past"
    },
    {
      question: "Did they have a positive high school experience?",
      id: 48,
      category: "Questions about the Past"
    },
    {
      question: "Were their parents supportive of their dreams and goals?",
      id: 49,
      category: "Questions about the Past"
    },
    {
      question: "How was their college experience?",
      id: 50,
      category: "Questions about the Past"
    },
    {
      question: "Does your partner get excited about visiting home?",
      id: 51,
      category: "Questions about the Past"
    },
    {
      question: "How did your partner's last relationship end?",
      id: 52,
      category: "Questions about the Past"
    },
    {
      question: "How many past relationships does your partner have?",
      id: 53,
      category: "Questions about the Past"
    },
    {
      question: "How many times has your partner been in love?",
      id: 54,
      category: "Questions about the Past"
    },
    {
      question: "How have those relationships impacted them?",
      id: 55,
      category: "Questions about the Past"
    },
    {
      question: "How does your partner feel about their exes today?",
      id: 56,
      category: "Questions about the Past"
    },
    {
      question: "Is there anything in their past relationship that has made them closed off?",
      id: 57,
      category: "Questions about the Past"
    },
    {
      question: "Do they feel they've been able to maintain positive romantic relationships?",
      id: 58,
      category: "Questions about the Past"
    },
    {
      question: "Do they still keep in touch with any exes?",
      id: 59,
      category: "Questions about the Past"
    },
    {
      question: "What are their biggest relationship fears?",
      id: 60,
      category: "Questions about the Past"
    },
    {
      question: "Have they gone through heartbreak before?",
      id: 61,
      category: "Questions about the Past"
    },
    {
      question: "Have they ever cheated on a partner?",
      id: 62,
      category: "Questions about the Past"
    },
    {
      question: "Have they ever been cheated on?",
      id: 63,
      category: "Questions about the Past"
    },
    {
      question: "Do they have any past experience with mental health issues?",
      id: 64,
      category: "Questions about the Past"
    },
    {
      question: "How does your partner feel about their middle school years?",
      id: 65,
      category: "Questions about the Past"
    },
    {
      question: "What is their favorite childhood memory?",
      id: 66,
      category: "Questions about the Past"
    },
    {
      question: "What was their dream job as a child?",
      id: 67,
      category: "Questions about the Past"
    },
    {
      question: "What does your partner value most in life?",
      id: 68,
      category: "Questions about Values"
    },
    {
      question: "What are your partner's political beliefs?",
      id: 69,
      category: "Questions about Values"
    },
    {
      question: "What cause is most important to your partner?",
      id: 70,
      category: "Questions about Values"
    },
    {
      question: "How important is family to your partner?",
      id: 71,
      category: "Questions about Values"
    },
    {
      question: "Does your partner have close relationships with their siblings?",
      id: 72,
      category: "Questions about Values"
    },
    {
      question: "How much does your partner value physical activity?",
      id: 73,
      category: "Questions about Values"
    },
    {
      question: "What does your partner prefer to do with their time off?",
      id: 74,
      category: "Questions about Values"
    },
    {
      question: "Does your partner like to travel?",
      id: 75,
      category: "Questions about Values"
    },
    {
      question: "How does your partner feel about having pets?",
      id: 76,
      category: "Questions about Values"
    },
    {
      question: "Does your partner donate to charity?",
      id: 77,
      category: "Questions about Values"
    },
    {
      question: "Who are the most important people in your partner's life?",
      id: 78,
      category: "Questions about Values"
    },
    {
      question: "What is your partner's favorite thing about their job?",
      id: 79,
      category: "Questions about Values"
    },
    {
      question: "How does your partner like to spend their money?",
      id: 80,
      category: "Questions about Values"
    },
    {
      question: "How important is religion in your partner's life?",
      id: 81,
      category: "Questions about Values"
    },
    {
      question: "If religion is important, do they plan on making it important in their children's lives, too?",
      id: 82,
      category: "Questions about Values"
    },
    {
      question: "How is your partner fulfilled?",
      id: 83,
      category: "Questions about Values"
    },
    {
      question: "What are their relationship dealbreakers?",
      id: 84,
      category: "Questions about Values"
    },
    {
      question: "Does your partner have any debt?",
      id: 85,
      category: "Questions about Values"
    },
    {
      question: "How does your partner feel about smoking?",
      id: 86,
      category: "Questions about Values"
    },
    {
      question: "How do they feel about therapy?",
      id: 87,
      category: "Questions about Values"
    },
    {
      question: "What are their personal financial goals?",
      id: 88,
      category: "Questions about Values"
    },
    {
      question: "What counts as \"cheating\"?",
      id: 89,
      category: "Questions about Values"
    },
    {
      question: "What parenting style do they envision for their children?",
      id: 90,
      category: "Questions about Values"
    },
    {
      question: "How do they show affection?",
      id: 91,
      category: "Questions about Values"
    },
    {
      question: "Does your partner consider themself an introvert or an extrovert?",
      id: 92,
      category: "Questions about Communication"
    },
    {
      question: "How does your partner prefer to show affection? (Touch? Gifts? Acts of kindness?)",
      id: 93,
      category: "Questions about Communication"
    },
    {
      question: "How does your partner prefer to receive affection?",
      id: 94,
      category: "Questions about Communication"
    },
    {
      question: "Which is more important? words of affirmation or acts of service?",
      id: 95,
      category: "Questions about Communication"
    },
    {
      question: "What does your partner need to feel appreciated?",
      id: 96,
      category: "Questions about Communication"
    },
    {
      question: "How does your partner show appreciation?",
      id: 97,
      category: "Questions about Communication"
    },
    {
      question: "What romantic gestures does your partner appreciate?",
      id: 98,
      category: "Questions about Communication"
    },
    {
      question: "Does your partner easily identify their feelings?",
      id: 99,
      category: "Questions about Communication"
    },
    {
      question: "How do they like to handle conflict?",
      id: 100,
      category: "Questions about Communication"
    },
    {
      question: "How does your partner define an argument?",
      id: 101,
      category: "Questions about Communication"
    },
    {
      question: "What does your partner need after a fight?",
      id: 102,
      category: "Questions about Communication"
    },
    {
      question: "What does your partner like to talk about at the end of each day?",
      id: 103,
      category: "Questions about Communication"
    },
    {
      question: "Is communication important?",
      id: 104,
      category: "Questions about Communication"
    },
    {
      question: "Is physical affection important?",
      id: 105,
      category: "Questions about Communication"
    },
    {
      question: "Does your partner like to communicate via phone? (Text? FaceTime?)",
      id: 106,
      category: "Questions about Communication"
    },
    {
      question: "How does your partner bring up uncomfortable topics?",
      id: 107,
      category: "Questions about Communication"
    },
    {
      question: "What makes your partner angry?",
      id: 108,
      category: "Questions about Communication"
    },
    {
      question: "How does your partner respond when they're angry?",
      id: 109,
      category: "Questions about Communication"
    },
    {
      question: "When do they feel most comfortable and able to be vulnerable?",
      id: 110,
      category: "Questions about Communication"
    },
    {
      question: "What coping skills does your partner use when they're upset?",
      id: 111,
      category: "Questions about Communication"
    },
    {
      question: "How does your partner de-stress?",
      id: 112,
      category: "Questions about Communication"
    },
    {
      question: "What peace-keeping skills does your partner have?",
      id: 113,
      category: "Questions about Communication"
    },
    {
      question: "Do they currently struggle with any mental health issues?",
      id: 114,
      category: "Questions about Communication"
    },
    {
      question: "What does good sex look like for your partner?",
      id: 115,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner feel about sexting?",
      id: 116,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "Does your partner enjoy dirty talk?",
      id: 117,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "What's something non-sexual that turns your partner on?",
      id: 118,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "Does your partner enjoy using sex toys?",
      id: 119,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner feel about watching porn?",
      id: 120,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "What's your partner's favorite sex position?",
      id: 121,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner feel about using lube?",
      id: 122,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How adventurous is your partner in the bedroom?",
      id: 123,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner define romance?",
      id: 124,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "What's your partner's biggest fantasy?",
      id: 125,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "What isn't your partner so into in bed?",
      id: 126,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "What kind of lingerie is your partner into?",
      id: 127,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "Is your partner into kink at all?",
      id: 128,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "Does your partner like roleplay?",
      id: 129,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "What is your partner's favorite form of foreplay?",
      id: 130,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "Does your partner prefer to be more dominant or controlled in the bedroom?",
      id: 131,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "What is their favorite time of day to have sex?",
      id: 132,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "Does your partner like shower sex?",
      id: 133,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How often does your partner need/want sex?",
      id: 134,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner feel about sex in public?",
      id: 135,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "Does your partner like to listen to music during sex?",
      id: 136,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner feel about morning vs. night sex?",
      id: 137,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "Does your partner have any specific boundaries in bed?",
      id: 138,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner feel about experimenting with new things in bed?",
      id: 139,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "What's something your partner has always wanted to try but hasn't yet?",
      id: 140,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner feel about discussing sexual fantasies?",
      id: 141,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "Does your partner believe in keeping some things private in the bedroom?",
      id: 142,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner feel about spontaneous vs. planned intimacy?",
      id: 143,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "What's the most memorable intimate moment your partner recalls?",
      id: 144,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner feel about discussing past intimate experiences?",
      id: 145,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "What's something that instantly puts your partner in the mood?",
      id: 146,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner feel about intimacy during times of stress?",
      id: 147,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "Does your partner have any specific turn-offs?",
      id: 148,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner view the connection between emotional and physical intimacy?",
      id: 149,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "What's a romantic gesture that means a lot to your partner?",
      id: 150,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner feel about giving and receiving compliments in intimate moments?",
      id: 151,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "Does your partner have a favorite memory related to intimacy?",
      id: 152,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner feel about discussing boundaries and consent?",
      id: 153,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "What's something your partner wishes you knew about their intimate preferences?",
      id: 154,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner feel about the importance of chemistry in intimacy?",
      id: 155,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "Does your partner believe in the idea of soulmates?",
      id: 156,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "How does your partner define a healthy intimate relationship?",
      id: 157,
      category: "Questions about Sex and Intimacy"
    },
    {
      question: "What's a lesson your partner has learned from past intimate relationships?",
      id: 158,
      category: "Questions about Sex and Intimacy"
    }
]

let currentQuestionIndex = 0;
let shuffledQuestions = [];
let currentTurn = 0; // 0 for Player 1, 1 for Player 2
let playerNames = [];
let scores = [0, 0];
let questionsAsked = [0, 0];

function startGame() {
    playerNames[0] = document.getElementById("player1Name").value || "Player 1";
    playerNames[1] = document.getElementById("player2Name").value || "Player 2";

    document.getElementById("starterArea").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
    shuffledQuestions = shuffleArray([...questions]); // Create a new shuffled array

    // Reset the display
    document.getElementById("questionCard").style.display = "block";
    document.getElementById("questionDisplay").style.display = "none";
    document.getElementById("currentPlayerName").textContent = playerNames[currentTurn];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayQuestion() {
    document.getElementById("currentPlayerName").textContent = playerNames[currentTurn];
    document.getElementById("questionText").textContent = shuffledQuestions[currentQuestionIndex].question;
}

function markAnswer(correct) {
    if (correct) {
        scores[currentTurn]++;
    }

    questionsAsked[currentTurn]++; // increment the number of questions asked for the current player
    currentQuestionIndex++;
    currentTurn = (currentTurn + 1) % 2;

    // Reset the display for the next player
    document.getElementById("questionCard").style.display = "block";
    document.getElementById("questionDisplay").style.display = "none";
    document.getElementById("currentPlayerName").textContent = playerNames[currentTurn];

    // Check if all questions are answered
    if (currentQuestionIndex >= shuffledQuestions.length) {
        endGame();
    }
}

function revealQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length) {
        document.getElementById("questionCard").style.display = "none";
        document.getElementById("questionDisplay").style.display = "block";

        displayQuestion();
    } else {
        endGame();
    }
}


function endGame() {
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("scoreArea").style.display = "block";

    let player1Percentage = ((scores[0] / questionsAsked[0]) * 100).toFixed(2);
    let player2Percentage = ((scores[1] / questionsAsked[1]) * 100).toFixed(2);

    document.getElementById("player1Score").textContent =
        playerNames[0] + ": " + scores[0] + " (" + player1Percentage + "%)";
    document.getElementById("player2Score").textContent =
        playerNames[1] + ": " + scores[1] + " (" + player2Percentage + "%)";
}

function resetGame() {
    document.getElementById("scoreArea").style.display = "none";
    document.getElementById("starterArea").style.display = "block";
    currentQuestionIndex = 0;
    currentTurn = 0;
    scores = [0, 0];
    questionsAsked = [0, 0];
}
