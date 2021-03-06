var $uko;
$(function() {

// Let's move the field sets into lib.
//     var myField1 = [ //example of the 3x3 field with spaces
//         {1:{val:1,sets:[1]},2:{val:-1,sets:[]},3:{val:0,sets:[1]},4:{val:-1,sets:[]},5:{val:0,sets:[1]}},
//         {6:{val:-1,sets:[]},7:{val:-1,sets:[]},8:{val:-1,sets:[]},9:{val:-1,sets:[]},10:{val:-1,sets:[]}},
//         {11:{val:0,sets:[1]},12:{val:-1,sets:[]},13:{val:2,sets:[1]},14:{val:-1,sets:[]},15:{val:0,sets:[1]}},
//         {16:{val:-1,sets:[]},17:{val:-1,sets:[]},18:{val:-1,sets:[]},19:{val:-1,sets:[]},20:{val:-1,sets:[]}},
//         {21:{val:0,sets:[1]},22:{val:-1,sets:[]},23:{val:0,sets:[1]},24:{val:-1,sets:[]},25:{val:3,sets:[1]}},
//         {26:{val:-1,sets:[]},27:{val:-1,sets:[]},28:{val:-1,sets:[]},29:{val:-1,sets:[]},30:{val:-1,sets:[]}}
//     ];

//     var myField2 = [  //empty field 3x3x3
//         {1:{val:0,sets:[1,10,20],style:'w n'},2:{val:0,sets:[1,11,20],style:'n'},3:{val:0,sets:[1,12,20],style:'n o'},
//           4:{val:0,sets:[1,13,21],style:'w n'},5:{val:0,sets:[1,14,21],style:'n'},6:{val:0,sets:[1,15,21],style:'n o'},
//           7:{val:0,sets:[1,16,22],style:'w n'},8:{val:0,sets:[1,17,22],style:'n'},9:{val:0,sets:[1,18,22],style:'n o'}},

//         {11:{val:0,sets:[2,10,20],style:'w'},12:{val:0,sets:[2,11,20],style:''},13:{val:0,sets:[2,12,20],style:'o'},
//          14:{val:0,sets:[2,13,21],style:'w'},15:{val:0,sets:[2,14,21],style:''},16:{val:0,sets:[2,15,21],style:'o'},
//          17:{val:0,sets:[2,16,22],style:'w'},18:{val:0,sets:[2,17,22],style:''},19:{val:0,sets:[2,18,22],style:'o'}},

//         {21:{val:0,sets:[3,10,20],style:'w s'},22:{val:0,sets:[3,11,20],style:'s'},23:{val:0,sets:[3,12,20],style:'s o'},
//          24:{val:0,sets:[3,13,21],style:'w s'},25:{val:0,sets:[3,14,21],style:'s'},26:{val:0,sets:[3,15,21],style:'s o'},
//          27:{val:0,sets:[3,16,22],style:'w s'},28:{val:0,sets:[3,17,22],style:'s'},29:{val:0,sets:[3,18,22],style:'s o'}},

//         {31:{val:0,sets:[4,10,23],style:'w n'},32:{val:0,sets:[4,11,23],style:'n'},33:{val:0,sets:[4,12,23],style:'n o'},
//          34:{val:0,sets:[4,13,24],style:'w n'},35:{val:0,sets:[4,14,24],style:'n'},36:{val:0,sets:[4,15,24],style:'n o'},
//          37:{val:0,sets:[4,16,25],style:'w n'},38:{val:0,sets:[4,17,25],style:'n'},39:{val:0,sets:[4,18,25],style:'n o'}},

//         {41:{val:0,sets:[5,10,23],style:'w'},42:{val:0,sets:[5,11,23],style:''},43:{val:0,sets:[5,12,23],style:'o'},
//          44:{val:0,sets:[5,13,24],style:'w'},45:{val:0,sets:[5,14,24],style:''},46:{val:0,sets:[5,15,24],style:'o'},
//          47:{val:0,sets:[5,16,25],style:'w'},48:{val:0,sets:[5,17,25],style:''},49:{val:0,sets:[5,18,25],style:'o'}},

//         {51:{val:0,sets:[6,10,23],style:'w s'},52:{val:0,sets:[6,11,23],style:'s'},53:{val:0,sets:[6,12,23],style:'s o'},
//          54:{val:0,sets:[6,13,24],style:'w s'},55:{val:0,sets:[6,14,24],style:'s'},56:{val:0,sets:[6,15,24],style:'s o'},
//          57:{val:0,sets:[6,16,25],style:'w s'},58:{val:0,sets:[6,17,25],style:'s'},59:{val:0,sets:[6,18,25],style:'s o'}},

//         {61:{val:0,sets:[7,10,26],style:'w n'},62:{val:0,sets:[7,11,26],style:'n'},63:{val:0,sets:[7,12,26],style:'n o'},
//          64:{val:0,sets:[7,13,27],style:'w n'},65:{val:0,sets:[7,14,27],style:'n'},66:{val:0,sets:[7,15,27],style:'n o'},
//          67:{val:0,sets:[7,16,28],style:'w n'},68:{val:0,sets:[7,17,28],style:'n'},69:{val:0,sets:[7,18,28],style:'n o'}},

//         {71:{val:0,sets:[8,10,26],style:'w'},72:{val:0,sets:[8,11,26],style:''},73:{val:0,sets:[8,12,26],style:'o'},
//          74:{val:0,sets:[8,13,27],style:'w'},75:{val:0,sets:[8,14,27],style:''},76:{val:0,sets:[8,15,27],style:'o'},
//          77:{val:0,sets:[8,16,28],style:'w'},78:{val:0,sets:[8,17,28],style:''},79:{val:0,sets:[8,18,28],style:'o'}},

//         {81:{val:0,sets:[9,10,26],style:'w s'},82:{val:0,sets:[9,11,26],style:'s'},83:{val:0,sets:[9,12,26],style:'s o'},
//          84:{val:0,sets:[9,13,27],style:'w s'},85:{val:0,sets:[9,14,27],style:'s'},86:{val:0,sets:[9,15,27],style:'s o'},
//          87:{val:0,sets:[9,16,28],style:'w s'},88:{val:0,sets:[9,17,28],style:'s'},89:{val:0,sets:[9,18,28],style:'s o'}}
//         ];

//     var myField3 = [ //example field 3x3x3 - can be brute forced
//         {1:{val:5,sets:[1,10,20],style:'w n'},2:{val:0,sets:[1,11,20],style:'n'},3:{val:7,sets:[1,12,20],style:'n o'},
//           4:{val:0,sets:[1,13,21],style:'w n'},5:{val:9,sets:[1,14,21],style:'n'},6:{val:0,sets:[1,15,21],style:'n o'},
//           7:{val:3,sets:[1,16,22],style:'w n'},8:{val:0,sets:[1,17,22],style:'n'},9:{val:2,sets:[1,18,22],style:'n o'}},

//         {11:{val:0,sets:[2,10,20],style:'w'},12:{val:8,sets:[2,11,20],style:''},13:{val:6,sets:[2,12,20],style:'o'},
//          14:{val:3,sets:[2,13,21],style:'w'},15:{val:0,sets:[2,14,21],style:''},16:{val:0,sets:[2,15,21],style:'o'},
//          17:{val:0,sets:[2,16,22],style:'w'},18:{val:0,sets:[2,17,22],style:''},19:{val:0,sets:[2,18,22],style:'o'}},

//         {21:{val:0,sets:[3,10,20],style:'w s'},22:{val:0,sets:[3,11,20],style:'s'},23:{val:0,sets:[3,12,20],style:'s o'},
//          24:{val:0,sets:[3,13,21],style:'w s'},25:{val:0,sets:[3,14,21],style:'s'},26:{val:0,sets:[3,15,21],style:'s o'},
//          27:{val:0,sets:[3,16,22],style:'w s'},28:{val:0,sets:[3,17,22],style:'s'},29:{val:5,sets:[3,18,22],style:'s o'}},

//         {31:{val:0,sets:[4,10,23],style:'w n'},32:{val:0,sets:[4,11,23],style:'n'},33:{val:0,sets:[4,12,23],style:'n o'},
//          34:{val:0,sets:[4,13,24],style:'w n'},35:{val:0,sets:[4,14,24],style:'n'},36:{val:1,sets:[4,15,24],style:'n o'},
//          37:{val:0,sets:[4,16,25],style:'w n'},38:{val:0,sets:[4,17,25],style:'n'},39:{val:0,sets:[4,18,25],style:'n o'}},

//         {41:{val:0,sets:[5,10,23],style:'w'},42:{val:0,sets:[5,11,23],style:''},43:{val:3,sets:[5,12,23],style:'o'},
//          44:{val:0,sets:[5,13,24],style:'w'},45:{val:7,sets:[5,14,24],style:''},46:{val:0,sets:[5,15,24],style:'o'},
//          47:{val:9,sets:[5,16,25],style:'w'},48:{val:8,sets:[5,17,25],style:''},49:{val:0,sets:[5,18,25],style:'o'}},

//         {51:{val:7,sets:[6,10,23],style:'w s'},52:{val:0,sets:[6,11,23],style:'s'},53:{val:1,sets:[6,12,23],style:'s o'},
//          54:{val:0,sets:[6,13,24],style:'w s'},55:{val:0,sets:[6,14,24],style:'s'},56:{val:0,sets:[6,15,24],style:'s o'},
//          57:{val:0,sets:[6,16,25],style:'w s'},58:{val:0,sets:[6,17,25],style:'s'},59:{val:6,sets:[6,18,25],style:'s o'}},

//         {61:{val:0,sets:[7,10,26],style:'w n'},62:{val:0,sets:[7,11,26],style:'n'},63:{val:0,sets:[7,12,26],style:'n o'},
//          64:{val:0,sets:[7,13,27],style:'w n'},65:{val:0,sets:[7,14,27],style:'n'},66:{val:0,sets:[7,15,27],style:'n o'},
//          67:{val:0,sets:[7,16,28],style:'w n'},68:{val:0,sets:[7,17,28],style:'n'},69:{val:8,sets:[7,18,28],style:'n o'}},

//         {71:{val:0,sets:[8,10,26],style:'w'},72:{val:0,sets:[8,11,26],style:''},73:{val:4,sets:[8,12,26],style:'o'},
//          74:{val:0,sets:[8,13,27],style:'w'},75:{val:2,sets:[8,14,27],style:''},76:{val:6,sets:[8,15,27],style:'o'},
//          77:{val:1,sets:[8,16,28],style:'w'},78:{val:0,sets:[8,17,28],style:''},79:{val:0,sets:[8,18,28],style:'o'}},

//         {81:{val:9,sets:[9,10,26],style:'w s'},82:{val:0,sets:[9,11,26],style:'s'},83:{val:5,sets:[9,12,26],style:'s o'},
//          84:{val:0,sets:[9,13,27],style:'w s'},85:{val:4,sets:[9,14,27],style:'s'},86:{val:0,sets:[9,15,27],style:'s o'},
//          87:{val:0,sets:[9,16,28],style:'w s'},88:{val:0,sets:[9,17,28],style:'s'},89:{val:0,sets:[9,18,28],style:'s o'}}
//         ];

//     var myField4 = [ // Gattai5 / Samurai
//     /* Sets:
//      *  0x   10x
//      *    20x
//      * 30x   40x
//      */
//         {// top left 1 Row    Sets 0x and 10x (1)
//           1:{val:0,sets:[1,10,20],style:'w n'},2:{val:0,sets:[1,11,20],style:'n'},3:{val:0,sets:[1,12,20],style:'n o'},
//           4:{val:0,sets:[1,13,21],style:'w n'},5:{val:0,sets:[1,14,21],style:'n'},6:{val:0,sets:[1,15,21],style:'n o'},
//           7:{val:0,sets:[1,16,22],style:'w n'},8:{val:0,sets:[1,17,22],style:'n'},9:{val:0,sets:[1,18,22],style:'n o'},
//         //moddle empty
//           10:{val:-1,sets:[]},11:{val:-1,sets:[]},12:{val:-1,sets:[]},
//         // top right
//           13:{val:0,sets:[101,1010,1020],style:'w n'},14:{val:0,sets:[101,1011,1020],style:'n'},15:{val:0,sets:[101,1012,1020],style:'n o'},
//           16:{val:0,sets:[101,1013,1021],style:'w n'},17:{val:0,sets:[101,1014,1021],style:'n'},18:{val:0,sets:[101,1015,1021],style:'n o'},
//           19:{val:0,sets:[101,1016,1022],style:'w n'},20:{val:0,sets:[101,1017,1022],style:'n'},21:{val:0,sets:[101,1018,1022],style:'n o'}
//         },

//         {   // top left 2 Row    Sets 0x and 10x (2)
//             101:{val:0,sets:[2,10,20],style:'w'},102:{val:0,sets:[2,11,20],style:''},103:{val:0,sets:[2,12,20],style:'o'},
//             104:{val:0,sets:[2,13,21],style:'w'},105:{val:0,sets:[2,14,21],style:''},106:{val:0,sets:[2,15,21],style:'o'},
//             107:{val:0,sets:[2,16,22],style:'w'},108:{val:0,sets:[2,17,22],style:''},109:{val:0,sets:[2,18,22],style:'o'},
//             // moddle empty
//             110:{val:-1,sets:[]},111:{val:-1,sets:[]},112:{val:-1,sets:[]},
//             // top right
//             113:{val:0,sets:[102,1010,1020],style:'w'},114:{val:0,sets:[102,1011,1020],style:''},115:{val:0,sets:[102,1012,1020],style:'o'},
//             116:{val:0,sets:[102,1013,1021],style:'w'},117:{val:0,sets:[102,1014,1021],style:''},118:{val:0,sets:[102,1015,1021],style:'o'},
//             119:{val:0,sets:[102,1016,1022],style:'w'},120:{val:0,sets:[102,1017,1022],style:''},121:{val:0,sets:[102,1018,1022],style:'o'}
//         },

//         {  // top left 3 Row    Sets 0x and 10x (3)
//             201:{val:0,sets:[3,10,20],style:'w s'},202:{val:0,sets:[3,11,20],style:'s'},203:{val:0,sets:[3,12,20],style:'s o'},
//             204:{val:0,sets:[3,13,21],style:'w s'},205:{val:0,sets:[3,14,21],style:'s'},206:{val:0,sets:[3,15,21],style:'s o'},
//             207:{val:0,sets:[3,16,22],style:'w s'},208:{val:0,sets:[3,17,22],style:'s'},209:{val:0,sets:[3,18,22],style:'s o'},
//             //moddle empty
//             210:{val:-1,sets:[]},211:{val:-1,sets:[]},212:{val:-1,sets:[]},
//             // top right
//             213:{val:0,sets:[103,1010,1020],style:'w s'},214:{val:0,sets:[103,1011,1020],style:'s'},215:{val:0,sets:[103,1012,1020],style:'s o'},
//             216:{val:0,sets:[103,1013,1021],style:'w s'},217:{val:0,sets:[103,1014,1021],style:'s'},218:{val:0,sets:[103,1015,1021],style:'s o'},
//             219:{val:0,sets:[103,1016,1022],style:'w s'},220:{val:0,sets:[103,1017,1022],style:'s'},221:{val:0,sets:[103,1018,1022],style:'s o'}
//         },

//         { // top left 4 Row    Sets 0x and 10x (4)
//             301:{val:0,sets:[4,10,23],style:'w n'},302:{val:0,sets:[4,11,23],style:'n'},303:{val:0,sets:[4,12,23],style:'n o'},
//             304:{val:0,sets:[4,13,24],style:'w n'},305:{val:0,sets:[4,14,24],style:'n'},306:{val:0,sets:[4,15,24],style:'n o'},
//             307:{val:0,sets:[4,16,25],style:'w n'},308:{val:0,sets:[4,17,25],style:'n'},309:{val:0,sets:[4,18,25],style:'n o'},
//             //moddle empty
//             310:{val:-1,sets:[]},311:{val:-1,sets:[]},312:{val:-1,sets:[]},
//             // top right
//             313:{val:0,sets:[104,1010,1023],style:'w n'},314:{val:0,sets:[104,1011,1023],style:'n'},315:{val:0,sets:[104,1012,1023],style:'n o'},
//             316:{val:0,sets:[104,1013,1024],style:'w n'},317:{val:0,sets:[104,1014,1024],style:'n'},318:{val:0,sets:[104,1015,1024],style:'n o'},
//             319:{val:0,sets:[104,1016,1025],style:'w n'},320:{val:0,sets:[104,1017,1025],style:'n'},321:{val:0,sets:[104,1018,1025],style:'n o'}
//         },

//         { // top left 5 Row    Sets 0x and 10x (5)
//             401:{val:0,sets:[5,10,23],style:'w'},402:{val:0,sets:[5,11,23],style:''},403:{val:0,sets:[5,12,23],style:'o'},
//             404:{val:0,sets:[5,13,24],style:'w'},405:{val:0,sets:[5,14,24],style:''},406:{val:0,sets:[5,15,24],style:'o'},
//             407:{val:0,sets:[5,16,25],style:'w'},408:{val:0,sets:[5,17,25],style:''},409:{val:0,sets:[5,18,25],style:'o'},
//             //moddle empty
//             410:{val:-1,sets:[]},411:{val:-1,sets:[]},412:{val:-1,sets:[]},
//             // top right
//             413:{val:0,sets:[105,1010,1023],style:'w'},414:{val:0,sets:[105,1011,1023],style:''},415:{val:0,sets:[105,1012,1023],style:'o'},
//             416:{val:0,sets:[105,1013,1024],style:'w'},417:{val:0,sets:[105,1014,1024],style:''},418:{val:0,sets:[105,1015,1024],style:'o'},
//             419:{val:0,sets:[105,1016,1025],style:'w'},420:{val:0,sets:[105,1017,1025],style:''},421:{val:0,sets:[105,1018,1025],style:'o'}
//         },

//         { //top left 6 Row    Sets 0x and 10x (6)
//             501:{val:0,sets:[6,10,23],style:'w s'},502:{val:0,sets:[6,11,23],style:'s'},503:{val:0,sets:[6,12,23],style:'s o'},
//             504:{val:0,sets:[6,13,24],style:'w s'},505:{val:0,sets:[6,14,24],style:'s'},506:{val:0,sets:[6,15,24],style:'s o'},
//             507:{val:0,sets:[6,16,25],style:'w s'},508:{val:0,sets:[6,17,25],style:'s'},509:{val:0,sets:[6,18,25],style:'s o'},
//             //moddle empty
//             510:{val:-1,sets:[]},511:{val:-1,sets:[]},512:{val:-1,sets:[]},
//             // top right
//             513:{val:0,sets:[106,1010,1023],style:'s w'},514:{val:0,sets:[106,1011,1023],style:'s'},515:{val:0,sets:[106,1012,1023],style:'s o'},
//             516:{val:0,sets:[106,1013,1024],style:'s w'},517:{val:0,sets:[106,1014,1024],style:'s'},518:{val:0,sets:[106,1015,1024],style:'s o'},
//             519:{val:0,sets:[106,1016,1025],style:'s w'},520:{val:0,sets:[106,1017,1025],style:'s'},521:{val:0,sets:[106,1018,1025],style:'s o'}
//         },

//         { // top left 7 Row    Sets 0x, 10x (7) and 20x (1)
//             601:{val:0,sets:[7,10,26],style:'w n'},602:{val:0,sets:[7,11,26],style:'n'},603:{val:0,sets:[7,12,26],style:'n o'},
//             604:{val:0,sets:[7,13,27],style:'w n'},605:{val:0,sets:[7,14,27],style:'n'},606:{val:0,sets:[7,15,27],style:'n o'},
//             607:{val:0,sets:[7,16,28, 201,2010],style:'w n'},608:{val:0,sets:[7,17,28, 201,2011],style:'n'},609:{val:0,sets:[7,18,28, 201,2012],style:'n o'},
//             //moddle
//             610:{val:0,sets:[201,2013,2021],style:'n'},611:{val:0,sets:[201,2014,2021],style:'n'},612:{val:0,sets:[201,2015,2021],style:'n'},
//             // top right
//             613:{val:0,sets:[107,1010,1026, 201,2016],style:'w'},614:{val:0,sets:[107,1011,1026, 201,2017],style:''},615:{val:0,sets:[107,1012,1026, 201,2018],style:'o'},
//             616:{val:0,sets:[107,1013,1027],style:'w'},617:{val:0,sets:[107,1014,1027],style:''},618:{val:0,sets:[107,1015,1027],style:'o'},
//             619:{val:0,sets:[107,1016,1028],style:'w'},620:{val:0,sets:[107,1017,1028],style:''},621:{val:0,sets:[107,1018,1028],style:'o'}
//         },

//         { // top left 8 Row    Sets 0x, 10x (8) and 20x (2)
//             701:{val:0,sets:[8,10,26],style:'w'},702:{val:0,sets:[8,11,26],style:''},703:{val:0,sets:[8,12,26],style:'o'},
//             704:{val:0,sets:[8,13,27],style:'w'},705:{val:0,sets:[8,14,27],style:''},706:{val:0,sets:[8,15,27],style:'o'},
//             707:{val:0,sets:[8,16,28, 202,2010],style:'w'},708:{val:0,sets:[8,17,28, 202,2011],style:''},709:{val:0,sets:[8,18,28, 202,2012],style:'o'},
//             //moddle
//             710:{val:0,sets:[202,2013,2021],style:''},711:{val:0,sets:[202,2014,2021],style:''},712:{val:0,sets:[202,2015,2021],style:''},
//             // top right
//             713:{val:0,sets:[108,1010,1026, 202,2016],style:'w'},714:{val:0,sets:[108,1011,1026, 202,2017],style:''},715:{val:0,sets:[108,1012,1026, 202,2018],style:'o'},
//             716:{val:0,sets:[108,1013,1027],style:'w'},717:{val:0,sets:[108,1014,1027],style:''},718:{val:0,sets:[108,1015,1027],style:'o'},
//             719:{val:0,sets:[108,1016,1028],style:'w'},720:{val:0,sets:[108,1017,1028],style:''},721:{val:0,sets:[108,1018,1028],style:'o'}
//         },

//         { // top left 9 Row    Sets 0x, 10x (9) and 20x (3)
//             801:{val:0,sets:[9,10,26],style:'w s'},802:{val:0,sets:[9,11,26],style:'s'},803:{val:0,sets:[9,12,26],style:'s o'},
//             804:{val:0,sets:[9,13,27],style:'w s'},805:{val:0,sets:[9,14,27],style:'s'},806:{val:0,sets:[9,15,27],style:'s o'},
//             807:{val:0,sets:[9,16,28, 203,2010],style:'w s'},808:{val:0,sets:[9,17,28, 203,2011],style:'s'},809:{val:0,sets:[9,18,28, 203,2012],style:'s o'},
//             //moddle
//             810:{val:0,sets:[203,2013,2021],style:'s'},811:{val:0,sets:[203,2014,2021],style:'s'},812:{val:0,sets:[203,2015,2021],style:'s'},
//             // top right
//             813:{val:0,sets:[109,1010,1026, 203,2016],style:'s w'},814:{val:0,sets:[109,1011,1026, 203,2017],style:'s'},815:{val:0,sets:[109,1012,1026, 203,2018],style:'s o'},
//             816:{val:0,sets:[109,1013,1027],style:'s w'},817:{val:0,sets:[109,1014,1027],style:'s'},818:{val:0,sets:[109,1015,1027],style:'s o'},
//             819:{val:0,sets:[109,1016,1028],style:'s w'},820:{val:0,sets:[109,1017,1028],style:'s'},821:{val:0,sets:[109,1018,1028],style:'s o'}
//         },

//         { // left empty 10 Row    Sets  20x (4)
//             901:{val:-1,sets:[]},902:{val:-1,sets:[]},903:{val:-1,sets:[]},
//             904:{val:-1,sets:[]},905:{val:-1,sets:[]},906:{val:-1,sets:[]},
//             //moddle
//             907:{val:0,sets:[204,2010,2023],style:'w'},908:{val:0,sets:[204,2011,2023],style:''},909:{val:0,sets:[204,2012,2023],style:'o'},
//             910:{val:0,sets:[204,2013,2024],style:'w'},911:{val:0,sets:[204,2014,2024],style:''},912:{val:0,sets:[204,2015,2024],style:'o'},
//             913:{val:0,sets:[204,2016,2025],style:'w'},914:{val:0,sets:[204,2017,2025],style:''},915:{val:0,sets:[204,2018,2025],style:'o'},
//             // right empty
//             916:{val:-1,sets:[]},917:{val:-1,sets:[]},918:{val:-1,sets:[]},
//             919:{val:-1,sets:[]},920:{val:-1,sets:[]},921:{val:-1,sets:[]}
//         },

//         { // left empty 11 Row    Sets  20x (5)
//             1001:{val:-1,sets:[]},1002:{val:-1,sets:[]},1003:{val:-1,sets:[]},
//             1004:{val:-1,sets:[]},1005:{val:-1,sets:[]},1006:{val:-1,sets:[]},
//             //moddle
//             1007:{val:0,sets:[205,2010,2023],style:'w'},1008:{val:0,sets:[205,2011,2023],style:''},1009:{val:0,sets:[205,2012,2023],style:'o'},
//             1010:{val:0,sets:[205,2013,2024],style:'w'},1011:{val:0,sets:[205,2014,2024],style:''},1012:{val:0,sets:[205,2015,2024],style:'o'},
//             1013:{val:0,sets:[205,2016,2025],style:'w'},1014:{val:0,sets:[205,2017,2025],style:''},1015:{val:0,sets:[205,2018,2025],style:'o'},
//             // right  empty
//             1016:{val:-1,sets:[]},1017:{val:-1,sets:[]},1018:{val:-1,sets:[]},
//             1019:{val:-1,sets:[]},1020:{val:-1,sets:[]},1021:{val:-1,sets:[]}
//         },

//         { // left empty 12 Row    Sets 20x (6)
//             1101:{val:-1,sets:[]},1102:{val:-1,sets:[]},1103:{val:-1,sets:[]},
//             1104:{val:-1,sets:[]},1105:{val:-1,sets:[]},1106:{val:-1,sets:[]},
//             //moddle
//             1107:{val:0,sets:[206,2010,2023],style:'s w'},1108:{val:0,sets:[206,2011,2023],style:'s'},1109:{val:0,sets:[206,2012,2023],style:'s o'},
//             1110:{val:0,sets:[206,2013,2024],style:'s w'},1111:{val:0,sets:[206,2014,2024],style:'s'},1112:{val:0,sets:[206,2015,2024],style:'s o'},
//             1113:{val:0,sets:[206,2016,2025],style:'s w'},1114:{val:0,sets:[206,2017,2025],style:'s'},1115:{val:0,sets:[206,2018,2025],style:'s o'},
//             // right   empty
//             1116:{val:-1,sets:[]},1117:{val:-1,sets:[]},1118:{val:-1,sets:[]},
//             1119:{val:-1,sets:[]},1120:{val:-1,sets:[]},1121:{val:-1,sets:[]}
//         },

//         { // buttom left 13 Row    Sets 30x, 40x (1) and 20x (7)
//             1201:{val:0,sets:[301,3010,3020],style:'w n'},1202:{val:0,sets:[301,3011,3020],style:'n'},1203:{val:0,sets:[301,3012,3020],style:'n o'},
//             1204:{val:0,sets:[301,3013,3021],style:'w n'},1205:{val:0,sets:[301,3014,3021],style:'n'},1206:{val:0,sets:[301,3015,3021],style:'n o'},
//             1207:{val:0,sets:[301,3016,3022, 207,2010],style:'w n'},1208:{val:0,sets:[301,3017,3022, 207,2011],style:'n'},1209:{val:0,sets:[301,3018,3022, 207,2012],style:'n o'},
//             //moddle
//             1210:{val:0,sets:[207,2013,2027],style:'n'},1211:{val:0,sets:[207,2014,2027],style:'n'},1212:{val:0,sets:[207,2015,2027],style:'n'},
//             // buttom right
//             1213:{val:0,sets:[401,4010,4020, 207,2016],style:'w n'},1214:{val:0,sets:[401,4011,4020, 207,2017],style:'n'},1215:{val:0,sets:[401,4012,4020, 207,2018],style:'n o'},
//             1216:{val:0,sets:[401,4013,4021],style:'w n'},1217:{val:0,sets:[401,4014,4021],style:'n'},1218:{val:0,sets:[401,4015,4021],style:'n o'},
//             1219:{val:0,sets:[401,4016,4022],style:'w n'},1220:{val:0,sets:[401,4017,4022],style:'n'},1221:{val:0,sets:[401,4018,4022],style:'n o'}
//         },

//         { // buttom left 14 Row    Sets 30x, 40x (2) and 20x (8)
//             1301:{val:0,sets:[302,3010,3020],style:'w'},1302:{val:0,sets:[302,3011,3020],style:''},1303:{val:0,sets:[302,3012,3020],style:'o'},
//             1304:{val:0,sets:[302,3013,3021],style:'w'},1305:{val:0,sets:[302,3014,3021],style:''},1306:{val:0,sets:[302,3015,3021],style:'o'},
//             1307:{val:0,sets:[302,3016,3022, 208,2010],style:'w'},1308:{val:0,sets:[302,3017,3022, 208,2011],style:''},1309:{val:0,sets:[302,3018,3022, 208,2012],style:'o'},
//             //moddle
//             1310:{val:0,sets:[208,2013,2027],style:''},1311:{val:0,sets:[208,2014,2027],style:''},1312:{val:0,sets:[208,2015,2027],style:''},
//             // buttom right
//             1313:{val:0,sets:[402,4010,4020, 208,2016],style:'w'},1314:{val:0,sets:[402,4011,4020, 208,2017],style:''},1315:{val:0,sets:[402,4012,4020, 208,2018],style:'o'},
//             1316:{val:0,sets:[402,4013,4021],style:'w'},1317:{val:0,sets:[402,4014,4021],style:''},1318:{val:0,sets:[402,4015,4021],style:'o'},
//             1319:{val:0,sets:[402,4016,4022],style:'w'},1320:{val:0,sets:[402,4017,4022],style:''},1321:{val:0,sets:[402,4018,4022],style:'o'}
//         },

//         { // buttom left 15 Row    Sets 30x, 40x (3) and 20x (9)
//             1401:{val:0,sets:[303,3010,3020],style:'w s'},1402:{val:0,sets:[303,3011,3020],style:'s'},1403:{val:0,sets:[303,3012,3020],style:'s o'},
//             1404:{val:0,sets:[303,3013,3021],style:'w s'},1405:{val:0,sets:[303,3014,3021],style:'s'},1406:{val:0,sets:[303,3015,3021],style:'s o'},
//             1407:{val:0,sets:[303,3016,3022, 209,2010],style:'w s'},1408:{val:0,sets:[303,3017,3022, 209,2011],style:'s'},1409:{val:0,sets:[303,3018,3022, 209,2012],style:'s o'},
//             //moddle
//             1410:{val:0,sets:[209,2013,2027],style:'s'},1411:{val:0,sets:[209,2014,2027],style:'s'},1412:{val:0,sets:[209,2015,2027],style:'s'},
//             // buttom right
//             1413:{val:0,sets:[403,4010,4020, 209,2016],style:'s w'},1414:{val:0,sets:[403,4011,4020, 209,2017],style:'s'},1415:{val:0,sets:[403,4012,4020, 209,2018],style:'s o'},
//             1416:{val:0,sets:[403,4013,4021],style:'s w'},1417:{val:0,sets:[403,4014,4021],style:'s'},1418:{val:0,sets:[403,4015,4021],style:'s o'},
//             1419:{val:0,sets:[403,4016,4022],style:'s w'},1420:{val:0,sets:[403,4017,4022],style:'s'},1421:{val:0,sets:[403,4018,4022],style:'s o'}
//         },

//         { // buttom left 16 Row    Sets 30x, 40x (4)
//             1501:{val:0,sets:[304,3010,3023],style:'w n'},1502:{val:0,sets:[304,3011,3023],style:'n'},1503:{val:0,sets:[304,3012,3023],style:'n o'},
//             1504:{val:0,sets:[304,3013,3024],style:'w n'},1505:{val:0,sets:[304,3014,3024],style:'n'},1506:{val:0,sets:[304,3015,3024],style:'n o'},
//             1507:{val:0,sets:[304,3016,3025],style:'w n'},1508:{val:0,sets:[304,3017,3025],style:'n'},1509:{val:0,sets:[304,3018,3025],style:'n o'},
//             //moddle
//             1510:{val:-1,sets:[]},1511:{val:-1,sets:[]},1512:{val:-1,sets:[]},//
//             // buttom right
//             1513:{val:0,sets:[404,4010,4023],style:'w n'},1514:{val:0,sets:[404,4011,4023],style:'n'},1515:{val:0,sets:[404,4012,4023],style:'n o'},
//             1516:{val:0,sets:[404,4013,4024],style:'w n'},1517:{val:0,sets:[404,4014,4024],style:'n'},1518:{val:0,sets:[404,4015,4024],style:'n o'},
//             1519:{val:0,sets:[404,4016,4025],style:'w n'},1520:{val:0,sets:[404,4017,4025],style:'n'},1521:{val:0,sets:[404,4018,4025],style:'n o'}
//         },

//         { // buttom left 17 Row    Sets 30x, 40x (5)
//             1601:{val:0,sets:[305,3010,3023],style:'w'},1602:{val:0,sets:[305,3011,3023],style:''},1603:{val:0,sets:[305,3012,3023],style:'o'},
//             1604:{val:0,sets:[305,3013,3024],style:'w'},1605:{val:0,sets:[305,3014,3024],style:''},1606:{val:0,sets:[305,3015,3024],style:'o'},
//             1607:{val:0,sets:[305,3016,3025],style:'w'},1608:{val:0,sets:[305,3017,3025],style:''},1609:{val:0,sets:[305,3018,3025],style:'o'},
//             // moddle
//             1610:{val:-1,sets:[]},1611:{val:-1,sets:[]},1612:{val:-1,sets:[]},
//             // top right
//             1613:{val:0,sets:[405,4010,4023],style:'w'},1614:{val:0,sets:[405,4011,4023],style:''},1615:{val:0,sets:[405,4012,4023],style:'o'},
//             1616:{val:0,sets:[405,4013,4024],style:'w'},1617:{val:0,sets:[405,4014,4024],style:''},1618:{val:0,sets:[405,4015,4024],style:'o'},
//             1619:{val:0,sets:[405,4016,4025],style:'w'},1620:{val:0,sets:[405,4017,4025],style:''},1621:{val:0,sets:[405,4018,4025],style:'o'}
//         },

//         { // buttom left 18 Row    Sets 30x, 40x (6)
//             1701:{val:0,sets:[306,3010,3023],style:'w s'},1702:{val:0,sets:[306,3011,3023],style:'s'},1703:{val:0,sets:[306,3012,3023],style:'s o'},
//             1704:{val:0,sets:[306,3013,3024],style:'w s'},1705:{val:0,sets:[306,3014,3024],style:'s'},1706:{val:0,sets:[306,3015,3024],style:'s o'},
//             1707:{val:0,sets:[306,3016,3025],style:'w s'},1708:{val:0,sets:[306,3017,3025],style:'s'},1709:{val:0,sets:[306,3018,3025],style:'s o'},
//             //moddle
//             1710:{val:-1,sets:[]},1711:{val:-1,sets:[]},1712:{val:-1,sets:[]},
//             // top right
//             1713:{val:0,sets:[406,4010,4023],style:'s w'},1714:{val:0,sets:[406,4011,4023],style:'s'},1715:{val:0,sets:[406,4012,4023],style:'s o'},
//             1716:{val:0,sets:[406,4013,4024],style:'s w'},1717:{val:0,sets:[406,4014,4024],style:'s'},1718:{val:0,sets:[406,4015,4024],style:'s o'},
//             1719:{val:0,sets:[406,4016,4025],style:'s w'},1720:{val:0,sets:[406,4017,4025],style:'s'},1721:{val:0,sets:[406,4018,4025],style:'s o'}
//         },

//         { // buttom left 19 Row    Sets 30x, 40x (7)
//             1801:{val:0,sets:[307,3010,3026],style:'w n'},1802:{val:0,sets:[307,3011,3026],style:'n'},1803:{val:0,sets:[307,3012,3026],style:'n o'},
//             1804:{val:0,sets:[307,3013,3027],style:'w n'},1805:{val:0,sets:[307,3014,3027],style:'n'},1806:{val:0,sets:[307,3015,3027],style:'n o'},
//             1807:{val:0,sets:[307,3016,3028],style:'w n'},1808:{val:0,sets:[307,3017,3028],style:'n'},1809:{val:0,sets:[307,3018,3028],style:'n o'},
//             // moddle
//             1810:{val:-1,sets:[]},1811:{val:-1,sets:[]},1812:{val:-1,sets:[]},//
//             // top right
//             1813:{val:0,sets:[407,4010,4026],style:'w n'},1814:{val:0,sets:[407,4011,4026],style:'n'},1815:{val:0,sets:[407,4012,4026],style:'n o'},
//             1816:{val:0,sets:[407,4013,4027],style:'w n'},1817:{val:0,sets:[407,4014,4027],style:'n'},1818:{val:0,sets:[407,4015,4027],style:'n o'},
//             1819:{val:0,sets:[407,4016,4028],style:'w n'},1820:{val:0,sets:[407,4017,4028],style:'n'},1821:{val:0,sets:[407,4018,4028],style:'n o'}
//         },

//         { // buttom left 20 Row    Sets 30x, 40x (8)
//             1901:{val:0,sets:[308,3010,3026],style:'w'},1902:{val:0,sets:[308,3011,3026],style:''},1903:{val:0,sets:[308,3012,3026],style:'o'},
//             1904:{val:0,sets:[308,3013,3027],style:'w'},1905:{val:0,sets:[308,3014,3027],style:''},1906:{val:0,sets:[308,3015,3027],style:'o'},
//             1907:{val:0,sets:[308,3016,3028],style:'w'},1908:{val:0,sets:[308,3017,3028],style:''},1909:{val:0,sets:[308,3018,3028],style:'o'},
//             // moddle
//             1910:{val:-1,sets:[]},1911:{val:-1,sets:[]},1912:{val:-1,sets:[]},
//             // top right
//             1913:{val:0,sets:[408,4010,4026],style:'w'},1914:{val:0,sets:[408,4011,4026],style:''},1915:{val:0,sets:[408,4012,4026],style:'o'},
//             1916:{val:0,sets:[408,4013,4027],style:'w'},1917:{val:0,sets:[408,4014,4027],style:''},1918:{val:0,sets:[408,4015,4027],style:'o'},
//             1919:{val:0,sets:[408,4016,4028],style:'w'},1920:{val:0,sets:[408,4017,4028],style:''},1921:{val:0,sets:[408,4018,4028],style:'o'}
//         },

//         { // buttom left 21 Row    Sets 30x, 40x (9)
//             2001:{val:0,sets:[309,3010,3026],style:'w s'},2002:{val:0,sets:[309,3011,3026],style:'s'},2003:{val:0,sets:[309,3012,3026],style:'s o'},
//             2004:{val:0,sets:[309,3013,3027],style:'w s'},2005:{val:0,sets:[309,3014,3027],style:'s'},2006:{val:0,sets:[309,3015,3027],style:'s o'},
//             2007:{val:0,sets:[309,3016,3028],style:'w s'},2008:{val:0,sets:[309,3017,3028],style:'s'},2009:{val:0,sets:[309,3018,3028],style:'s o'},
//             //moddle
//             2010:{val:-1,sets:[]},2011:{val:-1,sets:[]},2012:{val:-1,sets:[]},
//             // top right
//             2013:{val:0,sets:[409,4010,4026],style:'s w'},2014:{val:0,sets:[409,4011,4026],style:'s'},2015:{val:0,sets:[409,4012,4026],style:'s o'},
//             2016:{val:0,sets:[409,4013,4027],style:'s w'},2017:{val:0,sets:[409,4014,4027],style:'s'},2018:{val:0,sets:[409,4015,4027],style:'s o'},
//             2019:{val:0,sets:[409,4016,4028],style:'s w'},2020:{val:0,sets:[409,4017,4028],style:'s'},2021:{val:0,sets:[409,4018,4028],style:'s o'}
//         }
// ];

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
        if ($uko.fieldSets[selected] !== undefined) {
            fieldSet = $uko.fieldSets[selected];
        }
        /**
         * @todo remove after testing
         */
        // if(selected == 1) {
        //     fieldSet = myField1;
        // } else if(selected == 2) {
        //     fieldSet = myField2;
        // } else if(selected == 3) {
        //     fieldSet = myField3;
        // } else if(selected == 4) {
        //     fieldSet = myField4;
        // }
        if(fieldSet) {
           $('#fieldSetData').val(JSON.stringify(fieldSet));
        }
    });

    $uko.log('started');
});

