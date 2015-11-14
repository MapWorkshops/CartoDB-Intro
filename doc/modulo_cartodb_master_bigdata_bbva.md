# Introducción a CartoDB

En este apartado revisaremos la utilidad de las visualizaciones basadas en mapas, y tendremos nuestro primer contacto con CartoDB.

## Visualización: ¿Por qué mapas?

Hay muchos tipos de visualizaciones de datos, en función de lo que queramos destacar de nuesto juego de datos

![tipos de visualización][dataviz]

Pero los mapas tienen la particularidad de que ofrecen más contexto que la mayoría de visualizaciones. Ofrecen una dimensión espacial que ayuda a entender no solo qué es lo que está pasando y porqué, sino dónde. O incluso cuándo.

![mapa ofrece contexto][syriarefugees]

## Visualización: ¿Por qué CartoDB?

CartoDB es una herramienta web que permite el almacenaje y visualización de datos geográficos sin necesidad de programar una sola línea de código, o instalar ningún software en nuestra máquina.

Entre las muchas funcionalidades de CartoDB, cabe destacar las siguientes:

* **CartoDB Editor**: interfaz web para la carga y visualización de datos
* Posibiilidad de **compartir mapas rápidamente**, e integrarlos en cualquier otra aplicación web
* Diversas **APIs** para extender sus funcionalidades básicas (JavaScript API, SQL API, entre otras)

