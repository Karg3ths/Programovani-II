  function ladeni(x) {
    $("#ladeni").text(JSON.stringify(x));
}
  function nacti(suffix) {
    return $.ajax({
            url: "https://alej.alisma.cz/api/cr/" + suffix,
          })
  }
  function pri_nacteni_mest_kraje(mesta) {
    //ladeni(mesta);
    for(var i in mesta) {
      $("<li>" + mesta[i].jmeno + "</li>")
        .appendTo("#kraj-mesta UL");
    }
  }
  function pri_nacteni_kraje(info) {
    ladeni(info);
    $("#uvod").hide();
    $("#kraj-mesta UL").empty();
    $("#kraj H2").text(info.jmeno);
    $("#kraj-rozloha SPAN").text(info.rozloha);
    $("#kraj-obyvatel SPAN").text(info.obyvatel);
    nacti("kraje/" + info.id + "/mesta")
        .done(pri_nacteni_mest_kraje);
    $("#kraj").show();
  }
  function pri_nacteni_mest() {
  }
  function pri_nacteni_kraju(kraje) {
    ladeni(kraje);
    for (var i in kraje) {
        $("<li>" + kraje[i].jmeno + "</li>")
          .click(kraje[i].id, function(event) {
            //ladeni(event.data);
          nacti("kraje/" + event.data)
            .done(pri_nacteni_kraje);
    })
      .appendTo("#seznam-kraju");
    }
}

/*function pri_nacteni_mest(mesta) {
    ladeni(mesta);
    for (var i in mesta) {
        $("<li>" + mesta[i].jmeno + "</li>").click(mesta[i].id, function(data) {
            ladeni(mesta[i]);
        }).appendTo("#seznam-mest");
    }
  }
*/
  
 $(document).ready(function() {
    nacti("kraje").done(pri_nacteni_kraju);
});
