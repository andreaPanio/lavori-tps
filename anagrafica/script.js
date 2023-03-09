function controllo()
{
    var controllo=true;
    
    var nome=document.getElementById("nome").value;
    localStorage.setItem("nome", nome);

    var cognome=document.getElementById("cognome").value;
    localStorage.setItem("cognome", cognome);

    var sessoTp=document.getElementsByName("sesso");
    var sessoValue;
    for(var i=0; i<sessoTp.length; i++)
    {
    if(sessoTp[i].checked)
    {
        sessoValue=sessoTp[i].value;
        break;
    }
}
localStorage.setItem("sesso", sessoValue);

    var email=document.getElementById("email").value;
    localStorage.setItem("email", email);

    var indirizzoTipo=document.getElementById("indirizzo-tipo").value;
    localStorage.setItem("indirizzoTipo", indirizzoTipo);
    
    var indirizzo=document.getElementById("indirizzo").value;
    localStorage.setItem("indirizzo", indirizzo);

    var numeroCivico=document.getElementById("numero-civico").value;
    localStorage.setItem("numeroCivico", numeroCivico);

    var citta=document.getElementById("citta").value;
    localStorage.setItem("citta", citta);

    var provincia=document.getElementById("provincia").value;
    localStorage.setItem("provincia", provincia);

    var cap=document.getElementById("cap").value;
    var par=/([0-9]{5})/;
    if(par.test(cap)){
        localStorage.setItem("cap", cap);
    }
    else{
        
        document.getElementById("cap").style.borderColor = "red";
        controllo=false
    }
    var nazione=document.getElementById("nazione").value;
    localStorage.setItem("nazione", nazione);

    if(document.getElementById("calcio").checked){
        localStorage.setItem("calcio", "calcio");
    }
    if(document.getElementById("nuoto").checked){
        localStorage.setItem("nuoto", "nuoto");
    }
    if(document.getElementById("palestra").checked){
        localStorage.setItem("palestra", "palestra");
    }
    if(document.getElementById("tennis").checked){
        localStorage.setItem("tennis", "tennis");
    }
    if(document.getElementById("basket").checked){
        localStorage.setItem("basket", "basket");
    }
    if(document.getElementById("danza").checked){
        localStorage.setItem("danza", "danza");
    }
    if(document.getElementById("pallavolo").checked){
        localStorage.setItem("pallavolo", "pallavolo");
    }
    if(document.getElementById("equitazione").checked){
        localStorage.setItem("equitazione", "equitazione");
    }
    if(document.getElementById("rugby").checked){
        localStorage.setItem("rugby", "rugby");
    }
    if(document.getElementById("baseball").checked){
        localStorage.setItem("baseball", "baseball");
    }
    if(document.getElementById("golf").checked){
        localStorage.setItem("golf", "golf");
    }
    if(document.getElementById("atletica").checked){
        localStorage.setItem("atletica", "atletica");
    }


    var film=document.getElementById("generi").value;
    localStorage.setItem("film", film);

    var password=document.getElementById("password").value;
    localStorage.setItem("password", password );

    if(controllo==true){
        document.location.href="anagraficaFile2.html";
        }
        else{
            alert("ci sono elementi sbagliati");
        }
        
    }





















