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

* **Datasets**: Los datos que hemos importado a nuestra cuenta.
* **Maps**: Las visualizaciones que hemos creado con esos datos.

![Maps y datasets][maps_y_datasets]

El flujo normal de trabajo con CartoDB empieza con la creación de una nueva visualización. Es decir, un mapa. Para ello, solo tendremos que pulsar el botón *New Map*, de la interfaz

![Nuevo mapa][new_map]

Vamos entonces a la pantalla de creación de mapa, donde lo primero que se nos pedirá es que añadamos nuestras fuentes de datos. En este punto, tenemos varias opciones:

* **Connect dataset**: Se nos mostrará la pestaña de importación de datos, desde donde podremos subir nuestros propios ficheros, o conectar con servicios de terceros para obtener un flujo de datos con el que trabajar. En función del tipo de cuenta que tengamos, podremos acceder a más o menos servicios de terceros

* **Usar dataset**: Si ya tenemos datos importados, podemos usarlos para nuestro mapa. CartoDB permite crear visualizaciones multicapa de manera sencilla, así que podremos incluir varios juegos de datos ya existentes, si lo deseamos.

* **Data library**: CartoDB pone a nuestra disposición un repositorio de datos desde donde podemos importar directamente datasets a nuestra cuenta con un solo clic.

* **Create empty map**: Por último, podemos crear un mapa sin datos. Nos resultará útil si lo que queremos es añadir datos de manera manual, directamente sobre el mapa.

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

En la vista de datos, lo que tenemos es una tabla, donde veremos nuestros datos ordenados por filas y columnas.

![Columnas en CartoDB][table_columns]

Basta con pinchar en la pequeña flecha que acompaña a los nombres de las columnas para poder ordenar la tabla siguiendo como criterio esta columna, tanto en orden ascendente como descendente. En este sentido, **el editor de datos de tabla de CartoDB se comporta como Excel, y otros gestores similares de hojas de cálculo**.

