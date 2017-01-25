define([],function(){
  var noteTitle=document.getElementById('title');
  var noteText=document.getElementById('notetext');

  var array = JSON.parse(localStorage.getItem("savedData")) || [];
return {
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
        now = (month + "/" + day  + "/" + year+ " " + hours + ":" + minutes);
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
    var now=new Date(),
      day = now.getDate(),
      month = now.getMonth() + 1,
      year = now.getFullYear();
      hours = now.getHours(),
      minutes = now.getMinutes();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      now = (month + "/" + day  + "/" + year+ " " + hours + ":" + minutes);
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
        noteTitle.value = li.childNodes[0].innerText;
        noteText.value = li.childNodes[1].innerText;
        array[li.id].title = noteTitle.value;
        //update object??

      var saveButton = document.getElementById('saveButton');

      saveButton.onclick= function ok(){
        var newtime = document.createElement('p');
        li.appendChild(newtime);
        var nownew=new Date(),
          day = nownew.getDate(),
          month = nownew.getMonth() + 1,
          year = nownew.getFullYear();
          hours = nownew.getHours(),
          minutes = nownew.getMinutes();
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          nownew = (month + "/" + day  + "/" + year+ " " + hours + ":" + minutes);
          var nownewl=document.createElement('p')
          li.appendChild(nownewl);
        li.childNodes[0].innerText=noteTitle.value;
        li.childNodes[1].innerText=noteText.value;
        li.childNodes[2].innerText=now;
        li.childNodes[5].innerText=nownew;

        var index = array.length;
           console.log(index);
           var position=array[li.id]
           position.title=li.childNodes[0].innerText;
           position.text=li.childNodes[1].innerText;
           position.time=li.childNodes[2].innerText=new Date();
           console.log(array);

           noteTitle.value=" ";
           noteText.value = " ";
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
          var h1Text = document.createTextNode(noteTitleStore);
          h1.appendChild(h1Text);
          var p=document.createElement('p');
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
          editButton.innerText="Edit";

          editButton.onclick = function editItem(){
              noteTitle.value = li.childNodes[0].innerText;
              noteText.value = li.childNodes[1].innerText;
              //update object??

            var saveButton = document.getElementById('saveButton');

            saveButton.onclick= function ok(){
              li.childNodes[0].innerText=noteTitle.value;
              li.childNodes[1].innerText=noteText.value;
              li.childNodes[4].innerText=new Date();
              var edittime=document.createElement('p')
              li.appendChild(edittime);
              var edittime= new Date(),
                day = now.getDate(),
                month = now.getMonth() + 1,
                year = now.getFullYear();
                hours = now.getHours(),
                minutes = now.getMinutes();
                if (minutes < 10) {
                  minutes = "0" + minutes;
                }
                now = (month + "/" + day  + "/" + year+ " " + hours + ":" + minutes);
              var index = array.length;
                 console.log(index);
                 localStorage.setItem("savedData", JSON.stringify(array));
                 console.log(array);
                   var store=JSON.parse(localStorage.getItem('savedData'));
                   for (var i = 0; i < array.length; i++)
                 var position=array[i];
                 position.title=li.childNodes[0].innerText;
                 position.text=li.childNodes[1].innerText;
                 position.time=li.childNodes[2].innerText=now;
                 console.log(array);
                 //reset placeholders
                 noteTitle.value=" ";
                 noteText.value = " ";
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