CartoDB se utiliza en una amplia variedad de campos, como [banca](https://cartodb.com/industries/banking-and-finance/), [business inteligence](https://cartodb.com/industries/business-intelligence-and-analytics/) u [observación de la Tierra](https://cartodb.com/industries/earth-observation-and-space/), por citar solo unos pocos.

Veremos a continuación algunos ejemplos ilustrativos de la potencia de CartoDB aplicada a diversos campos.

## CartoDB: Casos de uso

Como ya hemos mencionado, CartoDB tiene cabida en multitud de sectores. Algunos de ellos son:

**El sector inmobiliario**: El ejemplo perfecto es [Illustreets](http://illustreets.co.uk/explore-england/). Mapa temático que muestra el estándar
de vida en cada distrito del Reino Unido. La cantidad de información y estadísticas que se pueden
observar es apabullante

![Imagen Illustreets][illustreets]

**Ordenamiento urbano**: El ayuntamiento de Córdoba, entre otros muchos, utiliza CartoDB como [herramienta de ordenación urbana](http://www.gmucordoba.es/)

![Ordenación Córdoba][cordoba]

**Observación de la Tierra**: Uno de los proyectos estrella en este sector es [Global Forest Watch](http://www.globalforestwatch.org), que permite ver en tiempo casi real la deforestación del planeta, entre otros problemas ecológicos.

![Imagen Global Forest Watch][global_forest_watch]

**Análisis de datos**: Algunas tesis mantienen que los fugados de la Prisión de Alcatraz en Junio de 1962, de los que no se volvió a saber nada, podrían haber sobrevivido. Con la finalidad de probar dicha afirmación, un equipo de investigadores holandeses realizó una [simulación de cómo pudo haber terminado la fuga](https://www.washingtonpost.com/news/morning-mix/wp/2014/12/15/the-alcatraz-escapees-could-have-survived-and-this-interactive-model-proves-it/).

![Fuga de Alcatraz][alcatraz]

**Periodismo de datos**: Durante las elecciones autonómicas y municipales de 2011, RTVE realizó un [mapa interactivo](http://datos.rtve.es/elecciones/autonomicas-municipales) para tratar de descubrir si hay relaciones entre los resultados electorales municipales y datos demográficos, económicos y sociológicos desde 1987. Lo tituló *El microscopio del voto*.

![Elecciones 2011][elecciones2011]

La realización de mapas electorales con CartoDB se ha convertido en algo tan común que los propios desarrolladores publicaron [un tutorial](http://docs.cartodb.com/tutorials/electoral_map/) que explica cómo hacerlos.

También es bastante común la realización de mapas que muestran mediciones en tiempo real de parámetros diversos de un determinado municipio. Como ejemplo, tenemos el [mapa de polución de Los Ángeles](http://graphics.latimes.com/responsivemap-pollution-burdens/).

![Polución LA][polucionla]

O el [mapa de ubicación de máquinas quitanieves en Chicago](http://clearstreets.org/)

![Quitanieves Chicago][quitanieves]

En cuanto a eventos de relevancia social, se han popularizado bastante los mapas animados de Twitter en tiempo real realizados mediante la herramienta [Torque](http://blog.cartodb.com/torque-public/). Algunos ejemplos interesantes son:

El [mapa de tweets hablando del nuevo álbum de Beyoncé](https://srogers.cartodb.com/viz/337d9194-6458-11e3-85b5-e5e70547d141/public_map) tras su lanzamiento, el 13 de Diciembre de 2013.

![Beyonce][beyonce]

El [mapa de cómo se vivió en Twitter la final de Copa de Europa de 2014](http://cartodb.github.io/lisbon-2014), entre Real Madrid y Atlético de Madrid.

![Lisbon 2014][lisbon2014]

El [seguimiento en tiempo real del hashtag #sunrise en varios idiomas](http://cartodb.s3.amazonaws.com/static_vizz/sunrise.html?title=true&description=true&search=false&shareable=true&cartodb_logo=true&layer_selector=false&legends=false&scrollwheel=true&sublayer_options=1%7C1&sql=&zoom=2&center_lat=22.917922936146045&center_lon=51.328125#), a medida que sale el sol en diferentes partes del mundo.

![Sunrise][sunrise]

**Mapas de otros planetas**: CartoDB permite poner cualquier mapa como base para nuestras visualizaciones. No tenemos porqué limitarnos a los mapas base que nos proporcione el sistema.

Por ejemplo, se puede realizar un [Mapa de la Galaxia de Star Wars](http://www.swgalaxymap.com/)

![Mapa de la galaxia de Star Wars][starwars]

O un [mapa de la Tierra Media](http://johnhackworth.github.io/middle-earth/), de El Señor de los Anillos

![Mapa de la Tierra Media][tierra_media]


## CartoDB: Paseo por la interfaz

Podemos registrarnos en CartoDB para obtener una cuenta gratuita a través de [este enlace](https://cartodb.com/signup). Las cuentas de pago tienen algunas [funcionalidades extra muy interesantes](https://cartodb.com/pricing-features/), para los propósitos de este taller es suficiente con una cuenta gratuita.

Una vez ingresamos por primera vez en CartoDB, nos encontramos con el Dashboard, desde donde podemos ver tanto nuestros mapas como nuestros datasets

![Dashboard CartoDB][cartodb_dashboard]

Los dos apartados principales del Dashboard son, por tanto:

* Datasets: Los datos que hemos importado a nuestra cuenta.
* Maps: Las visualizaciones que hemos creado con esos datos.

![Maps y datasets][maps_y_datasets]

El flujo normal de trabajo con CartoDB empieza con la creación de una nueva visualización. Es decir, un mapa. Para ello, solo tendremos que pulsar el botón *New Map*, de la interfaz

![Nuevo mapa][new_map]

Vamos entonces a la pantalla de creación de mapa, donde lo primero que se nos pedirá es que añadamos nuestras fuentes de datos. En este punto, tenemos varias opciones:

* Connect dataset: Se nos mostrará la pestaña de importación de datos, desde donde podremos subir nuestros propios ficheros, o conectar con servicios de terceros para obtener un flujo de datos con el que trabajar. En función del tipo de cuenta que tengamos, podremos acceder a más o menos servicios de terceros

* Usar dataset: Si ya tenemos datos importados, podemos usarlos para nuestro mapa. CartoDB permite crear visualizaciones multicapa de manera sencilla, así que podremos incluir varios juegos de datos ya existentes, si lo deseamos.

* Data library: CartoDB pone a nuestra disposición un repositorio de datos desde donde podemos importar directamente datasets a nuestra cuenta con un solo clic.

* Create empty map: Por último, podemos crear un mapa sin datos. Nos resultará útil si lo que queremos es añadir datos de manera manual, directamente sobre el mapa.

De las cuatro opciones, veremos con más detenimiento en la siguiente sección la primera de ellas, *Connect dataset*.

Por ahora, vamos a proseguir con el resto de elementos de la interfaz, empezando con lo principal: **los mapas**.

Para crear rápidamente un mapa, vamos a utilizar alguno de los juegos de datos ya disponibles (la opción 2 de la pantalla de creación de mapas). Por ejemplo, el que contiene las regiones administrativas de Nueva York. Simplemente, lo elegimos de la lista, y pulsamos en el botón *Create Map*, de abajo a la derecha.

![Crear mapa a partir de datos existentes][new_map_from_library]

Tras unos segundos, seremos llevados a nuestra vista de mapa, desde donde podremos ver la visualización recién creada. En este caso, un mapa de polígonos

![Mapa de polígonos][pol_map]

Vayamos parte por parte, viendo lo que significa cada elemento en pantalla.

En la parte superior izquierda, tenemos el nombre del mapa. Como nuestro dataset.

![Nombre del mapa][map_name]

A través del enlace *Edit metadata*, también podremos añadir algunos metadatos a nuestro mapa, que nos ayudará a tener nuestros datos categorizados y fácilmente accesibles

![Metadatos del mapa][map_metadata]

En la parte superior central, tenemos los botones para cambiar entre vista de mapa y vista de datos

![Cambio entre vista de mapa y de datos][switch_views]

En la vista de datos, lo que tenemos es una tabla, donde podremos editar manualmente nuestras filas y columnas, si lo deseamos.

![Columnas en CartoDB][table_columns]

Basta con pinchar en la pequeña flecha que acompaña a los nombres de las columnas para poder editar ciertos aspectos de las mismas, como el nombre o el tipo de dato. O incluso ordenar la tabla siguiendo como criterio esta columna, tanto en orden ascendente como descendente.

En este sentido, el editor de datos de tabla de CartoDB se comporta como Excel, y otros gestores similares de hojas de cálculo.

Vale la pena detenerse unos instantes en el menú lateral derecho que se nos ofrece en la vista de tabla, aunque volveremos a él más tarde, cuando revisemos la vista de mapa.

![Menú lateral vista de tabla][side_menu_table_view]

En este menú tenemos, desde arriba hacia abajo:

* la opción de añadir un nuevo juego de datos, que nos llevará a la misma pantalla de carga de datos que ya hemos mencionado.
* la opción de ejecutar una consulta SQL. Esta opción está también presente en la vista de mapa, y nos permite ejecutar cualquier consulta SQL permitida por [PostgreSQL](http://www.postgresql.org/) y [PostGIS](http://postgis.net/), que constituyen realmente la base de CartoDB. Veremos este tema más detenidamente en secciones posteriores.
* la opción de filtrado por columnas, que es la que más nos interesa ahora mismo.

![Filtros de columnas][cartodb_column_filters]

La opción de filtros de columna es una poderosa herramienta para explorar la naturaleza de nuestros datos

Al entrar en la pestaña de filtros por columnas, lo primero que podemos hacer será elegir la columna sobre la que queremos aplicar filtros. En nuestro ejemplo, vamos a filtrar por el campo *county_fip*, que es de tipo numérico.

![Filtro de columna][cartodb_filter_column]

Lo que vemos es que se nos construye un histograma, donde podemos limitar el rango de valores que queremos que aparezcan.

![Filtro de columna numérica][cartodb_column_filter_range]

En el momento de aplicar un filtro, lo que está sucediendo internamente es que se está lanzando una consulta SQL a CartoDB, y las columnas que vemos son el resultado de dicha consulta. Es el equivalente a aplicar un *WHERE*, en terminología SQL.

Además, se nos presenta la opción de **crear un nuevo juego de datos** en base a la consulta generada, o eliminar los filtros y volvernos a quedar con todas las filas.

![Crear tabla a partir de resultado de consulta][create_dataset_from_query]

Si el campo sobre el que queremos aplicar el filtro es de tipo *string*, lo que nos aparece es un listado de todos los posibles valores que esa cadena de texto adopta en nuestro juego de datos, junto con el número de veces que aparece.

![Filtro de columna de texto][cartodb_column_filter_text.png]

Si lo preferimos, podemos implementar este filtro de manera que solo nos quedemos con los registros cuya columna contenga un texto que nosotros mismos especifiquemos. Para ello, solo tendremos que desactivar el interruptor de *View as list*, y aparecerá un campo de texto donde podremos escribir nuestro filtro personalizado.

![Filtro de columna de texto personalizado][cartodb_column_filter_text2.png]

La otra manera de filtrar los datos es escribiendo nosotros directamente la consulta SQL, pero eso lo veremos más adelante.



[dataviz]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/dataviz.png
[syriarefugees]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/syrias_refugees.png
[illustreets]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/illustreets.png
[global_forest_watch]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/global_forest_watch.png
[alcatraz]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/alcatraz.png
[elecciones2011]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/elecciones_2011.png
[polucionla]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/polucion_la.png
[quitanieves]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/quitanieves.png
[cordoba]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/cordoba.png
[beyonce]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/beyonce.png
[lisbon2014]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/lisbon2014.png
[sunrise]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/sunrise.png
[starwars]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/starwars_galaxy.png
[tierra_media]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/tierra_media.png
[cartodb_dashboard]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/cartodb_dashboard.png
[maps_y_datasets]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/maps_y_datasets.png
[new_map]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/new_map.png
[new_map_from_library]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/new_map_from_library.png
[pol_map]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/pol_map.png
[map_name]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/map_name.png
[map_metadata]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/map_metadata.png
[switch_views]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/switch_views.png
[table_columns]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/table_columns.png
[side_menu_table_view]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/side_menu_table_view.png
[cartodb_column_filters]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/cartodb_column_filters.png
[cartodb_filter_column]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/cartodb_filter_column.png
[cartodb_column_filter_range]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/cartodb_column_filter_range.png
[create_dataset_from_query]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/create_dataset_from_query.png
[cartodb_column_filter_text]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/cartodb_column_filter_text.png
[cartodb_column_filter_text2]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/cartodb_column_filter_text2.png
