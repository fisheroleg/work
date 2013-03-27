window.onload = function () {       
  
  $("body").on("dblclick",create);
	$("body").on("click",destroy);
	};

function getClientWidth()
{
  return document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientWidth:document.body.clientWidth;
}

function getClientHeight()
{
  return document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientHeight:document.body.clientHeight;
}


function getSC() {
  
    sel = window.getSelection();
    var range = sel.getRangeAt(0).cloneRange();
    var rect = range.getClientRects()[0];
    x1 = rect.left;
    y1 = rect.top;
    x2 = rect.right;
    y2 = rect.bottom;
    return { x1: x1, y1: y1, x2: x2, y2:y2 };
}

function create()
{
  destroy();
  var d=document.createElement('div');
  d.style.width='200px';
  d.id="tip";
  d.innerHTML=window.getSelection().toString()+"<hr>Here are some info";
 // var width=getSC().x2-getSC().x1+10;
 // d.style.width=""+width+"px";
  var deltaX=getSC().x2-getSC().x1;
  var deltaY=getSC().y2-getSC().y1;
  if(getSC().x1<getClientWidth()/2)
  {
 
//  d.style.top=""+getSC().y2+"px";
  d.style.left=""+getSC().x1+"px";
  }else{
    d.style.left=""+(getSC().x1+deltaX-200)+"px";
  }
  
  if(getSC().y1<getClientHeight()/2)
  {
    d.style.top=""+getSC().y2+"px"; 
  }else{
     d.style.bottom=""+(getClientHeight()-getSC().y1)+"px";
  }
  

  document.body.appendChild(d); 
}
function destroy()
{
    $("#tip").remove();
}

