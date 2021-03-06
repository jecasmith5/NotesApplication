require(['add'],function(add){

 var buttons = document.getElementsByClassName("buttons")[0];
 var newNoteTitle=document.getElementById('newNoteTitle');
 var newNoteText=document.getElementById('newNoteText');
 var saveButton=document.getElementById('saveButton');
 var hideButton=document.getElementById('hidebutton');
 var noteTitle=document.getElementById('title');
 var noteText=document.getElementById('notetext');

 var array=[];
//automatically get info from local storage and populates notes
add.localStorageOnLoad();
add.popup();
noteTitle.setAttribute('placeholder','Title');
noteText.setAttribute('placeholder','Description');

 buttons.addEventListener('click', function(e){

   if(e.target.id == 'addNoteButton'){
     add.addNote();
     add.addObjects();
     add.clearField();
     add.localStorageSave();
     document.getElementById("poppup").style.display = "none";

   }
    if (e.target.id == 'saveButton') {
      add.localStorageSave();

    }
   if (e.target.id == 'hideButton') {
     add.showHideDiv(document.getElementById('notes'));
}
 });
});
