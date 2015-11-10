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

[dataviz]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/dataviz.png
[syriarefugees]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/syrias_refugees.png
[illustreets]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/illustreets.png
[global_forest_watch]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/global_forest_watch.png
[alcatraz]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/alcatraz.png
[elecciones2011]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/elecciones_2011.png
[polucionla]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/polucion_la.png
[quitanieves]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/quitanieves.png
[cordoba]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/cordoba.png
[beyonce]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/beyonce.png
[lisbon2014]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/lisbon2014.png
[sunrise]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/sunrise.png
[starwars]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/starwars_galaxy.png
[tierra_media]: https://raw.githubusercontent.com/MapWorkshops/bbva/master/doc/img/tierra_media.png
