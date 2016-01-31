# Trabajando con nuestros datos

Ahora que ya hemos importado y estilado nuestros datos, vamos a repasar qué más cosas podemos hacer con ellos desde CartoDB. Lo más sencillo, y en lo que CartoDB nos va a proporcionar un soporte magnífico, es **filtrarlos**.

## Filtrando datos

Como ya dijimos anteriormente, el menú lateral derecho de la vista de tabla nos ayudará a filtrar nuestros datos. Para entender cómo funcionan los filtros en CartoDB, vamos a utilizar el conjunto de datos de ciclocarriles de Madrid, que ya tenemos importado.

Entramos en la vista de mapa de nuestros datos, y fijamos nuestra atención en el menú lateral de la parte derecha. Una de las opciones se revela como *filters*, cuando pasamos el ratón por encima.

Al pinchar en esa opción, vemos que se nos muestra lo siguiente

![Filtros de columnas][cartodb_column_filters]

Lo primero que debemos hacer es elegir la columna sobre la que queremos aplicar filtros. En nuestro ejemplo, vamos a filtrar por el campo *length*, que es de tipo numérico.

![Filtro de columna][cartodb_filter_column2]

Lo que vemos es que se nos construye un histograma, donde podemos limitar el rango de valores que queremos que aparezcan.

![Filtro de columna numérica][cartodb_column_filter_range]

Al variar los extremos del histograma, automáticamente se actualizan los datos que se muestran en el mapa, de manera que nos quedaremos solo con las filas que cumplan el criterio impuesto por el filtro. Veamos un ejemplo.

Vamos a intentar determinar cuál es el ciclocarril más largo de Madrid. Para ello, movemos los extremos del filtro de la manera que se ve en la imagen

![Filtro ciclocarril más largo][cartodb_column_filter_longest_line]

Como resultado, observamos que **el ciclocarril más largo está bastante alejado de las estaciones de BiciMad**. Este argumento podría utilizarse, por ejemplo, para pedirle al gobierno de la ciudad que ubique estaciones del servicio en zonas más al norte. Un ejemplo de cómo **un mapa puede contarnos una historia acerca de los datos que muestra**.

![Ciclocarril más largo lejos del centro][cartodb_column_filter_longest_line_north]

**NOTA**: En la captura de pantalla anterior se ha eliminado la capa de polígonos y algunos elementos de la visualización, para mejorar su visibilidad.

En el momento de aplicar un filtro, lo que está sucediendo internamente es que se está lanzando una consulta SQL a CartoDB, y las columnas que vemos son el resultado de dicha consulta. Es el equivalente a aplicar un *WHERE*, en terminología SQL.

Además de aplicarse el filtro, se nos presenta la opción de **crear un nuevo juego de datos** en base a la consulta generada, o eliminar los filtros y volvernos a quedar con todas las filas.

![Crear tabla a partir de resultado de consulta][create_dataset_from_query]

Por supuesto, la naturaleza del filtro depende del tipo de columna sobre el que se aplique. Si el campo sobre el que queremos aplicar el filtro es de tipo *string*, lo que nos aparece es un listado de todos los posibles valores que esa cadena de texto adopta en nuestro juego de datos, junto con el número de veces que aparece.

En la captura, las opciones que nos aparecen al tratar de aplicar un filtro sobre una columna de tipo texto de nuestra tabla de polígonos.

![Filtro de columna de texto][cartodb_column_filter_text]

En este caso, si lo prefiriéramos, podemos implementar este filtro de manera que solo nos quedemos con los registros cuya columna contenga un texto que nosotros mismos especifiquemos. Para ello, solo tendremos que desactivar el interruptor de *View as list*, y aparecerá un campo de texto donde podremos escribir nuestro filtro personalizado.

![Filtro de columna de texto personalizado][cartodb_column_filter_text2]

La otra manera de filtrar los datos es escribiendo nosotros directamente la consulta SQL, pero eso se verá en otro tutorial más avanzado.

Vamos a intentar aplicar otro filtro sobre nuestros datos. Pero para ello, vamos a tener que realizar antes otra operación que nos facilita CartoDB: **mezclar varias capas en una sola**

## Combinando fuentes

