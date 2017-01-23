var array = [];

var notesapp = {
   notes: [],
   addNoteButton: document.getElementById("addNoteButton"),
   displayNotesButton: document.getElementById("displayNotes"),
   eraseNoteButton: document.getElementById('eraseNoteButton'),
  
  addNote:function(){//onclick adds new note div to page (yellow box)
    this.addNoteButton.addEventListener('click',function(e){
      var div=document.createElement('div');
      div.className += "note";
      var noteTitle=document.getElementById("title").value;
      var h1=document.createElement('h1');
      var h1Text = document.createTextNode(noteTitle);
      h1.appendChild(h1Text);
      var noteText=document.getElementById("notetext").value;
      var p=document.createElement('p');
      var pText = document.createTextNode(noteText);
      p.appendChild(pText)
      div.appendChild(h1);
      div.appendChild(p);
      document.getElementById("notes").appendChild(div);

      function clearField(){ // clears fields
        var inputs = [];
        inputs = document.getElementsByClassName('inputs');
        for (var i = 0; i < inputs.length; i++) {
          inputs[i].value = " ";
        }
      }
      clearField();

     function addObjects(){
       var newObject = {
       "title:":noteTitle,
       "text:":noteText
     };
       array.push(newObject);
       console.log(array);

     }

      addObjects();
  });
},
   editNote:function(){

     function editThisNote(positionNumber,noteTitle,noteText){
       this.array[positionNumber].noteTitle = noteTitle;
       this.array[positionNumber].noteText = noteText;
     }
        this.eraseNoteButton.addEventListener('click',function(e){
          function replaceNote(){
            var positionNumber = getElementById('position')
            var newNoteTitle=getElementById('newNoteTitle');
            var newNoteText=getElementById('newNoteText');
            array.editThisNote(positionNumber.valueAsNumber,newNoteTitle.value,newNoteText.value);

          }
        })
          replaceNote();



        }

      };
      // eraseNote:function(position){
      //   this.eraseNoteButton('click',function(e){
      //     array.splice(position,1);
      //   })
      //   eraseNote(position.valueAsNumber);
      // }

        //this.notes.splice(position,1);

//      this.notes[position] = newNote;
//      this.displayNotes();

//
//      this.displayNotes();

console.log(notesapp.displayNotes());
console.log(notesapp.addNote()); //test addnote in console
//console.log(notesapp.editNote(0,"first","text")); //test editsnote
//console.log(notesapp.eraseNote(0)); //test eraseNote
