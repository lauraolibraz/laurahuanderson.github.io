var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_rios_1 = new ol.format.GeoJSON();
var features_rios_1 = format_rios_1.readFeatures(json_rios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios_1.addFeatures(features_rios_1);
var lyr_rios_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rios_1, 
                style: style_rios_1,
                interactive: true,
                title: '<img src="styles/legend/rios_1.png" /> rios'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_rios_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_rios_1];
lyr_rios_1.set('fieldAliases', {'Id': 'Id', 'ordem': 'ordem', 'nome': 'nome', 'compriment': 'compriment', });
lyr_rios_1.set('fieldImages', {'Id': 'Range', 'ordem': 'TextEdit', 'nome': 'TextEdit', 'compriment': 'TextEdit', });
lyr_rios_1.set('fieldLabels', {'Id': 'no label', 'ordem': 'no label', 'nome': 'no label', 'compriment': 'no label', });
lyr_rios_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});