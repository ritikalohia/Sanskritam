var questions = [
    {
        id : 1,
        question : "assets/1.png",
        options : {
            a : "35424 kg",
            b : "354234 kg",
            c : "3542334 kg",
            d : "35224 kg",
        },
        correctAnswer : 'a'
    },
    {
        id : 2,
        question : "assets/2.png",
        options : {
            a : "35424 kg",
            b : "354234 kg",
            c : "3542334 kg",
            d : "35224 kg",
        },
        correctAnswer : 'b'
    },
    {
        id : 3,
        question : "assets/3.png",
        options : {
            a : "35424 kg",
            b : "354234 kg",
            c : "3542334 kg",
            d : "35224 kg",
        },
        correctAnswer : 'c'
    },
    {
        id : 4,
        question : "assets/4.png",
        options : {
            a : "35424 kg",
            b : "354234 kg",
            c : "3542334 kg",
            d : "35224 kg",
        },
        correctAnswer : 'c'
    },
    {
        id : 5,
        question : "assets/4.png",
        options : {
            a : "35424 kg",
            b : "354234 kg",
            c : "3542334 kg",
            d : "35224 kg",
        },
        correctAnswer : 'c'
    }
];

var questionNumber = 1;
var result = [], score=0;
var respond = [];

function showQuestion(){
    var htmlstring = "<div class='question'> " +
    "<div class='row'>" +
        "<div class='col-2 question-no'><strong> Q." + questions[questionNumber-1].id + "</strong></div>" +
       " <div class='col-10 question-content'> <img src='" + questions[questionNumber-1].question  +"'></div>" +
    "</div>" + "<div class='options'>" +
    "<label class='option'>" +
        "<input type='radio' value='a' name='answer"+ questions[questionNumber-1].id +"'>" +
        "<span>"+questions[questionNumber-1].options.a + "</span>"+
    "</label>"+
    "<label class='option'>" +
        "<input type='radio' value='b' name='answer"+ questions[questionNumber-1].id +"'>" +
        "<span>"+questions[questionNumber-1].options.b + "</span>"+
    "</label>"+
    "<label class='option'>"+
        "<input type='radio' value='c' name='answer"+ questions[questionNumber-1].id +"'>"+
        "<span>"+questions[questionNumber-1].options.c + "</span>"+
    "</label>"+
    "<label class='option'>" +
        "<input type='radio' value='d' name='answer"+ questions[questionNumber-1].id +"'>"+
        "<span>"+questions[questionNumber-1].options.d + "</span>"+
    "</label></div>"+
"</div>";


    $("#questions").html(htmlstring);
    
}

$(".next").click(function(){

    if($('input:checked').length === 0 ){
        $('.alert').text("You have not selected any option !!");
    }
    else
    {
        $('.alert').text(" ");
        if ($('input:checked').val() === questions[questionNumber-1].correctAnswer)
        {
            result[questionNumber-1] = 1;
            score++;
        } else {
            result[questionNumber-1] = 0;
        }
        respond[questionNumber-1] = $('input:checked').val();
        questionNumber++;

        if(questionNumber === 5)
        {
            $('.next').css({ display : "none"});
            $('.submit').css({ display : "inline"});
        } 

        showQuestion();
    }

    
});

$('.submit').click(function(){

    if($('input:checked').length === 0 ){
        $('.alert').text("You have not selected any option !!");
    }
    else
    {
        $('.alert').text(" ");
            if ($('input:checked').val() === questions[questionNumber-1].correctAnswer)
        {
            result[questionNumber-1] = 1;
            score++;
        } else {
            result[questionNumber-1] = 0;
        }
        respond[questionNumber-1] = $('input:checked').val();

        var scoreString = " : " + score +" / 5"
        $('.score').text(scoreString);

        var htmlString = " ";

        for(var i=0; i<5 ; ++i)
        {   
            let question = questions[i];
            htmlString = htmlString + "<div class='question q-"+ i +"'> " +
            "<div class='row'>" +
                "<div class='col-2 question-no'><strong> Q." + question.id + "</strong></div>" +
            " <div class='col-10 question-content'><img src='" + question.question  +"'></div>" +
            "</div>" +  "<div class='options'>" +
            "<label class='option'>" +
                "<input type='radio' value='a' name='answer"+ question.id +"'>" +
               "<span>" + question.options.a +  "</span>"+
            "</label>"+
            "<label class='option'>" +
                "<input type='radio' value='b' name='answer"+ question.id +"'>" +
               "<span>" + question.options.b +  "</span>"+
            "</label>"+
            "<label class='option'>"+
                "<input type='radio' value='c' name='answer"+ question.id +"'>"+
               "<span>" + question.options.c +  "</span>"+
            "</label>"+
            "<label class='option'>" +
                "<input type='radio' value='d' name='answer"+ question.id +"'>"+
               "<span>" + question.options.d +  "</span>"+
            "</label> </div>"+
        "</div>";
        };

        
        $("#questions").html(htmlString);
        $('.submit').css({display:"none"});
        for(let i=0; i<5; ++i)
        {
            let question = questions[i];
            let response = respond[i].charCodeAt(0) % 97;
            let check    = result[i];
            let correctOption = question.correctAnswer.charCodeAt(0) % 97;
            
            $(".q-"+ i +" span")[correctOption].style.backgroundColor='rgb(180,255,180)';
            $(".q-"+ i +" input")[response].setAttribute('checked', true );

            if(check === 1)
            {
            $(".q-"+ i).css({backgroundColor : 'rgb(213,255,213)'}); 
            
            } 
            else
            {
                $(".q-"+ i).css({backgroundColor : 'rgb(255,213,213)'});
                $(".q-"+ i + " span")[response].style.backgroundColor='#FFBB58';
            }
        }

        $("input").attr("disabled", true);
    }
    
})


showQuestion();