Como ya hemos mencionado, vamos a mezclar dos tablas, para obtener una sola. Empezaremos en la vista de datos de nuestra tabla *distritos_madrid*, haciendo click en el icono de *Merge datasets*. Dicho icono se encuentra en la vista de tabla, en la parte inferior del menú lateral derecho.

![Icono mezclar datasets][merge_datasets_icon]

Tras pinchar en el icono, se nos preguntará que tipo de combinación de tablas queremos:

* *Column join*: Unión basada en un campo común que comparten ambas tablas
* *Spatial join*: En este tipo de unión, realmente lo que haremos será tomar una medida del número de elementos geométricos que intersectan entre ambas tablas. Podremos aplicar una operación agregada a dicho número (*count*, *sum* o *avg*)

![Tipo de combinación][merge_type]

En nuestro caso, por ahora, vamos a aplicar el segundo filtro, *Spatial join*. De esta forma mezclaremos dos tablas y obtendremos como salida una sola, que se añadirá a nuestra visualización.

### Combinación basada en relación espacial

En la pantalla que nos aparece al seleccionar ese filtro, primero debemos elegir la tabla sobre la que filtrar. En nuestro caso, elegiremos la de ciclocarriles, una vez más.

![Elegir segunda tabla para la mezcla][spatial_join_select_second_table]

Una vez elegida la segunda tabla, lo que haremos será realizar una operación matemática sobre uno de sus campos. En nuestro caso, la operación será *AVG*, y la realizaremos sobre el campo *length*. De esta forma, calcularemos la longitud media de todas las líneas que intersecten con cada uno de nuestros polígonos. O dicho de otra forma: **para cada distrito, sabremos la longitud media de ciclocarriles que lo atraviesan.**

Ya solo nos queda seleccionar todos los campos de nuestra primera tabla, que serán los campos que  contendrá nuestra tabla de salida. Se ve en la siguiente captura de pantalla.

![Operación a realizar para el merge][spatial_join_merge_operation]

Tras pulsar en el botón de *Merge datasets*, se generará una nueva tabla, y seremos automáticamente redirigidos a la **vista de datos** de la misma. De manera, que habremos salido de nuestro mapa. Volveremos en breve, pero antes veamos qué es lo que ha sucedido.

Básicamente, tenemos una tabla similar a nuestra tabla de distritos, pero con **una columna adicional**, llamada *intersect_avg*. Esta nueva columna contiene, para cada registro (es decir, cada distrito), la longitud media de ciclocarriles que discurren por él. Y, como se puede ver en la captura, hay algunos distritos **que no tienen ciclocarriles**. En estos, el valor del campo *intersect_avg* es nulo.

Para evitar problemas posteriores, vamos a cambiar los valores nulos de este campo *intersect_avg* por el número *0*. Es una operación que puede realizarse mediante una consulta SQL, pero también podemos hacerlo simplemente clickando dos veces en cualquier valor nulo, escribiendo 0, y salvando el valor.

![Distritos sin ciclocarriles][districts_without_lines]

Vayamos ahora a nuestra tabla de distritos. Vamos a realizar otro combinación espacial. Esta vez, elegiremos como segunda tabla la tabla de estaciones de BiciMad, como se puede ver en la captura

[Elegir segunda tabla para segunda mezcla][spatial_join_select_second_table2]

En esta ocasión, vamos a elegir como operación a realizar sobre la segunda tabla, la operación *COUNT*. No es necesario que elijamos ningún campo sobre la que aplicar dicha operación. Se realiza automáticamente sobre el campo *cartodb_id*, que es distinto para todos los registros de la tabla.

Como vemos en la captura, lo que vamos a obtener será una tabla de salida que tendrá los mismos campos de la tabla de entrada (los hemos seleccionado a través de *Select all columns*) y, además, un conteo del número de elementos de la tabla de salida que intersectan con cada elemento de la tabla de entrada. O de otra forma, sabremos **cuántas estaciones de BiciMad contiene cada distrito**.

![Conteo de estaciones por distrito][merge_count_stations_per_district]

Tras pulsar una vez más en *Merge Datasets*, iremos a la vista de la nueva tabla creada. Veremos, como ya imaginábamos, que las columnas de la tabla son las mismas que la de nuestra tabla de distritos, pero conteniendo un campo adicional, llamado *intersect_count*. Dicho campo contiene el número de estaciones de BiciMad de cada distrito. Algunos distritos, como ya sabemos, contendrán 0 estaciones.

