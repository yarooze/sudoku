;var $uko;
$(function() {
    // Load catalogue
    $ukoCat = $udokuCatalogue();

    // Load scanner
    $ukoScan = SudokuScanner();

    // Load solver
    $uko = $udoku($ukoCat.getFieldSetById("9x9"));  //(myField);
    $uko.buildGameField();

    // Bind solver button
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
        if (selected.length > 0) {
            fieldSet = $ukoCat.getFieldSetById(selected);
        }

        if(fieldSet) {
           $('#fieldSetData').val(JSON.stringify(fieldSet));
        }
    });

    // bind scanner buttons and field
    $('#sukoPic').hide();
    $('#loadImg').change(function(event) {
        $('#sukoPic').show();
        $ukoScan.loadImg(event);
    });
    $('#sharpen').click(function() {
        $ukoScan.sharpen();
    });
    $('#analyzeBoard').click(function() {
        $ukoScan.analyzeBoard();
    });

    $uko.log('started');
});

