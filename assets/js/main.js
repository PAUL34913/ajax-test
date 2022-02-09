var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://swapi.dev/api/");

xhr.send();

function setData(jsonData) {
    data = jsonData;
    console.log(data);
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("data").innerHTML = this.response;
        //console.log(typeof(JSON.parse(this.response)));
        //console.log(JSON.parse(this.responseText));
        //data = this.responseText;
        setData(JSON.parse(this.response));
    }
};

