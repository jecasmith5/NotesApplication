define([],function(){
  var noteTitle=document.getElementById('title');
  var noteText=document.getElementById('notetext');
  var newNoteTitle=document.getElementById('newNoteTitle');
  var newNoteText=document.getElementById('newNoteText');
  var array = JSON.parse(localStorage.getItem("savedData")) || [];
return {
  addObjects:function(){

    var now=new Date();
    var myObject = {
      title:noteTitle.value,
      text:noteText.value,
      time:now
    };
    array.push(myObject);
    console.log(array);

  },
  addNote:function(){//onclick adds new note div to page (yellow box)
    var li=document.createElement('li');
    li.className = "note";
    li.id = array.length;
    var h1=document.createElement('h1');
    var h1Text = document.createTextNode(noteTitle.value);
    h1.appendChild(h1Text);
    var p=document.createElement('p');
    var pText = document.createTextNode(noteText.value);
    p.appendChild(pText)
    var ptime = document.createElement('p');
    var now=new Date();
    var ptimes = document.createTextNode(now);
    ptime.appendChild(ptimes);
    li.appendChild(h1);
    li.appendChild(p);
    li.appendChild(ptime);

    document.getElementById("notes").appendChild(li);
    var editButton = document.createElement('button');
    li.appendChild(editButton);
    editButton.innerText="Edit";

    editButton.onclick = function editItem(){
      var edit = document.createElement('div');
      var newTitleInput = document.createElement('input');
      var titleInput = document.createTextNode(newTitleInput.value);
      newTitleInput.setAttribute("type", "text");
      newTitleInput.setAttribute("value", "");
      var newTextInput = document.createElement('input');
      var textInput = document.createTextNode(newTextInput.value);
      newTextInput.appendChild(textInput);
      newTitleInput.appendChild(titleInput);
      newTextInput.setAttribute("type", "textarea");
      newTextInput.setAttribute("value", "");
      var okButton = document.createElement('button');
      okButton.innerText = "OK";
      edit.appendChild(okButton);
      edit.appendChild(newTitleInput);
      edit.appendChild(newTextInput);
      document.body.appendChild(edit);
      okButton.onclick= function ok(){
        li.childNodes[0].innerText=newTitleInput.value;
        li.childNodes[1].innerText=newTextInput.value;
        li.childNodes[2].innerText=new Date();
        var index = array.length;
           index = newTitleInput.value;
           var position=array[li.id]
           position.title=li.childNodes[0].innerText;
           position.text=li.childNodes[1].innerText;
           position.time=li.childNodes[2].innerText=new Date();

           document.body.removeChild(edit);
      }
    }
    var deleteButton = document.createElement('button');
    li.appendChild(deleteButton);
    deleteButton.className = "dButton";
    deleteButton.innerText="Delete";
    deleteButton.onclick = function removeItem() {
      this.parentNode.parentNode.removeChild(this.parentNode);//deletes dom element
      array.splice(array[li.id],1);
      console.log(array);
    }
},

  clearField:function(){ // clears fields
      var inputs = [];
      inputs = document.getElementsByClassName('inputs');
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = " ";
      }
    },


    retrieve: array,

  showHideDiv:function(id) {
        var div = document.getElementById('notes');
        if(div.style.display == null || div.style.display == "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    },

  localStorage:function(){
    localStorage.setItem("savedData", JSON.stringify(array));
    JSON.parse(localStorage.getItem("savedData"));
    console.log(array);
    var no = JSON.parse(localStorage.getItem("savedData"));
    var li = document.createElement('li');
    
  }


  };
});
