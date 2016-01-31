# Creación de Mapas

Ya que conocemos la interfaz de CartoDB, vamos a empezar a trabajar en serio con la herramienta. Para ello, crearemos una visualización de las estaciones de [Bicimad](http://www.bicimad.com/) y los ciclocarriles de la ciudad de Madrid. Dicha visualización constará de 3 capas:

* [Capa con **distritos de la ciudad de Madrid**](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/distritos_madrid.kml), creada a partir de la biblioteca de datos de CartoDB. Se trata de un conjunto de datos en formato polígono.
* [Capa con **ciclocarriles de la ciudad de Madrid**](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/ciclocarriles_madrid.kml), descargada de la [web de datos abiertos de la Comunidad de Madrid](http://datos.madrid.es/portal/site/egob/menuitem.c05c1f754a33a9fbe4b2e4b284f1a5a0/?vgnextoid=435a7cd5de319410VgnVCM1000000b205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD). Se trata de un conjunto de datos en formato línea.
* [Capa con **estaciones de Bicimad**](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/GBICIMAD.kml), descargada también de la [web de datos abiertos de la Comunidad de Madrid](http://datos.madrid.es/portal/site/egob/menuitem.c05c1f754a33a9fbe4b2e4b284f1a5a0/?vgnextoid=f17b841a2c7d6410VgnVCM1000000b205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD). Se trata de un conjunto de datos de puntos.

Con estos tres ejemplos, cubriremos los principales tipos de datos con los que trabajan las bases de datos espaciales.

Comencemos con la importación de datos.

## Importando datos

Vamos a importar los tres juegos de datos anteriores a nuestra cuenta de CartoDB. Para ello, en primer lugar, crearemos un mapa, mediante el botón *New Map* que ya hemos visto, y elegiremos la opción *Connect dataset*, como se puede ver en la captura

![Conectar dataset](connect_dataset)

Iremos arrastrando y soltando nuestros datos uno a uno, como veremos a continuación.

### Creando nuestro mapa: importando puntos

Empecemos con una capa de puntos: la capa de estaciones de Bicimad.

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

Volveremos a ver la pantalla de importanción de datos, donde podremos arrastrar nuestro fichero de líneas. Tras ello, vemos como nuestro mapa se ha modificado para mostrarnos ambos conjuntos de datos, y un menú lateral derecho por cada capa añadida.

![Mapa con dos capas][two_layers_map]

Al estar utilizándose el mismo color por defecto para ambos tipos de dato, el mapa puede resultar algo confuso. Pero terminemos de importar capas, y luego nos preocuparemos de estilar el mapa.


### Creando nuestro mapa: importando polígonos

Finalmente, importaremos la capa que contiene los distritos de la ciudad de Madrid, que es un mapa de polígonos.

![Madrid con polígonos][madrid_with_pols]

Tras haber importado nuestros datos, nos fijamos en un detalle: la capa de polígonos queda encima de las demás, de manera que las otras se ven poco.

![Polígonos tapando capas][polygon_layer_first]

Si prestamos atención al menú lateral, vemos que tenemos nuestras tres capas apiladas, en el orden en que las hemos ido añadiendo.

![Menú lateral capas][map_piled_layers_menu]

Como lo que queremos es que nuestra capa de polígonos quede en la parte inferior de la pila, lo que haremos será simplemente **pinchar y arrastrar las pestañas del menú lateral derecho para colocarlas en el orden deseado**. Esto es:

 * Distritos de Madrid, en la parte inferior
 * Ciclocarriles de Madrid, en segundo lugar
 * Estaciones de Madrid, en la parte superior

 Así es como deben quedar las capas, tras reubicarlas

 ![Menú lateral capas reorganizadas][map_piled_layers_menu_reorg]

 Y así se verá nuestro mapa

 ![Polígonos por debajo][polygon_layer_background]

Una vez colocadas las capas en orden, vamos a darle estilo a nuestros datos, y crear con ellos una visualización que tenga sentido

## Estilando nuestros datos

Para estilar nuestros datos, vamos a fijarnos una vez más en el menú lateral derecho de la vista de mapa.

![Menús laterales vista de mapa][side_menus_map_view]

Vamos a utilizar los *wizards* para elegir la manera en la que queremos visualizar nuestros datos. Empezaremos por la capa de puntos (la capa superior)


### Estilando nuestros datos de tipo punto

Al pinchar en el menú número 1, se nos despliega dicho menú. Para aclararnos mejor, vamos a dejar en el mapa solo estos datos. Desactivamos la vista de las otras dos capas, mediante el icono de interruptor que hay en la parte superior derecha de cada menú.

![Desactivando otras capas][disabling_other_layers]

En esta visualización, queremos ver cada una de las estaciones de Bicimad por separado, de manera que elegimos una visualización de tipo *Simple* (profundizaremos más en tipos de visualización más adelante). Con ese tipo de visualización, se nos ofrecen unas pocas opciones de parametrización.

![Wizard visualizacion simple de puntos][wizard_simple_viz]

Lo primero que vamos a hacer es cambiar el color del icono a azul. Para ello, pinchamos en el botón de cambio de color de la opción *Marker fill*, y elegimos el azul, como se puede ver en la imagen

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

Por último, activamos la visibilidad de nuestra capa de tipo polígono, y nos dirigimos al *wizard*. Dada la naturaleza de nuestros datos poligonales, hay dos tipos de visualizaciones que tienen sentido:

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
