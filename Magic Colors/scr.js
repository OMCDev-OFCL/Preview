console.log("connected");
var screenheight = window.innerHeight;
var screenwidth = window.innerWidth;
var container = document.getElementById("unityContainer").style;
var footer = document.getElementById("footer").style;
footer.display = 'none';
if(screenwidth > screenheight)
{
    container.height = screenheight+'px';
    container.width = (screenheight/2)+'px';
    
}
else
{
    container.height = screenheight+'px';
    container.width = screenwidth+'px';
}