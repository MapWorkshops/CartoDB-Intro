// Generate HTML for infowindow
function insert_data(content) {
    var html_consent = "<h4>Nombre</h4><p>" + content.data.nombre + "</p>";

    return html_consent;
}


// Main function: create map and load cdb layers
function main() {
    // Load visualization
        var viz = cartodb.createVis('map', 'https://jorgeas80.cartodb.com/api/v2/viz/707b06ac-8ba8-11e5-bf74-0ea31932ec1d/viz.json', {
            shareable: false,
            search: false,
            layer_selector: true,
        })
            .done(function (vis, layers) {
                // To work with the native map
                var map = vis.getNativeMap();

                // layer[1] is a layergroup containing the 3 sublayers (layer[0] is basemap)
                pol_layer = layers[1].getSubLayer(0);
                var infowindow = pol_layer.infowindow;
                infowindow.set('template_type', 'underscore');
                infowindow.set('template', $('#infowindow_template').html());

            });
}
