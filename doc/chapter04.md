# Usando CartoDB en nuestros desarrollos

En los capítulos anteriores, hemos visto cómo utilizar la interfaz web de CartoDB para crear visualizaciones de nuestros datos de manera sencilla. En este capítulo, veremos como utilizar la librería JavaScript de CartoDB, [CartoDB.js](http://docs.cartodb.com/cartodb-platform/cartodb-js/), para poder interactuar con nuestro mapa desde cualquier aplicación web.

## Estado de los distritos de Madrid con respecto al uso de la bici pública

Vamos a desarrollar una sencilla aplicación web que, partiendo de nuestro mapa, nos muestre la siguiente información al pinchar sobre uno de los distritos:

* Número total de estaciones de BiciMad existentes en el distrito.
* Kilómetros totales de ciclocarril dentro del distrito.

Con estos datos, podremos hacernos una idea de cómo de fácil lo tienen los habitantes de cada distrito para disponer de bicicletas de BiciMad y circular por los carriles.

En el directorio *examples/cartodb_js* se puede encontrar una aplicación de ejemplo realizada usando CartoDB.js. Básicamente, para obtener las estadísticas deseadas, se ejecuta una consula SQL contra nuestras tablas, y se muestra el resultado en tiempo real.

A continuación, una captura de ejemplo del aspecto de la aplicación

![Aplicación con CartoDB.js[cartodb_js_example]

La parte más compleja de la aplicación es la consulta SQL para obtener las estadísticas. Cabe destacar que se podrían haber obtenido también mediante la opción de *merge datasets* que vimos en un apartado anterior. Concretamente, haciendo uso de la opción *Spatial join*. Podríamos haber generado un par de nuevas tablas, conteniendo:

* Los distritos de Madrid junto con el número de estaciones de BiciMad dentro de cada distrito.
* Los distritos de Madrid junto con los kilómetros de ciclocarriles dentro de cada distrito.

Y simplemente, haber añadido las tablas a nuestra visualización.

Hemos elegido realizar la aplicación para mostrar cómo se puede tener dinámicamente lo mismo, sin necesidad de crear más tablas y ocupar más espacio de almacenamiento en nuestra cuenta.

Por supuesto, la generación de datos al vuelo casi siempre será más lenta que la mera obtención de los mismos. En este caso, con tablas pequeñas, no es un problema. Pero cuando lidiamos con datos más voluminosos, seguramente sea preferible una estrategia de pregeneración/cacheado de los datos que necesitamos. El eterno compromiso entre rendimiento y espacio de almacenamiento.
