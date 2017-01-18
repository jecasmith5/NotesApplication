define([],function(){
  var noteTitle=document.getElementById("title");
  var noteText=document.getElementById("notetext");
  var newNoteTitle=document.getElementById('newNoteTitle');
  var newNoteText=document.getElementById('newNoteText');
  var array = [];
return {
  addNote:function(){//onclick adds new note div to page (yellow box)
    var div=document.createElement('div');
    div.className = "note";
    div.id = array.length;
    var h1=document.createElement('h1');
    var h1Text = document.createTextNode(noteTitle.value);
    h1.appendChild(h1Text);
    var p=document.createElement('p');
    var pText = document.createTextNode(noteText.value);
    p.appendChild(pText)
    var ptime = document.createElement('p');
    var now=new Date();
    var ptime = document.createTextNode(now);

    div.appendChild(h1);
    div.appendChild(p);
    document.getElementById("notes").appendChild(div);
},

  clearField:function(){ // clears fields
      var inputs = [];
      inputs = document.getElementsByClassName('inputs');
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = " ";
      }
    },

   addObjects:function(){
     var now=new Date()
     var newObject = {
    title:noteTitle.value,
    text:noteText.value,
    time:now
   };
     array.push(newObject);
     console.log(array);

   },
   retrieve: array,

editThisNote:function(positionNumber){
  array[positionNumber].title = newNoteTitle.value;
  array[positionNumber].text = newNoteText.value;
  console.log(array);
 var find = document.getElementById(positionNumber);
 find.childNodes[0].innerText = newNoteTitle.value;
 find.childNodes[1].innerText = newNoteText.value;
},
eraseNote:function(eraseposition){
  var findpos = document.getElementById(eraseposition);

    array.splice(findpos,1);
    console.log(findpos);
    console.log(document.getElementById("notes").childNodes);
    findpos.parentNode.removeChild(findpos);
},
  showHideDiv:function(id) {
        var div = document.getElementById('notes');
        if(div.style.display == null || div.style.display == "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    },

  localStorage:function(){
    var htmlContentes = document.documentElement.innerHTML;
    localStorage.setItem('mynotes',JSON.stringify(htmlContents ));
    localStorage.getItem('mynotes');

  }

  };
});
