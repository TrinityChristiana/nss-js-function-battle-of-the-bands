// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 0;
let bands = ["Galactic Scum", "Underdogs"];

const addBandName = () => {
    let bandName = document.getElementById("bandName").value;
    message = takeNumber(bandName);
    appendMessage(message);
    document.forms.bandInput.reset();
};

const takeNumber = (bands) => {
    let bandMessage = [];
    if (Array.isArray(bands)) {
        bands.forEach(band => {
            bandNumber++;
            bandMessage.push(`${bandNumber}. ${band}`);
        });
        return bandMessage;
    } else {
        let band = bands;
        bandNumber++;
        return `${bandNumber}. ${band}`;
    }
};

messages = takeNumber(bands);

const messageElement = document.querySelector(".messages");



const appendMessage = (message) => {
    let styledMessage = document.createElement('h1');
    styledMessage.className = "message";
    styledMessage.textContent = message;
    messageElement.appendChild(styledMessage);
}

messages.forEach(message => {
    appendMessage(message);
});

btn.addEventListener('click', (e) => {
    let input = document.getElementById("bandName").value;
    if (!(/\S/.test(input))) {
        e.preventDefault();
        document.forms.bandInput.reset();
    } else if (input !== "") {
        addBandName();
    }
});


document.addEventListener('keypress', (e) => {
    let input = document.getElementById("bandName").value;
    if (e.keyCode == 13 && input !== "") {
        if (!(/\S/.test(input))) {
            e.preventDefault();
            document.forms.bandInput.reset();
        } else if (input !== "") {
            addBandName();
        }
        e.preventDefault();
    } else if (e.keyCode == 13) {
        e.preventDefault();
    }
});

// document.getElementById('searchForm').addEventListener('submit', function(e) {
//     search(document.getElementById('searchText'));
//     e.preventDefault();
// }, false);

window.onresize = function(event) {
    var w = window.innerWidth;
var h = window.innerHeight;
if (w < 350) {
    window.resizeTo(350, h);
}};