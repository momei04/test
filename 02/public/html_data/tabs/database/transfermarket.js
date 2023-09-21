const url = 'https://transfermarket.p.rapidapi.com/clubs/get-squad?id=631&saison_id=2022&domain=de';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ced8202e38mshec5f19b7fa1570bp1db34ejsn9a1df5262c3d',
        'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
    }
};

let result;
let playerlist;

//HTML Elements
let transfermarketContainer = document.getElementById("transfer-container");

const response = async function(){
    try {
        const response = await fetch(url, options);
        result = await response.json();
        playerlist= result['squad'];
        console.log(playerlist);
        let player = {};
        for (let i = 0; i < playerlist.length; i++) {
            player = new Player(playerlist[i].name, playerlist[i].id, playerlist[i].age, playerlist[i].heroImage, playerlist[i]['marketValue']['value'], playerlist[i]['positions']['first']['group']);
            console.log(player);
            transfermarketContainer.innerHTML += insertPlayerPanel(player);

        }


    } catch (error) {
        console.error(error);
    }
}

function Player(name, id, age, img, value, position) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.img = img;
    this.position = position;
    this.value = value +" €";
}

response();

function insertPlayerPanel(player) {
    let playerpanel = "<div class='player_panel'>" +
        "<div class='container'>" +
            "<div class='img-container'>" +
                "<img src="+player.img+" alt=''>" +
            "</div>" +
            "<div class='player-information'>" +
                "<h3 class='player-title'>"+player.name+"</h3>" +
                "<p class='player-club'>"+player.position+"</p>"+
            "</div>"+
        "</div>"+
        "<p class='value'>"+player.value+"</p>"+
        "</div>";
    return playerpanel
}