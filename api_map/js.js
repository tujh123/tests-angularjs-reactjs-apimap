window.onkeyup = okno; // нажатие Esc, см. условие "e.keyCode==27" 
document.getElementById('popup').onclick = okno;

function okno(e) {
  if (e.target.nodeName != 'DIV' && e.target.nodeName != 'FIGCAPTION' || e.keyCode==27) { // через && перечисляются теги, клинкув на которые окно не будет закрыто; сюда же можно включить тег A или IFRAME 
    document.getElementById('popup').style.display='none';
    localStorage.setItem('popup1', 'none');
  }
}

if(localStorage.getItem('popup1')) {
  document.getElementById('popup').style.display='none';
}