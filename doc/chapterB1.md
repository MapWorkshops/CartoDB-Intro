# Ejercicio 1: Mapas electorales

Este ejercicio pretende que el alumno construya varios mapas temáticos utilizando datos de resultados electorales. Utilizará la interfaz de CartoDB para estilar los mapas, tal y como se ha visto en la parte teórica.

Los datos que el alumno deberá cargar en su cuenta de CartoDB son [los siguientes](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/master/data/distritos_madrid_elecciones_2015.kml).

Y los mapas electorales a construir son los siguientes:

## Ejercicio 1.1

Construir un **mapa de categorías** que coloree cada distrito con el color del partido que ha obtenido más votos en dicho distrito. Los códigos hexadecimales de los colores a utilizar son:

* PP: #2167AB
* PSOE: #F11810
* Podemos: #6B0FB2

Además, el mapa deberá cumplir los siguientes requisitos:

* La opacidad de todos los colores ha de ser el 80%
* Cuando pasemos el ratón por encima de un distrito, deberemos ver el nombre del mismos
* Cuando pinchemos en uno de los distritos. deberemos ver el número de votos para los cuatro partidos más votados
* Hemos de añadir una leyenda con un título, tal y como se ve en la siguiente captura de pantalla.
* Hemos de añadir un título, unos cuadros de texto y [esta imagen](http://www.omicrono.com/wp-content/uploads/2015/12/elecciones-generales.jpg), de manera que el mapa quede finalmente tal y como se ve en la siguiente captura de pantalla.

![Resultado ejercicio 1.1][ejer1_1_resultado]


## Ejercicio 1.2

Construir un mapa de coropletas que muestre el **porcentaje de abstenciones con respecto al total de votos** por distrito, coloreando de un tono más oscuro los distritos donde el porcentaje de abstenciones ha sido superior.

Usaremos únicamente un rampa de 3 colores, codificados de la siguiente manera:

* Porcentaje de abstención menor o igual al 25%: #FFEDA0
* Porcentaje de abstención menor o igual al 39%: #FEB24C
* Porcentaje de abstención mayor o igual al 40%: #F03B20

Además, el mapa deberá cumplir los siguientes requisitos:
* La opacidad de todos los colores ha de ser el 80%.
* Cuando pasemos el ratón por encima de un distrito, deberemos ver el nombre del mismos
* Cuando pinchemos en uno de los distritos. deberemos ver el porcentaje de abstenciones en dicho distrito.
* Hemos de añadir una leyenda con un título, tal y como se ve en la siguiente captura de pantalla.
* Hemos de añadir unas anotaciones de texto, apuntando a los dos distritos con mayor porcentaje de abstenciones, incluyendo en dicho texto el nombre del distrito y el porcentaje de abstenciones, tal y como se ve en la siguiente captura de pantalla

![Resultado ejercicio 1.2][ejer1_2_resultado]

**NOTA**: En nuestro tabla de resultados electorales, disponemos para cada distrito, del número de abstenciones y del número total de votos. Pero no disponemos de una columna que sea el porcentaje de abstenciones sobre el total. Tendremos que **construirla nosotros mismos**. Para ello, basta con que ejecutemos esta consulta en la consola SQL:

```sql
SELECT cartodb_id, distrito, the_geom_webmercator, round(100*abstencion/votantes::numeric, 2) as porcentaje_abstencion FROM distritos_madrid_elecciones_2015
```

Tengamos en cuenta que, a partir de la ejecución de dicha consulta, **solo tendremos disponibles en nuestra visualización los valores obtenidos de la misma, no todas las columnas de nuestros datos**. Para este tipo de mapa, será suficiente con ellos.

**NOTA**: Para poder crear la rampa de colores con los valores predeterminados que se especifican en el enunciado, no bastará con elegir el tipo de visualización *category* en el wizard. Deberemos tocar el código CartoCSS a mano, usando el valor *porcentaje_abstencion* obtenido de la consulta anterior como valor umbral. Veamos un ejemplo:

```CSS
#distritos_madrid_elecciones_2015 [porcentaje_abstencion >= 40] {
   polygon-fill: #F03B20;
}
```
Habrá que completar el código CartoCSS de nuestro mapa para contemplar los 3 casos especificados en el enunciado.


# Ejercicio 2: Mapa de Tweets

En este ejercicio, el alumno construirá dos mapas animados utilizando datos obtenidos directamente del *stream de datos de Twitter*.

Todas las cuentas de CartoDB cuentan con un número limitado de créditos que se traducen en una cantidad de tweets geolocalizados a obtener del stream de Twitter. El usuario tan solo ha de introducir separados por comas los términos de búsqueda que le interesan (ya sean hashtags o simples cadenas de texto) y las fechas entre las que buscar. CartoDB, de manera automática, buscará todos los tweets que contengan dichas cadenas entre las fechas introducidas.

Una limitación importante es que las fechas de búsqueda están limitadas como máximo a *hace un mes*. Como en este ejercicio vamos a usar datos de Twitter más antiguos de un mes, se proporciona un enlace directo para descargarlos [aquí](https://raw.githubusercontent.com/MapWorkshops/CartoDB-Intro/master/data/twitter_20d_psoe_partidopopular_izquie.geojson.zip)

Los mapas a construir son los siguientes

# Ejercicio 2.1: Mapa de calor con Tweets

En este ejercicio, el alumno tendrá que construir un mapa de calor mostrando la evolución de los Tweets mencionando el hashtag #20D o hashtags de cualquiera de los partidos políticos más populares (#PP, #PSOE, #Ciudadanos, #Podemos, #IU, etc) durante la jornada del 20 de Diciembre de 2015, usando la tabla de datos proporcionada.

En el mapa de calor, se deben cumplir las siguientes condiciones:

* El tamaño del punto a mostrar debe ser 35.
* La opacidad del mismo será del 40%
* Ha de mostrarse el mapa con la opción de animación
* Se ha de activar el efecto acumulativo sobre los puntos
* La animación ha de durar 1 minuto
* Experimentar con los campos *steps* y *trails* y su efecto en la fluidez de la animación
* Se ha de añadir un título al mapa

El resultado ha de parecerse a la siguiente captura

![Resultado ejercicio 2.1][ejer_2_1_resultado]

# Ejercicio 2.2: Mostrar información de cada Tweet

En este ejercicio, el alumno tendrá que construir un mapa con los tweets de la tabla anterior, pero esta vez se tendrán que ver los tweets por separado, e incluso se deberá **poder pinchar en ellos**.

Vamos a usar como *wizard* Torque en esta visualización. Cuando lo hagamos, veremos que **no se permite tener infowindows** con Torque, de manera que, en teoría, **no podremos pinchar en los tweets por separado**. Pero vamos a implementar un truco para que sea posible hacerlo.

El alumno deberá crear una visualización **con dos capas**:

* La capa inferior será la capa de tweets, y la visualización a mostrar será de tipo *Simple*. Los puntos tendrán una opacidad de 0.1
* La capa superior será **también la capa de los tweets**, y la visualización a mostrar será de de tipo *Torque*. Los puntos tendrán una opacidad de 0.9

El efecto que se producirá será que **podemos pinchar en los tweets que van saliendo, cuando realmente estamos pinchando en los puntos semitransparentes que van debajo**. Visualmente, será suficiente.

Queda a decisión del alumno elegir los parámetros de Torque para que la visualización sea de su agrado. Debería quedar algo parecido a la siguiente captura de pantalla.

![Pinchar en tweets][ejer2_2_resultado]
