function login_players() {
    p1 = document.getElementById("player_1_name").value;
    localStorage.setItem("player_1" , p1);

    p2 = document.getElementById("player_2_name").value;
    localStorage.setItem("player_2" , p2);
    window.location = "quiz.html";
}