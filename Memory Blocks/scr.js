console.log("connected");
var screenheight = window.innerHeight;
var screenwidth = window.innerWidth;
var container = document.getElementById("unityContainer").style;
var footer = document.getElementById("footer");

if(screenwidth > screenheight)
{
    container.height = screenheight+'px';
    container.width = (screenheight/2)+'px';
    footer.style.display = 'none';
}
else
{
    container.height = (screenheight-footer.offsetHeight)+'px';
    container.width = screenwidth+'px';
}