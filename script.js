document.getElementById("beregnet_populasjons_varians_//_s_form");

function kalkulerBeregnetPopulajsonVarians() {

}

function updateXForm(value, id) {
    var form = document.getElementById(id);
    for(var i = 0; i < value; i++) {
        document.getElementById(id).innerHTML += "<input type='text' placeholder='x" + i + "'>";
    }
}