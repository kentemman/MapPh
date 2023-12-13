var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Province_1 = new ol.format.GeoJSON();
var features_Province_1 = format_Province_1.readFeatures(json_Province_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Province_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Province_1.addFeatures(features_Province_1);
var lyr_Province_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Province_1, 
                style: style_Province_1,
                interactive: true,
                title: '<img src="styles/legend/Province_1.png" /> Province'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Province_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Province_1];
lyr_Province_1.set('fieldAliases', {'ADM2_EN': 'ADM2_EN', 'ADM1_EN': 'ADM1_EN', });
lyr_Province_1.set('fieldImages', {'ADM2_EN': 'TextEdit', 'ADM1_EN': 'TextEdit', });
lyr_Province_1.set('fieldLabels', {'ADM2_EN': 'no label', 'ADM1_EN': 'no label', });
lyr_Province_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});