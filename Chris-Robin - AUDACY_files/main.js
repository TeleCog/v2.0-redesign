
// TOOL TIPS
$('.tool-tip').tooltip();

// make sure loading spinner is shown any time a request is sent
$( document ).ajaxSend(function( event, request, settings ) {
  $( "#ajaxloading" ).show();
});

// hide the loading spinner when all requests have stopped
$( document ).ajaxStop(function() {
  $( "#ajaxloading" ).hide();
});
