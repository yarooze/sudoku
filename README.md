# sudoku
Sudoku solution helper. (Javascript)

======
If you cannot solve sudokus, this calculator will help you. It also can help you, if you create your own sudokus.

Algorithms:

1. Find "single" - The only value possible.
2. Find "hidden single" - One of the possible values is in this cell only.

Planned:

3. "Candidate lines" - If you look within a box, and find that all of the places where you can put a particular number lie along a single line, then you can be sure that wherever you put the number in that box, it has to be on the line.
4. "Open pair" - Two cells with identical pair. The values can be removed from the other cells in the group.


Supported fields:

1. 3x3   
2. 3x3x3 

Planned:
1. 5x3x3

You can make your own fields and add them into app.js.


Demo here: http://pico.zz.mu/sudoku/index.html