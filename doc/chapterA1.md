# Apéndice B: Exportar mapas a vídeo

En esta sección aprenderemos cómo exportar una visualización de nuestro mapa a un formato de vídeo utilizando software gratuito y disponible para los tres sistemas operativos más populares: Windows, Mac OS X y GNU/Linux.

La calidad del vídeo obtenido dependerá de los codecs instalados en la máquina con la que estemos trabajando, pero cualquier máquina actual debería ser capaz de generar vídeo en calidad HD.

Lo que haremos para obtener nuestro vídeo será básicamente **grabar la pantalla de nuestro ordenador durante el tiempo deseado, y exportar el resultado a un formato de vídeo** compatible con la práctica totalidad de software de edición de vídeo actual (contenedores MP4, MOV, AVI, códec de vídeo H264).

Hemos de tener en cuenta que:

* Cada uno de los 3 sistemas operativos mayoritarios (Windows 7/8/10, Mac OS X, sistemas GNU/Linux) tiene su propio método para grabar el escritorio.
* Como ya hemos mencionado, el sistema desde el que trabajemos ha de tener instalados los códecs de vídeo necesarios para poder generar los ficheros en formatos adecuados.

Repasemos los métodos por separado:


## VLC Player

**Funciona en**: Windows 7, GNU/Linux

