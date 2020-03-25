const queryURL = 'https://prm-interview.s3.amazonaws.com/parks.json';

//by using a proxy url, able to get across the cors to retrieve data.
const proxyurl = "https://cors-anywhere.herokuapp.com/";
$.ajax({
    url: proxyurl + queryURL,
    method: 'GET'
}).then(function (response) {
    console.log(response);
    for (let i = 0; i <= response.length; i++) {
        let name = $('<h4>').text('Name: ' + response[i].Name);
        let location = $('<h6>').text('Location: ' + response[i].Location);
        let est = $('<p>').text('established ' + response[i].Established);
        let area = $('<p>').text('Area ' + response[i].Area);
        let visits = $('<p>').text('Recreation Visits ' + response[i]['Recreation visitors']);
        console.log(visits)
        let desc = $('<p>').text(response[i].Description);
        let source = response[i].Thumbnail;
        var img = $('<img height="200px" width="290px">');
        img.attr('src', source);
        console.log(source);
        let display = $('<div class = "displayContent">').append(name, location, est, area, visits, desc, img)
        $('#contents').append(display);
    }
})
