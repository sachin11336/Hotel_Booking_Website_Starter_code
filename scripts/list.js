function trigger(){
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "https://travel-advisor.p.rapidapi.com/locations/search?query=pattaya&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US");
    xhr.setRequestHeader("X-RapidAPI-Key", "f9c0ce8d1dmshb5145d86a4a493cp10b9f6jsnec13d65a41e9");
    xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");

    xhr.send(data);
    }