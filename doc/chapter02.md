# Creación de Mapas

Ya que conocemos la interfaz de CartoDB, vamos a empezar a trabajar en serio con la herramienta. Para ello, crearemos una visualización de las estaciones de [Bicimad](http://www.bicimad.com/) y los ciclocarriles de la ciudad de Madrid. Dicha visualización constará de 3 capas:

* [Capa con **distritos de la ciudad de Madrid**](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/distritos_madrid_nogeo.csv), creada a partir de la biblioteca de datos de CartoDB. Se trata de un conjunto de datos en formato polígono.
* [Capa con **ciclocarriles de la ciudad de Madrid**](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/ciclocarriles_madrid.kml),  descargada la [web de datos abiertos de la Comunidad de Madrid](http://datos.madrid.es/portal/site/egob/menuitem.c05c1f754a33a9fbe4b2e4b284f1a5a0/?vgnextoid=435a7cd5de319410VgnVCM1000000b205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD). Se trata de un conjunto de datos en formato línea.
* [Capa con **estaciones de Bicimad**](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/GBICIMAD.kml), descargada también de la [web de datos abiertos de la Comunidad de Madrid](http://datos.madrid.es/portal/site/egob/menuitem.c05c1f754a33a9fbe4b2e4b284f1a5a0/?vgnextoid=f17b841a2c7d6410VgnVCM1000000b205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD). Se trata de un conjunto de datos de puntos.

Con estos tres ejemplos, cubriremos los principales tipos de datos con los que trabajan las bases de datos espaciales.

Adicionalmente, creamos un segundo mapa que contenga un solo conjunto de datos, mostrando [trazas de un viaje en bicicleta entre dos puntos de Madrid](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/home_to_job.geojson). Con este conjunto de datos, construiremos una visualización dinámica para mostrar en nuestro mapa.

Comencemos con la importación de datos.

## Importando datos

Cuando trabajamos con datos de fuentes externas, es muy común que nos enfrentemos a problemas como:

* Datos en diferentes formatos (CSV, Excel, JSON, SHP, KML, etc)
* Datos sin geolocalizar
* Datos con errores topológicos
* Datos sin contextualizar (ej: todas las columnas se interpretan como cadenas de texto)
* ...

Es labor del profesional GIS el preveer, entender y solucionar esos contratiempos. Existen herramientas que facilitan nuestra labor. CartoDB es una de ellas.

Para empezar, vamos a crear nuestro mapa, usando como fuentes de datos las 3 capas que hemos mencionado:

* [Distritos de la ciudad de Madrid](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/distritos_madrid_nogeo.csv)
* [Ciclocarriles de la ciudad de Madrid](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/ciclocarriles_madrid.kml)
* [Estaciones de Bicimad](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/GBICIMAD.kml)

### Creando nuestro mapa: importando puntos

Para ello, basta con que creemos un mapa nuevo, y añadamos, para empezar, la capa de estaciones de Bicimad.

La capa de estaciones está en [formato KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language), un lenguaje de marcado utilizado para representación de datos en Google Earth. Como este formato es uno de los [aceptados de manera nativa por CartoDB](http://docs.cartodb.com/cartodb-editor/datasets/#supported-file-formats), bastará con que arrestremos el fichero a nuestro Dashboard, y la importación se hará de manera automática.


Si ahora cambiamos a la vista de mapa, observamos algo muy interesante: **CartoDB nos sugiere qué tipo de mapa es apropiado, tras analizar nuestro conjunto de datos**. Esta funcionalidad es excepionalmente útil para analistas de datos geográficos, que quieren extraer información o construir historias basadas en datos geolocalizados.

![CartoDB sugiere mapa a construir][cartodb_suggests_map]

Tras pedirle que nos muestre la sugerencia, CartoDB nos informa de que un **mapa de calor** es el que más sentido tiene construir con nuestros datos de manera aislada.

![CartoDB sugiere mapa de calor][cartodb_suggests_heatmap]

Si aceptamos la sugerencia, automáticamente se construye un mapa de calor. Incluso, si desplegamos el menú lateral derecho para comprobar los parámetros, vemos que **CartoDB ha elegido unos parámetros por nosotros**.

![CartoDB construye mapa de calor][cartodb_builds_heatmap]

Posiblemente CartoDB tenga razón, y este sea el mejor mapa a construir con nuestros datos aislados. Pero nosotros nos vamos a quedar con el mapa sencillo de puntos, para los propositos de este tutorial. Asi que, en el propio *wizard* donde estamos viendo los parámetros del mapa de calor construido, nos movemos con las flechas hasta elegir la visualización *simple*, y vemos que los puntos vuelven a aparecer en el mapa.

![Mapa de puntos seleccionado][point_map_selected]

Más adelante veremos la utilidad del menú lateral y los tipos de mapa. Por ahora, sigamos importando nuestros datos.

### Creando nuestro mapa: importando líneas

Para importar nuestra capa de líneas con los ciclocarriles de Madrid, pinchamos en el signo *+* de color azul que hay en la parte superior del menú lateral derecho.

![Nueva capa][add_new_layer]

Volveremos a ver la pantalla de importanción de datos, donde podremos arrastrar nuestro [fichero de líneas](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/ciclocarriles_madrid.geojson). Tras ello, vemos como nuestro mapa se ha modificado para mostrarnos ambos conjuntos de datos, y un menú lateral derecho por cada capa añadida.

![Mapa con dos capas][two_layers_map]

Al estar utilizándose el mismo color por defecto para ambos tipos de dato, el mapa puede resultar algo confuso. Pero terminemos de importar capas, y luego nos preocuparemos de estilar el mapa.


### Creando nuestro mapa: importando polígonos

Finalmente, importaremos la capa que contiene los distritos de la ciudad de Madrid, que es un mapa de polígonos. Repetimos el mismo proceso que realizamos para la capa de líneas, y añadimos nuestra [capa de polígonos](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/distritos_madrid_nogeo.csv).

Cuando los datos están importados, nos fijamos en que no aparece nada nuevo en nuestro mapa. Así que, una vez más, volvemos a nuestros datos. Vemos dos detalles interesantes.

* La columna *the_geom*, que es la que almacena la geometría, no es un polígono, sino un punto.
* Hay una columna llamada *cartodb_georef_status*, que contiene valores booleanos.

![Mapa autogeoreferenciado][autoref_map]

Lo que ha sucedido aquí es que nuestro conjunto de datos no contenía una columna de tipo geométrica, de manera que CartoDB ha intentado generarla automáticamente, **intentado decidir la geometría a partir de las columnas presentes**.

El intento que ha hecho CartoDB ha sido a partir del campo *nombre*, que contiene el nombre de cada uno de los distritos de Madrid. Ese nombre le ha servido para geolocalizar de manera correcta algunas ubicaciones, pero creando un tipo de dato *point*. Es el caso de barrios como Arganzuela, Retiro o Chamartín. En otros casos, solo con el nombre no era posible determinar si era un barrio de Madrid u otro tipo de región administrativa. En el caso de Tetuán o Salamanca, por ejemplo, se ha generado un punto en las ciudades con el mismo nombre. Por último, ha habido casos en los que el geolocalizador automático no ha encontrado nada. Es el caso de Fuencarral-El Pardo o Moncloa-Aravaca.

Entendemos ahora, por tanto, el significado de la columna *cartodb_georef_status*. Simplemente nos informa de si ese registro concreto ha podido ser geolocalizado o no.

La intención de este ejercicio era demostrar cómo CartoDB intenta ayudarnos en la tarea de georeferenciar nuestros datos, incluso si no le hemos dado ninguna pista para ello. Lo que se hace *detrás de las cortinas* es simplemente intentar aplicar todas las opciones de georreferenciación presentes en la herramienta, y que ya hemos visto en el capítulo de *Un paseo por la interfaz de CartoDB*.

Para más información sobre las capacidades de georreferenciación de CartoDB, se puede consultar [este artículo de la documentación oficial](http://docs.cartodb.com/tutorials/how_to_georeference/)

En cualquier caso, a pesar de la georreferenciación parcial que nos ha proporcionado CartoDB, lo que nosotros queremos son polígonos representando distritos, no puntos. ¿Cómo los obtenemos?

Fijémonos en la columna *geom_text* de la tabla

![Texto representando geometría][pol_text]

Lo que tenemos ahí es una definición de una geometría poligonal en [formato WKT](https://en.wikipedia.org/wiki/Well-known_text). Un lenguaje de marcado utilizado para representar geometrías vectoriales en un sistema de referencia espacial.

Mediante este lenguaje, se pueden especificar de manera sencilla geometrías de diferentes tipos. Estas geometrías están definidas de manera oficial en la [*OpenGIS Simple Features Specification for SQL* ](http://www.opengeospatial.org/standards/sfs), un estándar de la [OGC](http://www.opengeospatial.org/). También conocido, de manera abreviada, como *OGC SFS*.

Este estándar está aceptado oficialmente por PostGIS, de manera que podremos utilizarlo. Lo que tenemos en nuestro caso es un campo de tipo texto que contiene una definición OGC de un multipolígono. Mediante el uso de la función [ST_GeomFromText](http://www.postgis.org/docs/ST_GeomFromText.html) de PostGIS, podremos convertir la definición en una geometría y almacenarla en la columna *the_geom*. Vamos a la pestaña *SQL* del menú lateral, y escribimos la siguiente sentencia SQL:

```sql
update distritos_madrid_nogeo set the_geom = st_setsrid(st_geomfromtext(geom_text), 4326)
```

Vemos que, efectivamente, nuestro mapa muestra ahora polígonos representando distritos de la ciudad de Madrid. Más tarde les daremos estilo para mejorar nuestra visualización

![Madrid con polígonos][madrid_with_pols]

Hemos tenido que utilizar también la función [st_setsrid](http://www.postgis.org/docs/ST_SetSRID.html), porque la definición de nuestros polígonos no incluía información sobre el [sistema de referencia](https://en.wikipedia.org/wiki/Spatial_reference_system) de nuestros datos. En PostGIS, existe una tabla especial llamada *spatial_ref_sys* donde se encuentran identificadores numéricos de los sistemas de referencia espacial más utilizados. Estos identificadores numéricos también están definidos oficialmente, y se pueden consultar en línea en la web [http://spatialreference.org/](http://spatialreference.org/).

En nuestro caso particular, hemos dado por hecho que el sistema de referencia utilizado es el popular WGS84, basado en el [*World Geodetic System datum*](http://www.linz.govt.nz/data/geodetic-system/datums-projections-heights/geodetic-datums/world-geodetic-system-1984-wgs84), utilizado en el sistema de navegación GPS, y que utiliza coordenadas latitud, longitud para definir la posición de un objeto sobre el globo terráqueo. Dicho sistema de referencia está indexado mediante el identificador 4326 de la tabla *spatial_ref_sys*, y eso es lo que significa el segundo argumento que le hemos pasado a la función *st_setsrid*. Podemos consultar la definición oficial del SRID 4326 desde [este enlace](http://spatialreference.org/ref/epsg/wgs-84/).

Un estudio profundo de los sistemas de referencia espaciales escapa del ámbito de este manual. Únicamente se ha querido dar este breve apunte porque es bastante habitual que nos encontremos situaciones como la que hemos enfrentado ahora:

* Datos no georreferenciados.
* Información de ubicación espacial (latitud, longitud) no disponible.
* Definiciones de geometrías espaciales incompletas.

Es en estos casos donde, para construir una visualización de datos espaciales, deberemos tener unos conocimientos mínimos sobre sistemas de información geográfica que nos permitan *limpiar* o corregir nuestros datos.

Veremos a continuación cómo darles estilos a nuestros datos, y crear con ellos una visualización que tenga sentido

## Estilando nuestros datos

Ahora que ya tenemos nuestros datos importados en CartoDB, vamos a darles algo de estilo y a enriquecer nuestro mapa con algo de información extra.

En la parte derecha de nuestra vista de mapa, deberíamos ver apilados tres menús, uno para cada conjunto de datos

![Menús laterales vista de mapa][side_menus_map_view]

Cuando entremos en uno cualquiera, se nos llevará automáticamente a la pestaña de *wizards*. Desde los *wizards*, podremos ajustar el tipo de visualización que queremos para nuestros datos, así como los colores, rellenos, anchos de líneas y otros pocos parámetros visuales.

Ya en el *wizard*, podemos experimentar eligiendo los diferentes tipos de visualizaciones, y ver qué efecto producen. En términos generales, esto es lo que muestra cada visualización.

* ***Simple***: Visualización básica. Cada elemento por separado, todos con la misma forma y tamaño.
* ***Cluster***: Cada elemento representa un determinado número de puntos encerrados en una determinada región, llamada *cluster*.
* ***Choropleth***: Se utiliza para pintar cada elemento de un color, en función de una variable numérica obtenida a partir de una o más columnas. Es especialmente útil en el caso de polígonos, para comparar unos con otros.
* ***Category***: También se utiliza para pintar cada elemento de un color, pero esta vez en función de una variable cualitativa (una categoría). Es especialmente útil cuando tenemos nuestros elementos organizados por una cualidad que comparten de manera grupal.
* ***Bubble***: El tamaño de cada elemento va en función del valor numérico de otra columna de nuestro registro. No se puede usar con polígonos, pero es útil a la hora de comparar cuantitivamente valores puntuales.
* ***Torque***: Visualización dinámica para una progresión de puntos que se distribuyen a lo largo del tiempo. Acepta diferentes tipos de formato para la variable temporal, siendo el formato por defecto YYYY-DD-MMThh:mm:ss. Pero también acepta año, año y mes, año, mes y día, o solo horas.
* ***Heatmap***: Es una variación de Torque, que crea mapas de calor para datos temporales. Las áreas con mayor intensidad de color son aquellas que contienen mayor concentración de puntos.
* ***Torque Cat***: Es otra variación de Torque. Muestra también una animación de puntos, pero los colorea de manera diferente en función de una variable cualitativa (una categoría)
* ***Intensity***: Es parecido a un *heatmap*. Muestra la densidad de puntos, oscureciendo las áreas con mayor concentración de los mismos, pero aquí se mantienen los puntos por separado. Los *heatmap* son más apropiadas para visualizaciones lejanas (en las que nos interesan áreas grandes) o animadas (queremos ver el crecimiento y concentración de elementos a lo largo del tiempo). Los mapas de intensidad, en cambio, son más apropiados cuando estamos interesados en estratificar la ocurrencia de datos por áreas. Pensados para una visualización más de cerca, se ven más enriquecidos si usamos infowindows. Los veremos más adelante.
* ***Density***: Los datos son agregados en figuras de tipo hexagonal, que son coloreadas más oscuras cuantos más datos agregados contengan. Esta visualización no permite infowindows, así que, si queremos añadirlos, es mejor que usemos una visualización de tipo *Intensity*

En cualquiera de los casos, cuando toquemos los parámetros de nuestra visualización, **lo que estaremos haciendo realmente es modificar el CartoCSS** que se aplica a la misma. CartoCSS es un lenguaje de estilado de mapas web, similar a CSS en el sentido de que nos permite parametrizar el aspecto y comportamiento de los elementos de nuestra visualización. Fue creado por Mapbox, y podemos consultar la referencia oficial online en [este enlace](https://github.com/mapbox/carto/blob/master/docs/latest.md). Pero dado que Mapbox abandonó oficialmente el mantenimiento de la documentación de CartoCSS, es posible que nos interese más consultar la referencia de CartoCSS creada por CartoDB en [este otro enlace](http://docs.cartodb.com/cartodb-platform/cartocss/).

Si queremos profundizar más en qué tipo de visualización es apropiada en función de nuestros datos, podemos consultar este [tutorial de CartoDB academy](http://academy.cartodb.com/courses/06-intermediate-design/lesson-1.html)

Vamos a empezar a estilar nuestros datos de tipo punto.

### Estilando nuestros datos de tipo punto

Al pinchar en el menú número 1, se nos despliega dicho menú. Para aclararnos mejor, vamos a dejar en el mapa solo estos datos. Desactivamos la vista de las otras dos capas, mediante el icono de interruptor que hay en la parte superior derecha de cada menú.

![Desactivando otras capas][disabling_other_layers]

En esta visualización, queremos ver cada una de las estaciones de Bicimad por separado, de manera que elegimos una visualización de tipo *Simple*. Con ese tipo de visualización, se nos ofrecen unas pocas opciones de parametrización.

![Wizard visualizacion simple de puntos][wizard_simple_viz]

Lo primero que vamos a hacer es cambiar el color del icono a rojo. Para ello, pinchamos en el botón de cambio de color de la opción *Marker fill*, y elegimos el azul, como se puede ver en la imagen

![Cambio color icono marker][change_color_icon]

Ahora vamos a cambiar el icono del punto por algo más *bike-friendly*. Pinchamos en la etiqueta *IMG* que acompaña al botón de cambio de color de la opción *Marker fill*

![Etiqueta IMG Marker Fill][img_label_marker]

Elegiremos el pin 45 de la pestaña *Pin icons*, como se resalta en la imagen

![Eligiendo icono de bici][bike_icon]

Hecho esto, observamos que nuestros iconos circulares se han transformado en pequeños iconos de color azul conteniendo bicicletas

![Iconos de tipo bici][map_with_bike_icons]

La opción de *Composite operation* sirve para especificar qué sucede con los colores de los elementos que se superponen en la visualización. Nuestros datos son iconos separados, pero aun así, cuando disminuyamos el nivel de zoom (nos alejemos), se empezarán a montar unos sobre otros. Vamos a dejar la opción de *None* marcada. Las operaciones de composición son un asunto complejo y escapan del alcance de este tutorial. No obstante, se puede consultar la documentación sobre las mismas en [este enlace](https://www.mapbox.com/tilemill/docs/guides/comp-op/).

Una vez hemos terminado de estilar nuestros puntos, vamos a revisar la pestaña *CSS* del menú lateral, para verificar algo que ya comentamos en el apartado anterior: **las parametrizaciones que hagamos vía wizard únicamente cambian el CartoCSS de nuestra visualización**. Así es como ha quedado nuestro CartoCSS

![CartoCSS capa de puntos][cartocss_point_layer]

Por supuesto, siempre podremos modificar a mano el CartoCSS, si nos sentimos más cómodos haciéndolo así que vía *wizard*.

Hemos terminado con nuestra capa de puntos. Vamos a por la capa de líneas.

### Estilando nuestros datos de tipo línea

Para estilar nuestra capa de puntos, activamos otra vez la visibilidad de la capa. Posteriormente, cambiamos el color de la línea a verde, para contrastar con el azul de las estaciones.

![Cambio color línea][line_to_green]

Hecho esto, ya podemos ver algo interesante en el mapa. A pesar de que la zona norte de Madrid (de Chamberí hacia arriba) dispone de bastantes ciclocarriles, no hay aun estaciones de Bicimad en la zona.

![Estaciones y ciclocarriles][stations_and_paths]

No vamos a hacer más con nuestra capa de líneas. Pasemos a la capa de polígonos.

### Estilando nuestros datos de tipo polígono

Por último, activamos la visibilidad de nuestra capa de tipo polígono, y nos dirigimos al *wizard*. Lo primero que nos llama la atención es que la capa de polígonos tapan las otras dos capas de datos.

![Polígonos tapando capas][polygon_layer_first]

Vamos a arreglarlo moviendo la capa de polígonos abajo del todo. Para ello, solo tenemos que pinchar en el menú lateral derecho, a la altura del número que indica la capa, y arrastrar la capa hacia abajo. El resultado es mucho más claro

![Polígonos por debajo][polygon_layer_background]

Dada la naturaleza de nuestros datos poligonales, hay dos tipos de visualizaciones que tienen sentido:

* Mapa de categorías, usando la columna de *nombre* como categoría.
* Mapa de coropletas, usando la columna de *pob_density*, de densidad de población, como columna numérica.

Con el primer mapa, simplemente vemos cada distrito por separado, y una leyenda en la parte inferior derecha.

![Mapa de categorías][category_map]

Si le echamos un vistazo al CartoCSS de la capa, podemos ver cómo se aplican los diferentes colores en función del campo *nombre* de la capa

![CartoCSS mapa de categorías][cartocss_category_map]

Con el segundo mapa, lo que vemos es un código de colores más oscuro cuanto más densidad de población tiene el distrito representado.

![Mapa de coropletas][choroplet_map]

En cuanto al CartoCSS, vemos que, en esta ocasión, los diferentes colores se están aplicando en función de comparar un valor numérico con un valor umbral. Este valor umbral está calculado automáticamente en función de dos parámetros:

* El número de *Buckets* que decidamos que queremos utilizar para distribuir nuestros valores.

![Desplegable coropletas buckets][choroplet_buckets_select]

* El método que utilicemos para distribuir estos valores

![Desplegable coropletas cuantificación][choroplet_quantification_select]

Para entender más acerca de métodos de cuantificación, podemos consultar la [documentación de CartoDB](http://docs.cartodb.com/cartodb-editor/maps/#choropleth). Simplemente, añadir que, en cualquier momento, podemos cambiar el código CartoCSS de manera manual, para especificar nuestros propios valores umbrales.

Fijémonos ahora en la parte inferior derecha del mapa. Ha aparecido automáticamente una leyenda que muestra una rampa de colores con unos valores máximo y mínimo.

![Leyenda mapa coropletas][choroplet_legend]

La leyenda, tal y como está, no nos aporta demasiada información. No sabemos qué significan esos números, ni esos colores. Vamos a modificar algunas cosas. Para ello, entramos en la pestaña *Legends* de la capa de polígonos.

![Opciones leyenda mapa coropletas][choroplet_legend_options]

Vemos que aparece seleccionada *choroplet* como plantilla para la leyenda. Si queremos ver el código HTML de la plantilla, solo tenemos que pulsar en el icono con forma de etiqueta HTML. En la imagen se ve resaltado

![Botón cambio HTML leyenda][edit_html_legend]

El código es HTML estándar, como se puede comprobar

![HTML plantilla leyenda][html_legend]

Vamos a dejar el código HTML como está, y limitarnos a cambiar los valores numéricos por algo más significativo. Además, añadiremos un título a la leyenda.

![Plantilla leyenda coropletas modificada][choroplet_template_modified]

Por supuesto, si quisiéramos crear una plantilla totalmente personalizada, solo tenemos que elegir la opción *custom* en el desplegable.

Para terminar con nuestra capa de polígonos, vamos a añadir una última cosa. Queremos que, cuando pinchemos en uno cualquiera de los polígonos, aparezca una ventana de información que nos diga el nombre del distrito, su extensión y su densidad de población.

Para conseguirlo, nos vamos a la pestaña de *infowindows*. Dentro vemos dos pestañas más: *Click* y *Hover*. La primera de ellas nos permitirá crear un infowindow al pinchar sobre uno de los polígonos. La otra, lo mismo pero al pasar por encima. Nos vamos a limitar a la primera opción.

Vamos a ponerle un título a la infowindow. Además, vamos a mostrar los campos:

* *nombre*
* *pop_density*
* *shape_area*

Vemos las opciones elegidas en la siguiente imagen

![Crear infowindows][infowindow_creation]

¿Qué sucede ahora si pinchamos en uno de los distritos? Lo vemos en la imagen, habiendo pinchado en el distrito de Tetuán

![Mostrar infowindow][infowindow_show]

No está mal, pero aun podemos mejorar nuestro infowindow. Para empezar, no queremos que nos salga el nombre del campo de la tabla, sino una etiqueta algo más descriptiva. Para ello, vamos a pinchar en el icono que nos permite cambiar las etiquetas de los nombres de los campos en las infowindows. Lo vemos resaltado en la siguiente imagen.

![Enlace cambio etiquetas infowindow][infowindow_titles_edit]

Establecemos unos nombres un poco más informativos. Lo vemos en la imagen

![Cambio etiquetas infowindow][infowindow_titles_changed]

Vamos a ir un poco más lejos, y editar directamente algún detalle del HTML de la plantilla del infowindow. Para ello, pinchamos en el enlace que está a la derecha del anterior, y que tiene la misma forma que el que utilizamos para editar el HTML de la leyenda. Vamos a añadir las unidades de medida en los campos que las necesiten. Lo vemos en la imagen

![Cambio HTML infowindow][infowindow_html_changed]

Ahora queda bastante más ilustrativo.

![Infowindow cambiada][infowindow_changed]

Más adelante veremos como es posible incluso generar el infowindow en tiempo real, para poder pasarle datos dinámicos. Lo haremos usando CartoDB.js, la librería JS de CartoDB.

Con esto hemos terminado de personalizar el estilo de nuestra capa de polígonos. Vamos a revisar ahora cómo trabajar con nuestros datos, aplicando filtros a los mismos.