El conocido [software de reproducción de vídeo VLC](http://www.videolan.org/vlc/) permite grabar la pantalla de nuestro ordenador y convertir el resultado en un fichero de vídeo. O al menos en teoría, porque en las pruebas realizadas siguiendo las instrucciones oficiales, **solo ha sido posible realizar la operación en algunos sistemas con Windows 7 y en sistemas con sistema operativo [Ubuntu](http://www.ubuntu.com/desktop)**.

En sistemas con Windows 8, Windows 10 y Mac OS X, así como en algunos sistemas con Windows 7, el programa **se cierra de manera inesperada** al empezar a grabar, no pudiendo realizarse la operación. En cualquier caso, en los sistemas con Windows 7 en los que el procedimiento ha funcionado, ha sido muy sencillo generar el fichero de vídeo. Es por eso que recomendamos, **probar este sistema en primer lugar si se está utilizando Windows 7**. En caso de que se produzca algún error, pasar al siguiente apartado.

El primer paso, tras abrir el programa, será elegir la opción *Media --> Open capture device*, o su equivalente en español. En la ventana que se nos abre, vamos a la pestaña de *Capture Device*, seleccionando *Desktop* en *Capture mode*, una tasa de frames por segundo superior a 10fps y, en el botón de la parte inferior, elegimos la opción de *Convert*. Se puede ver en la captura siguiente

![VLC abriendo dispositivo de captura][vlc2]

Tras especificar el directorio de salida (por defecto la carpeta *Videos* del usuario) y el perfil de grabación (Vídeo H264 y formato MP4, por ejemplo), pulsamos en el botón de *Start*. Se ve en la captura

![VLC iniciando grabación][vlc3]

En este momento, empezaremos a grabar nuestra pantalla, hasta que pulsemos en el botón de detener la grabación en VLC. Se generará un fichero de vídeo en la carpeta *Video* de nuestro usuario.

## Open Broadcaster Software

**Disponible en**: Windows 7/8/10, Mac OS X, GNU/Linux

[Open Broadcaster Software](https://obsproject.com/) es un programa de grabación y streaming de vídeo **gratuito, de código abierto y multiplataforma**. Podemos estar seguros, por el momento, de que el programa no esconde ningún tipo de funcionalidad oculta, ni publicidad, ni virus de ninguna clase.

Dado que VLC Player se ha demostrado ineficaz para grabación del escritorio en la mayoría de sistemas Windows, **Open Broadcaster Software parece ser la mejor opción en términos de coste y rendimiento**.

Para grabar nuestro escritorio usando Open Broadcaster Software, lo primero que haremos será abrir el programa, que nos presentará una pantalla en negro

![OBS inicio][obs_1]

Como no nos interesa grabar el audio que entra por el micro de nuestro ordenador, lo silenciamos pinchando en el botón de *Configuración*, seleccionando la opción de *Audio* y asegurándonos que aparece *Disabled* en todos los desplegables, tal y como se aprecia en la captura

![OBS desactivando audio][obs2]

También aprovecharemos para ir al apartado de *Salida*, y cambiar la calidad del mismo (*Recording quality*) a una suficientemente alta. También cambiaremos el formato de grabación (*Recordging format*) a MP4 y el códec de vídeo (*Codificador*) a x264. Se aprecia en la siguiente captura

![OBS parámetros vídeo][obs3]

Hecho eso, pulsamos en el signo *+* que hay en el panel de *Fuentes* de nuestra pantalla principal y elegimos *captura de ventana*, tal y como se ve en la imagen

![OBS eligiendo fuente][obs4].

Tras pulsar en aceptar en la ventana que nos aparece, se nos permitirá elegir la ventana que queremos grabar. Recomendamos poner la ventana que nos interese a pantalla completa, para eliminar cualquier otro elemento que nos pudiera distraer. Lo vemos en la captura.

![OBS eligiendo ventana][obs5]

Tras pulsar el botón de aceptar en la pantalla anterior, podemos iniciar la grabación en cualquier momento mediante el botón de *Iniciar grabación* de la pantalla principal.

![OBS Iniciando grabación][obs6]

Cuando deseemos parar la grabación, basta con que pulsemos en el botón de *Detener grabación*. Como resultado, **se generará un archivo de vídeo en la carpeta Vídeos del usuario**.


## QuickTime

**Funciona en**: Mac OS X

Los sistemas Mac OS X llevan por defecto instalado el reproductor de vídeo [QuickTime](http://www.apple.com/quicktime/download/). Con este reproductor **podemos grabar nuestro escritorio de manera sencilla e incluso recortar el vídeo sin necesidad de instalar ningún tipo de software adicional**.

Tras abrir el programa, elegiremos la opción de menú *Archivo --> Nueva grabación de pantalla*. También podemos pulsar la combinación de teclas equivalente, *Ctrl+Command+N*.

Nos aparecerá un pequeño panel con un botón rojo en el centro, como se ve en la siguiente captura

![QuickTime nueva grabación de pantalla][qt1]

Tras pulsar en el botón rojo, se nos instará a hacer click en la ventana que queramos grabar, o a pinchar y arrastrar para seleccionar la porción de ventana que queramos grabar. Una vez seleccionada el área a grabar, deberemos pulsar en el botón de *Iniciar grabación* que nos aparece en pantalla.

Hecho esto, comenzará la grabación, que se detendrá cuando pulsemos en el botón de *Stop* de nuestro panel (o el pequeño botón de *Stop* que se ha instalado en la barra superior de menú de Mac OS X).

Tras detener la grabación, QuickTime nos mostrará automáticamente nuestro vídeo. Podemos **acortar la duración del mismo** si pulsamos la combinación de teclas *Cmd+T*. Veremos que nos aparece una barra en la parte inferior de nuestro vídeo, que nos permite mover tanto el principio como el final del mismo, quedándonos solo con la parte que nos interese.

![QuickTime recortar vídeo][qt3]


Una vez finalizada la operación de recorte, bastará con que grabemos el vídeo, y se generará por defecto un archivo en formato MOV con codec H264 en el directorio *Video* del usuario. También podemos elegir la opción *Archivo --> Exportar*, y generar un archivo con diferente calidad, tal y como se puede apreciar en la captura de pantalla

![QuickTime exportar grabación de pantalla][qt4]




## Otras opciones: Software de pago

Las opciones anteriores incluyen la utilización de software gratuito. También es posible realizar la operación de grabación del escritorio usando software de pago. Las opciones más interesantes para ello son:

* [Camtasia](https://www.techsmith.com/camtasia.html): Disponible para Windows,  Mac OS X y GNU/Linux. Su precio actual está en torno a los 102€
* [SnagIt](https://www.techsmith.com/snagit.html): El *hermano menor* de Camtasia, disponible para Mac OS X y Windows. Su precio actual está en torno a los 52€
* [VideoMotion Pro](http://videomotionpro.com/): Disponible para Windows y Mac OS X. Su precio actual está en torno a los 65€.
* [QuickTime Pro](http://www.apple.com/quicktime/extending/): A pesar de que ya hemos visto que con la versión gratuita de QuickTime es suficiente para grabar el escritorio en sistemas Mac OS X, si queremos disfrutar de la misma funcionalidad en Windows, deberemos adquirir la versión Pro. Actualmente, tiene un precio en torno a 30€
