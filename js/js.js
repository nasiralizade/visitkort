document.getElementById("visitkort").style.display="none";
document.getElementById("create").addEventListener("click", function()
 {
    document.getElementById("page1").style.display = "none"; //Göm sida_ett
  document.getElementById("visitkort").style.display = "block";
  // Get user inputs
  var företagsnamn = document.getElementById("företagsnamn").value;
  var fnamn = document.getElementById("förnamn").value;
  var lnamn = document.getElementById("efternamn").value;
  var titel = document.getElementById("titel").value;
  var telefonnummer = document.getElementById("telefonnummer").value;
  var email = document.getElementById("email").value;
  var backgroundColor = document.getElementById("bakgrundsfärg").value;
  var textColor = document.getElementById("textfärg").value;
  var font = document.getElementById("font").value;
    // Validate inputs
   if (!företagsnamn || !fnamn || !lnamn || !titel || !telefonnummer || !email) {
        alert("Please fill in all the required fields");
        document.getElementById("page1").style.display = 'block';    //Göm sida_ett
        document.getElementById("visitkort").style.display = 'none'; 
        return;
 }

  document.getElementById("företagsnamn-display").innerHTML ="  "+ företagsnamn;
  document.getElementById("namn").innerHTML ="  "+ fnamn+" "+lnamn;
  document.getElementById("titel-display").innerHTML ="  "+ titel;
  document.getElementById("telefonnummer-display").innerHTML ="  "+"Telefonnummer: "+ telefonnummer;
  document.getElementById("email-display").innerHTML ="  "+ "E-post: "+email;
  
  var card = document.getElementById("visitkort");
  card.style.backgroundColor = backgroundColor;
  card.style.color = textColor;
  card.style.fontFamily = font;

  // Show the card
  card.style.display = "block";
})
document.getElementById("reset").addEventListener("click", function() {
 företagsnamn = document.getElementById("företagsnamn").value="";
 fnamn = document.getElementById("förnamn").value="";
 lnamn = document.getElementById("efternamn").value="";
 titel = document.getElementById("titel").value="";
 telefonnummer = document.getElementById("telefonnummer").value="";
 email = document.getElementById("email").value="";
 backgroundColor = document.getElementById("bakgrundsfärg").value="";
 textColor = document.getElementById("textfärg").value="";
 font = document.getElementById("font").value="";
})
document.getElementById("tillbaka").addEventListener("click", function(){
    document.getElementById("page1").style.display = 'block';    //Göm sida_ett
    document.getElementById("visitkort").style.display = 'none';   //Visa sida2
})
