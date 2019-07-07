$(document).ready(function(){
   $('#selecta').click(function(){
       var userInput =$('#searchBar').val();

   var feeling = userInput.toLowerCase();

   if( feeling == 'adoration'){
       $('.m1').show();
   }else if( feeling == 'aesthetic'){
       $('.m2').show();
   }else if( feeling == 'appreciation'){
       $('.m3').show();
   }else if( feeling == 'awkwardness'){
       $('.m4').show();
   }else if( feeling == 'boredom'){
       $('.m5').show();
   }else if ( feeling == 'calmness'){
       $('.m6').show();
   }else if ( feeling == 'confusion'){
       $('.m7').show();
   }else if (feeling == 'craving'){
       $('.m8').show();
   }else if (feeling == 'disgust'){
       $('.m9').show();
   }else if (feeling == 'empathy'){
       $('.m10').show();
   }else if (feeling == 'pain'){
       $('.m11').show();
   }else if (feeling == 'entrancement'){
       $('.m12').show();
   }else if (feeling == 'envy'){
       $('.m13').show();
   }else if (feeling == 'excitement'){
       $('.m14').show();
   }else if (feeling == 'fear'){
       $('.m15').show();
   }else if (feeling == 'horror'){
       $('.m16').show();
   }else if (feeling == 'interest'){
       $('.m17').show();
   }else{
       alert('Feeling not found in the list');
   }



$("#p1").click(function(){
alert("Do I love you because you're beautiful, or are you beautiful because I love you BY Richard Rodgers");
});
$("#p2").click(function(){
alert("Behind every exquisite thing that existed, there was something tragic BY Oscar Wilde");
});
$("#p3").click(function(){
alert("If you want to thank me, go do something for somebody else. Don Meyer BY Harrison");
});

$("#p4").click(function(){
alert("It's only awkward if it matters BY Joyce Rachelle");
});
$("#p5").click(function(){
alert("There are no uninteresting things, only uninterested people BY G.K. Chesterton");
});
$("#p6").click(function(){
alert("It's calm under the waves in the blue of my oblivion BY Fiona Apple");
});
$("#p7").click(function(){
alert("I try to stay in a constant state of confusion just because of the expression it leaves on my face BY Johnny Depp");
});
$("#p8").click(function(){
alert("Don't be indifferent about any random idea that occurs to you, because each and every idea is for a particular purpose. it may not be beneficial to you, but can be what others are craving for BY Michael Bassey Johnson");
});
$("#p9").click(function(){
alert("The old endless chain of love, tolerance, indifference, aversion and disgust BY Samuel Beckett");
});
$("#p10").click(function(){
alert("All I ever wanted was to reach out and touch another human being not just with my hands but with my heart BY Tahereh Mafi, Shatter Me");
});
$("#p11").click(function(){
alert("It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace BY Chuck Palahniuk, Diary");
});
$("#p12").click(function(){
alert("I can recognize the calls of practically every bird in North America. There are some in Africa I don't know, though. BY Roger Tory Peterson");
});
$("#p13").click(function(){
alert("I feel the need to endanger myself every so often BY Tim Daly ");
});
$("#p14").click(function(){
alert("Fear is pain arising from the anticipation of evil. BY Aristotle");
});
$("#p15").click(function(){
alert("Words have no power to impress the mind without the exquisite horror of their reality. BY Edgar Allan Poe");
});
$("#p16").click(function(){
alert("The old endless chain of love, tolerance, indifference, aversion and disgust BY Samuel Beckett");
});
$("#p17").click(function(){
alert("Those who dare to fail miserably can achieve greatly. BY john f kennedy ");
});
   })
   $('#reset').click(function(){
       location.reload();
   })


})