$(document).ready(function(){
  if(navigator.geolocation){
    window.onload=function(){
    
    //random background colors
    var colors=["#E34F4F","#73BA57","#007F74","#027185","#826BAB","#A28DAE","#D5A7A9","7777FF","6CA473","#B4DFC4"];
    var randomColor=colors[Math.floor(Math.random()*colors.length)];
    $("body").css("background-color",randomColor);
    
    //latitude and longitude found
    navigator.geolocation.getCurrentPosition(function(position){
     var userLon=position.coords.longitude;
     var userLat=position.coords.latitude;
     var key="cab170e9528b46ca580736c8a96a7255";

 //AJAX call
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+userLat+"&lon="+userLon+"&APPID="+key, function(dataObj){
      console.log(dataObj);//IT'S ALIVE
  //if ajax request fails
  $(document).ajaxError(function(){
    var serversDown="https://cdn.meme.am/cache/instances/folder811/500x/66292811.jpg";
    $("#showIcon").attr("src",serversDown);
  });    

 //temperature display
      var getTemp=dataObj.main.temp;
      var celsius=Math.round(getTemp-273.15);
      var fahrenheit=Math.round((celsius*1.8)+32);
      $("#showTemp").html(celsius);
      $("#cChange").css("color","#1B9CB1");

 //button click for celcius and fahrenheit
      $("#fChange").click(function(){
        $("#showTemp").text(fahrenheit);
        $("#cChange").css("color","white");
        $("#fChange").css("color","#1B9CB1");
      });
      $("#cChange").click(function(){
        $("#showTemp").text(celsius);
        $("#fChange").css("color","white");
        $("#cChange").css("color","#1B9CB1");
      });

 //weather description
      var describe=dataObj.weather[0].main.toUpperCase();
      $("#showDescription").html(describe);
      console.log(describe);

 //location display
      var city=dataObj.name;
      console.log(city);
      var country=dataObj.sys.country;
      $("#showLoc").html(city +", "+country);

 //icon change
      var rainy="http://orig15.deviantart.net/f4c4/f/2010/216/d/1/d117229be56174ba929c63d48906067c.jpg";
      var snowy="https://rlv.zcache.com/kawaii_cloud_postcard-rb24db5dc9c1246079c4bbe2b31aa7172_vgbaq_8byvr_324.jpg";
      var clear="https://image.spreadshirtmedia.com/image-server/v1/compositions/105414070/views/1,width=500,height=500,appearanceId=70,version=1364074310/cute-happy-sun-iphone-55s-rubber-case.jpg";
      var partlyCloudy="https://s-media-cache-ak0.pinimg.com/236x/18/b5/31/18b5317e1e8e4713feafbbeb8274728a.jpg";
      var hurricane="https://image.spreadshirtmedia.com/image-server/v1/compositions/102319936/views/1,width=800,height=800,appearanceId=258,backgroundColor=E8E8E8,version=1485256808/kawaii-tornado-t-shirts-men-s-t-shirt.jpg";
      var cloudy="https://s-media-cache-ak0.pinimg.com/736x/bb/11/16/bb1116a7cf2db0f1dc124e1a00758fc2.jpg";
      var drizzle="http://68.media.tumblr.com/29fbad74d4de1cf2d5205d94b2bbfa1c/tumblr_o0vuibYAhC1qji3sdo1_500.jpg";
      var thunderstorm="https://image.spreadshirtmedia.com/image-server/v1/compositions/P109040318T681A458PC118284491PA1422PT17X26Y7S50/views/1,width=300,height=300,appearanceId=458,backgroundColor=E8E8E8,version=1478262588/cute-rainbow-behind-a-dark-cloud-women-s-t-shirts-women-s-wideneck-sweatshirt.jpg";
      var haze="https://cdn.notonthehighstreet.com/fs/3d/7d/ec39-6956-4ec9-bc6f-c5f0667e4dae/original_led-cloud-string-lights.jpg";
  //if statements    
      if(describe=="DRIZZLE"){
        $("#showIcon").attr("src",drizzle);  
      }
      if(describe=="THUNDERSTORM"){
        $("#showIcon").attr("src", thunderstorm);
      }
      if(describe=="RAIN"){
        $("#showIcon").attr("src",rainy);
      }
      if(describe=="HAZE"){
        $("#showIcon").attr("src",haze);
      }
      if(describe=="SNOW"){
        $("#showIcon").attr("src",snowy);
      }
      if(describe=="CLEAR"){
        $("#showIcon").attr("src",clear);
      }
      if(describe=="PARTLY CLOUDY"){
        $("#showIcon").attr("src",partlyCloudy);
      }
      if(describe=="HURRICANE"){
        $("#showIcon").attr("src",hurricane);
      }
      if(describe=="CLOUDY"){
        $("#showIcon").attr("src",cloudy);
      }

      });//JSON  bracket
      });//navigator position function

    //this is where the shitty life pro tips go
    $.ajax({
       url:"https://www.reddit.com/r/ShittyLifeProTips/.json",
       success:function(jokeData){
        console.log(jokeData);
        var joke=jokeData.data.children;
        var random=joke[Math.floor(Math.random()*joke.length)];
        console.log(random);
          $(".badTip").html("Life Pro Tip*:"+random.data.title);
        }
      })
    };//onLoad function
  }//if statement of navigation
});//jQuery bracket

//** MADE BY HASANAT JAHAN ON JUNE 2017**//
