var p1 = localStorage.getItem("player_1");
var p2 = localStorage.getItem("player_2");
var q_turn = p1;
var a_turn = p2;
var p1_score = 0;
var p2_score = 0;
var num_1 = 0;
var num_2 = 0;
var add = 0;

document.getElementById("score_p1").innerHTML = p1 + " : " + p1_score;
document.getElementById("score_p2").innerHTML = p2 + " : " + p2_score;

document.getElementById("q_turn").innerHTML = "Question Turn : " + q_turn;
document.getElementById("a_turn").innerHTML = "Answer Turn : " + a_turn;

function  question_submit() {
    num_1 = document.getElementById("number_1").value;
    num_2 = document.getElementById("number_2").value;
    console.log("Number 1 = " + num_1);
    console.log("Number 2 = " + num_2);

    if (num_1 < num_2) {
        ans = parseInt(num_1) + parseInt(num_2);
        console.log(ans);
        add = num_1 + " + " + num_2;
        console.log(add);
        
        
        var question_tag = "<h3>Q. " + add + " = " + "</h3>";
        var input_tag = "<input class='form-control' id='answer' type='number' placeholder='Your Answer Here'>";
        var button_tag =  "<button class='btn btn-success' onclick='check_word()'>Check</button>";
        document.getElementById("question_output").innerHTML = question_tag + input_tag + button_tag;
    } else {
        add = num_1 + " - " + num_2;
        console.log(add);
        ans = num_1 - num_2;
        console.log(ans);
        var question_tag = "<h3>Q. " + add + " = " + "</h3>";
        var input_tag = "<input class='form-control' id='answer' type='number' placeholder='Your Answer Here'><br><br>";
        var button_tag =  "<br><br><button class='btn btn-success' onclick='check_word()' >Check</button>";
        document.getElementById("question_output").innerHTML = question_tag + input_tag + button_tag;
    }
    document.getElementById("number_1").value = 0;
        document.getElementById("number_2").value = 0;
}

function check_word() {
    var answer = document.getElementById("answer").value;
    document.getElementById("question_output").innerHTML = " ";
    if (answer == ans) {
        if (a_turn == p1) {
            p1_score += 1;
            document.getElementById("score_p1").innerHTML = p1 + " : " + p1_score;
        } else {
            p2_score += 1;
            document.getElementById("score_p2").innerHTML = p2 + " : " + p2_score;
        }
    } else {
        if (a_turn == p1) {
            p1_score -= 1;
            document.getElementById("score_p1").innerHTML = p1 + " : " + p1_score;
        } else {
            p2_score -= 1;
            document.getElementById("score_p2").innerHTML = p2 + " : " + p2_score;
        }
    }


    if (q_turn == p1) {
        q_turn = p2;
        document.getElementById("q_turn").innerHTML = "Question Turn : " + q_turn;
    } else {
        q_turn = p1;
        document.getElementById("q_turn").innerHTML = "Question Turn : " + q_turn;
    }

    if (a_turn == p1) {
        a_turn = p2;
        document.getElementById("a_turn").innerHTML = "Answer Turn : " + a_turn;
    } else {
        a_turn = p1;
        document.getElementById("a_turn").innerHTML = "Answer Turn : " + a_turn;
    }

    
}

/*
function check_ans() {
    answer = document.getElementById("answer_input").value.toLowerCase();
    document.getElementById("output").innerHTML = null;
    if (answer == word) {
        if (a == p2) {
            p2_score += 1;
            document.getElementById("p_2_name").innerHTML = p2 + "  :  " + p2_score;
        } else {
            p1_score += 1;
            document.getElementById("p_1_name").innerHTML = p1 + "  :  " + p1_score;
        }
    } else {
        if (a == p2) {
            p2_score -= 1;
            document.getElementById("p_2_name").innerHTML = p2 + "  :  " + p2_score;
        } else {
            p1_score -= 1;
            document.getElementById("p_1_name").innerHTML = p1 + "  :  " + p1_score;
        }
    }

    if (q == p1) {
        q = p2;
        a = p1;
        document.getElementById("a_turn").innerHTML = a;
        document.getElementById("q_turn").innerHTML = q;
        
    } else if (q == p2) {
        q = p1;
        a = p2;
        document.getElementById("a_turn").innerHTML = a;
        document.getElementById("q_turn").innerHTML = q;
    }
}
*/