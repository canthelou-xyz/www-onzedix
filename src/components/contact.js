import React from "react"

const Contact = () => (
    <section class="contact part">
    <a name="contact" id="contact"></a>
    <aside><div class="mapwrapper">
            {/* <script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script>
            <div id='gmap_canvas' style='height:200px;width:100%;'></div>
            <script type='text/javascript'>
                function init_map() {
                    var myOptions = {
                        zoom: 6,
                        center: new google.maps.LatLng(46.757034, 4.688333000000057),
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
                    marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(46.757034, 4.688333000000057)
                    });
                    infowindow = new google.maps.InfoWindow({
                        content: '<strong>Pierre est lÃ </strong><br>Chalon-sur-SaÃ´ne, 71<br>Entre Dijon et Lyon<br>'
                    });
                    google.maps.event.addListener(marker, 'click', function () {
                        infowindow.open(map, marker);
                    });
                    infowindow.open(map, marker);
                }
                google.maps.event.addDomListener(window, 'load', init_map);
            </script> */}
    </div>
    </aside>
    <div class="content">
        <h2>Contactez-moi
            <span>
                <script>
                    document.write("rf.xidezno@erreip".split("").reverse().join(""));
                </script>
            </span>
        </h2>
        <p>De vive voix, demandez Pierre&nbsp;Canthelou au&nbsp;
            <strong>06&nbsp;95&nbsp;14&nbsp;49&nbsp;42</strong>
        </p>
        <footer>
            <a href="#menu">menu</a>
        </footer>
    </div>
</section>
)

export default Contact