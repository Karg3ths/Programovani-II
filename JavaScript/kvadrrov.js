function neniCislo(x) {
    return x == "" || isNaN(x);
}
 
function spocitej() {
    $("#chyba").text("");
    $("#reseni").text("");
    var a = $("#a").val().trim();
    var b = $("#b").val().trim();
    var c = $("#c").val().trim();
    if (neniCislo(a) || neniCislo(b) || neniCislo(c)) {
        $("#chyba").text("Koeficienty musí být čísla.");
        return;
    }
    var eps = 0.0001;
    var diskr = b*b - 4*a*c;
    if (diskr < -eps) {
        $("#reseni").text("rovnice nemá řešení v oboru reálných čísel.");
    } else if (diskr > eps) {
        var x1 = (- b + Math.sqrt(diskr)) / (2*a);
        var x2 = (- b - Math.sqrt(diskr)) / (2*a);
        $("#reseni").html("x<sub>1</sub> = " + x1 + " &nbsp; " + "x<sub>2</sub> = " + x2);
    } else {
        var x12 = -b / (2*a);
        $("#reseni").html("x<sub>1,2</sub> = " + x12);
    }
}
 
$(document).ready(function(){
    $("#pocitej").click(spocitej);
    $(".rovnice INPUT").change(spocitej);
    $(".rovnice INPUT").keypress(spocitej);
    $(".rovnice INPUT").keydown(spocitej);
    $(".rovnice INPUT").keyup(spocitej);
    $("#pocitej").click();
});