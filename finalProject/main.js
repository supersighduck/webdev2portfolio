let cat = "Cat and Dog Image Generator App. Languages used: HTML, CSS, Javascript. For this app, it was my first time ever dealing with APIs. I never knew what they were prior to building this app. The main cause for struggle was syntax, as I made a typo and spent hours trying to figure out what was wrong with the logic. I am happy to have cats and dogs digitally rain at my will now."
let rock = "Rock Paper Scissors App. Languages used: HTML, CSS, Javascript. This was quite the project to complete. Figuring out specific logic for Javascript took some time. But it was a good opportunity to play around with different style choices and learn how to create a drop down menu on HTML. I also love being able to use entertaining GIFs."
let temp = "Temperature Converter App. Languages used: HTML, CSS, Javascript. Overall, this was a fun app to make. I had a bit of trouble trying to figure out styling issues on CSS, but was able to resolve them. And as a result, now I have a convenient temperature converter app that is also accompanied by appropriate GIFs that correspond to the temperature. (I really love my GIFs.)"

$('#cat').on('click', message1)
$('#rock').on('click', message2)
$('#temp').on('click', message3)

function message1 () {
    //msg1
    $('#hInfo1').text(cat)
    $('#hInfo1').toggleClass('hidden')
    //msg2
    $('#hInfo2').text(rock)
    $('#hInfo2').addClass('hidden')
    //msg3
    $('#hInfo3').text(temp)
    $('#hInfo3').addClass('hidden')
}

function message2 () {
    //msg1
    $('#hInfo1').text(cat)
    $('#hInfo1').addClass('hidden')
    //msg2
    $('#hInfo2').text(rock)
    $('#hInfo2').toggleClass('hidden')
    //msg3
    $('#hInfo3').text(temp)
    $('#hInfo3').addClass('hidden')
}

function message3 () {
    //msg1
    $('#hInfo1').text(cat)
    $('#hInfo1').addClass('hidden')
    //msg2
    $('#hInfo2').text(rock)
    $('#hInfo2').addClass('hidden')
    //msg3
    $('#hInfo3').text(temp)
    $('#hInfo3').toggleClass('hidden')
}


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
/*function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }*/