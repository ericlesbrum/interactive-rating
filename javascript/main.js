var number;
if(localStorage)
    localStorage.setItem("value",0);
function SelectNumber(value)
{
    number=parseInt(value);
    if(localStorage)
        localStorage.setItem("value",number);
    document.getElementById(number).classList.add("selected");
}
function Submit()
{
    if(localStorage)
        number=localStorage.getItem("value");
    if(number===undefined || number===null)
        number=0;
    document.getElementById('rate').style.display="none";
    document.getElementById('scoreResult').style.display="block";
    document.getElementById('score').innerHTML=`You selected ${number} out of 5`;
}