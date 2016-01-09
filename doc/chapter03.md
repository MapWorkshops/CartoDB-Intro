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

En la actualidad, la manera más sencilla de especificar y obtener el SRS de unos datos es a través de los índices EPSG. Estos índices permiten expresar la complejidad subyacente en un SRS con un simple número que indexa una tabla. Si bien es cierto que no todas las fuentes de datos han de tener forzosamente un sistema de referencia espacial indexado por EPSG (sobre todo si son antiguos). Por eso hemos de entender cuáles son los componentes fundamentales de un SRS:

* **Un elipsoide de referencia**: Un elemento matemático construído alrededor del geoide que es realmente la Tierra. Es lo que el SRS tomará como representación del planeta, de manera que ha de cumplir una serie de restricciones para poder ser considerado suficientemente bueno como representación. Esto significa desviarse lo menos posible de la forma real del geoide. En la práctica, lo que sucede es que el elipsoide suele ser una representación bastante buena del geoide que recubre solo en una zona, perdiendo precisión en el resto del mundo. Es por eso que se suelen definir diferentes tipos de elipsoides, por países o continentes. Aunque actualmente, el elipsoide de referencia más utilizado es el WGS84. Es el que usa el sistema GPS.
* **Un datum**: Una manera de enganchar el elipsoide a una zona concreta de la Tierra. Estrictamente, es un conjunto de valores que definen dónde va realmente cada punto del elipsoide. En España, se suelen usar el datum ED50 y, más actualmente, el ETRS89.
* **Un sistema de coordenadas**: Sirve para identificar los puntos en nuestro elipsoide de referencia. El más conocido es el sistema de coordenadas geográficas (longitud, latitud).

Con estos tres elementos, ya tendríamos suficiente para ubicar cualquier punto sobre la Tierra. Pero todavía no podemos representar nuestros datos en un plano, y disfrutar así de la mayor sencillez de la geometría Euclídea: el área de un cuadrado es su lado al cuadrado y las distancias pueden medirse con el Teorema de Pitágoras. Además, la mayor parte de funciones de PostGIS trabajan sobre un plano cartesiano (a excepción del tipo de datos geography).

Para transformar una esfera en un plano, y poder trabajar con geometría Euclídea, usamos las proyecciones, que se definen como el *conjunto de reglas matemáticas para representar un objeto tridimensional en dos dimensiones*. Las proyecciones tienen que lidiar con cuatro características fundamentales de los SRS: medidas, formas, direcciones y áreas. Las que son especialmente buenas conservando una o varias de estas cualidades, suelen fallar en el resto. Hay diferentes tipos de proyecciones en función de diversas características que no vamos a analizar, por quedar fuera del enfoque de este curso. Basta con saber que, entre las más utilizadas, están:

* **Proyección Mercator**: Mantienen formas y direcciones, pero son malas para medidas y áreas (la distorsión cerca de los polos es muy grande).
* **Proyección Mercator Transversa (UTM)**: Mantienen medidas, direcciones y formas, pero cubren áreas relativa- mente pequeñas, de 6 grados de longitud. Hacen falta 60 para cubrir todo el planeta.
* **Grids nacionales**: Suelen ser variantes de UTM adaptadas para cubrir una región o país concreto. Suelen ser razonablemente buenas con las medidas y cubren todo el área necesitada, pero pueden fallar manteniendo las formas.

