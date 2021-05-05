window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
document.getElementById("hed").style.top = "0px";
document.getElementById("log1").style.top = "-110px";
} else {
  document.getElementById("hed").style.top = "-110px";
  document.getElementById("log1").style.top = "0px";
}
}

.jud{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
  padding-left: 2rem;
  line-height: 40px;  
  width: 100%;
  height: 40px;
  background-color:#005541;
}
.jud p{
  color: #fff;
  vertical-align: middle;
  margin-top: -2px;
  font-size: 20pt;
}
.iisi{
  box-sizing: border-box;
  width: 100%;
  height: 350px;
}
.iisi .kan{
  background-size: cover;
  background-position: center;
  width: 50%;
  float: right;
  height: 90%;
  background-color: salmon;
}
.iisi .kir{
  background-size: cover;
  background-position: center;
  width: 50%;
  float: left;
  height: 90%;
  background-color:#24e7ba;
}