function $(element) //Якщо операція вибору подвійна, вибере усі елементи
  {
		var result;
		if((element[0]=='#'||element[0]=='.')&&(element[1]=='#'||element[1]=='.'))
		{
			result=document.querySelectorAll(element.slice(1));
			return result;
		}
		else
		{
			result=document.querySelector(element);
			return result;
		}
	}

function html(element)  //НТМL елемента
{
  return $(element).innerHTML;
}

function text(element)  //Текст елемента
{
   return $(element).innerText;
}

function value(element)   //Значення елемента
{
  return $(element).value;
}

function style(element)  //Стиль елемента
{
  return $(element).style;
}

function changeClass(element, action)  //Якщо  + клас додається, - видаляється, _ toggle
{
  if(action[0]=='+') $(element).classList.add(action.slice(1));
  if(action[0]=='-') $(element).classList.remove(action.slice(1));
  if(action[0]=='_') $(element).classList.toggle(action.slice(1));
  return 0;
}

function attribute(element,attr, name)  //+ додає атрибут, - знищує, . виділяє
{
  if(attr[0]=='+') $(element).setAttribute(attr.slice(1), name);
  if(attr[0]=='-') $(element).removeAttribute(attr.slice(1));
  if(attr[0]=='.') return $(element).getAttribute(attr.slice(1));
}
 
 function hasClass(element, clname)
{
  var classes = $(element).className.split(" ");
  for(var i=0; i<classes.lenght; i++)
  {
   if(classes[i]===clname) return true; 
  }
  return false;
}
