# Usando CartoDB en nuestros desarrollos

En los capítulos anteriores, hemos visto cómo utilizar la interfaz web de CartoDB para crear visualizaciones de nuestros datos de manera sencilla. En este capítulo, veremos como utilizar la librería JavaScript de CartoDB, [CartoDB.js](http://docs.cartodb.com/cartodb-platform/cartodb-js/), para poder interactuar con nuestro mapa desde cualquier aplicación web.

## ¿Cómo de fácil es usar la bici en cada distrito de Madrid?

Vamos a desarrollar una sencilla aplicación web que, partiendo de nuestro mapa, nos muestre la siguiente información al pinchar sobre uno de los distritos:

* Número total de estaciones de BiciMad existentes en el distrito.
* Número medio de habitantes por estación en el distrito.
* Kilómetros totales de ciclocarril dentro del distrito.
* Densidad de ciclocarriles en el distrito (relación entre los kilómetros de ciclocarriles y el área del distrito)

Con estos datos, podremos hacernos una idea de cómo de fácil lo tienen los habitantes de cada distrito para disponer de bicicletas de BiciMad y circular por los carriles.
