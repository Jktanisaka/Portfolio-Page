const printit = document.querySelector('#printit');
const checkmate = document.querySelector('#checkmate');
const graySquare = document.querySelector('#gray-square');
const hitDraft = document.querySelector('#hit-draft');

printit.addEventListener('mouseover', () => printit.setAttribute('src', './images/printit.gif'));
printit.addEventListener('mouseout', () => printit.setAttribute('src', './images/printit.png'));

checkmate.addEventListener('mouseover', () => checkmate.setAttribute('src', './images/checkmate.gif'));
checkmate.addEventListener('mouseout', () => checkmate.setAttribute('src', './images/checkmate.png'));

graySquare.addEventListener('mouseover', () => graySquare.setAttribute('src', './images/graysquare.gif'));
graySquare.addEventListener('mouseout', () => graySquare.setAttribute('src', './images/graysquare.png'));

hitDraft.addEventListener('mouseover', () => hitDraft.setAttribute('src', './images/HitDraft.gif'));
hitDraft.addEventListener('mouseout', () => hitDraft.setAttribute('src', './images/hitdraftlogo.png'));
