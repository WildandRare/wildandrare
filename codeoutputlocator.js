function tion() {
    alert("tag")
}

    
var codeOutputs = {
    "240111" : ["div", '<video width="320" height="240" controls> <source src="Otherriddles.mp4" type="video/mp4"> Your browser cannot play this video. Please use another browser</video>']
}

function tion() {
    var output = document.createElement(codeOutputs[document.getElementById('code_inpt').value][0]);
    output.innerHTML = codeOutputs[document.getElementById('code_inpt').value][1];
    document.body.appendChild(output)
}
