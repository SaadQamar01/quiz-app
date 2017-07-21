var ques = [
'What is the meaning of Pakistan?', 
'Who is the first Governor General of Pakistan?', 
'What was the major event of 1971?', 
'When Musharraf overthrew the government of Nawaz Sharif what designation did he take?',
 'In which year did Pakistan win the Cricket World Cup?', 
 'When did Pakistan win Olympic gold medal in Hockey for the first time?', 
 'Which party was in power in North West Frontier Province at the time of independence?', 
 'When Sindh was annexed by the British what message was sent by Charles Napier to headquaters?', 
'Where was General Pervez Musharraf born?', 
'Where is the tomb of Mughal Emperor Jahangir?'
];
var opt = {
    A: ["Muslim Land",
    "Mohammed Ali Jinnah",
     "Bangladesh broke away from Pakistan", 
     "Dictator",
      "1975", 
      "1948", 
      "Muslim League",
      "The die is cast", 
      "Lahore ", 
      "Delhi"],
    B: [" Land of five rivers", 
    "Liaquat Ali Khan", 
    "Explosion of nuclear bomb ", 
    "Consul", 
    "1987", 
    "1952", 
    "Congress",
     "Peccavi",
     "Karachi", 
     "Agra"],
    C: ["Desert", 
    "Ayub Khan", 
    "Tashkent Agreement", 
    "Prime Minister", 
    "1992", 
    "1952", 
    "Justice Party", 
    "Do or die", 
    "Delhi", 
    "Lahore"],
    D: [" Holy Land", 
    "Iskander Mirza", 
    "Nawaz Sharif became Prime Minister", 
    "Chief Executive", 
    "1996", 
    "1964", 
    "Communist Party",
    "In hoc signo vinces", 
    "Quetta", 
    "Karachi"]
};

var correctOpt = ['d', 'a', 'a', 'd', 'c', 'c', 'b', 'b', 'c', 'c'];
var score = 0;

document.getElementById('ques').innerHTML = 'Q' + 1 + "  " + ques[0];
document.getElementById('text1').innerHTML = 'A - ' + opt.A[0];
document.getElementById('text2').innerHTML = 'B - ' + opt.B[0];
document.getElementById('text3').innerHTML = 'C - ' + opt.C[0];
document.getElementById('text4').innerHTML = 'D - ' + opt.D[0];


function startQuiz() {
    document.getElementById('startquiz').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('timer').style.display = 'block';

    var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();
    var min = "45";
    var currentTime = new Date();
    console.log(currentTime);
    var currentMins = currentTime.getMinutes()

    var a = new Date();
    a.setMinutes(currentMins + 10);
    console.log(a);
    var limit = a.getTime();
    var myVar = setInterval(myTimer, 1000);

    function myTimer() {
        var current = new Date().getTime();
        var distance = a - current;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("timer").innerHTML = minutes + " : " + seconds;
        if (distance < 0) {
            document.getElementById('quiz').style.display = 'none';
            var per = (score / 10) * 100;
            var greeting = "Sorry you are fail";
            if (per >= 65) greeting = "Congratulations You are passed";
            document.getElementById('ans').innerHTML = 'CORRECT ANSWERS = ' + score;
            document.getElementById('score').innerHTML = 'YOUR SCORE = ' + per + ' % ';
            document.getElementById('remarks').innerHTML = greeting;
            document.getElementById('result').style.display = 'block';
        }

    }
}




var i = 0;
// var counter = 1;

function next() {

    var ans;
    if (document.getElementById('opt1').checked) {
        ans = document.getElementById('opt1').value;
    } else if (document.getElementById('opt2').checked) {
        ans = document.getElementById('opt2').value;
    } else if (document.getElementById('opt3').checked) {
        ans = document.getElementById('opt3').value;
    } else if (document.getElementById('opt4').checked) {
        ans = document.getElementById('opt4').value;
    }

    if (ans === correctOpt[i]) {
        // alert();
        ++score;
    }
    i++;
    if (i < ques.length) {
        document.getElementById('next').disabled = true;





        console.log(score)
        document.getElementById('opt1').checked = false;
        document.getElementById('opt2').checked = false;
        document.getElementById('opt3').checked = false;
        document.getElementById('opt4').checked = false;
        document.getElementById('ques').innerHTML = 'Q' + (i + 1) + "  " + ques[i];
        document.getElementById('text1').innerHTML = 'A - ' + opt.A[i];
        document.getElementById('text2').innerHTML = 'B - ' + opt.B[i];
        document.getElementById('text3').innerHTML = 'C - ' + opt.C[i];
        document.getElementById('text4').innerHTML = 'D - ' + opt.D[i];
    }
    else {
        document.getElementById('quiz').style.display = 'none';
        var per = (score / 10) * 100;
        var greeting = "Fail!! Koi Bat Nahi Dost, Harta Wo h Jo Har Maan Leta Hai";
        if (per >= 60) greeting = "WaH Cheetay Pass Hogaye";
        document.getElementById('ans').innerHTML = 'Durus Jawabat = ' + score;
        document.getElementById('score').innerHTML = 'Percentage = ' + per + ' % ';
        document.getElementById('remarks').innerHTML = greeting;
        document.getElementById('result').style.display = 'block';
    }
}


function enableNextBtn() {
    document.getElementById('next').disabled = false;
}



function changeBtn() {

    document.getElementById('start').style.background = 'black';
    document.getElementById('start').style.color = 'white';
    document.getElementById('next').style.background = 'black';
    document.getElementById('next').style.color = 'white';
}


function reverseBtn() {
    document.getElementById('start').style.background = 'white';
    document.getElementById('start').style.color = 'black';
    document.getElementById('next').style.background = 'white';
    document.getElementById('next').style.color = 'black';
}