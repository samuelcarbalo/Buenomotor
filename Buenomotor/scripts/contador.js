/*Downloaded from https://www.codeseek.co/jorgemaiden/javascript-contador-numandxe9rico-con-animaciandxf3n-jrVRRv */
function count(){
  var counter = { var: 0 };
  TweenMax.to(counter, 3, {
    var: 6708, 
    onUpdate: function () {
      var number = Math.ceil(counter.var);
      $('.counter').html(number);
      if(number === counter.var){ count.kill(); }
    },
    onComplete: function(){
      count();
    },    
    ease:Circ.easeOut
  });
}

count();

function count1(){
  var counter1 = { var: 0 };
  TweenMax.to(counter1, 3, {
    var: 1510, 
    onUpdate: function () {
      var number = Math.ceil(counter1.var);
      $('.counter1').html(number);
      if(number === counter1.var){ count.kill(); }
    },
    onComplete: function(){
      count();
    },    
    ease:Circ.easeOut
  });
}

count1();

function count2(){
  var numfijo = { var: 0 };
  TweenMax.to(numfijo, 3, {
    var: 14, 
    onUpdate: function () {
      var number = Math.ceil(numfijo.var);
      $('.numfijo').html(number);
      if(number === numfijo.var){ count.kill(); }
    },
    onComplete: function(){
      count();
    },    
    ease:Circ.easeOut
  });
}

count2();
