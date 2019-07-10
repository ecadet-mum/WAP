window.onload = function() {
    $("#boundary1").mouseover(overBoundary);
    $("#start").click(startClick);
    $("#end").mouseover(overEnd);
    $("div#maze div.boundary").mouseover(overBoundary);

};

function overBoundary() {
    // document.getElementById("boundary1").style.backgroundColor = "#ff8888";
    $(".boundary").addClass("youlose");
    loser = true;
}


function startClick() {
    loser = false;
    $(".boundary").removeClass("youlose");

}

function overEnd() {
    if(loser===true) {
        alert("Sorry, you lost. :[");
    } else {
        $(".boundary").addClass("youwin");
        alert("You win! :]");
    }
}
