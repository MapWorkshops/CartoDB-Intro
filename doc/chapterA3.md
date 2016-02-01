# Apéndice D: Integrando CartoDB con Google Maps

Para terminar, vamos a ver un **ejemplo de uso de las APIs de Google Maps en conjunción con CartoDB**. Concretamente, vamos a ampliar la aplicación del capítulo anterior para que, al pinchar sobre una de las estaciones de BiciMad, aparezca un infowindow que contenga **una imagen de Google Street View y una dirección física obtenida a partir de geocoding inverso**. Además, **vamos a usar como mapa base un mapa proporcionado por Google**. El código se encuentra en la [carpeta *examples/google_maps* de este repositorio de Github](https://github.com/MapWorkshops/CartoDB-Intro/tree/spanish/examples/google_maps)

Veamos, paso a paso, como obtener de Google Maps todo lo que necesitamos.

## Usando mapas base de Google Maps

Como ya vimos cuando repasamos los mapas base disponibles en el editor de CartoDB, **Google Maps no se encontraba como proveedor**. Pero eso no significa que no podamos utilizar sus mapas base desde nuestras aplicaciones web basadas en CartoDB. De hecho, es **tremendamente sencillo usar los mapas base de Google desde nuestra aplicación web con CartoDB**. Basta con que, al llamar a la función *createVis*, especifiquemos el siguiente parámetro de configuración:

```
gmaps_base_type: 'satellite'
```

En lugar de *satellite*, podemos utilizar *roadmap*, *gray_roadmap*, *dark_roadmap*, *hybrid* o *terrain*.

Para más información, consultar la [documentación de la función createVis](http://docs.cartodb.com/cartodb-platform/cartodb-js/api-methods/#cartodbcreatevis). Para ver el ejemplo de código, simplemente podemos acudir al [ejemplo de Google Maps](https://github.com/MapWorkshops/CartoDB-Intro/blob/spanish/examples/google_maps/js/app.js) que se referencia en este capítulo.

Además de los mapas base, vamos a utilizar **dos APIs de Google**. Las veremos a continuación.

## APIs de Google a utilizar

Las 2 APIs de Google que utilizaremos son:


* [Google StreetView Image API](https://developers.google.com/maps/documentation/streetview): Para obtener la imagen de Google Street View correspondiente a la ubicación de la estación, utilizaremos esta API.
* [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding): Para obtener la dirección de una estación a partir de las coordenadas lat, lng de la misma, haremos uso de la funcionalidad de **geocoding inverso** que nos proporciona esta API.

Veamos a continuación cómo usar ambas APIs.


### Google StreetView Image API

Lo primero que deberemos hacer para poder usar la API, es [obtener una clave de tipo *browser*](https://developers.google.com/maps/documentation/streetview/get-api-key), que nos permitirá hacer llamadas directamente desde nuestra aplicación web.

Hemos de tener en cuenta que, al crear dicha clave, es recomendable definir ciertas **restricciones**. Google nos permite definir desde qué direcciones IP se podrán hacer llamadas usando esta clave. Si no definimos ninguna, **la clave podrá ser utilizada desde cualquier lado**. Esto significa que cualquiera podría usarla en una aplicación propia, y consumir cuota que sería computada a nuestra cuenta, **pudiendo llegar a incurrir en gastos**.

En el propio panel de desarrolladores de Google se nos avisa de esto, como podemos ver en la siguiente imagen

![Crear API Google Maps con restricciones][google_maps_browser_key_referer]

Una vez obtengamos nuestra clave API, estamos listos para utilizarla en nuestra aplicación. Hemos elegido la opción de generar dinámicante el código HTML de la infowindow, utilizando para ello el resultado de la llamada a la API de Google StreetView Image. Podemos verlo en directo en el ejemplo de Google Maps ([fichero index.html](https://github.com/MapWorkshops/CartoDB-Intro/blob/spanish/examples/google_maps/index.html) y [fichero app.js](https://github.com/MapWorkshops/CartoDB-Intro/blob/spanish/examples/google_maps/js/app.js)).

Para que el ejemplo funcione, debemos sustituir donde pone *GOOGLE_BROWSER_KEY_HERE* por la *browser key* que hemos generado. También deberemos sustituir la clave de tipo *server*, como veremos a continuación.


### Google Geocoding API

Igual que en el caso anterior, lo primero que deberemos hacer es [obtener una clave de tipo *server*](https://developers.google.com/maps/documentation/geocoding/get-api-key), que nos permitirá hacer llamadas a la API de geocoding. Una vez obtenida, estamos listos. Vamos a obtener la dirección física de la estación mediante una llamada a la API de geocoding de Google, usando la funcionalidad de Geocoding inverso: **a partir de unas coordenadas latitud, longitud, obtendremos una dirección física**.

Podemos ver el ejemplo en directo, una vez más, en el [fichero app.js]((https://github.com/MapWorkshops/CartoDB-Intro/blob/spanish/examples/google_maps/js/app.js)). En este caso, deberemos sustituir donde pone *GOOGLE_SERVER_KEY_HERE* por la clave de tipo *server* que hemos creado.


## La aplicación funcionando

Una vez añadidas las dos claves, podemos ver cómo queda nuestra aplicación al pinchar en una estación cualquiera

![Fotos y dirección de estaciones][bicimap_station_image_and_address]
