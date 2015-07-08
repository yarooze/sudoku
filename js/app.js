var $uko;
$(function() {
    
    var myField = [
        {1:{val:1,sets:[1]},2:{val:-1,sets:[]},3:{val:0,sets:[1]},4:{val:-1,sets:[]},5:{val:0,sets:[1]}},
        {6:{val:-1,sets:[]},7:{val:-1,sets:[]},8:{val:-1,sets:[]},9:{val:-1,sets:[]},10:{val:-1,sets:[]}},
        {11:{val:0,sets:[1]},12:{val:-1,sets:[]},13:{val:2,sets:[1]},14:{val:-1,sets:[]},15:{val:0,sets:[1]}},
        {16:{val:-1,sets:[]},17:{val:-1,sets:[]},18:{val:-1,sets:[]},19:{val:-1,sets:[]},20:{val:-1,sets:[]}},
        {21:{val:0,sets:[1]},22:{val:-1,sets:[]},23:{val:0,sets:[1]},24:{val:-1,sets:[]},25:{val:3,sets:[1]}},
        {26:{val:-1,sets:[]},27:{val:-1,sets:[]},28:{val:-1,sets:[]},29:{val:-1,sets:[]},30:{val:-1,sets:[]}}
    ];      
    
    $uko = $udoku();  //(myField);     
    $uko.buildGameField();
    
    $('#bind').click(function() {
      $uko.bindValues();
    });    
    $('#solve').click(function() {
      $uko.solve();
    });    
    $('#reset').click(function() {
      $uko.resetField();
    });    
    $('#restart').click(function() {
        if(confirm('Are you sure?')) {
            window.location.href = window.location.href;
        }      
    });    

    $uko.log('started');
});

