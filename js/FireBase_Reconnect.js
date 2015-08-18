
// Import JQuery to the document
var imported = document.createElement('script');
imported.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
document.head.appendChild(imported);

// Main function, needs to be called upon loading
function FBPageLoad()
{
   // Register to the first focus event
   $(window).one("focus", SomeFocusMethod); 
}

var SomeFocusMethod = function()
{
    console.log("SomeFocusMethod");
    // Go Online!
    Firebase.goOnline();
    console.log("Firebase is now online!");

    // Register to the next blur event
    $(window).one("blur", SomeBlurMethod);
}

var SomeBlurMethod = function() 
{ 
    console.log("SomeBlurMethod");
    // Go Offline!
    Firebase.goOffline();
    console.log("Firebase is now offline!");

    // Register to the next focus event
    $(window).one("focus", SomeFocusMethod); 
}