"use strict";

function PersonInfo(person, subject){
    this.person = person;
    this.subject = subject;
    this.infoBar = function (){
        console.log(`${person}ն սովորում է դպրոցում և շատ է սիրում ${subject} առարկան:`)
    }
}

const anna = new PersonInfo("Աննա","աշխարհագրություն");
const karen = new PersonInfo("Կարեն","հայոց պատմություն");
const armen = new PersonInfo("Արմեն","հանրահաշիվ");
const artak = new PersonInfo("Արտակ","ինֆորմատիկա");
const narine = new PersonInfo("Նարինե","գրականություն");
const karine = new PersonInfo("Կարինե","երկրաչափություն");
const narek = new PersonInfo("Նարեկ","անգլերեն");

anna.infoBar();
karen.infoBar();
armen.infoBar();
artak.infoBar();
narine.infoBar();
karine.infoBar();
narek.infoBar();