define([],function(){
  var noteTitle=document.getElementById('title');
  var noteText=document.getElementById('notetext');

  var array = JSON.parse(localStorage.getItem("savedData")) || [];
return {
  popup:function(){
    document.getElementById("popp").addEventListener("click", function(){
    document.getElementById("poppup").style.display = "block";
    console.log('hi');
    noteTitle.setAttribute('placeholder','Title');
    noteText.setAttribute('placeholder','Description');
})
},
  addObjects:function(){
    var now=  edittime= new Date(),
        day = now.getDate(),
        month = now.getMonth() + 1,
        year = now.getFullYear();
        hours = now.getHours(),
        minutes = now.getMinutes();
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        now = 'created:' + (month + "/" + day  + "/" + year+ " " + hours + ":" + minutes);
    var myObject = {
      title:noteTitle.value,
      text:noteText.value,
      time:now,
    };
      array.push(myObject);
      console.log(array);
  },

  addNote:function(){//onclick adds new note div to page (yellow box)
    var li=document.createElement('li');
    li.className = "note";
    li.id = array.length;
    var h1=document.createElement('h1');
    h1.className = "titles";
    var h1Text = document.createTextNode(noteTitle.value);
    h1.appendChild(h1Text);
    var p=document.createElement('p');
    p.className = "des";
    var pText = document.createTextNode(noteText.value);
    p.appendChild(pText)
    var ptime = document.createElement('p');
    var now=new Date(),
      day = now.getDate(),
      month = now.getMonth() + 1,
      year = now.getFullYear();
      hours = now.getHours(),
      minutes = now.getMinutes();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      now = 'Created:' + (month + "/" + day  + "/" + year+ " " + hours + ":" + minutes);
      now.className="timee";
    var ptimes = document.createTextNode(now);
    ptime.appendChild(ptimes);
    li.appendChild(h1);
    li.appendChild(p);
    li.appendChild(ptime);
    document.getElementById("notes").appendChild(li);
    var editButton = document.createElement('button');
    li.appendChild(editButton);
    var editbut=document.createElement('img');
    editbut.setAttribute('src','edit.png')
    editbut.width='40';
    editButton.appendChild(editbut);
    editButton.className = "eButton";
    editButton.onclick = function editItem(){
      document.getElementById("poppup").style.display = "block";
        noteTitle.value = li.childNodes[0].innerText;
        noteText.value = li.childNodes[1].innerText;
        now = li.childNodes[2].innerText;

      var saveButton = document.getElementById('saveButton');

      saveButton.onclick= function ok(){
        document.getElementById("poppup").style.display = "none";
        var edittime=document.createElement('p');
        var edittimetext = document.createTextNode(" ");
        edittime.appendChild(edittimetext);
        li.appendChild(edittime);
        li.insertBefore(edittime,li.childNodes[3]);

        var edittime= new Date(),
          day = edittime.getDate(),
          month = edittime.getMonth() + 1,
          year = edittime.getFullYear();
          hours = edittime.getHours(),
          minutes = edittime.getMinutes();
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          edittime = "Last Edited:" + (month + "/" + day  + "/" + year+ " " + hours + ":" + minutes);
        li.childNodes[0].innerText=noteTitle.value;
        li.childNodes[1].innerText=noteText.value;
        li.childNodes[2].innerText=now;
        li.childNodes[3].innerText=edittime;
        var index = array.length;
           console.log(index);
           var position=array[li.id]
           position.title=li.childNodes[0].innerText;
           position.text=li.childNodes[1].innerText;
           position.time=li.childNodes[2].innerText;
           console.log(array);

           noteTitle.value='';
           noteText.value = '';
      }
    }
    var deleteButton = document.createElement('button');
    li.appendChild(deleteButton);
    deleteButton.className = "dButton";
    var deletebut=document.createElement('img');
    deletebut.setAttribute('src','delete.png')
    deletebut.width='40';
    deleteButton.appendChild(deletebut);
    deleteButton.onclick = function removeItem() {
      this.parentNode.parentNode.removeChild(this.parentNode);//deletes dom element
      array.splice(array[li.id],1);
      console.log(array);
      localStorage.setItem("savedData", JSON.stringify(array));
      console.log(array);
        var store=JSON.parse(localStorage.getItem('savedData'));
        for (var i = 0; i < array.length; i++)
      localStorage.removeItem(array[i]);
    }
},

  clearField:function(){ // clears fields
      var inputs = [];
      inputs = document.getElementsByClassName('inputs');
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
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
  localStorageSave:function(){
    localStorage.setItem("savedData", JSON.stringify(array));
    console.log(array);
      var store=JSON.parse(localStorage.getItem('savedData'));
},
  localStorageOnLoad:function(){
    localStorage.setItem("savedData", JSON.stringify(array));
    console.log(array);
      var store=JSON.parse(localStorage.getItem('savedData'));
      for (var i = 0; i < array.length; i++) {
        var noteTitleStore = array[i].title;
        var noteTextStore = array[i].text;
        var noteTimeStore = array[i].time;
          console.log(array[i]);
          var li=document.createElement('li');
          li.className = "note";
          li.id = array.length;
          var h1=document.createElement('h1');
          h1.className = "titles";
          var h1Text = document.createTextNode(noteTitleStore);
          h1.appendChild(h1Text);
          var p=document.createElement('p');
          p.className = "des";
          var pText = document.createTextNode(noteTextStore);
          p.appendChild(pText)
          var ptime = document.createElement('p');
          var now=noteTimeStore;
          var ptimes = document.createTextNode(now);
          ptime.appendChild(ptimes);
          li.appendChild(h1);
          li.appendChild(p);
          li.appendChild(ptime);

          document.getElementById("notes").appendChild(li);
          var editButton = document.createElement('button');
          li.appendChild(editButton);
          var editbut=document.createElement('img');
          editbut.setAttribute('src','edit.png')
          editbut.width='40';
          editButton.appendChild(editbut);
          editButton.className = "eButton";

          editButton.onclick = function editItem(){
            document.getElementById("poppup").style.display = "block";

              noteTitle.value = li.childNodes[0].innerText;
              noteText.value = li.childNodes[1].innerText;
              //update object??

            var saveButton = document.getElementById('saveButton');
            saveButton.onclick= function ok(){

              document.getElementById("poppup").style.display = "none";
              var edittime=document.createElement('p');
              var edittimetext = document.createTextNode(" ");
              edittime.appendChild(edittimetext);
              li.insertBefore(edittime,li.childNodes[3]);
              var edittime= new Date(),
                day = edittime.getDate(),
                month = edittime.getMonth() + 1,
                year = edittime.getFullYear();
                hours = edittime.getHours(),
                minutes = edittime.getMinutes();
                if (minutes < 10) {
                  minutes = "0" + minutes;
                }
                edittime = ('Last Editted:' + month + "/" + day  + "/" + year+ " " + hours + ":" + minutes);

              li.childNodes[0].innerText=noteTitle.value;
              li.childNodes[1].innerText=noteText.value;
              li.childNodes[3].innerText=edittime;
              console.log(li.childNodes);

              var index = array.length;
                 console.log(index);
                 localStorage.setItem("savedData", JSON.stringify(array));
                 console.log(array);
                   var store=JSON.parse(localStorage.getItem('savedData'));
                   for (var i = 0; i < array.length; i++)
                 var position=array[i];
                 position.title=li.childNodes[0].innerText;
                 position.text=li.childNodes[1].innerText;
                 position.time=li.childNodes[2].innerText;
                 console.log(array);
                 //reset placeholders
                 noteTitle.value="";
                 noteText.value = "";
            }
          }
          var deleteButton = document.createElement('button');
          li.appendChild(deleteButton);
          deleteButton.className = "dButton";
          var deletebut=document.createElement('img');
          deletebut.setAttribute('src','delete.png')
          deletebut.width='40';
          deleteButton.appendChild(deletebut);          deleteButton.onclick = function removeItem() {
            this.parentNode.parentNode.removeChild(this.parentNode);//deletes dom element
            array.splice(array[li.id],1);
            console.log(array);
            localStorage.setItem("savedData", JSON.stringify(array));
            console.log(array);
              var store=JSON.parse(localStorage.getItem('savedData'));
              for (var i = 0; i < array.length; i++)
            localStorage.removeItem(array[i]);
            }
          }
        }
      }
   })
