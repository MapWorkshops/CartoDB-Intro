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

CartoDB se utiliza en una amplia variedad de campos, como [banca](https://cartodb.com/solutions/banking-and-finance/), [business inteligence](https://cartodb.com/solutions/business-intelligence-and-analytics/) u [observación de la Tierra](https://cartodb.com/solutions/earth-observation-and-space/), por citar solo unos pocos.

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

También es bastante común la realización de mapas que muestran indicadores de interés social. Como ejemplo, tenemos el [mapa de incidentes violentos en África en Octubre 2014](http://team.cartodb.com/u/santiagoa/viz/bd69bca0-7449-11e4-88e4-0e018d66dc29/public_map).

![Violencia África Octubre 2014][riots_africa_oct2014]

El [mapa del olor de las calles de Londres](http://www.di.unito.it/~schifane/smellymaps/index.html)

![Olor calles Londres](smell_london_streets)

El [mapa en tiempo real de incendios en el Sudeste Asiático](https://team.cartodb.com/u/santiagoa/viz/d5875ef2-426e-11e5-b057-0e4fddd5de28/embed_map)

O el mapa que muestra el ratio hombre/mujer de usuarios de AshleyMadison en las ciudades del mundo

![Ratio hombre/mujer Ashley Madison][ashley_madison_male_female_ratio]

En los ejemplos anteriores, hemos visto algunos mapas animados. Se han popularizado bastante los mapas animados de Twitter en tiempo real realizados mediante la herramienta [Torque](http://blog.cartodb.com/torque-public/). Algunos ejemplos interesantes son:

El [mapa de tweets hablando de Zidane como sustituto de Benitez en el Real Madrid](https://team.cartodb.com/u/piensaenpixel/viz/f46f2f12-b54f-11e5-b04f-0e5db1731f59/public_map).

![Zidane vs Benítez][zidane_vs_benitez]

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

* **Usar nuestro propio dataset**: Si ya tenemos datos importados, podemos usarlos para nuestro mapa. CartoDB permite crear visualizaciones multicapa de manera sencilla, así que podremos incluir varios juegos de datos ya existentes, si lo deseamos.

* **Data library**: CartoDB pone a nuestra disposición un repositorio de datos desde donde podemos importar directamente datasets a nuestra cuenta con un solo clic.

* **Create empty map**: Por último, podemos crear un mapa sin datos. Nos resultará útil si lo que queremos es añadir datos de manera manual, directamente sobre el mapa.

Para crear rápidamente un mapa, vamos a utilizar alguno de los juegos de datos ya disponibles (la opción 2 de la pantalla de creación de mapas). Por ejemplo, el que contiene las regiones administrativas de Nueva York. Simplemente, lo elegimos de la lista, y pulsamos en el botón *Create Map*, de abajo a la derecha.

![Crear mapa a partir de datos existentes][new_map_from_library]

**Nota**: Es posible que veamos algunos nombres de mapas escritos en rojo. Esto únicamente significa que el juego de datos que vamos a importar es grande (de varios cientos de MB).

Tras unos segundos, seremos llevados a nuestra vista de mapa, desde donde podremos ver la visualización recién creada. En este caso, un mapa de polígonos

![Mapa de polígonos][pol_map]

Vayamos parte por parte, viendo lo que significa cada elemento en pantalla.

En la parte superior izquierda, tenemos el nombre del mapa, que podemos cambiar si lo deseamos.

![Nombre del mapa][map_name]

A través del enlace *Edit metadata*, también podemos añadir algunos metadatos a nuestro mapa, lo que nos ayudará a tener nuestros datos categorizados y fácilmente accesibles

![Metadatos del mapa][map_metadata]

En la parte superior central, tenemos los botones para cambiar entre vista de mapa y vista de datos

![Cambio entre vista de mapa y de datos][switch_views]

En la vista de datos, lo que tenemos es una tabla, donde veremos nuestros datos ordenados por filas y columnas.

![Columnas en CartoDB][table_columns]

Basta con pinchar en la pequeña flecha que acompaña a los nombres de las columnas para poder ordenar la tabla siguiendo como criterio esta columna, tanto en orden ascendente como descendente. En este sentido, **el editor de datos de tabla de CartoDB se comporta como Excel, y otros gestores similares de hojas de cálculo**.

Veremos más adelante como, si usamos datos importados por nosotros mismos, tendremos aquí más opciones de personalización. Pudiendo cambiar incluso el tipo de dato de cada columna. Un ejemplo muy típico de la utilidad de esta funcionalidad es transformar cadenas de texto representando fechas/horas en columnas de tipo *date*. De esta forma, podremos utilizar las [funciones propias de fecha/hora de PostgreSQL](http://www.postgresql.org/docs/current/static/functions-datetime.html).

En la vista de tabla también observamos que hay un menú lateral en la parte derecha. En los siguientes apartados veremos para qué sirven las opciones de este menú. Por ahora, basta con saber que, en la vista de tabla, sirve para ayudarnos a filtrar nuestros datos. Opción a la que también podremos acceder a través de la flechita de ordenación de cada columna.

![Menú lateral vista de tabla][side_menu_table_view]

Volviendo a la vista de mapa, prestemos atención a los elementos de la interfaz con los que podremos trabajar directamente sobre la visualización. El primero de ellos es la barra de herramientas de la parte superior izquierda

![Barra de herramientas de mapa][map_tool_bar]

En dicha barra de herramientas, se nos permitirá añadir ciertos *adornos* a nuestro mapa:

* Un título
* Un cuadro de texto
* Una anotación
* Una Imagen, introduciendo directamente su URL.

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
