---
title: "IRP ante un ataque DDoS"
date: "2024"
description: "Elavoración de politicas de seguridad"
tags: ["Análisis Forense","Informe","Ciberseguridad"]
image: "https://www.challenger-autocaravanas.es/wp-content/uploads/irptechnology-284x300.png"
readingTime: "15"
layout: "article"
---

**Ataque DDoS**
<p>**Autor:**</p><p>Jairo Mora Enriquez</p>|<p>**Fecha Creación:**</p><p>15/05/2024</p>|<p>**Versión:**</p><p>1\.0</p>|

PLAN DE RESPUESTA ANTE DDOS


|<p>**Contacto:**</p><p>jjmorae@gmail.com</p>|<p>**Revisado:**</p><p>Sergio Alcolea Guallar</p>|<p>**Aprobado:**</p><p>Sergio Alcolea Guallar</p>|
| - | - | - |
|**Ataque DDoS**|||
| - | :- | :- |
|<p>**Autor:**</p><p>Jairo Mora Enriquez</p>|<p>**Fecha Creación:**</p><p>15/05/2024</p>|<p>**Versión:**</p><p>1\.0</p>|


|<p>**Contacto:**</p><p>jjmorae@gmail.com</p>|<p>**Revisado:**</p><p>Sergio Alcolea Guallar</p>|<p>**Aprobado:**</p><p>Sergio Alcolea Guallar</p>|
| - | - | - |
|**Ataque DDoS**|||
| - | :- | :- |
|<p>**Autor:**</p><p>Jairo Mora Enriquez</p>|<p>**Fecha Creación:**</p><p>15/05/2024</p>|<p>**Versión:**</p><p>1\.0</p>|

<a name="_page2_x72.00_y123.99"></a>Datos de control



|Título|Plan de respuesta ante DDOS|
| - | - |
|Versión|1\.0|
|Fecha de modificación|19/05/2024|
|Estado|Borrador|
|Idioma|Español|
|Propietario del documento|Jairo Mora|
|Nombre del creador||
|Nombre de la organización del creador|Cybersoft Foroincident Lovers|
|Restricciones de acceso||
Historial de revisión del documento



|**Versión**|**Fecha**|**Autor**|**Resumen de los cambios**|
| - | - | - | - |
|||||
<a name="_page2_x72.00_y464.46"></a>Escenario de ataque

Nos avisan de que el servidor está tardando en responder, como que le cuesta más de lo normal. Es un ataque muy temprano por la mañana. En el fondo, lo que le pasa a este servidor, es que está recibiendo un ataque de denegación de servicios, se le satura de peticiones y queda incapacitado para revisar el resto de actividad. Tenemos un servidor en Cloudflare. Alto registro de incidentes en plataforma SIEM.


<a name="_page3_x72.00_y123.99"></a>Roles y responsabilidades (RACI)



|**Actividad / Tarea**|**CEO**|**CISO**|**Equipo de TI**|**IRT**|
| - | - | - | - | - |
|Detección del ataque DDoS|I|A|C|R|
|Evaluación del alcance y el impacto del ataque|I|A|C|R|
|Implementación de medidas de contención|I|A|R|R|
|Mitigación del ataque DDoS|I|A|R|R|
|Comunicación interna del incidente|A|R|I|I|
|Comunicación externa (clientes, medios)|A|R|I|I|
|Notificación a las autoridades pertinentes|A|R|I|I|
|Análisis forense del incidente|I|A|C|R|
|Revisión y mejora de políticas y procedimientos|A|R|C|C|
|Capacitación en seguridad cibernética para empleados|I|R|C|C|
|Evaluación post-incidente y lecciones aprendidas|A|R|C|C|



- **R (Responsable)**: La persona o grupo que ejecuta la tarea.
- **A (Accountable)**: La persona que tiene la última responsabilidad y toma las decisiones finales.
- **C (Consulted)**: La persona o grupo que debe ser consultado antes de tomar una decisión o acción.
- **I (Informed)**: La persona o grupo que debe ser informado después de que se ha tomado una decisión o acción.

<a name="_page4_x72.00_y123.99"></a>Diagrama de flujo


<a name="_page5_x72.00_y123.99"></a>Acciones de triaje

El triaje es una etapa esencial en la gestión de incidentes, especialmente durante un ataque DDoS. Las acciones de triaje comienzan con la recepción y registro del incidente, donde se recopila información inicial crucial, como la fecha y hora de detección, los sistemas afectados, el nombre del reportante y una descripción preliminar del problema. Este registro detallado establece un punto de referencia fundamental para todo el proceso de respuesta.

A continuación, se valida el incidente para confirmar que se trata efectivamente de un ataque DDoS y no de una falsa alarma. Esto implica revisar las alertas de monitoreo de red, analizar patrones de tráfico inusual y consultar con los proveedores de servicios de internet (ISP) para corroborar las anomalías detectadas. Esta validación asegura que los recursos se dediquen a gestionar un incidente real.

