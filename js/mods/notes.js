require(['add'],function(add){

 var buttons = document.getElementsByClassName("buttons")[0];
 var positionNumber = document.getElementById('position');
 var newNoteTitle=document.getElementById('newNoteTitle');
 var newNoteText=document.getElementById('newNoteText');
 var erasePosition=document.getElementById('eraseposition');
 var saveButton=document.getElementById('saveButton');
 var hideButton=document.getElementById('hidebutton');

 buttons.addEventListener('click', function(e){

   if(e.target.id == 'addNoteButton'){
     add.addNote();
     add.clearField();
     add.addObjects();
     add.localStorage();

   }
   if(e.target.id == 'editNotesButton'){
     add.editThisNote(positionNumber.valueAsNumber);
     add.clearField();
     add.time();
     
   }
   if(e.target.id == 'eraseNoteButton'){
    add.eraseNote(eraseposition.valueAsNumber);
   }
   if (e.target.id == 'saveButton') {
     store.storage();
   }
   if (e.target.id == 'hideButton') {
     add.showHideDiv(document.getElementById('notes'));
}
 });
});
