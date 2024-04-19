var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener('DOMContentLoaded', function() {
    var currentLocation = window.location.href;
    var links = document.querySelectorAll('.nav-tab-links a');

    links.forEach(function(link) {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });
});