Una vez confirmado el ataque, se evalúa su gravedad, considerando el volumen de tráfico, la duración del ataque, los tipos de servicios afectados y el impacto en la disponibilidad de servicios críticos. Esta evaluación permite determinar la urgencia y el nivel de respuesta necesario.

Seguidamente, se identifica el alcance del impacto del ataque. Esto implica evaluar cuáles sistemas están afectados, si el ataque es local o más amplio, y cómo afecta a la infraestructura y a los usuarios finales. Con esta información, se puede tener una visión clara del alcance del ataque para planificar la respuesta adecuada.

Luego, se asigna una prioridad al incidente basado en su gravedad, el riesgo para la reputación de la organización y el potencial de pérdida financiera. Priorizar el incidente de esta manera asegura que se atiendan primero los problemas más críticos.

En esta etapa, se notifica a las partes relevantes y se escala el incidente si es necesario. Esto incluye informar al equipo de respuesta a incidentes, a los administradores de sistemas y redes, y escalar a la alta dirección si el impacto es severo. También se comunica con los proveedores de servicios de mitigación DDoS para coordinar la respuesta.


Con la información y priorización claras, se inician las medidas de respuesta. Estas incluyen la implementación de filtros en el firewall para bloquear el tráfico malicioso, la activación de servicios de mitigación DDoS, la redirección del tráfico a través de proveedores de mitigación y la posible aislamiento de los sistemas afectados para contener el ataque. Estas acciones inmediatas buscan reducir el impacto del ataque y restaurar la disponibilidad de los servicios afectados lo antes posible.

Durante todo este proceso, se mantiene una documentación continua y detallada de todas las acciones y cambios en el estado del incidente. Esta documentación es crucial para tener un registro completo del incidente, facilitando el análisis posterior y la implementación de lecciones aprendidas.

Finalmente, se realiza una evaluación inicial de la efectividad de las medidas de mitigación implementadas. Esto implica verificar la reducción del tráfico malicioso, la restauración de los servicios y el feedback de los proveedores de mitigación. Esta evaluación asegura que las acciones tomadas están funcionando y permite ajustar la respuesta si es necesario.

<a name="_page6_x72.00_y427.56"></a>Acciones de investigación

En la fase de investigación de un Incidente de Respuesta a Incidentes (IRP) frente a un ataque DDoS, es crucial recopilar y analizar información detallada para entender mejor el ataque, su origen y su metodología. Este proceso comienza con un análisis exhaustivo de los logs y el tráfico de red para identificar patrones inusuales. Revisar los registros de eventos y el tráfico ayuda a determinar la naturaleza del tráfico, identificar las IP de origen y comprender los métodos utilizados en el ataque, utilizando herramientas como SIEM (Security Information and Event Management), NetFlow y Wireshark.

La identificación de direcciones IP maliciosas es un paso fundamental. Se extraen y analizan las direcciones IP involucradas en el ataque para distinguir entre tráfico legítimo y malicioso. Para este propósito, se utilizan firewalls, listas negras y plataformas de Threat Intelligence.

Además, se aprovechan fuentes de inteligencia de código abierto (OSINT) para obtener información adicional sobre las direcciones IP y las posibles amenazas. Recursos como Shodan, VirusTotal, AbuseIPDB, WHOIS Lookup, redes sociales y sitios como Pastebin son muy útiles. Shodan, por ejemplo, permite buscar dispositivos conectados a internet que podrían estar involucrados, mientras que VirusTotal ayuda a analizar archivos y URLs en busca de malware y proporciona información sobre la reputación de las IPs. AbuseIPDB es una base de datos colaborativa para denunciar IPs maliciosas, y WHOIS Lookup ofrece detalles sobre la propiedad y el registro de dominios y direcciones IP. Monitorear redes sociales como Twitter y sitios como Pastebin también puede revelar información publicada por los atacantes sobre sus actividades o herramientas utilizadas.

Revisar los indicadores de compromiso (IoCs) es otro paso importante. Los indicadores del ataque actual, como direcciones IP, hashes de archivos y patrones de tráfico, se comparan con bases de datos de IoCs conocidas para identificar si el ataque es parte de una campaña más amplia. Herramientas como MISP (Malware Information Sharing Platform), AlienVault OTX y feeds de Threat Intelligence son útiles en esta tarea.

Consultar foros y comunidades de seguridad proporciona información adicional. Buscar en foros especializados y comunidades de ciberseguridad puede revelar detalles sobre técnicas, tácticas y procedimientos (TTPs) utilizados en ataques recientes. Recursos como Reddit, Stack Exchange (Security) y foros especializados como BleepingComputer son valiosos para este propósito.

El análisis forense digital se realiza para recolectar evidencias y entender cómo el ataque afectó a los sistemas y si hubo alguna intrusión adicional. Herramientas como EnCase, FTK (Forensic Toolkit) y Volatility Framework son esenciales para llevar a cabo esta tarea.

