function addUser(){
    var player_1 =document.getElementById("player_1_name_input").value
    var player_2 =document.getElementById("player_2_name_input").value
    localStorage.setItem("player_name1",player_1)
    localStorage.setItem("player_name2",player_2)
    window.location="game_page.html"
}