Para ver cómo funciona una proyección, podemos ver [este ejemplo](https://dl.dropboxusercontent.com/u/6599273/demos/distortion/index.html)

En el caso de los mapas web, la proyección que se utiliza es la que tiene el código [EPSG:3857](http://wiki.openstreetmap.org/wiki/EPSG:3857). Es un tipo de proyección Mercator esférica popularizada por Google Maps y posteriormente por [OpenStretMap](http://wiki.openstreetmap.org/wiki/OpenStreetMap).

CartoDB no es una excepción a esta regla, dado que usa la proyección EPSG:3857 para mostrar los datos en pantalla. No obstante, por razones de rendimiento , **también mantiene los datos almacenados con EPSG:4326 (latitud, longitud)**. Por tanto, se tienen por separado las columnas *the_geom* y *the_geom_webmercator*, que almacenan la misma geometría, en los sistemas de referencia EPSG 4326 y 3857, respectivamente. Lo mismo sucede con las columnas *raster* y *raster_webmercator*, en datos de tipo *raster*.

La mayor diferencia entre ambos tipos de columna es que *the_geom* (y *raster*) utilizan coordenadas no proyectadas, y por lo tanto, distancias medidas en grados. Las columnas *the_geom_webmercator* y *raster_webmercator* utilizan coordenadas proyectadas y distancias medidas en metros.

## Filtrando datos con SQL geoespacial

Ya hemos visto en un apartado anterior como, utilizando CartoDB, es posible aplicar filtros a columnas específicas, para quedarnos solo con los registros que pasen dicho filtro. Lo que está sucediendo internamente, es que se están lanzando consultas SQL con condiciones mediante la cláusula *WHERE*, y obteniendo los resultados.

Por supuesto, nosotros podemos implementar nuestros propios filtros mediante cláusulas SQL directamente, utilizando para ello la consola SQL del editor de CartoDB, que ya hemos visto en apartados anteriores.

Veamos un ejemplo, utilizando nuestro juego de datos de polígonos de la provincia de Madrid. Vamos a quedarnos solo con aquellos polígonos (distritos) que contengan estaciones de BiciMad. Para ello, vamos a la tabla de distritos de Madrid y abrimos la consola SQL.

Da lo mismo si estamos en la vista de mapa o de tabla. La consola está disponible en ambas. En la consola, escribimos la siguiente consulta SQL:

```
SELECT a.the_geom, a.coddistrit, a.geom_text FROM distritos_madrid a, gbicimad b where st_contains(a.the_geom, b.the_geom) group by(a.cartodb_id)
```

Vemos que han desaparecido de la visualización los polígonos correspondientes a distritos que no contienen estaciones de BiciMad. También se nos ofrece la posibilidad de crear una nueva tabla con la consulta ejecutada, vamos a hacerlo (llamaremos a la tabla *distritos_madrid_con_bm*).

![Polígonos que contienen puntos][pols_filtered]

Ahora vamos a repetir la operación anterior, pero nos quedaremos **solo con los distritos que contengan ciclocarriles**, y elegiremos, además, otras columnas. Para ello, desde nuestra tabla de distritos, ejecutamos la misma consulta SQL, pero utilizando la tabla *ciclocarriles_madrid* en lugar de la tabla de estaciones de BiciMad. Llamaremos a la tabla resultado *distritos_madrid_con_carril*.

```
SELECT a.the_geom, a.geom_text, a.nombre, a.pop_density, a.population, a.shape_area, a.shape_len FROM distritos_madrid a, ciclocarriles_madrid b where st_contains(a.the_geom, b.the_geom) group by(a.cartodb_id)
```

Como era de esperar, el resultado es una tabla con solo los distritos que contienen ciclocarriles. Además, los campos de esta tabla son diferentes a los de nuestra tabla original de polígonos, y a los de la tabla que hemos creado en el paso anterior. Llamaremos a esta tabla *distritos_madrid_distritos_madrid_con_carril*

![Polígonos que contienen líneas][pols_filtered2]

Ahora tenemos, por un lado, la tabla de distritos de Madrid que disponen de estaciones de BiciMad y, por otra, la tabla de distritos que disponen de ciclocarriles. Como podemos comprobar, son bastantes parecidas. Podríamos juntarlas en una sola tabla, y trabajar con ella. Para eso, usaremos la herramienta de mezcla de tablas de CartoDB. Lo veremos en el siguiente apartado.

## Mezclando fuentes

Como ya hemos mencionado, vamos a mezclar dos tablas, para obtener una sola. Lo haremos desde la vista de tabla de la tabla *distritos_madrid_distritos_madrid_con_carril*, haciendo click en el icono de *Merge datasets*. Dicho icono se encuentra en la vista de tabla, en la parte inferior del menú lateral derecho.

![Icono mezclar datasets][merge_datasets_icon]

Tras pinchar en el icono, se nos preguntará que tipo de combinación de tablas queremos:

* *Column join*: Unión basada en un campo común que comparten ambas tablas
* *Spatial join*: En este tipo de unión, realmente lo que obtendremos será una medida del número de elementos geométricos que intersectan entre ambas tablas. Podremos aplicar una operación agregada a dicho número (*count*, *sum* o *avg*)

![Tipo de combinación][merge_type]

El tipo de combinación que nos interesa es el primero. Realmente, queremos quedarnos con los registros de ambas tablas que coincidan en el valor de su campo geométrico. Por tanto, elegimos *Column join*.

A continuación, se nos pregunta qué campo usar para realizar la comparación entre ambas tablas. Como podemos observar **no podemos elegir el campo geométrico para realizar la comparación**. Esto es así por razones de rendimiento al ejecutar la función de comparación.

Pero no debemos preocuparnos. Podemos usar el campo *geom_text*, que contiene una representación textual de la columna geométrica en cada caso. Por tanto, seleccionamos ese campo en ambas tablas

![Combinación por campo texto][merge_by_string_field]

Por último, debemos decidir con qué campos de ambas tablas nos quedaremos.

El primer detalle es que **no podemos elegir a la vez los dos campos geométricos**. Una tabla de CartoDB solo puede contener un campo de tipo geométrico, de manera que debemos elegir de qué tabla vamos a sacar el campo. Dada la naturaleza de nuestros datos, nos quedaremos con el campo de la tabla de rutas, porque dicha tabla contiene más registros que la tabla de puntos.

Por último, seleccionaremos el resto de los campos de las dos tablas, a excepción del campo *geom_text* de la tabla de puntos, para evitar tenerlo repetido.

 La selección debería quedar como se ve en la captura.

![Campos a elegir][merge_fields]

El resultado es una tabla que contiene la unión de campos de ambas tablas, como se puede ver en la captura. La hemos renombrado a *distritos_madrid_distritos_madrid_con_carril_y_bm*.

![Tablas mezcladas][merged_tables]

Esta misma mezcla que hemos realizado, podría haberse hecho mediante sentencias SQL, pero CartoDB nos facilita la operación propocionándonos una interfaz gráfica para realizarla.

Ahora que ya tenemos una versión *filtrada* de nuestra tabla de distritos, vamos a modificar el mapa creado con las tres capas, sustituyendo la tabla original de polígonos por la que acabamos de crear. Para hacerlo de manera sencilla, simplemente cambiamos la sentencia SQL de donde obtenemos los polígonos, para que lea de la tabla nueva

```
select * from distritos_madrid_distritos_madrid_con_carril_y_bm
```

El resto, lo dejamos como está. El resultado es el siguiente

![Mapa con distritos filtrados][map_with_filtered_districts]

Es decir: **solo se muestran los distritos que contienen estaciones de BiciMad y/o ciclocarriles**.
