//create variables needed for game 
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var countDown;
var form = $("#form");
document.getElementById("quiz-results").style.display = "none";
document.getElementById("check").style.display = "none";


//create array to document questions and correct answers

var questions = [
    {
        question: "What was Stephen King's first published novel?",
        choices: ["Carrie", "Christine", "The Shining", "Cujo"],
        correct: "Carrie"
    },

    {
        question: "How many novels has Stephen King published?",
        choices: ["72", "83", "94", "105",],
        correct: "83"
    },

    {
        question: "As of 2019, what was Stephen King's estimated net worth?",
        choices: ["$400 million", "$500 million", "$600 million", "$700 million",],
        correct: "$400 million"
    },

    {
        question: "Where was Stephen King born?",
        choices: ["Portland, ME", "Palo Alto, CA", "Pittsburgh, PA", "Raleigh, NC",],
        correct: "Portland, ME"
    }
]

//create the onclick event to initialize game and a countdown 
var seconds = document.getElementById("counter").textContent;

$("#start").on("click", function () {
    timeClock();
})
      function timeClock() {
        countDown = setInterval(function () {
        seconds--;
        document.getElementById("counter").textContent = seconds;
        if (seconds <= 0) clearInterval(countDown);
        if (seconds <= 0) $("#counter").append("<h2>Time's Up!</h2>"); 
        if (seconds <= 0) checkAnswer();
        document.getElementById("check").style.display = "block";
    }, 1000)
   
    //loop through array and choices to create radio buttons and append values to all choices
    for (var i = 0; i < questions.length; i++) {
        var row = $("<p>").html(questions[i].question);
        form.append(row);
        for (j = 0; j < questions[i].choices.length; j++) {
            form.append("<input type='radio' id='selradio" + i + j + "' name='optradio" + i + "' value='" + questions[i].choices[j] + "''>" + questions[i].choices[j]);  
        } 
       }

//run check answer function when button is clicked.
$("#check").on("click", function () {
    checkAnswer();
    clearInterval(countDown);

})

//Function to check if answers are correct/incorrect/unanswered and append results
function checkAnswer(){

    document.getElementById("quiz-results").style.display = "block";

    if($('#selradio00').is(':checked')) {
        correct++;
        console.log(correct);
        $("#right").text(correct);

        } else if ((!$("input[name='optradio0']:checked").val())){
            unanswered++
            // console.log(unanswered);
            $("#unanswered").text(unanswered);

        } else {
            incorrect++;
            $("#wrong").text(incorrect);
        }
            if($('#selradio11').is(':checked')) {
                correct++;
                $("#right").text(correct);
                // console.log(correct);

            } else if ((!$("input[name='optradio1']:checked").val())){
                unanswered++
                // console.log(unanswered);
                $("#unanswered").text(unanswered);

            }else {
                    incorrect++
                    $("#wrong").text(incorrect);
                }
                
                if($("#selradio20").is(':checked')) {
                    correct++;
                    $("#right").text(correct);
                
            } else if ((!$("input[name='optradio2']:checked").val())){
                unanswered++
                // console.log(unanswered);
                $("#unanswered").text(unanswered);

              } else {
                    incorrect++;
                    $("#wrong").text(incorrect);
                    // console.log(incorrect);
                }

                if($("#selradio30").is(':checked')) {
                    correct++;
                    $("#right").text(correct);
                
            } else if ((!$("input[name='optradio3']:checked").val())){
                unanswered++
                // console.log(unanswered);
                $("#unanswered").text(unanswered);

              } else {
                    incorrect++;
                    $("#wrong").text(incorrect);
                    // console.log(incorrect);
                }
               
            }
          
        }
// create a game reset function to play the game again

