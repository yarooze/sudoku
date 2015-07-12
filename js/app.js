var $uko;
$(function() {
 

    var myField1 = [
        {1:{val:1,sets:[1]},2:{val:-1,sets:[]},3:{val:0,sets:[1]},4:{val:-1,sets:[]},5:{val:0,sets:[1]}},
        {6:{val:-1,sets:[]},7:{val:-1,sets:[]},8:{val:-1,sets:[]},9:{val:-1,sets:[]},10:{val:-1,sets:[]}},
        {11:{val:0,sets:[1]},12:{val:-1,sets:[]},13:{val:2,sets:[1]},14:{val:-1,sets:[]},15:{val:0,sets:[1]}},
        {16:{val:-1,sets:[]},17:{val:-1,sets:[]},18:{val:-1,sets:[]},19:{val:-1,sets:[]},20:{val:-1,sets:[]}},
        {21:{val:0,sets:[1]},22:{val:-1,sets:[]},23:{val:0,sets:[1]},24:{val:-1,sets:[]},25:{val:3,sets:[1]}},
        {26:{val:-1,sets:[]},27:{val:-1,sets:[]},28:{val:-1,sets:[]},29:{val:-1,sets:[]},30:{val:-1,sets:[]}}
    ]; 
    
    var myField2 = [{1:{val:0,sets:[1,10,20],style:'w n'},2:{val:0,sets:[1,11,20],style:'n'},3:{val:0,sets:[1,12,20],style:'n o'},
          4:{val:9,sets:[1,13,21],style:'w n'},5:{val:0,sets:[1,14,21],style:'n'},6:{val:0,sets:[1,15,21],style:'n o'},
          7:{val:8,sets:[1,16,22],style:'w n'},8:{val:4,sets:[1,17,22],style:'n'},9:{val:0,sets:[1,18,22],style:'n o'}},

        {11:{val:5,sets:[2,10,20],style:'w'},12:{val:0,sets:[2,11,20],style:''},13:{val:1,sets:[2,12,20],style:'o'},
         14:{val:0,sets:[2,13,21],style:'w'},15:{val:0,sets:[2,14,21],style:''},16:{val:0,sets:[2,15,21],style:'o'},
         17:{val:0,sets:[2,16,22],style:'w'},18:{val:0,sets:[2,17,22],style:''},19:{val:0,sets:[2,18,22],style:'o'}},

        {21:{val:3,sets:[3,10,20],style:'w s'},22:{val:0,sets:[3,11,20],style:'s'},23:{val:0,sets:[3,12,20],style:'s o'},
         24:{val:0,sets:[3,13,21],style:'w s'},25:{val:0,sets:[3,14,21],style:'s'},26:{val:0,sets:[3,15,21],style:'s o'},
         27:{val:0,sets:[3,16,22],style:'w s'},28:{val:9,sets:[3,17,22],style:'s'},29:{val:0,sets:[3,18,22],style:'s o'}},
         
        {31:{val:0,sets:[4,10,23],style:'w n'},32:{val:4,sets:[4,11,23],style:'n'},33:{val:0,sets:[4,12,23],style:'n o'},
         34:{val:2,sets:[4,13,24],style:'w n'},35:{val:0,sets:[4,14,24],style:'n'},36:{val:0,sets:[4,15,24],style:'n o'},
         37:{val:5,sets:[4,16,25],style:'w n'},38:{val:0,sets:[4,17,25],style:'n'},39:{val:0,sets:[4,18,25],style:'n o'}},
         
        {41:{val:0,sets:[5,10,23],style:'w'},42:{val:0,sets:[5,11,23],style:''},43:{val:0,sets:[5,12,23],style:'o'},
         44:{val:7,sets:[5,13,24],style:'w'},45:{val:6,sets:[5,14,24],style:''},46:{val:0,sets:[5,15,24],style:'o'},
         47:{val:0,sets:[5,16,25],style:'w'},48:{val:0,sets:[5,17,25],style:''},49:{val:0,sets:[5,18,25],style:'o'}},
         
        {51:{val:0,sets:[6,10,23],style:'w s'},52:{val:0,sets:[6,11,23],style:'s'},53:{val:0,sets:[6,12,23],style:'s o'},
         54:{val:0,sets:[6,13,24],style:'w s'},55:{val:0,sets:[6,14,24],style:'s'},56:{val:0,sets:[6,15,24],style:'s o'},
         57:{val:3,sets:[6,16,25],style:'w s'},58:{val:0,sets:[6,17,25],style:'s'},59:{val:0,sets:[6,18,25],style:'s o'}},
         
        {61:{val:0,sets:[7,10,26],style:'w n'},62:{val:0,sets:[7,11,26],style:'n'},63:{val:0,sets:[7,12,26],style:'n o'},
         64:{val:0,sets:[7,13,27],style:'w n'},65:{val:3,sets:[7,14,27],style:'n'},66:{val:1,sets:[7,15,27],style:'n o'},
         67:{val:0,sets:[7,16,28],style:'w n'},68:{val:0,sets:[7,17,28],style:'n'},69:{val:0,sets:[7,18,28],style:'n o'}},
         
        {71:{val:0,sets:[8,10,26],style:'w'},72:{val:6,sets:[8,11,26],style:''},73:{val:0,sets:[8,12,26],style:'o'},
         74:{val:0,sets:[8,13,27],style:'w'},75:{val:0,sets:[8,14,27],style:''},76:{val:0,sets:[8,15,27],style:'o'},
         77:{val:0,sets:[8,16,28],style:'w'},78:{val:0,sets:[8,17,28],style:''},79:{val:7,sets:[8,18,28],style:'o'}},
         
        {81:{val:0,sets:[9,10,26],style:'w s'},82:{val:0,sets:[9,11,26],style:'s'},83:{val:0,sets:[9,12,26],style:'s o'},
         84:{val:0,sets:[9,13,27],style:'w s'},85:{val:0,sets:[9,14,27],style:'s'},86:{val:0,sets:[9,15,27],style:'s o'},
         87:{val:0,sets:[9,16,28],style:'w s'},88:{val:0,sets:[9,17,28],style:'s'},89:{val:0,sets:[9,18,28],style:'s o'}}         
        ];    

    var myField3 = [{1:{val:5,sets:[1,10,20],style:'w n'},2:{val:0,sets:[1,11,20],style:'n'},3:{val:7,sets:[1,12,20],style:'n o'},
          4:{val:0,sets:[1,13,21],style:'w n'},5:{val:9,sets:[1,14,21],style:'n'},6:{val:0,sets:[1,15,21],style:'n o'},
          7:{val:3,sets:[1,16,22],style:'w n'},8:{val:0,sets:[1,17,22],style:'n'},9:{val:2,sets:[1,18,22],style:'n o'}},

        {11:{val:0,sets:[2,10,20],style:'w'},12:{val:8,sets:[2,11,20],style:''},13:{val:6,sets:[2,12,20],style:'o'},
         14:{val:3,sets:[2,13,21],style:'w'},15:{val:0,sets:[2,14,21],style:''},16:{val:0,sets:[2,15,21],style:'o'},
         17:{val:0,sets:[2,16,22],style:'w'},18:{val:0,sets:[2,17,22],style:''},19:{val:0,sets:[2,18,22],style:'o'}},

        {21:{val:0,sets:[3,10,20],style:'w s'},22:{val:0,sets:[3,11,20],style:'s'},23:{val:0,sets:[3,12,20],style:'s o'},
         24:{val:0,sets:[3,13,21],style:'w s'},25:{val:0,sets:[3,14,21],style:'s'},26:{val:0,sets:[3,15,21],style:'s o'},
         27:{val:0,sets:[3,16,22],style:'w s'},28:{val:0,sets:[3,17,22],style:'s'},29:{val:5,sets:[3,18,22],style:'s o'}},
         
        {31:{val:0,sets:[4,10,23],style:'w n'},32:{val:0,sets:[4,11,23],style:'n'},33:{val:0,sets:[4,12,23],style:'n o'},
         34:{val:0,sets:[4,13,24],style:'w n'},35:{val:0,sets:[4,14,24],style:'n'},36:{val:1,sets:[4,15,24],style:'n o'},
         37:{val:0,sets:[4,16,25],style:'w n'},38:{val:0,sets:[4,17,25],style:'n'},39:{val:0,sets:[4,18,25],style:'n o'}},
         
        {41:{val:0,sets:[5,10,23],style:'w'},42:{val:0,sets:[5,11,23],style:''},43:{val:3,sets:[5,12,23],style:'o'},
         44:{val:0,sets:[5,13,24],style:'w'},45:{val:7,sets:[5,14,24],style:''},46:{val:0,sets:[5,15,24],style:'o'},
         47:{val:9,sets:[5,16,25],style:'w'},48:{val:8,sets:[5,17,25],style:''},49:{val:0,sets:[5,18,25],style:'o'}},
         
        {51:{val:7,sets:[6,10,23],style:'w s'},52:{val:0,sets:[6,11,23],style:'s'},53:{val:1,sets:[6,12,23],style:'s o'},
         54:{val:0,sets:[6,13,24],style:'w s'},55:{val:0,sets:[6,14,24],style:'s'},56:{val:0,sets:[6,15,24],style:'s o'},
         57:{val:0,sets:[6,16,25],style:'w s'},58:{val:0,sets:[6,17,25],style:'s'},59:{val:6,sets:[6,18,25],style:'s o'}},
         
        {61:{val:0,sets:[7,10,26],style:'w n'},62:{val:0,sets:[7,11,26],style:'n'},63:{val:0,sets:[7,12,26],style:'n o'},
         64:{val:0,sets:[7,13,27],style:'w n'},65:{val:0,sets:[7,14,27],style:'n'},66:{val:0,sets:[7,15,27],style:'n o'},
         67:{val:0,sets:[7,16,28],style:'w n'},68:{val:0,sets:[7,17,28],style:'n'},69:{val:8,sets:[7,18,28],style:'n o'}},
         
        {71:{val:0,sets:[8,10,26],style:'w'},72:{val:0,sets:[8,11,26],style:''},73:{val:4,sets:[8,12,26],style:'o'},
         74:{val:0,sets:[8,13,27],style:'w'},75:{val:2,sets:[8,14,27],style:''},76:{val:6,sets:[8,15,27],style:'o'},
         77:{val:1,sets:[8,16,28],style:'w'},78:{val:0,sets:[8,17,28],style:''},79:{val:0,sets:[8,18,28],style:'o'}},
         
        {81:{val:9,sets:[9,10,26],style:'w s'},82:{val:0,sets:[9,11,26],style:'s'},83:{val:5,sets:[9,12,26],style:'s o'},
         84:{val:0,sets:[9,13,27],style:'w s'},85:{val:4,sets:[9,14,27],style:'s'},86:{val:0,sets:[9,15,27],style:'s o'},
         87:{val:0,sets:[9,16,28],style:'w s'},88:{val:0,sets:[9,17,28],style:'s'},89:{val:0,sets:[9,18,28],style:'s o'}}         
        ];    
    
    
    $uko = $udoku();  //(myField);
    $uko.buildGameField();
    
    $('#bind').click(function() {
      $uko.bindValues();
    });    
    $('#solve').click(function() {
      $uko.solve();
    });
    $('#solveBrute').click(function() {
        if(confirm('This can take a lot of time. Are you sure?')) {
            $uko.solve(true);
        }
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