Colaborar con proveedores de servicios de mitigación DDoS también es crucial. Trabajar con proveedores como Cloudflare, Akamai y Arbor Networks puede proporcionar información técnica y apoyo adicional, permitiendo una mitigación más efectiva del ataque.

Finalmente, se recolecta datos de inteligencia de amenazas. Utilizar plataformas y servicios de inteligencia de amenazas como FireEye, CrowdStrike y Recorded Future proporciona una visión más completa del paisaje de amenazas y posibles ataques futuros.

Acciones de contención, erradicación y <a name="_page8_x72.00_y227.36"></a>recuperación

<a name="_page8_x72.00_y259.81"></a>Contención

La fase de contención en la respuesta a un ataque DDoS se centra en limitar el impacto del ataque en los sistemas y servicios afectados. Este proceso comienza con la implementación de medidas inmediatas para filtrar y bloquear el tráfico malicioso. Los firewalls y sistemas de prevención de intrusiones (IPS) juegan un papel crucial en esta etapa, ya que pueden ser configurados para bloquear el tráfico proveniente de direcciones IP sospechosas. Además, los routers y switches pueden ser ajustados para limitar el ancho de banda disponible para el tráfico no autorizado, ayudando a mitigar la sobrecarga en la red.

Otro paso vital en la contención es el uso de servicios de mitigación DDoS ofrecidos por proveedores especializados como Cloudflare, Akamai o Arbor Networks. Estos servicios pueden desviar y filtrar el tráfico antes de que llegue a la red de la organización, asegurando que solo el tráfico legítimo pase. La colaboración con el proveedor de servicios de internet (ISP) es también esencial; muchos ISPs ofrecen soluciones de mitigación que pueden activarse rápidamente en respuesta a un ataque.

Durante la contención, es importante monitorear continuamente la situación para ajustar las estrategias en función de la evolución del ataque. Herramientas de monitoreo en tiempo real permiten a los equipos de seguridad evaluar la efectividad de las medidas de contención y hacer ajustes necesarios. Además, se recomienda aislar los sistemas críticos afectados por el ataque para protegerlos y garantizar que continúen operando con la mínima interrupción posible.

<a name="_page9_x72.00_y123.99"></a>Erradicación

Una vez que el ataque ha sido contenido, la siguiente fase es la erradicación, que implica eliminar completamente las causas subyacentes del ataque y asegurarse de que no vuelva a ocurrir. En esta etapa, es fundamental analizar las vulnerabilidades explotadas durante el ataque y aplicar las correcciones necesarias. Esto puede incluir la actualización de software, la implementación de parches de seguridad y la reconfiguración de sistemas para eliminar las debilidades explotadas.

Además, se deben revisar y reforzar las políticas de seguridad y las configuraciones de red. Esto puede involucrar la reconfiguración de firewalls, la implementación de reglas de filtrado más estrictas y la revisión de las configuraciones de los servicios expuestos a internet. La segmentación de la red también puede ser una medida efectiva, asegurando que el tráfico entre diferentes partes de la red esté estrictamente controlado y monitorizado.

Durante la erradicación, es crucial continuar monitoreando la red y los sistemas en busca de signos de actividad maliciosa residual. Herramientas de detección de intrusiones y análisis forense pueden ayudar a identificar cualquier rastro del ataque que pueda haber pasado desapercibido inicialmente.

<a name="_page9_x72.00_y454.72"></a>Recuperación

La fase final del proceso de respuesta a un incidente es la recuperación, que se enfoca en restaurar todos los sistemas y servicios a su estado normal de operación. La recuperación comienza con la reactivación de los servicios afectados, asegurándose de que estén completamente funcionales y seguros antes de volver a ponerlos en línea. Es esencial realizar pruebas exhaustivas para verificar que todos los sistemas operen correctamente y que no haya problemas persistentes.

La comunicación clara y efectiva con los usuarios es fundamental durante la recuperación. Informar a los usuarios sobre el progreso de la recuperación y cualquier cambio en los servicios es crucial para mantener la confianza y minimizar el impacto en las operaciones diarias.

Además, se debe llevar a cabo una revisión post-incidente para evaluar la respuesta al ataque y documentar las lecciones aprendidas. Esta revisión implica una evaluación exhaustiva de qué funcionó bien y qué podría mejorarse, así como la actualización del plan de respuesta a incidentes basado en esta experiencia. La capacitación y el entrenamiento continuo del personal de seguridad son vitales para asegurar que la organización esté mejor preparada para enfrentar futuros ataques.



|<p>**Contacto:**</p><p>jjmorae@gmail.com</p>|<p>**Revisado:**</p><p>Sergio Alcolea Guallar</p>|<p>**Aprobado:**</p><p>Sergio Alcolea Guallar</p>|
| - | - | - |

12
