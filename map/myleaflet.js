var highlightLayer;
function highlightFeature(e) {
    highlightLayer = e.target;
    highlightLayer.openPopup();
}
var mymap = L.map('morganmap' , {
  center: [40.466,-74.274],
  zoom: 14,
  continuousWorld: false,
  worldCopyJump: false,
  zoomControl:true, maxZoom:16.5, minZoom:14,
  maxBounds:[[40.49,-74.30],[40.430,-74.2377]],
});
L.polyline([
  [40.4801,-74.3012],[40.4765,-74.2994],
  [40.4732,-74.2973],[40.4710,-74.2952],
  [40.4694,-74.2934],[40.4659,-74.2884],
  [40.4605,-74.2797],[40.4592,-74.2781],
  [40.4575,-74.2763],[40.4516,-74.2713]
],{opacity:0}).addTo(mymap).setText('Garden State Pkwy',{center: true});
L.polyline([
  [40.4776,-74.2907],[40.4756,-74.2881],
  [40.4710,-74.2844],[40.4675,-74.2815],
  [40.4664,-74.2802],[40.4658,-74.2792],
  [40.4651,-74.2777],[40.4646,-74.2762],
  [40.4643,-74.2744],[40.4644,-74.2710],
  [40.4649,-74.2663],[40.4648,-74.2647],
  [40.4638,-74.2612],[40.4609,-74.2550],
  [40.4570,-74.2470]
],{opacity:0}).addTo(mymap).setText('State Hwy 35',{center: true});
var myIcon = L.icon({
    iconUrl: "/map/css/images/1920px-US_9.png",
    iconSize: [15,15],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0],
});
L.marker([40.4640,-74.2960],{icon:myIcon}).addTo(mymap);
L.polyline([[40.4773,-74.2912],[40.47502,-74.2969],[40.4681,-74.2976],[40.4642,-74.2959],[40.4581,-74.2957]],{opacity:0,weight:0}).addTo(mymap);
L.polyline([[40.4774,-74.2833],[40.4754,-74.2821],[40.4747,-74.2817],[40.4741,-74.2816],[40.4657,-74.2751]
],{opacity:0}).addTo(mymap).setText('S Pine Ave',{offset:2.5,center: true});
L.polyline([[40.4627,-74.3013],[40.4789,-74.2814],[40.4801,-74.2780]],{opacity:0}).addTo(mymap).setText('Bordentown Ave',{center: true});
L.polygon([[40.4860,-74.2239],[40.4860,-74.2676],[40.4667,-74.2597],[40.4611,-74.2461],[40.4538,-74.2236]],{opacity:0,fillOpacity:0}).addTo(mymap).setText("Raritan Bay",{center:true,orientation:0,offset:-100,renderer:L.svg()});
function pop_MorganProps_0(feature, layer) {
    layer.on({
        mouseout: function(e) {
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table style="text-align:center;user-select:none;">\
            <tr>\
                <td colspan="2" style="font-weight:bolder">' + (feature.properties['ST_ADDRESS'] !== null ? (String(feature.properties['ST_ADDRESS'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + 'Land Value' + ' : $'+(feature.properties['LAND_VAL'] !== null ? (Number(feature.properties['LAND_VAL']).toLocaleString('en')) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + 'Impr Value' + ' : $' + (feature.properties['IMPRVT_VAL'] !== null ? (Number(feature.properties['IMPRVT_VAL']).toLocaleString('en')) : '') + '</td>\
            </tr>\
            <tr style="color:palegoldenrod;text-shadow:1.5px 1.5px 1px red;font-weight:bold">\
                <th scope="row">NET VALUE</th>\
                <td>$' + (feature.properties['NET_VALUE'] !== null ? (Number(feature.properties['NET_VALUE']).toLocaleString('en')) : '') + '</td>\
            </tr>\
            <tr style="font-weight:bolder">\
                <td colspan="2">' + (feature.properties['ZONE'] !== null ? (String(feature.properties['ZONE'])) : '') + '</td>\
            </tr>\
            <tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_MorganProps_0_0(feature) {
    switch(String(feature.properties['ZONE'])) {
        case 'R-7':
            return {
        pane: 'pane_MorganProps_0',
        opacity: 1,
        color: 'rgba(80,80,80,.9)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: .5,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(235,214,161,0.9)',
    }
            break;
        case 'R-10':
            return {
        pane: 'pane_MorganProps_0',
        opacity: 1,
        color: 'rgba(80,80,80,.9)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: .5,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(232,153,74,0.9)',
    }
            break;
        case 'PD-10':
            return {
        pane: 'pane_MorganProps_0',
        opacity: 1,
        color: 'rgba(80,80,80,0.9)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: .5,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(212,111,15,0.9)',
    }
            break;
        case 'B-3':
            return {
        pane: 'pane_MorganProps_0',
        opacity: 1,
        color: 'rgba(80,80,80,0.9)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: .5,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(243,126,140,0.9)',
    }
            break;
        case 'P':
            return {
        pane: 'pane_MorganProps_0',
        opacity: 1,
        color: 'rgba(80,80,80,0.9)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: .5,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(166,202,243,0.9)',
    }
            break;
        case 'MW':
            return {
        pane: 'pane_MorganProps_0',
        opacity: 1,
        color: 'rgba(80,80,80,0.9)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: .5,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(187,164,109,0.9)',
    }
            break;
        case 'MW (PUD)':
            return {
        pane: 'pane_MorganProps_0',
        opacity: 1,
        color: 'rgba(80,80,80,0.9)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: .5,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(133,97,7,0.9)',
    }
            break;
        default:
            return {
        pane: 'pane_MorganProps_0',
        opacity: 1,
        color: 'rgba(80,80,80,0.9)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: .5,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(198,176,243,0.9)',
    }
            break;
    }
}
mymap.createPane('pane_MorganProps_0');
mymap.getPane('pane_MorganProps_0').style.zIndex = 350;
var layer_MorganProps_0 = new L.geoJson(json_MorganProps_0, {
    attribution: 'Data from NJGIN',
    pane: 'pane_MorganProps_0',
    onEachFeature: pop_MorganProps_0,
    style: style_MorganProps_0_0,
});
mymap.addLayer(layer_MorganProps_0);
function style_MorganSts_1_0(feature) {
    switch(String(feature.properties['SYMBOLTYPE'])) {
        case '100':
        case '108':
            return {
        pane: 'pane_MorganSts_1',
        opacity: 1,
        color: 'rgba(270,50,50,1.0)',
        dashArray: '',
        lineCap: 'round',
        lineJoin: 'round',
        weight: 1.5,
        fillOpacity: 0,
        smoothFactor:2,
    }
            break;
        case '300':
        case '308':
            return {
        pane: 'pane_MorganSts_1',
        opacity: 1,
        color: 'rgba(239,206,74,1.0)',
        dashArray: '',
        lineCap: 'round',
        lineJoin: 'round',
        weight: 2.0,
        fillOpacity: 0,
        smoothFactor:2,
    }
            break;
        case '400':
        case '408':
        case '500':
        case '508':
            return {
        pane: 'pane_MorganSts_1',
        opacity: 1,
        color: 'rgba(260,101,0,1.0)',
        dashArray: '',
        lineCap: 'round',
        lineJoin: 'round',
        weight: 1.5,
        fillOpacity: 0,
    }
            break;
        case '600':
        case '700':
            return {
        pane: 'pane_MorganSts_1',
        opacity: .5,
        color: 'rgba(260,260,260,1.0)',
        dashArray: '2 0 0 2',
        lineCap: 'round',
        lineJoin: 'round',
        weight: .5,
        fillOpacity: 0,
    }
            break;
        default:
            return {
        pane: 'pane_MorganSts_1',
        opacity: 1,
        color: 'rgba(0,0,0,0)',
        dashArray: '',
        lineCap: 'round',
        lineJoin: 'round',
        weight: 1,
        fillOpacity: 0,
    }
            break;
    }
}
mymap.createPane('pane_MorganSts_1');
mymap.getPane('pane_MorganSts_1').style.zIndex = 375;
var layer_MorganSts_1 = new L.geoJson(json_MorganSts_1, {
    attribution: '',
    renderer:L.svg({pane:'pane_MorganSts_1'}),
    pane: 'pane_MorganSts_1',
    style: style_MorganSts_1_0,
});
mymap.addLayer(layer_MorganSts_1);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
className: 'mapbox',id: 'mapbox.satellite',bounds:[[40.49,-74.30],[40.430,-74.2377]],
accessToken: 'sk.eyJ1IjoibnRlcndpbjcxNCIsImEiOiJjang2aXg1dXAwMDVvM3RreXQ0dzllczN3In0.Ur4AUGHzeMqCEAczqRik-w',
}).addTo(mymap);
var baseMaps = {};
L.control.scale({imperial:true,metric:false}).addTo(mymap);
L.control.layers(baseMaps,{'<span id="legend-name">Zoning<br>Designations</span><table class="legend"><tr><td><img src="/map/legend/MorganProps_0_R70.png" /></td><td>R-7</td></tr><tr><td><img src="/map/legend/MorganProps_0_R101.png" /></td><td>R-10</td></tr><tr><td><img src="/map/legend/MorganProps_0_PD102.png" /></td><td>PD-10</td></tr><tr><td><img src="/map/legend/MorganProps_0_B33.png" /></td><td>B-3</td></tr><tr><td><img src="/map/legend/MorganProps_0_P4.png" /></td><td>P</td></tr><tr><td><img src="/map/legend/MorganProps_0_MW5.png" /></td><td>MW</td></tr><tr><td><img src="/map/legend/MorganProps_0_MWPUD6.png" /></td><td>MW (PUD)</td></tr><tr><td><img src="/map/legend/MorganProps_0_7.png" /></td><td>Train</td></tr></table>': layer_MorganProps_0,},{collapsed:false}).addTo(mymap);
L.Control.Centerbtn = L.Control.extend({
    onAdd: function(mymap) {
        var imgbutton = L.DomUtil.create('img');
        imgbutton.src = '/map/css/images/focus_@2X.png';
        imgbutton.className = 'centerbtn';
        imgbutton.title = 'Reset View';
        imgbutton.addEventListener("click", function () {
          mymap.flyTo([40.466,-74.274], 14, {animate: true,duration: 2})});
        return imgbutton;
    },
    onRemove: function(mymap) {null}
});
L.control.centerbtn = function(opts) {return new L.Control.Centerbtn(opts);};
L.control.centerbtn({position:'topleft'}).addTo(mymap);
