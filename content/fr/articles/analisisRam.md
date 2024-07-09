---
title: "Informe Forense Informático, volcado de memoria y análisis"
date: "2024"
description: "Ejercicio planteado en la asignatura de Análisis Forense Informatico para el analisis de una memoria RAM"
tags: ["Análisis Forense","Informe","Ciberseguridad"]
image: "/articles/analisis-forense/Aspose.Words.e82c0067-2bf6-432c-ae04-9f9bb413686b.001.png"
readingTime: "10"
layout: "article"
---

<a name="_page0_x72.00_y72.00"></a>**ANÁLISIS DE MEMORIA RAM**



**Curso de especialización en ciberseguridad en entornos de las tecnologías de <a name="_page0_x72.00_y703.96"></a>la información - Análisis Forense Informático.**

[**ANÁLISIS DE MEMORIA RAM 1**](#_page0_x72.00_y72.00)

[**Curso de especialización en ciberseguridad en entornos de las tecnologías de la información - Análisis Forense Informático. 1**](#_page0_x72.00_y703.96)

[**INVESTIGACIÓN 3**](#_page2_x72.00_y72.00)

[Obtención Información del Sistema 3 ](#_page2_x72.00_y354.01)[Obtención de Procesos Activos 4 ](#_page3_x72.00_y273.89)[Análisis de Procesos 5 ](#_page4_x72.00_y159.28)[Análisis de Comandos Ejecutados en CMD 6 ](#_page5_x72.00_y72.00)[Obtención y Análisis de Ejecutable Proceso PID(2796) 9 ](#_page7_x72.00_y319.29)[Obtención y Análisis de Volcado de Memoria Proceso PID(2796) 9 ](#_page8_x72.00_y363.02)[**CONCLUSIÓN 12**](#_page12_x72.00_y217.46)

<a name="_page2_x72.00_y72.00"></a>**INVESTIGACIÓN**

Para iniciar el proceso de análisis forense de un sistema, primero obtenemos el volcado de memoria, el cual se presenta en formato .mem. A continuación, realizamos la obtención del hash MD5 del volcado de memoria utilizando el comando PowerShell Get-FileHash. El resultado se guarda en un archivo de texto llamado "MD5\_Resultados\_Hash.txt".(HASH Md5 **172F61F1B80CFFD09705994F0F9DF702**)


<a name="_page2_x72.00_y354.01"></a>**Obtención Información del Sistema**

Una vez obtenido el hash del volcado de memoria, procedemos a examinar su contenido utilizando Volatility, una herramienta especializada en análisis de memoria forense. Utilizamos el comando imageinfo para extraer información esencial del volcado.

volatility.exe -f .\Ejercicio1\memdump.mem imageinfo >> .\Ejercicio1\memdump.mem.imageinfo.txt

El resultado obtenido se guarda en un archivo de texto llamado "memdump.mem.imageinfo.txt". Además, generamos el hash MD5 de este nuevo archivo para mantener un registro de su integridad. HASH MD5(**B4C37565AE050F2F504494486682DFAC**)



Después de obtener el volcado de memoria y calcular su hash MD5, procedemos a analizar la información contenida en el volcado para obtener detalles sobre el dispositivo del cual se ha obtenido

Basándonos en la información obtenida, llegamos a la conclusión de que el sistema operativo pertenece a la familia Windows Vista. Esto se deduce de los Suggested Profile(s) sugeridos por Volatility, que incluyen opciones como VistaSP1x86, Win2008SP1x86, Win2008SP2x86, VistaSP2x86.

<a name="_page3_x72.00_y273.89"></a>Obtención de Procesos Activos

A continuación, procedemos a analizar los procesos activos en el momento de la captura del volcado de memoria utilizando el comando pstree:

volatility.exe -f .\Ejercicio1\memdump.mem --profile=VistaSP1x86 pstree

Para realizar un escaneo más profundo de la memoria y encontrar posibles procesos eliminados u ocultos, recurrimos a la herramienta psscan. Inicialmente, obtenemos una lista de los procesos en ejecución con el comando:

\>volatility.exe -f .\Ejercicio1\memdump.mem --profile=VistaSP1x86 pslist >> memdump.mem.pstree.txt

<a name="_page4_x72.00_y159.28"></a>Análisis de Procesos

Esta salida se almacena en un archivo de texto llamado "memdump.mem.pstree.txt". HASH MD5 (**C70888197509204342A9BD4CF7B60A15**)Posteriormente, identificamos los siguientes procesos para un análisis más detallado:

- FileZillaServer (PID 2856):
- Descripción: Servidor de archivos FTP.
- VBoxService.exe (PID 836) y VBoxTray.exe (PID 1816):
- Descripción: Relacionados con VirtualBox. No son procesos esenciales del sistema operativo, comunes en entornos de virtualización.
- FTK Imager.exe (PID 2120):
- Descripción: Herramienta forense diseñada para la adquisición de imágenes forenses. En ejecución para realizar la copia de memoria.
- httpd.exe (PID 2796):
- Descripción: Servidor web Apache. Puede ser normal en ciertos entornos, pero también podría ser explotado para ocultar actividades maliciosas.
- mysqld.exe (PID 2804):
- Descripción: Servidor de base de datos MySQL. Presencia normal en entornos de desarrollo o servidores web.
- xampp-control.exe (PID 2768):
- Descripción: Utilizado para controlar y administrar servicios proporcionados por XAMPP, incluyendo servidores web y bases de datos.
- Durante el análisis, observamos la ejecución de cmd.exe (PID 612), aparentemente sin anomalías. Sin embargo, al realizar un escaneo más exhaustivo con psscan, se revela otro proceso cmd.exe (PID 1972), indicando posiblemente la presencia de procesos ocultos o eliminados intencionalmente.

<a name="_page5_x72.00_y72.00"></a>Análisis de Comandos Ejecutados en CMD

En un primer momento al analizar los procesos con pslist podemos ver en ejecución cmd.exe (PID 612), nada raro a priori, no obstante al ejecutar psscan (comando el cual realiza un escaneo más exhaustivo de mostrandonos procesos ocultos e incluso procesos que podrían haber sido eliminados intencionalmente) este escaneo nos muestra en lista otro proceso cmd.exe(1972)

Un aspecto en común en los bloques es que los comandos han sido lanzados desde csrss.exe(PID 524), este es un proceso fundamental de windows para ejecutar comandos, aunque por lo general no suele utilizarse. Este comportamiento podría ser indicativo de un intento de ocultar el lanzamiento de dichos comandos, lo que refuerza la sospecha anterior al encontrar diferencias al usar pslist y psscan en donde se encontraba oculto el proceso de cmd.exe(PID 1972).

Para más información acerca de csrss.exe consultar : https://www.elarchivo.es/proceso/csrss.exe.html


Procedemos al análisis de de memoria de ambos procesos.

- cmd.exe PID(612)
- cmd.exe (PID 1972)

con la ayuda de cmdscan obtenemos los últimos comandos que se han lanzado desde el cmd, estos resultados se derivan a un nuevo archivo cmdscan.txt (HASH MD5 **58A93B8518EDCF350B5BEB8CE2698B32** ) aportando los siguiente resultados.


Al examinar el primer bloque de comandos ejecutados desde la interfaz de línea de comandos (cmd), se identificaron acciones significativas relacionadas con la creación de usuarios mediante el comando "net user" y la manipulación de grupos locales a través de "net localgroup". Además, se detectó un intento de configurar el firewall con el propósito de habilitar el servicio de escritorio remoto mediante el comando "netsh firewall".

El análisis de estas circunstancias lleva a la conclusión preliminar de que estamos frente a un posible ataque interno. Esta inferencia se fundamenta en la configuración del firewall y la activación del servicio "remotedesktop", acciones que sugieren la intención de establecer conexiones remotas al sistema comprometido. Este comportamiento es consistente con tácticas utilizadas en ataques internos para ganar acceso y control remoto sobre los sistemas afectados.

Es importante destacar que esta evaluación inicial constituye la base para futuras investigaciones y análisis forenses más detallados.


Durante el segundo bloque de ejecución, se destacó la ejecución del comando "et.exe", un elemento que suscitó interés debido a su asociación con un posible virus de minería de criptomonedas, según la información recabada en ciertos blogs. Se ha identificado este archivo, "et.exe", como un componente potencialmente malicioso, y se sugiere revisar la información detallada disponible en la siguiente página web para obtener más contexto:

<https://es.howtofix.guide/et-exe-virus-2/>

Al analizar los comandos ejecutados en la línea de comandos (cmd), se observaron acciones tales como la creación de usuarios mediante "net user user1" y configuraciones vinculadas a servicios remotos a través de "netsh firewall". Estos hallazgos refuerzan la hipótesis de que el sistema puede haber sido comprometido, evidenciando la creación de usuarios y la manipulación de configuraciones de firewall para facilitar conexiones remotas.

Dado que se identificó la presencia de un proceso activo de servidor web "httpd.exe" con un PID de 2796, se procederá con un enfoque más detallado. En una primera fase, se llevará a cabo la extracción del ejecutable asociado y, posteriormente, se realizará un análisis exhaustivo con la ayuda de un software antivirus. Además, se llevará a cabo un estudio del volcado de memoria de este proceso para obtener información adicional sobre posibles actividades maliciosas o procesos involucrados.

<a name="_page7_x72.00_y319.29"></a>Obtención y Análisis de Ejecutable Proceso PID(2796)

Mediante la ayuda de memdump obtenemos el ejecutable del proceso.


El resultado del análisis del ejecutable mediante un antivirus muestra la ausencia de virus dentro de este. Como se puede observar en la imagen adjunta

<a name="_page8_x72.00_y363.02"></a>Obtención y Análisis de Volcado de Memoria Proceso PID(2796)

Tras la ausencia de virus en el análisis anterior procederemos al análisis de la memoria para obtener información adicional. Utilizaremos la herramienta "memdump" para generar un archivo único que contenga la información de memoria correspondiente a este proceso. El archivo resultante se denomina "2796.dpm" con un HASH MD5 de **1E7A4701E2848E37457ABD0F8B5F0883**. Este archivo será examinado utilizando la herramienta Autopsy, con el objetivo de identificar cadenas de caracteres que proporcionen detalles adicionales.

Hasta el momento, los hallazgos revelan la creación de un usuario local que ha habilitado una conexión desde el exterior, junto con el uso del proceso "httpd". Estos indicios sugieren la realización de peticiones, por lo que procedemos a buscar en el volcado de imagen utilizando las coincidencias de las cadenas:

GET POST UPDATE DELETE

Estas acciones son características de peticiones a un servidor web. Después de filtrar la búsqueda por la cadena "GET", rápidamente se obtiene la siguiente información.

Como puede observarse en la captura de pantalla proporcionada, la información proporcionada constituye un conjunto de solicitudes HTTP y URLs que se han dirigido a un servidor web. A continuación, se presenta un análisis detallado de las solicitudes compartidas:

GET /dvwa/dvwa/includes/DBMS/?C=S;O=D HTTP/1.1TTP/1.1D HTTP/1localhost:80 192.168.56.102 NULLdvwa/c99.php?act=img&img=ext\_zip HTTP/1.1 C=D;O=D HTTP/1.localhost:80 192.168.56.102

Esta solicitud muestra una estructura confusa e información incorrecta, sugiriendo posiblemente errores en la transmisión de datos. La presencia de "dvwa/c99.php" señala la posible exploración de vulnerabilidades utilizando la puerta trasera conocida como "c99.php".

GET /dashboard/docs/images/install-wordpress/?C=D;O=A HTTP/1.1 localhost:80 192.168.56.102

Aunque parece relacionarse con la instalación de WordPress, la inclusión de parámetros como "C=D;O=A" en la URL es inusual y podría indicar intentos de explorar vulnerabilidades en el servidor.

GET /dashboard/docs/images/transfer-files-ftp/?C=M;O=A HTTP/1.1 localhost:80 192.168.56.102

Similar a la solicitud anterior, la presencia de parámetros como "C=M;O=A" sugiere intentos de explorar o manipular archivos en el servidor a través de la URL.

GET /dvwa/hackable/uploads/phpshell2.php HTTP/1.1ter&name=Pete localhost:80 192.168.56.102 NULLdvwa/c99.php HTTP/1.1phpshell.php HTTP/1.1TTP/1.1TTP/1.localhost:80 192.168.56.102

Esta solicitud hace referencia a archivos como "phpshell2.php" y "dvwa/c99.php", indicando posibles intentos de ejecutar comandos maliciosos en el servidor.

GET /dashboard/docs/images/deploy-git-app/?C=N;O=D HTTP/1.1 P/1 localhost:80

Similar a las solicitudes anteriores, esta parece estar relacionada con la manipulación de archivos y directorios utilizando parámetros como "C=N;O=D".

En términos generales, la presencia de referencias a archivos como "c99.php" y solicitudes con parámetros inusuales sugiere intentos de explotación o exploración de vulnerabilidades en el servidor web. Es importante destacar que "C99.php" es un término asociado comúnmente con un script de shell web utilizado en ataques informáticos para aprovechar vulnerabilidades y obtener acceso remoto no autorizado al sistema.

Para obtener más información sobre "c99.php", se puede consultar el siguiente recurso: https://www.madirish.net/241.

Dado el conocimiento de que el sistema está siendo atacado remotamente mediante el uso de "c99.php", se procederá a realizar un análisis más detallado utilizando la herramienta Autopsy, filtrando por la cadena de caracteres "c99.php", lo que proporcionará resultados adicionales.

Estos registros contienen detalles acerca de intentos de acceso malicioso al servidor mediante el script "c99.php". El atacante ha llevado a cabo múltiples intentos de acceso al script utilizando diversas operaciones, tales como "act=img&img=arrow\_ltr", "act=img&img=refresh", y "act=img&img=ext\_ini". Estas operaciones indican que el atacante está tratando de ejecutar acciones específicas en la interfaz web, como rotar una imagen, actualizarla o iniciar alguna función.

Al examinar la estructura de la solicitud, la dirección IP desde la cual se originó el ataque es claramente visible, correspondiendo a la IP (192.168.56.102). Dado que las direcciones IP en el rango "192.168.x.x" son comúnmente utilizadas en redes locales internas y no son accesibles directamente desde Internet público, esto refuerza la hipótesis de que el ataque es interno y proviene de un dispositivo identificable por la IP (192.168.56.102).

Mas coincidencias con la busqueda de la cadena “c99.php” nos revelan lineas en las que podemos ver con mas detenimiento que ordenes se lanzaron, el exito de estas , asi como la fecha y hora en la que se realizaron, pudiendo hacernos una idea mas clara de los pasos llevados a cabo por el atacante.

A continuación se detalla los procesos realizados ordenados cronológicamente para facilitar su entendimiento.

**[03/Sep/2015:00:19:32 -0700]**

Acción: GET /dvwa/c99.php HTTP/1.1

Respuesta: Código 200 (éxito)

Descripción: Descarga exitosa del script c99.php en el directorio dvwa.

**[03/Sep/2015:00:20:59 -0700]**

Acciones múltiples:

GET /dvwa/c99.php?act=img&img=home HTTP/1.1

GET /dvwa/c99.php?act=img&img=search HTTP/1.1

GET /dvwa/c99.php?act=img&img=buffer HTTP/1.1

... (y otras solicitudes similares)

Respuestas: Código 200 (éxito) para cada solicitud.

Descripción: Realización de varias acciones en el script c99.php, incluyendo manipulación de imágenes.

**[03/Sep/2015:00:21:28 -0700]**

Acción: POST /dvwa/c99.php?act=cmd HTTP/1.1

Respuesta: Código 200 (éxito)

Descripción: Ejecución de comandos del sistema a través de una solicitud POST al script c99.php.

**[03/Sep/2015:00:21:37 -0700]**

Acción: POST /dvwa/c99.php?act=cmd HTTP/1.1

Respuesta: Código 200 (éxito)

Descripción: Continuación de la ejecución de comandos del sistema a través de otra solicitud POST al script c99.php.

Esta línea temporal indica que la descarga y ejecución del script c99.php ocurrieron inicialmente a las 00:19:32, seguido de una serie de acciones específicas en el script y la ejecución de comandos del sistema en momentos posteriores.

<a name="_page12_x72.00_y217.46"></a>**CONCLUSIÓN**

En resumen, el análisis forense del sistema indica la presencia de posibles intentos maliciosos de acceso, originados desde la dirección IP interna 192.168.56.102. Estos eventos coinciden con la creación de un usuario con privilegios de Root y la habilitación de la conexión remota. Una vez establecida esta puerta trasera, se aprovechó la vulnerabilidad c99.php para iniciar múltiples solicitudes, iniciando así la actividad detectada a las [03/Sep/2015:00:19:32 -0700].
JAIRO MORA ENRIQUEZ CURSO 2023 -2024
