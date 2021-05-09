var amazon= document.createElement("div");
amazon.id="calculator";

let sit= document.createElement("div")
sit.id="spc"
let space= document.createElement("input")
space.type="text"
space.id="spacing"
sit.append(space);
document.body.appendChild(sit);

let siti= document.createElement("div")
siti.id="butns"
siti.class="butns1"

let select=document.createElement("button");
select.id="press"
select.class="click1"
let praveen=document.createTextNode("clear")
select.appendChild(praveen);

let insist=document.createElement("button");
insist.id="press1"
insist.class="click2"
let insist1=document.createTextNode("1");
insist.appendChild(insist1)

let mekala= document.createElement("button");
mekala.id="press2"
mekala.class="click2"
let mekala1=document.createTextNode("2");
mekala.appendChild(mekala1);

let mekalp= document.createElement("button");
mekalp.id="press3"
mekalp.class="click2"
let mekala2=document.createTextNode("3");
mekalp.appendChild(mekala2);

let demo1=document.createElement("br");
let demo0=document.createElement("br");


let rock=document.createElement("button")
rock.id="press4"
rock.class="click2"
rock.innerText="4"

let rock1=document.createElement("button")
rock1.id="press5"
rock1.class="click2"
rock1.innerText="5"

let rock2=document.createElement("button")
rock2.id="press6"
rock2.class="click2"
rock2.innerText="6"

let rock3=document.createElement("button")
rock3.id="press7"
rock3.class="click2"
rock3.innerText="7"

let rock4=document.createElement("button")
rock4.id="press8"
rock4.class="click2"
rock4.innerText="8"

let deme= document.createElement("br")
document.body.appendChild(deme)
let deme0=document.createElement("br");

let rock5=document.createElement("button")
rock5.id="press9"
rock5.class="click2"
rock5.innerText="9"

let rock6=document.createElement("button")
rock6.id="press0"
rock6.class="click2"
rock6.innerText="0"

let add=document.createElement("button")
add.id="addition"
add.innerText="+";

let mul=document.createElement("button");
mul.id="multiply"
mul.innerText="*"

let division=document.createElement("button")
division.id="divisible"
division.innerText="/"

let deme1= document.createElement("br")
document.body.appendChild(deme1)

let deme2=document.createElement("br");

let sub=document.createElement("button")
sub.id="subtraction"
sub.innerText="-"

let subm= document.createElement("button")
subm.id="submit"
subm.innerText="="

let decimal=document.createElement("button")
decimal.id="decimal"
decimal.innerText="."

siti.append(select)
siti.append(insist)
siti.append(mekala)
siti.append(mekalp)
siti.append(demo1)
siti.append(demo0)
siti.append(rock)
siti.append(rock1)
siti.append(rock2)
siti.append(rock3)
siti.append(rock4)
siti.append(deme)
siti.append(deme0)
siti.append(rock5)
siti.append(rock6)
siti.append(add)
siti.append(mul)
siti.append(division)
siti.append(deme1)
siti.append(sub)
siti.append(subm)
siti.append(decimal)
document.body.appendChild(siti);

amazon.append(sit)
amazon.append(siti)
document.body.appendChild(amazon)


const calci = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  
  
  function displayed(){
    let inti= document.getElementById("spacing");
    inti.value=calci.displayValue;
  }

  displayed();

  