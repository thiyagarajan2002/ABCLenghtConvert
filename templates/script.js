function op()
{
    var from=document.getElementById('from').value;
    var to=document.getElementById('to').value;
    var from_value,to_value;
    var size=document.getElementById('Size').value;
    var num1=Number(size);
    const unit_name=['mm','cm','m','km','in','ft','yd','mi'];
    var from_value,to_value;
    for(let i=0;i<unit_name.length;i++)
    {
        if(unit_name[i]==from)
        {
            from_value=i;
        }
    }
    for(let i=0;i<unit_name.length;i++)
    {
        if(unit_name[i]==to)
        {
            to_value=i;
        }
    }
//from_value check
//Millimeter
if(from_value==0)
{
//to_value check
switch(to_value)
{
case 0:
  res=size;
  break;

case 1:
  res=size/10;
  break;

case 2:
  res=size/1000;
  break;

case 3:
  res=size/1000000;
  break;

case 4:
  res=size/25.4;
  break;

case 5:
  res=size/305;
  break;

case 6:
  res=size/914;
  break;

case 7:
  res=size*39.37;
  break;
}
}

//Centimeter
else if(from_value==1)
{
//to_value check
switch(to_value)
{
case 0:
  res=size/10;
  break;

case 1:
  res=size;
  break;

case 2:
  res=size/100;
  break;

case 3:
  res=size/100000;
  break;

case 4:
  res=size/2.54;
  break;

case 5:
  res=size/30.48;
  break;

case 6:
  res=size/91.44;
  break;

case 7:
  res=size/160934;
  break;
}
}
//Meter
else if(from_value==2)
{
//to_value check
switch(to_value)
{
case 0:
  res=size*1000;
  break;

case 1:
  res=size*100;
  break;

case 2:
  res=size;
  break;

case 3:
  res=size/1000;
  break;

case 4:
  res=size*39.37;
  break;

case 5:
  res=size*3.281;
  break;

case 6:
  res=size*1.094;
  break;

case 7:
  res=size/1609;
  break;
}
}
//Kilometer
else if(from_value==3)
{
//to_value check
switch(to_value)
{
case 0:
  res=size/1000;
  break;

case 1:
  res=size/100;
  break;

case 2:
  res=size*1000;
  break;

case 3:
  res=size;
  break;

case 4:
  res=size*39370;
  break;

case 5:
  res=size*3281;
  break;

case 6:
  res=size*1094;
  break;

case 7:
  res=size*1.609;
  break;
}
}
//Inch
else if(from_value==4)
{
//to_value check
switch(to_value)
{
case 0:
  res=size*25.4;
  break;

case 1:
  res=size*2.54;
  break;

case 2:
  res=size/39.37;
  break;

case 3:
  res=size/39370;
  break;

case 4:
  res=size;
  break;

case 5:
  res=size/12;
  break;

case 6:
  res=size/36;
  break;

case 7:
  res=size/63360;
  break;
}
}
//Foot
else if(from_value==5)
{
//to_value check
switch(to_value)
{
case 0:
  res=size/3.281;
  break;

case 1:
  res=size*30.48;
  break;

case 2:
  res=size/3.281;
  break;

case 3:
  res=size/3281;
  break;

case 4:
  res=size*12;
  break;

case 5:
  res=size;
  break;

case 6:
  res=size/3;
  break;

case 7:
  res=size/5280;
  break;
}
}
//Yard
else if(from_value==6)
{
//to_value check
switch(to_value)
{
case 0:
  res=size*914;
  break;

case 1:
  res=size*91.44;
  break;

case 2:
  res=size/1.094;
  break;

case 3:
  res=size/1094;
  break;

case 4:
  res=size*36;
  break;

case 5:
  res=size*3;
  break;

case 6:
  res=size;
  break;

case 7:
  res=size/1760;
  break;
}
}
//Mile
else if(from_value==7)
{
//to_value check
switch(to_value)
{
case 0:
  res=size*1609344;
  break;

case 1:
  res=size*160934;
  break;

case 2:
  res=size*1609;
  break;

case 3:
  res=size*1.609;
  break;

case 4:
  res=size*63360;
  break;

case 5:
  res=size*1760;
  break;

case 6:
  res=size*5280;
  break;

case 7:
  res=size;
  break;
}
}
//document.getElementById('res').innerHTML=res;
//window.open('result.html','result',res);
alert(res);
//var element = document.getElementById("output");
//element.innerText=res;
//var mywindow = window.open("","","width=200,height=100")
//mywindow.document.write("<p style='color:blur;text-align:center;font-Weight:bold;border-left:6px solid blue;background-Color:lightgrey'>",res,"</P>")
//alert(res)
//var x=document.getElementById("output");
//x.innerHTML=res;
//document.write(res);
}
