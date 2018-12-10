# sudoku
Sudoku solution helper. (Javascript)

======
If you cannot solve sudokus, this calculator will help you. It also can help you, if you create your own sudokus.

Algorithms:

1. Find "single" - The only value possible.
2. Find "hidden single" - One of the possible values is in this cell only.
3. "Open pair" - Two cells with identical pair. The values can be removed from the other cells in the group.

Planned:

4. "Candidate lines" - If you look within a box, and find that all of the places where you can put a particular number lie along a single line, then you can be sure that wherever you put the number in that box, it has to be on the line.


Supported fields:

1. 3x3
2. 3x3x3
3. 5x3x3 - Samurai

Planned:
1. Nonomino-Sudoku

You can make your own fields and add them into app.js.


Demo here: http://htmlpreview.github.io/?https://github.com/yarooze/sudoku/blob/master/index.html
