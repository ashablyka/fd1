ymaps.ready(init);
function init(){    
    var map = new ymaps.Map("map", {
        center: [53.92452718, 27.51777399],
        zoom: 16,
        behaviors: ["drag"]
        });
    var placemark = new ymaps.Placemark ([53.92452718, 27.51777399] , {
        hintContent: "проспект Победителей, 63 к. 1",
        balloonContent: "Дворец тенниса"
    });
    map.geoObjects.add(placemark);
}
