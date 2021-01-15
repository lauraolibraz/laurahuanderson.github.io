var wms_layers = [];
var format_rios_0 = new ol.format.GeoJSON();
var features_rios_0 = format_rios_0.readFeatures(json_rios_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_rios_0.addFeatures(features_rios_0);var lyr_rios_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rios_0, 
                style: style_rios_0,
                title: '<img src="styles/legend/rios_0.png" /> rios'
            });

lyr_rios_0.setVisible(true);
var layersList = [lyr_rios_0];
lyr_rios_0.set('fieldAliases', {'Id': 'Id', 'ordem': 'ordem', 'nome': 'nome', 'compriment': 'compriment', });
lyr_rios_0.set('fieldImages', {'Id': 'TextEdit', 'ordem': 'TextEdit', 'nome': 'TextEdit', 'compriment': 'TextEdit', });
lyr_rios_0.set('fieldLabels', {'Id': 'no label', 'ordem': 'no label', 'nome': 'no label', 'compriment': 'no label', });
lyr_rios_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});