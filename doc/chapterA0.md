# Apéndice A: Tipos de visualización

CartoDB nos va a facilitar la creación de una visualización sobre nuestros datos mediante los *wizards* disponibles en cada tabla de datos que añadamos.

Desde los *wizards*, podremos ajustar el tipo de visualización que queremos para nuestros datos, así como los colores, rellenos, anchos de líneas y otros pocos parámetros visuales.

Con cada *wizard*, podemos experimentar eligiendo los diferentes tipos de visualizaciones, y ver qué efecto producen. Los wizards disponibles son los siguientes (tengamos en cuenta que no todos estarán disponibles para todos los datos, dependerá del tipo de dato)

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
