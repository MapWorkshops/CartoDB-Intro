# Trabajando con nuestros datos

Ahora que ya hemos importado y estilado nuestros datos, vamos a repasar qué más cosas podemos hacer con ellos desde CartoDB. Lo primero y más sencillo: **filtrarlos**

## Filtrando datos con la pestaña de filtros

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

Ya hemos visto en un apartado anterior el concepto de *SRID*: el sistema de referencia espacial.

A la hora de trabajar con datos geográficos, hemos de entender que estos carecen de sentido sin saber qué parte del mundo representan y cómo la representan. En otras palabras, tenemos que conocer el sistema de referencia espacial (SRS, por sus siglas en inglés) de nuestros datos para saber dónde está realmente cada punto representado. Es un concepto de vital importancia, porque normalmente, el usuario de un software GIS quiere poder obtener datos de diversas fuentes y superponerlos de manera que estos coincidan. Esto solo puede suceder **si todos los datos de todas las fuentes utilizan el mismo sistema de referencia espacial**.

En la actualidad, la manera más sencilla de especificar y obtener el SRS de unos datos es a través de los índices EPSG. Estos índices permiten expresar la complejidad subyacente en un SRS con un simple número que indexa una tabla. Si bien es cierto que no todas las fuentes de datos han de tener forzosamente un sistema de referencia espacial indexado por EPSG (sobre todo si son antiguos). Por eso hemos de entender cuáles son los componente fundamentales de un SRS:

* **Un elipsoide de referencia**: Un elemento matemático construído alrededor del geoide que es realmente la Tierra. Es lo que el SRS tomará como representación del planeta, de manera que ha de cumplir una serie de restricciones para poder ser considerado suficientemente bueno como representación. Esto significa desviarse lo menos posible de la forma real del geoide. En la práctica, lo que sucede es que el elipsoide suele ser una representación bastante buena del geoide que recubre solo en una zona, perdiendo precisión en el resto del mundo. Es por eso que se suelen definir diferentes tipos de elipsoides, por países o continentes. Aunque actualmente, el elipsoide de referencia más utilizado es el WGS84. Es el que usa el sistema GPS.
* **Un datum**: Una manera de enganchar el elipsoide a una zona concreta de la Tierra. Estrictamente, es un conjunto de valores que definen dónde va realmente cada punto del elipsoide. En España, se suelen usar el datum ED50 y, más actualmente, el ETRS89.
* **Un sistema de coordenadas**: Sirve para identificar los puntos en nuestro elipsoide de referencia. El más conocido es el sistema de coordenadas geográficas (longitud, latitud).

Con estos tres elementos, ya tendríamos suficiente para ubicar cualquier punto sobre la Tierra. Pero todavía no podemos representar nuestros datos en un plano, y disfrutar así de la mayor sencillez de la geometría Euclídea: el área de un cuadrado es su lado al cuadrado y las distancias pueden medirse con el Teorema de Pitágoras. Además, la mayor parte de funciones de PostGIS trabajan sobre un plano cartesiano (a excepción del tipo de datos geography).

Para transformar una esfera en un plano, y poder trabajar con geometría Euclídea, usamos las proyecciones, que se definen como el *conjunto de reglas matemáticas para representar un objeto tridimensional en dos dimensiones*. Las proyecciones tienen que lidiar con cuatro características fundamentales de los SRS: medidas, formas, direcciones y áreas. Las que son especialmente buenas conservando una o varias de estas cualidades, suelen fallar en el resto. Hay diferentes tipos de proyecciones en función de diversas características que no vamos a analizar, por quedar fuera del enfoque de este curso. Basta con saber que, entre las más utilizadas, están:

* **Proyección Mercator**: Mantienen formas y direcciones, pero son malas para medidas y áreas (la distorsión cerca de los polos es muy grande).
* **Proyección Mercator Transversa (UTM)**: Mantienen medidas, direcciones y formas, pero cubren áreas relativa- mente pequeñas, de 6 grados de longitud. Hacen falta 60 para cubrir todo el planeta.
* **Grids nacionales**: Suelen ser variantes de UTM adaptadas para cubrir una región o país concreto. Suelen ser razonablemente buenas con las medidas y cubren todo el área necesitada, pero pueden fallar manteniendo las formas.

Para ver cómo funciona una proyección, podemos ver [este ejemplo](https://dl.dropboxusercontent.com/u/6599273/demos/distortion/index.html)

En el caso de los mapas web, la proyección que se utiliza es la que tiene el código [EPSG:3857](http://wiki.openstreetmap.org/wiki/EPSG:3857). Es un tipo de proyección Mercator esférica popularizado por Google Maps y posteriormente por [OpenStretMap](http://wiki.openstreetmap.org/wiki/OpenStreetMap). En concreto, CartoDB mantiene por separado las columnas *the_geom* y *the_geom_webmercator*, que almacenan la misma geometría, en los sistemas de referencia EPSG 4326 y 3857, respectivamente. Lo mismo sucede con las columnas *raster* y *raster_webmercator*, en datos de tipo *raster*.

La mayor diferencia entre ambos tipos de columna es que *the_geom* (y *raster*) utilizan coordenadas no proyectadas, y por lo tanto, distancias medidas en grados. Las columnas *the_geom_webmercator* y *raster_webmercator* utilizan coordenadas proyectadas y distancias medidas en metros.

## Filtrando datos con SQL geoespacial

Ya hemos visto en un apartado anterior como, utilizando CartoDB, es posible aplicar filtros a columnas específicas, para quedarnos solo con los registros que pasen dicho filtro. Lo que está sucediendo internamente, es que se están lanzando consultas SQL con condiciones mediante la cláusula *WHERE*, y obteniendo los resultados.

Por supuesto, nosotros podemos implementar nuestros propios filtros mediante cláusulas SQL directamente, utilizando para ello la consola SQL del editor de CartoDB, que ya hemos visto en apartados anteriores.

TODO

(Aquí, ademas de queries geoespaciales, mostrar que, por ejemplo, podemos obtener solo los campos que necesitamos a través de la consulta SQL, obviando el resto. Por ejemplo, no queremos para nada los campos lat y lng de la capa de puntos, o la mayoría de campos de la capa de líneas)

(También mostrar cómo quedarnos con los datos de los barrios que nos interesan, que son los que contienen puntos o líneas)

## Mezclando fuentes

(Aquí podemos mostrar una tabla de polígonos que tengan solo el nombre de la ciudad y la población, y otra de polígonos que tengan la geometría y el nombre, y cruzarlo para obtener la tabla de polígonos completa)
