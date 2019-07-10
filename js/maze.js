window.onload = function() {
    document.getElementById("boundary1").onmouseover = overBoundary;
};

function overBoundary() {
    // document.getElementById("boundary1").style.backgroundColor = "#ff8888";
    $(".boundary").addClass("youlose");
}
