

function Camera(){
  this.film = 0;

}

Camera.prototype.addFilm = function(){
  this.film = 3600;
}

Camera.prototype.ready = function(){
  if (this.film > 0){
    return ("Ready.." + this.film + " ..frames left" )
  }
  else{
    return ("Not ready. Load film")
  }
}

Camera.prototype.shoot = function(speedSetting){

  if(speedSetting === 'normalSpeed' && this.film > 0){
    this.speed = 18;
  }
  else if(speedSetting === 'slowMotion' && this.film > 0){
    this.speed = 36;
  }
  else if(speedSetting === 'fastMotion' && this.film > 0){
    this.speed = 9;
  }
  else {
    console.log("error")
  }

}



  // this.add = function(itemName, price){
  //   this.contents = [];
  //   this.contents.push({"Item Name": itemName, "Price": price})
  // };

  // this.total = function(){
  //   var sum = 0;
  //   if (this.contents == 'empty'){
  //     return 0
  //   }
  //   else{
  //     for (var i = 0; i < this.contents.length; i++){
  //       sum += this.contents[i]["Price"];
  //     }
  //     return sum
  //   }
  // };



  


module.exports = Camera