Veremos más adelante como, si usamos datos importados por nosotros mismos, tendremos aquí más opciones de personalización. Pudiendo cambiar incluso el tipo de dato de cada columna. Un ejemplo muy típico de la utilidad de esta funcionalidad es transformar cadenas de texto representando fechas/horas en columnas de tipo *date*. De esta forma, podremos utilizar las [funciones propias de fecha/hora de PostgreSQL](http://www.postgresql.org/docs/current/static/functions-datetime.html).

En la vista de tabla también observamos que hay un menú lateral en la parte derecha. En los siguientes apartados veremos para qué sirven las opciones de este menú. Por ahora, basta con saber que, en la vista de tabla, sirve para ayudarnos a filtrar nuestros datos.

![Menú lateral vista de tabla][side_menu_table_view]

Volviendo a la vista de mapa, prestemos atención a los elementos de la interfaz que nos van a permitir actualmente sobre la visualización. El primero de ellos es la barra de herramientas de la parte superior izquierda

![Barra de herramientas de mapa][map_tool_bar]

En dicha barra de herramientas, se nos permitirá añadir ciertos *adornos* a nuestro mapa:

* Un título
* Un cuadro de texto
* Una anotación
* Una Imagen

![Barra de herramientas de mapa desplegada][map_toolbar_options]

Como una imagen vale más que mil palabras, éste es el aspecto de cada uno de los elementos que podemos añadir

![Elementos añadidos al mapa][map_addons]

También podremos previsualizar nuestro mapa en escritorio o dispositivo móvil

![Barra de herramientas previsualizar][map_preview_option]

Así es como se vería nuestro mapa en un dispositivo móvil

![Visualización en móvil][map_preview_mobile]

Por último, también podremos exportar nuestra visualización como una imagen, pudiendo elegir qué parte del mapa queremos exportar

![Exportando mapa como imagen][map_export_as_img]

Vayamos ahora a por las herramientas que podemos encontrar en la parte inferior del mapa:

* Cambio de mapa base
* Opciones

![Barra de herramientas inferior][map_tool_bar2]

La primera opción nos permite cambiar las teselas que componen nuestro mapa base, teniendo una gran variedad para elegir

![Cambiar mapa base][change_basemap]

Podemos elegir los mapas base propios de CartoDB, mapas base desarrollados por [Stamen](http://stamen.com/) o mapas base desarrollados por Nokia, para su servicio [Nokia Here](https://www.here.com). Es importante destacar que, si elegimos descargarnos CartoDB desde [su repositorio](https://github.com/CartoDB/cartodb) (no olvidemos que es un proyecto Open Source), sepamos que **no tendremos disponibles los mapas base de Nokia**. El servicio de mapas base de Nokia es un servicio de pago, y solo está disponible en [la versión SaaS de CartoDB](http://cartodb.com/).

Así es como se ve nuestro mapa utilizando *Toner*, de Stamen, como mapa base

![Mapa base toner][toner_basemap]

Es también interesante detenerse rápidamente sobre las 3 últimas opciones de mapas base:

* **Others**: Aquí aparecerán mapas base que hayamos construído nosotros, usando la última de las 3 opciones
* **Custom**: Aquí aparecerán diseños que no son necesariamente mapas. Si pulsamos en el boton etiquetado como *IMG*, se nos abrirá una pantalla que nos permitirá elegir un patrón de fondo predefinido, subir una imagen para utilizarla como fondo, o enlazar imágenes que guardemos en Dropbox.

![Elegir patrón o imagen como mapa base][map_background_pattern_select]

Así es como queda uno de los patrones predefinidos como fondo

![Patrón como mapa base][map_background_pattern]

* **Yours**: Esta opción nos permite añadir nuestro propio servidor de teselas, entre una variedad de opciones (XYZ, WMS/WMTS, NASA, Mapbox, TileJSON)

![Elegir servidor de teselas personalizado][custom_tile_server_select]

Explicar lo que significa cada una de estas opciones excede del alcance de este taller. Como introducción a este tema, se puede consultar [esta entrada](http://blog.cartodb.com/tiles-on-gcs/) del blog de CartoDB, donde se explica cómo construir un servidor de teselas a partir de imágenes almacenadas en [Google Maps Engine (ahora llamado My Maps)](https://www.google.com/maps/d/u/0/). En él se repasan algunos conceptos importantes para entender lo que es un servidor de teselas.

Otro enlace interesante al respecto de este asunto, es [este Gist](https://gist.github.com/tmcw/4954720) de Tom MacWright, uno de los fundadores de [Mapbox](https://www.mapbox.com/), otra excelente plataforma online para la creación de mapas. En el enlace, se explica la diferencia entre los esquemas XYZ y TMS de los servidores de teselas.

Para terminar con los controles de mapa, podemos cambiar qué elementos queremos que aparezcan en nuestra visualización y cuáles no usando el cuadro *Options*, de la barra inferior de herramientas

![Elegir qué elementos queremos mostrar en el mapa][map_options_show]

Es importante tener en cuenta que estas opciones podrán ser *anuladas* programáticamente con la librería CartoDB.js. Algo que veremos más adelante.

Si volvemos a la parte superior de la pantalla, nos fijamos en dos opciones más:

* **Edit**: Desde aquí podremos realizar algunas operaciones sobre nuestro mapa, como exportar sus capas, georeferenciarlas (lo veremos con más detenimiento más adelante), crear una copia de nuestro mapa, cambiar su privacidad, bloquearlo o borrarlo

![Opciones de edición de mapa][map_edit_options]

Con la opción de exportado, podremos exportar nuestras tablas de datos en diversos formatos. Muy útiles para intercambio de datos.

![Formatos de exportado][export_formats]

Otra opción muy interesante es la de cambio de privacidad. Con ella podremos controlar quién accede a nuestros mapas. Tengamos en cuenta que algunas opciones de privacidad **solo están disponibles en cuentas de pago**.

Por último, destacar que la opción de borrado de mapa **solo borra la visualización que hayamos construído, no borra nuestros datos**

![Opciones de privacidad][privacy_options]

* **Publish**: Desde aquí podremos compartir nuestro mapa de 3 maneras: con un simple enlace, que podremos mandar a quién queramos, siempre teniendo en cuenta las opciones de privacidad que hayamos elegido, con un código HTML listo para embeber en cualquier página web, y como un descriptor en formato JSON, que es el que nos permitirá progamar aplicaciones que incluyan nuestra visualización de mapa, como veremos en capítulos siguientes.

![Opciones de publicación][publish_options]

Para terminar este apartado, solo vamos a mencionar que, en la vista de mapas, el menú lateral derecho tiene más opciones que en la vista de tabla. Veremos estas opciones en el capítulo siguiente

![Menú lateral derecho vista de mapa][side_menu_map_view]

# Creación de Mapas

Ya que conocemos la interfaz de CartoDB, vamos a empezar a trabajar en serio con la herramienta. Para ello, crearemos una visualización de las estaciones de [Bicimad](http://www.bicimad.com/) y los ciclocarriles de la ciudad de Madrid. Dicha visualización constará de 3 capas:

* [Capa con **distritos de la ciudad de Madrid**](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/distritos_madrid_nogeo.csv), creada a partir de la biblioteca de datos de CartoDB. Se trata de un conjunto de datos en formato polígono.
* [Capa con **ciclocarriles de la ciudad de Madrid**](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/ciclocarriles_madrid.geojson), obtenida de la [web de datos abiertos de la Comunidad de Madrid](http://datos.madrid.es/portal/site/egob/menuitem.c05c1f754a33a9fbe4b2e4b284f1a5a0/?vgnextoid=435a7cd5de319410VgnVCM1000000b205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD). Se trata de un conjunto de datos en formato línea.
* [Capa con **estaciones de Bicimad**](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/gbicimad_nogeo.csv), obtenida también de la [web de datos abiertos de la Comunidad de Madrid](http://datos.madrid.es/portal/site/egob/menuitem.c05c1f754a33a9fbe4b2e4b284f1a5a0/?vgnextoid=f17b841a2c7d6410VgnVCM1000000b205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD). Se trata de un conjunto de datos de puntos.

Con estos tres ejemplos, cubriremos los principales tipos de datos con los que trabajan las bases de datos espaciales.

Adicionalmente, creamos un segundo mapa que contenga un solo conjunto de datos, mostrando [trazas de un viaje en bicicleta entre dos puntos de Madrid](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/home_to_job_nodate.csv). Con este conjunto de datos, construiremos una visualización dinámica para mostrar en nuestro mapa.

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
* [Ciclocarriles de la ciudad de Madrid](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/ciclocarriles_madrid.geojson)
* [Estaciones de Bicimad](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/data/gbicimad_nogeo.csv)

### Creando nuestro mapa: importando puntos

Para ello, basta con que creemos un mapa nuevo, y añadamos, para empezar, la capa de estaciones de Bicimad. Lo haremos en base a lo que hemos aprendido en el capítulo de *Un paseo por la interfaz de CartoDB*

Una vez tenemos creado nuestro mapa, nos encontramos con algo extraño: no vemos los puntos:

![Mapa erróneo sin puntos][map_no_points]

¿Qué es lo que está sucediendo? Algo pasa con nuestros datos.

Al ir a la vista de mapa, nos encontramos con el problema principal: **la columna de tipo geométrico tiene un valor nulo**. Por eso no vemos ningún punto en el mapa.

![Columna geométrica nula][geom_column_null]

Lo que debemos hacer es **geolocalizar nuestros datos**. Para ello, como ya vimos en el capítulo de *Un paseo por la interfaz de CartoDB*, utilizaremos la herramienta de geolocalización integrada. Tenemos la suerte de contar con columnas que contienen latitud y longitud, así que las usaremos para nuestra geolocalización.

![Columnas con latitud y longitud][lat_lng_cols]

Al entrar en el geolocalizador, se nos informa de que nuestra capa no contiene datos geométricos, algo que ya sabíamos. Y la primera opción que se nos ofrece es utilizar columnas que contengan latitud y longitud para la georeferencia. Seleccionamos nuestras columnas *lat* y *lng* y pulsamos en el botón de *Continue*

![Geolocalización con latitud y longitud][lat_lng_geoloc]

Tras unos breves instantes (nuestro conjunto de datos es bastante pequeño, y no tarda demasiado), comprobamos como la columna de tipo geométrico ha sido correctamente geolocalizada.

![Columna the_geom geolocalizada][geom_column_updated]

Destaquemos el detalle de que el geolocalizador ha funcionado **incluso cuando las columnas *lat* y *lng* eran de tipo *string*.**. De todas formas, dado que este conjunto de datos lo hemos importado nosotros, **se nos permite cambiar el tipo de dato de la columna a *number*, más correcto en este caso**.

![Cambio de tipo de dato en columna][change_column_type]

Por supuesto, estas operaciones que CartoDB hace por nosotros, tienen su contrapartida en lenguaje SQL. Desde el menú lateral derecho, podríamos haber elegido la pestaña de SQL (lo veremos más adelante detenidamente) y ejecutar las siguientes consultas

Para rellenar la columna geométrica

```sql
update gbicimad_nogeo set the_geom=CDB_LatLng(lat, lng)
```

Donde CDB_LatLng es una función propia de CartoDB, construida sobre PostGIS, y cuyo código podemos ver [aquí](https://github.com/CartoDB/cartodb-postgresql/blob/master/scripts-available/CDB_LatLng.sql). Veremos algo más sobre PostGIS y lenguaje SQL más adelante.

En cuanto al cambio de tipo de dato *string* por *number*, se podría haber hecho así

```sql
alter table gbicimad_nogeo alter column lat type numeric;
alter table gbicimad_nogeo alter column lng type numeric;
```

Si ahora cambiamos a la vista de mapa, ya aparecen los puntos. Y también observamos algo muy interesante: **CartoDB nos sugiere qué tipo de mapa es apropiado, tras analizar nuestro conjunto de datos**. Esta funcionalidad es excepionalmente útil para analistas de datos geográficos, que quieren extraer información o construir historias basadas en datos geolocalizados.

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

## Estilando nuestros datos de tipo punto

Al pinchar en el menú número 1, se nos despliega dicho menú. Para aclararnos mejor, vamos a dejar en el mapa solo estos datos. Desactivamos la vista de las otras dos capas, mediante el icono de interruptor que hay en la parte superior derecha de cada menú.

![Desactivando otras capas][disabling_other_layers]

En esta visualización, queremos ver cada una de las estaciones de Bicimad por separado, de manera que elegimos una visualización de tipo *Simple*. Con ese tipo de visualización, se nos ofrecen unas pocas opciones de parametrización.

![Wizard visualizacion simple de puntos][wizard_simple_viz]

Lo primero que vamos a hacer es cambiar el color del icono a rojo. Para ello, pinchamos en el botón de cambio de color de la opción *Marker fill*, y elegimos el rojo, como se puede ver en la imagen

![Cambio color icono marker][change_color_icon]

Ahora vamos a cambiar el icono del punto por algo más *bike-friendly*. Pinchamos en la etiqueta *IMG* que acompaña al botón de cambio de color de la opción *Marker fill*

![Etiqueta IMG Marker Fill][img_label_marker]

Elegiremos el pin 45 de la pestaña *Pin icons*, como se resalta en la imagen

![Eligiendo icono de bici][bike_icon]

Hecho esto, observamos que nuestros iconos circulares se han transformado en pequeños iconos de color rojo conteniendo bicicletas

![Iconos de tipo bici][map_with_bike_icons]

La opción de *Composite operation* sirve para especificar qué sucede con los colores de los elementos que se superponen en la visualización. Nuestros datos son iconos separados, pero aun así, cuando disminuyamos el nivel de zoom (nos alejemos), se empezarán a montar unos sobre otros. Vamos a dejar la opción de *None* marcada. Las operaciones de composición son un asunto complejo y escapan del alcance de este tutorial. No obstante, se puede consultar la documentación sobre las mismas en [este enlace](https://www.mapbox.com/tilemill/docs/guides/comp-op/).

Una vez hemos terminado de estilar nuestros puntos, vamos a revisar la pestaña *CSS* del menú lateral, para verificar algo que ya comentamos en el apartado anterior: **las parametrizaciones que hagamos vía wizard únicamente cambian el CartoCSS de nuestra visualización**. Así es como ha quedado nuestro CartoCSS

![CartoCSS capa de puntos][cartocss_point_layer]

Por supuesto, siempre podremos tocar a mano el CartoCSS, si nos sentimos más cómodos haciéndolo así que vía *wizard*.




## Filtrando datos: Pestaña de filtros

Como ya dijimos anteriormente, el menú lateral derecho de la vista de tabla nos ayudará a filtrar nuestros datos. Para entender cómo funcionan los filtros en CartoDB, vamos a utilizar el conjunto de datos de distritos de Madrid, que ya tenemos importado y geolocalizado.

Entramos en la vista de tabla de nuestros datos, y fijamos nuestra atención en el menú lateral de la parte derecha. En este menú tenemos, desde arriba hacia abajo:

* la opción de añadir un nuevo juego de datos, que nos llevará a la misma pantalla de carga de datos que ya hemos mencionado.
* la opción de ejecutar una consulta SQL. Esta opción está también presente en la vista de mapa, y nos permite ejecutar cualquier consulta SQL permitida por [PostgreSQL](http://www.postgresql.org/) y [PostGIS](http://postgis.net/), que constituyen realmente la base de CartoDB. Veremos este tema más detenidamente en secciones posteriores.
* la opción de filtrado por columnas, que es la manera más sencilla de filtrar nuestros datos, y la que veremos ahora mismo.

![Filtros de columnas][cartodb_column_filters]

Al entrar en la pestaña de filtros por columnas, lo primero que podemos hacer será elegir la columna sobre la que queremos aplicar filtros. En nuestro ejemplo, vamos a filtrar por el campo *shape_area*, que es de tipo numérico.

![Filtro de columna][cartodb_filter_column]

Lo que vemos es que se nos construye un histograma, donde podemos limitar el rango de valores que queremos que aparezcan.

![Filtro de columna numérica][cartodb_column_filter_range]

En el momento de aplicar un filtro, lo que está sucediendo internamente es que se está lanzando una consulta SQL a CartoDB, y las columnas que vemos son el resultado de dicha consulta. Es el equivalente a aplicar un *WHERE*, en terminología SQL.

Además, se nos presenta la opción de **crear un nuevo juego de datos** en base a la consulta generada, o eliminar los filtros y volvernos a quedar con todas las filas.

![Crear tabla a partir de resultado de consulta][create_dataset_from_query]

Si el campo sobre el que queremos aplicar el filtro es de tipo *string*, lo que nos aparece es un listado de todos los posibles valores que esa cadena de texto adopta en nuestro juego de datos, junto con el número de veces que aparece.

![Filtro de columna de texto][cartodb_column_filter_text]

Si lo preferimos, podemos implementar este filtro de manera que solo nos quedemos con los registros cuya columna contenga un texto que nosotros mismos especifiquemos. Para ello, solo tendremos que desactivar el interruptor de *View as list*, y aparecerá un campo de texto donde podremos escribir nuestro filtro personalizado.

![Filtro de columna de texto personalizado][cartodb_column_filter_text2]

La otra manera de filtrar los datos es escribiendo nosotros directamente la consulta SQL, pero eso lo veremos más adelante, como ya se ha mencionado.


## Trabajar con datos geoespaciales

TODO (geometrías, proyecciones...)

## Filtrando datos: SQL geoespacial

TODO

(Aquí, ademas de queries geoespaciales, mostrar que, por ejemplo, podemos obtener solo los campos que necesitamos a través de la consulta SQL, obviando el resto. Por ejemplo, no queremos para nada los campos lat y lng de la capa de puntos, o la mayoría de campos de la capa de líneas)

(También mostrar cómo quedarnos con los datos de los barrios que nos interesan, que son los que contienen puntos o líneas)

## Mezclando fuentes

TODO

## Geocoding

TODO


# Usando CartoDB en nuestros desarrollos

# Otras librerías de mapas



[dataviz]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/dataviz.png
[syriarefugees]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/syrias_refugees.png
[illustreets]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/illustreets.png
[global_forest_watch]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/global_forest_watch.png
[alcatraz]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/alcatraz.png
[elecciones2011]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/elecciones_2011.png
[polucionla]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/polucion_la.png
[quitanieves]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/quitanieves.png
[cordoba]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/cordoba.png
[beyonce]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/beyonce.png
[lisbon2014]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/lisbon2014.png
[sunrise]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/sunrise.png
[starwars]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/starwars_galaxy.png
[tierra_media]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/tierra_media.png
[cartodb_dashboard]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/cartodb_dashboard.png
[maps_y_datasets]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/maps_y_datasets.png
[new_map]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/new_map.png
[new_map_from_library]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/new_map_from_library.png
[pol_map]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/pol_map.png
[map_name]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/map_name.png
[map_metadata]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/map_metadata.png
[switch_views]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/switch_views.png
[table_columns]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/table_columns.png
[side_menu_table_view]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/side_menu_table_view.png
[side_menu_map_view]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/side_menu_map_view.png
[map_tool_bar]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/map_tool_bar.png
[map_toolbar_options]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/map_toolbar_options.png
[map_addons]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/map_addons.png
[map_preview_option]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/map_preview_option.png
[map_preview_mobile]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/map_preview_mobile.png
[map_export_as_img]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/map_export_as_img.png
[map_tool_bar2]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/map_tool_bar2.png
[change_basemap]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/change_basemap.png
[toner_basemap]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/toner_basemap.png
[map_background_pattern_select]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/map_background_pattern_select.png
[map_background_pattern]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/map_background_pattern.png
[custom_tile_server_select]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/custom_tile_server_select.png
[map_options_show]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/map_options_show.png
[map_edit_options]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/map_edit_options.png
[export_formats]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/export_formats.png
[privacy_options]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/privacy_options.png
[publish_options]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/publish_options.png
[cartodb_column_filters]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/cartodb_column_filters.png
[cartodb_filter_column]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/cartodb_filter_column.png
[cartodb_column_filter_range]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/cartodb_column_filter_range.png
[create_dataset_from_query]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/create_dataset_from_query.png
[cartodb_column_filter_text]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/cartodb_column_filter_text.png
[cartodb_column_filter_text2]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/cartodb_column_filter_text2.png
[map_no_points]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/map_no_points.png
[geom_column_null]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/geom_column_null.png
[lat_lng_cols]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/lat_lng_cols.png
[lat_lng_geoloc]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/lat_lng_geoloc.png
[geom_column_updated]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/geom_column_updated.png
[change_column_type]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/change_column_type.png
[cartodb_suggests_map]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/cartodb_suggests_map.png
[cartodb_suggests_heatmap]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/cartodb_suggests_heatmap.png
[cartodb_builds_heatmap]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/cartodb_builds_heatmap.png
[point_map_selected]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/point_map_selected.png
[add_new_layer]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/add_new_layer.png
[two_layers_map]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/two_layers_map.png
[autoref_map]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/autoref_map.png
[pol_text]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/pol_text.png
[madrid_with_pols]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/madrid_with_pols.png
[side_menus_map_view]:https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/side_menus_map_view.png
[point_menu_wizard]:https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/point_menu_wizard.png
[disabling_other_layers]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/disabling_other_layers.png
[wizard_simple_viz]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/wizard_simple_viz.png
[img_label_marker]:  https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/img_label_marker.png
[bike_icon]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/bike_icon.png
[change_color_icon]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/change_color_icon.png
[map_with_bike_icons]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/map_with_bike_icons.png
[cartocss_point_layer]: https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/spanish/doc/img/cartocss_point_layer.png