![Distritos sin estaciones de BiciMad][districts_without_stations]

Para terminar con nuestro repaso de las mezclas, vamos a combinar nuestras dos nuevas tablas en una sola, utilizando el otro tipo de mezcla disponible en CartoDB: **la mezcla basda en un valor compartido por ambas tablas.**. Posteriormente, usaremos esta nueva tabla creada en sustitución de nuestra anterior tabla de distritos. Eso nos permitirá aplicar algunos filtros adicionales que mejorarán nuestra visualización.

### Combinación basada en valor compartido común

Vamos a combinar las dos nuevas tablas creadas. Para ello, entramos en la vista de tabla de una cualquiera de ellas. Para nuestro ejemplo, entraremos en la vista de tabla de la última de las dos, y elegiremos la opción de *Merge datasets*. Pero esta vez, seleccionaremos la opción *Column join*, como se ve en la captura.

![Mezclando por valor común compartido][merge_datasets_column_join]

Una vez seleccionadas las dos tablas que intervendrán en la mezcla, debemos especificar cuál es el campo de ambas tablas que usaremos para realizar el cruce. En este caso, el campo será *nombre* en ambas, como se ve en la captura

![Seleccionando el campo común][merge_dataset_pick_common_field]

Por último, debemos elegir los campos de ambas tablas que queremos que formen parte de nuestra tabla final. Para simplificar, vamos a elegir todos los campos de la tabla de la izquierda y únicamente el campo *intersect_avg* de la tabla de la derecha. De esta forma, tendremos todo lo que necesitamos. Se ve en la captura.

![Seleccionando el resto de campos][merge_dataset_pick_rest_fields]

Tras pulsar en *Merge Datasets*, obtendremos como salida nuestra tabla final. Es exactamente igual que la tabla original de distritos, conteniendo dos columnas adicionales por cada distrito:

* Longitud media de ciclocarriles que cruzan el distrito
* Número total de estaciones de BiciMad en el distrito.

De esta forma, hemos realizado mediante herramientas visuales, operaciones que, de otra manera, habrían requerido de complejas consultas SQL espacial.

Para finalizar con esta sección, volvamos a nuestro mapa, y sustituyamos la antigua tabla de distritos por la nueva tabla generada. Lo haremos en dos pasos:

1. Entraremos en el mapa, y eliminaremos la capa de distritos, haciendo click en el pequeño icono con la *x* de su pestaña del menú lateral.

![Eliminar dataset de mapa][delete_dataset_from_map]

2. Mediante el botón con signo *+* del menú lateral derecho, añadiremos la nueva tabla creada, y la colocaremos en la parte inferior. En su *wizard* correspondiente, elegiremos, como hicimos con la tabla original de distritos, la opción de visualización basada en coropletas sobre el campo *pop_density*. De manera que, visualmente, no notaremos ningún cambio, por ahora.

El último paso de este capítulo, será filtrar nuestra tabla de distritos para quedarnos **solamente con aquellos que contengan ciclocarriles o estaciones de BiciMad**. De esta forma, nuestra visualización podrá centrarse solo en los distritos que nos interesan.

Gracias a las operaciones de mezcla realizadas sobre nuestra tabla original, podemos utilizar las dos nuevas columnas *intersect_count* e *intersect_avg* para implementar los filtros que nos interesan. Estos son:

* Filtrar los valores de *intersect_avg* que sean 0 (es decir, los distritos sin ciclocarriles).
* Filtrar los valores de *intersect_count* que sean 0 (es decir, los distritos sin estaciones de BiciMad)

Esto lo haremos desde el apartado de filtros de nuestra nueva tabla de distritos, como hicimos anteriormente. Mediante el pequeño icono de *+* que nos aparece, implementaremos los dos filtros. Y moviendo el límite inferior de cada filtro hacia la derecha, tendremos la operación finalizada.

Si se han seguido las instrucciones, la pantalla de filtros de nuestra nueva tabla debe quedar como aparece en la captura

![Filtrado de distritos][districts_filtered]

El mapa, tras eliminar de la vista estos distritos, quedaría tal y como se ve a continuación

![Mapa con filtros aplicados][map_filtered]
