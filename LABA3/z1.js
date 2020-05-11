
function fact(n) { //возвращает n!
    if (n <= 0)
        return 1;
    return (n != 1) ? n * fact(n - 1) : 1;
}

function C(k, n) { //возвращает значение элемента, где k- номер эл-та в строке, n - номер строки. рассчитывается по формуле сочетаний
    return fact(n)/(fact(k)*fact(n-k));
}

function BuildPT(size) {
    var w = size * 2 - 1, a1 = Math.floor(w / 2), a2 = a1, b = false, j = 0, n=0;//w - количество столбцов, а1,а1 - границы треугольника, слева и справа соответственно, изменяются после каждого ряда. 
    document.write("width = " + w + "; a1 = " + a1 + "; a2 = " + a2);
    document.write("<table width=750>");
    while (size) {
        document.write("<tr>");
        for (var i = 0; i < w; i++) {
            if (i < a1 || i > a2) 
                document.write("<td> </td>");//для того, чтобы ставить пустую ячейку, в случае если мы не в треугольнике
            else {
                b = !b;//для того, чтобы расставлять пустые ячейки между числами
                if (b == true) {
                    document.write("<td>" + C(j, n) + "</td>");
                    j++;
                }
                if (b == false) {
                    document.write("<td></td>");
                }
            }
            
        }
       console.log(a1, a2);
      a1--;
      a2++;
      b = !b;
     
        j = 0;
        document.write("</tr>");
        n++;
        size--;
    }
    document.write("</table>")
}

console.log('Start');
BuildPT(10);

//BuildPT(Number(prompt("Введите размер треугольника Паскаля(его высоту): ")));
        document.write("fact 5 - " + String(C(0,1)));