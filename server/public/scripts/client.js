console.log('client.js is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jquery has been loaded');
    // $.ajax({
    //     type: 'GET', //what kind of request
    //     url: '/all-quotes' //where to look for info
    // })//there should not be a semi colon here because .ajax followed by .then is a chain
    // .then(function(response){
    //     console.log(response);
    //     //this will then be triggered
    // });
    getAllQuotes();
     
    $('#quote-grabber').on('click', getAllQuotes);
    $('#submitQuote').on('click', addNew);
}

function addNew(){
    console.log('button works');
    const newQuote = {
        quote: $('#newQuote').val(),
        author: $('#newAuthor').val(),
    }//end newQuote
    $('input').val('');
    $('textarea').val('');
    $.ajax({
        method: 'POST',
        url: '/add-quote',
        data: newQuote
    })//end .ajax no need for ;
    .then(function(response){
        console.log(response);
        
    });//end .then
}//end addNew

function getAllQuotes() {
    $.ajax({
        type: 'GET', //what kind of request
        url: '/quote' //where to look for info
    })//there should not be a semi colon here because .ajax followed by .then is a chain
    .then(function(response){
        $('#display-quote').html(`<p>"${response.quote}" -${response.author}</p>`);
        //this will then be triggered
    });
}  


//                             Notes
// .ajax is called a promise and promises can be followed by .then