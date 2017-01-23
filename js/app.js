var $uko;
$(function() {
 

    var myField1 = [ //example of the 3x3 field with spaces
        {1:{val:1,sets:[1]},2:{val:-1,sets:[]},3:{val:0,sets:[1]},4:{val:-1,sets:[]},5:{val:0,sets:[1]}},
        {6:{val:-1,sets:[]},7:{val:-1,sets:[]},8:{val:-1,sets:[]},9:{val:-1,sets:[]},10:{val:-1,sets:[]}},
        {11:{val:0,sets:[1]},12:{val:-1,sets:[]},13:{val:2,sets:[1]},14:{val:-1,sets:[]},15:{val:0,sets:[1]}},
        {16:{val:-1,sets:[]},17:{val:-1,sets:[]},18:{val:-1,sets:[]},19:{val:-1,sets:[]},20:{val:-1,sets:[]}},
        {21:{val:0,sets:[1]},22:{val:-1,sets:[]},23:{val:0,sets:[1]},24:{val:-1,sets:[]},25:{val:3,sets:[1]}},
        {26:{val:-1,sets:[]},27:{val:-1,sets:[]},28:{val:-1,sets:[]},29:{val:-1,sets:[]},30:{val:-1,sets:[]}}
    ]; 
    
    var myField2 = [  //empty field 3x3x3
        {1:{val:0,sets:[1,10,20],style:'w n'},2:{val:0,sets:[1,11,20],style:'n'},3:{val:0,sets:[1,12,20],style:'n o'},
          4:{val:0,sets:[1,13,21],style:'w n'},5:{val:0,sets:[1,14,21],style:'n'},6:{val:0,sets:[1,15,21],style:'n o'},
          7:{val:0,sets:[1,16,22],style:'w n'},8:{val:0,sets:[1,17,22],style:'n'},9:{val:0,sets:[1,18,22],style:'n o'}},

        {11:{val:0,sets:[2,10,20],style:'w'},12:{val:0,sets:[2,11,20],style:''},13:{val:0,sets:[2,12,20],style:'o'},
         14:{val:0,sets:[2,13,21],style:'w'},15:{val:0,sets:[2,14,21],style:''},16:{val:0,sets:[2,15,21],style:'o'},
         17:{val:0,sets:[2,16,22],style:'w'},18:{val:0,sets:[2,17,22],style:''},19:{val:0,sets:[2,18,22],style:'o'}},

        {21:{val:0,sets:[3,10,20],style:'w s'},22:{val:0,sets:[3,11,20],style:'s'},23:{val:0,sets:[3,12,20],style:'s o'},
         24:{val:0,sets:[3,13,21],style:'w s'},25:{val:0,sets:[3,14,21],style:'s'},26:{val:0,sets:[3,15,21],style:'s o'},
         27:{val:0,sets:[3,16,22],style:'w s'},28:{val:0,sets:[3,17,22],style:'s'},29:{val:0,sets:[3,18,22],style:'s o'}},
         
        {31:{val:0,sets:[4,10,23],style:'w n'},32:{val:0,sets:[4,11,23],style:'n'},33:{val:0,sets:[4,12,23],style:'n o'},
         34:{val:0,sets:[4,13,24],style:'w n'},35:{val:0,sets:[4,14,24],style:'n'},36:{val:0,sets:[4,15,24],style:'n o'},
         37:{val:0,sets:[4,16,25],style:'w n'},38:{val:0,sets:[4,17,25],style:'n'},39:{val:0,sets:[4,18,25],style:'n o'}},
         
        {41:{val:0,sets:[5,10,23],style:'w'},42:{val:0,sets:[5,11,23],style:''},43:{val:0,sets:[5,12,23],style:'o'},
         44:{val:0,sets:[5,13,24],style:'w'},45:{val:0,sets:[5,14,24],style:''},46:{val:0,sets:[5,15,24],style:'o'},
         47:{val:0,sets:[5,16,25],style:'w'},48:{val:0,sets:[5,17,25],style:''},49:{val:0,sets:[5,18,25],style:'o'}},
         
        {51:{val:0,sets:[6,10,23],style:'w s'},52:{val:0,sets:[6,11,23],style:'s'},53:{val:0,sets:[6,12,23],style:'s o'},
         54:{val:0,sets:[6,13,24],style:'w s'},55:{val:0,sets:[6,14,24],style:'s'},56:{val:0,sets:[6,15,24],style:'s o'},
         57:{val:0,sets:[6,16,25],style:'w s'},58:{val:0,sets:[6,17,25],style:'s'},59:{val:0,sets:[6,18,25],style:'s o'}},
         
        {61:{val:0,sets:[7,10,26],style:'w n'},62:{val:0,sets:[7,11,26],style:'n'},63:{val:0,sets:[7,12,26],style:'n o'},
         64:{val:0,sets:[7,13,27],style:'w n'},65:{val:0,sets:[7,14,27],style:'n'},66:{val:0,sets:[7,15,27],style:'n o'},
         67:{val:0,sets:[7,16,28],style:'w n'},68:{val:0,sets:[7,17,28],style:'n'},69:{val:0,sets:[7,18,28],style:'n o'}},
         
        {71:{val:0,sets:[8,10,26],style:'w'},72:{val:0,sets:[8,11,26],style:''},73:{val:0,sets:[8,12,26],style:'o'},
         74:{val:0,sets:[8,13,27],style:'w'},75:{val:0,sets:[8,14,27],style:''},76:{val:0,sets:[8,15,27],style:'o'},
         77:{val:0,sets:[8,16,28],style:'w'},78:{val:0,sets:[8,17,28],style:''},79:{val:0,sets:[8,18,28],style:'o'}},
         
        {81:{val:0,sets:[9,10,26],style:'w s'},82:{val:0,sets:[9,11,26],style:'s'},83:{val:0,sets:[9,12,26],style:'s o'},
         84:{val:0,sets:[9,13,27],style:'w s'},85:{val:0,sets:[9,14,27],style:'s'},86:{val:0,sets:[9,15,27],style:'s o'},
         87:{val:0,sets:[9,16,28],style:'w s'},88:{val:0,sets:[9,17,28],style:'s'},89:{val:0,sets:[9,18,28],style:'s o'}}         
        ];    

    var myField3 = [ //example field 3x3x3 - can be brute forced
        {1:{val:5,sets:[1,10,20],style:'w n'},2:{val:0,sets:[1,11,20],style:'n'},3:{val:7,sets:[1,12,20],style:'n o'},
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
    
    var myField4 = [ // Gattai5 / Samurai
    /* Sets:
     *  0x   10x 
     *    20x
     * 30x   40x
     */
        {// top left
          1:{val:0,sets:[1,10,20],style:'w n'},2:{val:0,sets:[1,11,20],style:'n'},3:{val:0,sets:[1,12,20],style:'n o'},
          4:{val:0,sets:[1,13,21],style:'w n'},5:{val:0,sets:[1,14,21],style:'n'},6:{val:0,sets:[1,15,21],style:'n o'},
          7:{val:0,sets:[1,16,22],style:'w n'},8:{val:0,sets:[1,17,22],style:'n'},9:{val:0,sets:[1,18,22],style:'n o'},
        //moddle empty
          10:{val:-1,sets:[]},11:{val:-1,sets:[]},12:{val:-1,sets:[]},
        // top right  
          17:{val:0,sets:[101,1010,1020],style:'w n'},18:{val:0,sets:[101,1011,1020],style:'n'},19:{val:0,sets:[101,1012,1020],style:'n o'},
          20:{val:0,sets:[101,1013,1021],style:'w n'},21:{val:0,sets:[101,1014,1021],style:'n'},22:{val:0,sets:[101,1015,1021],style:'n o'},
          23:{val:0,sets:[101,1016,1022],style:'w n'},24:{val:0,sets:[101,1017,1022],style:'n'},25:{val:0,sets:[101,1018,1022],style:'n o'}
        },

        {   // top left
            101:{val:0,sets:[2,10,20],style:'w'},102:{val:0,sets:[2,11,20],style:''},103:{val:0,sets:[2,12,20],style:'o'},
            104:{val:0,sets:[2,13,21],style:'w'},105:{val:0,sets:[2,14,21],style:''},106:{val:0,sets:[2,15,21],style:'o'},
            107:{val:0,sets:[2,16,22],style:'w'},108:{val:0,sets:[2,17,22],style:''},109:{val:0,sets:[2,18,22],style:'o'},
            // moddle empty
            110:{val:-1,sets:[]},111:{val:-1,sets:[]},112:{val:-1,sets:[]},
            // top right  
            117:{val:0,sets:[102,1010,1020],style:'w'},118:{val:0,sets:[102,1011,1020],style:''},119:{val:0,sets:[102,1012,1020],style:'o'},
            120:{val:0,sets:[102,1013,1021],style:'w'},121:{val:0,sets:[102,1014,1021],style:''},122:{val:0,sets:[102,1015,1021],style:'o'},
            123:{val:0,sets:[102,1016,1022],style:'w'},124:{val:0,sets:[102,1017,1022],style:''},125:{val:0,sets:[102,1018,1022],style:'o'}
        },

        {  // top left
            201:{val:0,sets:[3,10,20],style:'w s'},202:{val:0,sets:[3,11,20],style:'s'},203:{val:0,sets:[3,12,20],style:'s o'},
            204:{val:0,sets:[3,13,21],style:'w s'},205:{val:0,sets:[3,14,21],style:'s'},206:{val:0,sets:[3,15,21],style:'s o'},
            207:{val:0,sets:[3,16,22],style:'w s'},208:{val:0,sets:[3,17,22],style:'s'},209:{val:0,sets:[3,18,22],style:'s o'},
            //moddle empty
            210:{val:-1,sets:[]},211:{val:-1,sets:[]},212:{val:-1,sets:[]},
            // top right  
            217:{val:0,sets:[103,1010,1020],style:'w s'},218:{val:0,sets:[103,1011,1020],style:'s'},219:{val:0,sets:[103,1012,1020],style:'s o'},
            220:{val:0,sets:[103,1013,1021],style:'w s'},221:{val:0,sets:[103,1014,1021],style:'s'},222:{val:0,sets:[103,1015,1021],style:'s o'},
            223:{val:0,sets:[103,1016,1022],style:'w s'},224:{val:0,sets:[103,1017,1022],style:'s'},225:{val:0,sets:[103,1018,1022],style:'s o'}
        },
         
        { // top left
            301:{val:0,sets:[4,10,23],style:'w n'},302:{val:0,sets:[4,11,23],style:'n'},303:{val:0,sets:[4,12,23],style:'n o'},
            304:{val:0,sets:[4,13,24],style:'w n'},305:{val:0,sets:[4,14,24],style:'n'},306:{val:0,sets:[4,15,24],style:'n o'},
            307:{val:0,sets:[4,16,25],style:'w n'},308:{val:0,sets:[4,17,25],style:'n'},309:{val:0,sets:[4,18,25],style:'n o'},
            //moddle empty
            310:{val:-1,sets:[]},311:{val:-1,sets:[]},312:{val:-1,sets:[]},
            // top right  
            317:{val:0,sets:[104,1010,1023],style:'w n'},318:{val:0,sets:[104,1011,1023],style:'n'},319:{val:0,sets:[104,1012,1023],style:'n o'},
            320:{val:0,sets:[104,1013,1024],style:'w n'},321:{val:0,sets:[104,1014,1024],style:'n'},322:{val:0,sets:[104,1015,1024],style:'n o'},
            323:{val:0,sets:[104,1016,1025],style:'w n'},324:{val:0,sets:[104,1017,1025],style:'n'},325:{val:0,sets:[104,1018,1025],style:'n o'}
        },
         
        { // top left
            401:{val:0,sets:[5,10,23],style:'w'},402:{val:0,sets:[5,11,23],style:''},403:{val:0,sets:[5,12,23],style:'o'},
            404:{val:0,sets:[5,13,24],style:'w'},405:{val:0,sets:[5,14,24],style:''},406:{val:0,sets:[5,15,24],style:'o'},
            407:{val:0,sets:[5,16,25],style:'w'},408:{val:0,sets:[5,17,25],style:''},409:{val:0,sets:[5,18,25],style:'o'},
            //moddle empty
            410:{val:-1,sets:[]},411:{val:-1,sets:[]},412:{val:-1,sets:[]},
            // top right  
            417:{val:0,sets:[105,1010,1023],style:'w'},418:{val:0,sets:[105,1011,1023],style:''},419:{val:0,sets:[105,1012,1023],style:'o'},
            420:{val:0,sets:[105,1013,1024],style:'w'},421:{val:0,sets:[105,1014,1024],style:''},422:{val:0,sets:[105,1015,1024],style:'o'},
            423:{val:0,sets:[105,1016,1025],style:'w'},424:{val:0,sets:[105,1017,1025],style:''},425:{val:0,sets:[105,1018,1025],style:'o'}
        },
         
        { //top left
            501:{val:0,sets:[6,10,23],style:'w s'},502:{val:0,sets:[6,11,23],style:'s'},503:{val:0,sets:[6,12,23],style:'s o'},
            504:{val:0,sets:[6,13,24],style:'w s'},505:{val:0,sets:[6,14,24],style:'s'},506:{val:0,sets:[6,15,24],style:'s o'},
            507:{val:0,sets:[6,16,25],style:'w s'},508:{val:0,sets:[6,17,25],style:'s'},509:{val:0,sets:[6,18,25],style:'s o'},
            //moddle empty
            510:{val:-1,sets:[]},511:{val:-1,sets:[]},512:{val:-1,sets:[]},
            // top right  
            517:{val:0,sets:[106,1010,1023],style:'s w'},518:{val:0,sets:[106,1011,1023],style:'s'},519:{val:0,sets:[106,1012,1023],style:'s o'},
            520:{val:0,sets:[106,1013,1024],style:'s w'},521:{val:0,sets:[106,1014,1024],style:'s'},522:{val:0,sets:[106,1015,1024],style:'s o'},
            523:{val:0,sets:[106,1016,1025],style:'s w'},524:{val:0,sets:[106,1017,1025],style:'s'},525:{val:0,sets:[106,1018,1025],style:'s o'}
        },
         
        { // top left
            601:{val:0,sets:[7,10,26],style:'w n'},602:{val:0,sets:[7,11,26],style:'n'},603:{val:0,sets:[7,12,26],style:'n o'},
            604:{val:0,sets:[7,13,27],style:'w n'},605:{val:0,sets:[7,14,27],style:'n'},606:{val:0,sets:[7,15,27],style:'n o'},
            607:{val:0,sets:[7,16,28],style:'w n'},608:{val:0,sets:[7,17,28],style:'n'},609:{val:0,sets:[7,18,28],style:'n o'},
            //moddle 
            610:{val:0,sets:[7,10,26],style:'n'},611:{val:0,sets:[7,10,26],style:'n'},612:{val:0,sets:[7,10,26],style:'n'},
            // top right  
            617:{val:0,sets:[107,1010,1026],style:'w'},618:{val:0,sets:[107,1011,1026],style:''},619:{val:0,sets:[107,1012,1026],style:'o'},
            620:{val:0,sets:[107,1013,1027],style:'w'},621:{val:0,sets:[107,1014,1027],style:''},622:{val:0,sets:[107,1015,1027],style:'o'},
            623:{val:0,sets:[107,1016,1028],style:'w'},624:{val:0,sets:[107,1017,1028],style:''},625:{val:0,sets:[107,1018,1028],style:'o'}
        },
         
        { // top left
            701:{val:0,sets:[8,10,26],style:'w'},702:{val:0,sets:[8,11,26],style:''},703:{val:0,sets:[8,12,26],style:'o'},
            704:{val:0,sets:[8,13,27],style:'w'},705:{val:0,sets:[8,14,27],style:''},706:{val:0,sets:[8,15,27],style:'o'},
            707:{val:0,sets:[8,16,28],style:'w'},708:{val:0,sets:[8,17,28],style:''},709:{val:0,sets:[8,18,28],style:'o'},
            //moddle 
            710:{val:0,sets:[7,10,26],style:''},711:{val:0,sets:[7,10,26],style:''},712:{val:0,sets:[7,10,26],style:''},
            // top right  
            717:{val:0,sets:[108,1010,1026],style:'w'},718:{val:0,sets:[108,1011,1026],style:''},719:{val:0,sets:[108,1012,1026],style:'o'},
            720:{val:0,sets:[108,1013,1027],style:'w'},721:{val:0,sets:[108,1014,1027],style:''},722:{val:0,sets:[108,1015,1027],style:'o'},
            723:{val:0,sets:[108,1016,1028],style:'w'},724:{val:0,sets:[108,1017,1028],style:''},725:{val:0,sets:[108,1018,1028],style:'o'}
        },
         
        { // top left
            801:{val:0,sets:[9,10,26],style:'w s'},802:{val:0,sets:[9,11,26],style:'s'},803:{val:0,sets:[9,12,26],style:'s o'},
            804:{val:0,sets:[9,13,27],style:'w s'},805:{val:0,sets:[9,14,27],style:'s'},806:{val:0,sets:[9,15,27],style:'s o'},
            807:{val:0,sets:[9,16,28],style:'w s'},808:{val:0,sets:[9,17,28],style:'s'},809:{val:0,sets:[9,18,28],style:'s o'},
            //moddle 
            810:{val:0,sets:[7,10,26],style:'s'},811:{val:0,sets:[7,10,26],style:'s'},812:{val:0,sets:[7,10,26],style:'s'},
            // top right  
            817:{val:0,sets:[109,1010,1026],style:'s w'},818:{val:0,sets:[109,1011,1026],style:'s'},819:{val:0,sets:[109,1012,1026],style:'s o'},
            820:{val:0,sets:[109,1013,1027],style:'s w'},821:{val:0,sets:[109,1014,1027],style:'s'},822:{val:0,sets:[109,1015,1027],style:'s o'},
            823:{val:0,sets:[109,1016,1028],style:'s w'},824:{val:0,sets:[109,1017,1028],style:'s'},825:{val:0,sets:[109,1018,1028],style:'s o'}
        },

        { // left empty
            901:{val:-1,sets:[]},902:{val:-1,sets:[]},903:{val:-1,sets:[]},
            904:{val:-1,sets:[]},905:{val:-1,sets:[]},906:{val:-1,sets:[]},
            //moddle 
            907:{val:0,sets:[5,16,25],style:'w'},908:{val:0,sets:[5,17,25],style:''},909:{val:0,sets:[5,18,25],style:'o'},
            910:{val:0,sets:[5,16,25],style:'w'},911:{val:0,sets:[5,16,25],style:''},912:{val:0,sets:[5,16,25],style:'o'},
            917:{val:0,sets:[1,10,20],style:'w'},918:{val:0,sets:[1,11,20],style:''},919:{val:0,sets:[1,12,20],style:'o'},
            // right empty 
            920:{val:-1,sets:[]},921:{val:-1,sets:[]},922:{val:-1,sets:[]},
            923:{val:-1,sets:[]},924:{val:-1,sets:[]},925:{val:-1,sets:[]}
        },

        { // left empty
            1001:{val:-1,sets:[]},1002:{val:-1,sets:[]},1003:{val:-1,sets:[]},
            1004:{val:-1,sets:[]},1005:{val:-1,sets:[]},1006:{val:-1,sets:[]},
            //moddle 
            1007:{val:0,sets:[5,16,25],style:'w'},1008:{val:0,sets:[5,17,25],style:''},1009:{val:0,sets:[5,18,25],style:'o'},
            1010:{val:0,sets:[5,16,25],style:'w'},1011:{val:0,sets:[5,16,25],style:''},1012:{val:0,sets:[5,16,25],style:'o'},
            1017:{val:0,sets:[1,10,20],style:'w'},1018:{val:0,sets:[1,11,20],style:''},1019:{val:0,sets:[1,12,20],style:'o'},
            // right  empty
            1020:{val:-1,sets:[]},1021:{val:-1,sets:[]},1022:{val:-1,sets:[]},
            1023:{val:-1,sets:[]},1024:{val:-1,sets:[]},1025:{val:-1,sets:[]}
        },

        { // left empty
            1101:{val:-1,sets:[]},1102:{val:-1,sets:[]},1103:{val:-1,sets:[]},
            1104:{val:-1,sets:[]},1105:{val:-1,sets:[]},1106:{val:-1,sets:[]},
            //moddle 
            1107:{val:0,sets:[5,16,25],style:'s w'},1108:{val:0,sets:[5,17,25],style:'s'},1109:{val:0,sets:[5,18,25],style:'s o'},
            1110:{val:0,sets:[5,16,25],style:'s w'},1111:{val:0,sets:[5,16,25],style:'s'},1112:{val:0,sets:[5,16,25],style:'s o'},
            1117:{val:0,sets:[1,10,20],style:'s w'},1118:{val:0,sets:[1,11,20],style:'s'},1119:{val:0,sets:[1,12,20],style:'s o'},
            // right   empty
            1120:{val:-1,sets:[]},1121:{val:-1,sets:[]},1122:{val:-1,sets:[]},
            1123:{val:-1,sets:[]},1124:{val:-1,sets:[]},1125:{val:-1,sets:[]}
        },
         
        { // buttom left
            1201:{val:0,sets:[7,10,26],style:'w n'},1202:{val:0,sets:[7,11,26],style:'n'},1203:{val:0,sets:[7,12,26],style:'n o'},
            1204:{val:0,sets:[7,13,27],style:'w n'},1205:{val:0,sets:[7,14,27],style:'n'},1206:{val:0,sets:[7,15,27],style:'n o'},
            1207:{val:0,sets:[7,16,28],style:'w n'},1208:{val:0,sets:[7,17,28],style:'n'},1209:{val:0,sets:[7,18,28],style:'n o'},
            //moddle empty
            1210:{val:0,sets:[7,10,26],style:'n'},1211:{val:0,sets:[7,10,26],style:'n'},1212:{val:0,sets:[7,10,26],style:'n'},
            // buttom right  
            1217:{val:0,sets:[1,10,20],style:'w n'},1218:{val:0,sets:[1,11,20],style:'n'},1219:{val:0,sets:[1,12,20],style:'n o'},
            1120:{val:0,sets:[1,13,21],style:'w n'},1121:{val:0,sets:[1,14,21],style:'n'},1122:{val:0,sets:[1,15,21],style:'n o'},
            1123:{val:0,sets:[1,16,22],style:'w n'},1124:{val:0,sets:[1,17,22],style:'n'},1125:{val:0,sets:[1,18,22],style:'n o'}
        },
         
        { // buttom left
            1301:{val:0,sets:[8,10,26],style:'w'},1302:{val:0,sets:[8,11,26],style:''},1303:{val:0,sets:[8,12,26],style:'o'},
            1304:{val:0,sets:[8,13,27],style:'w'},1305:{val:0,sets:[8,14,27],style:''},1306:{val:0,sets:[8,15,27],style:'o'},
            1307:{val:0,sets:[8,16,28],style:'w'},1308:{val:0,sets:[8,17,28],style:''},1309:{val:0,sets:[8,18,28],style:'o'},
            //moddle  empty
            1310:{val:0,sets:[7,10,26],style:''},1311:{val:0,sets:[7,10,26],style:''},1312:{val:0,sets:[7,10,26],style:''},
            // buttom right  
            1317:{val:0,sets:[1,10,20],style:'w'},1318:{val:0,sets:[1,11,20],style:''},1319:{val:0,sets:[1,12,20],style:'o'},
            1320:{val:0,sets:[1,13,21],style:'w'},1321:{val:0,sets:[1,14,21],style:''},1322:{val:0,sets:[1,15,21],style:'o'},
            1323:{val:0,sets:[1,16,22],style:'w'},1324:{val:0,sets:[1,17,22],style:''},1325:{val:0,sets:[1,18,22],style:'o'}
        },
         
        { // buttom left
            1401:{val:0,sets:[9,10,26],style:'w s'},1402:{val:0,sets:[9,11,26],style:'s'},1403:{val:0,sets:[9,12,26],style:'s o'},
            1404:{val:0,sets:[9,13,27],style:'w s'},1405:{val:0,sets:[9,14,27],style:'s'},1406:{val:0,sets:[9,15,27],style:'s o'},
            1407:{val:0,sets:[9,16,28],style:'w s'},1408:{val:0,sets:[9,17,28],style:'s'},1409:{val:0,sets:[9,18,28],style:'s o'},
            //moddle 
            1410:{val:0,sets:[7,10,26],style:'s'},1411:{val:0,sets:[7,10,26],style:'s'},1412:{val:0,sets:[7,10,26],style:'s'},
            // buttom right  
            1417:{val:0,sets:[1,10,20],style:'s w'},1418:{val:0,sets:[1,11,20],style:'s'},1419:{val:0,sets:[1,12,20],style:'s o'},
            1420:{val:0,sets:[1,13,21],style:'s w'},1421:{val:0,sets:[1,14,21],style:'s'},1422:{val:0,sets:[1,15,21],style:'s o'},
            1423:{val:0,sets:[1,16,22],style:'s w'},1424:{val:0,sets:[1,17,22],style:'s'},1425:{val:0,sets:[1,18,22],style:'s o'}
        },
         
        { // buttom left
            1501:{val:0,sets:[7,10,26],style:'w n'},1502:{val:0,sets:[7,11,26],style:'n'},1503:{val:0,sets:[7,12,26],style:'n o'},
            1504:{val:0,sets:[7,13,27],style:'w n'},1505:{val:0,sets:[7,14,27],style:'n'},1506:{val:0,sets:[7,15,27],style:'n o'},
            1507:{val:0,sets:[7,16,28],style:'w n'},1508:{val:0,sets:[7,17,28],style:'n'},1509:{val:0,sets:[7,18,28],style:'n o'},
            //moddle 
            1510:{val:0,sets:[7,10,26],style:'n'},1511:{val:0,sets:[7,10,26],style:'n'},1512:{val:0,sets:[7,10,26],style:'n'},//
            // buttom right  
            1517:{val:0,sets:[1,10,20],style:'w n'},1518:{val:0,sets:[1,11,20],style:'n'},1519:{val:0,sets:[1,12,20],style:'n o'},
            1520:{val:0,sets:[1,13,21],style:'w n'},1521:{val:0,sets:[1,14,21],style:'n'},1522:{val:0,sets:[1,15,21],style:'n o'},
            1523:{val:0,sets:[1,16,22],style:'w n'},1524:{val:0,sets:[1,17,22],style:'n'},1525:{val:0,sets:[1,18,22],style:'n o'}
        },
         
        { // buttom left
            1601:{val:0,sets:[8,10,26],style:'w'},1602:{val:0,sets:[8,11,26],style:''},1603:{val:0,sets:[8,12,26],style:'o'},
            1604:{val:0,sets:[8,13,27],style:'w'},1605:{val:0,sets:[8,14,27],style:''},1606:{val:0,sets:[8,15,27],style:'o'},
            1607:{val:0,sets:[8,16,28],style:'w'},1608:{val:0,sets:[8,17,28],style:''},1609:{val:0,sets:[8,18,28],style:'o'},
            // moddle 
            1610:{val:0,sets:[7,10,26],style:''},1611:{val:0,sets:[7,10,26],style:''},1612:{val:0,sets:[7,10,26],style:''},
            // top right  
            1617:{val:0,sets:[1,10,20],style:'w'},1618:{val:0,sets:[1,11,20],style:''},1619:{val:0,sets:[1,12,20],style:'o'},
            1620:{val:0,sets:[1,13,21],style:'w'},1621:{val:0,sets:[1,14,21],style:''},1622:{val:0,sets:[1,15,21],style:'o'},
            1623:{val:0,sets:[1,16,22],style:'w'},1624:{val:0,sets:[1,17,22],style:''},1625:{val:0,sets:[1,18,22],style:'o'}
        },
         
        { // buttom left
            1701:{val:0,sets:[9,10,26],style:'w s'},1702:{val:0,sets:[9,11,26],style:'s'},1703:{val:0,sets:[9,12,26],style:'s o'},
            1704:{val:0,sets:[9,13,27],style:'w s'},1705:{val:0,sets:[9,14,27],style:'s'},1706:{val:0,sets:[9,15,27],style:'s o'},
            1707:{val:0,sets:[9,16,28],style:'w s'},1708:{val:0,sets:[9,17,28],style:'s'},1709:{val:0,sets:[9,18,28],style:'s o'},
            //moddle 
            1710:{val:0,sets:[7,10,26],style:'s'},1711:{val:0,sets:[7,10,26],style:'s'},1712:{val:0,sets:[7,10,26],style:'s'},
            // top right  
            1717:{val:0,sets:[1,10,20],style:'s w'},1718:{val:0,sets:[1,11,20],style:'s'},1719:{val:0,sets:[1,12,20],style:'s o'},
            1720:{val:0,sets:[1,13,21],style:'s w'},1721:{val:0,sets:[1,14,21],style:'s'},1722:{val:0,sets:[1,15,21],style:'s o'},
            1723:{val:0,sets:[1,16,22],style:'s w'},1724:{val:0,sets:[1,17,22],style:'s'},1725:{val:0,sets:[1,18,22],style:'s o'}
        },
         
        { // buttom left
            1801:{val:0,sets:[7,10,26],style:'w n'},1802:{val:0,sets:[7,11,26],style:'n'},1803:{val:0,sets:[7,12,26],style:'n o'},
            1804:{val:0,sets:[7,13,27],style:'w n'},1805:{val:0,sets:[7,14,27],style:'n'},1806:{val:0,sets:[7,15,27],style:'n o'},
            1807:{val:0,sets:[7,16,28],style:'w n'},1808:{val:0,sets:[7,17,28],style:'n'},1809:{val:0,sets:[7,18,28],style:'n o'},
            // moddle 
            1810:{val:0,sets:[7,10,26],style:'n'},1811:{val:0,sets:[7,10,26],style:'n'},1812:{val:0,sets:[7,10,26],style:'n'},//
            // top right  
            1817:{val:0,sets:[1,10,20],style:'w n'},1818:{val:0,sets:[1,11,20],style:'n'},1819:{val:0,sets:[1,12,20],style:'n o'},
            1820:{val:0,sets:[1,13,21],style:'w n'},1821:{val:0,sets:[1,14,21],style:'n'},1822:{val:0,sets:[1,15,21],style:'n o'},
            1823:{val:0,sets:[1,16,22],style:'w n'},1824:{val:0,sets:[1,17,22],style:'n'},1825:{val:0,sets:[1,18,22],style:'n o'}
        },
         
        { // buttom left
            1901:{val:0,sets:[8,10,26],style:'w'},1902:{val:0,sets:[8,11,26],style:''},1903:{val:0,sets:[8,12,26],style:'o'},
            1904:{val:0,sets:[8,13,27],style:'w'},1905:{val:0,sets:[8,14,27],style:''},1906:{val:0,sets:[8,15,27],style:'o'},
            1907:{val:0,sets:[8,16,28],style:'w'},1908:{val:0,sets:[8,17,28],style:''},1909:{val:0,sets:[8,18,28],style:'o'},
            // moddle 
            1910:{val:0,sets:[7,10,26],style:''},1911:{val:0,sets:[7,10,26],style:''},1912:{val:0,sets:[7,10,26],style:''},
            // top right  
            1917:{val:0,sets:[1,10,20],style:'w'},1918:{val:0,sets:[1,11,20],style:''},1919:{val:0,sets:[1,12,20],style:'o'},
            1920:{val:0,sets:[1,13,21],style:'w'},1921:{val:0,sets:[1,14,21],style:''},1922:{val:0,sets:[1,15,21],style:'o'},
            1923:{val:0,sets:[1,16,22],style:'w'},1924:{val:0,sets:[1,17,22],style:''},1925:{val:0,sets:[1,18,22],style:'o'}
        },
         
        { // buttom left
            2001:{val:0,sets:[9,10,26],style:'w s'},2002:{val:0,sets:[9,11,26],style:'s'},2003:{val:0,sets:[9,12,26],style:'s o'},
            2004:{val:0,sets:[9,13,27],style:'w s'},2005:{val:0,sets:[9,14,27],style:'s'},2006:{val:0,sets:[9,15,27],style:'s o'},
            2007:{val:0,sets:[9,16,28],style:'w s'},2008:{val:0,sets:[9,17,28],style:'s'},2009:{val:0,sets:[9,18,28],style:'s o'},
            //moddle 
            2010:{val:0,sets:[7,10,26],style:'s'},2011:{val:0,sets:[7,10,26],style:'s'},2012:{val:0,sets:[7,10,26],style:'s'},
            // top right  
            2017:{val:0,sets:[1,10,20],style:'s w'},2018:{val:0,sets:[1,11,20],style:'s'},2019:{val:0,sets:[1,12,20],style:'s o'},
            2020:{val:0,sets:[1,13,21],style:'s w'},2021:{val:0,sets:[1,14,21],style:'s'},2022:{val:0,sets:[1,15,21],style:'s o'},
            2023:{val:0,sets:[1,16,22],style:'s w'},2024:{val:0,sets:[1,17,22],style:'s'},2025:{val:0,sets:[1,18,22],style:'s o'}
        }
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

    
    $('#edit').click(function() {
        $('#fieldSetData').val(JSON.stringify($uko.fieldSet));
    });
    $('#load').click(function() {
        $uko = $udoku(JSON.parse($('#fieldSetData').val()));        
        $uko.buildGameField();
    });
    $('#fieldSelector').change(function () {
        var selected = $(this).val();
        var fieldSet = null;
        if(selected == 1) {
            fieldSet = myField1;
        } else if(selected == 2) {
            fieldSet = myField2;
        } else if(selected == 3) {
            fieldSet = myField3;
        } else if(selected == 4) {
            //fieldSet = myField4;
        }
        if(fieldSet) {
           $('#fieldSetData').val(JSON.stringify(fieldSet));
        }
    });
    
    $uko.log('started');
});

