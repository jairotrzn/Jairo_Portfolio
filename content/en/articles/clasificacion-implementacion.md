---
title: "Clasificación e Implantación de un Sistema de Detección de Incidentes"
date: "2024"
description: "Elavoración de politicas de seguridad"
tags: ["Análisis Forense","Informe","Ciberseguridad"]
image: "https://www.servicetonic.com/wp-content/uploads/2020/10/Portada-Blog-ITIL-gestion-de-incidencias.png"
readingTime: "20"
layout: "article"
---

Clasificación e Implantación de un Sistema de Detección de Incidentes

**Jairo Mora**

<a name="_page2_x85.32_y102.46"></a>Objetivos

Somos Cybersoft y al ser una empresa de consultoría informática y transformación digital estamos expuestos a cierto tipo de ataques e incidentes. Las empresas como la nuestra tienen una gran variedad de servicios digitalizados y almacenados informáticamente, lo que conlleva a que cierto tipo de incidentes los cuales nos pueden afectar.

Debido al crecimiento de CyberSoft estos últimos años, hemos decidido implantar un sistema de detección y gestión de incidentes de ciberseguridad. Para ello veremos cómo nos podremos defender de las amenazas que pueden afectar a la empresa.

El objetivo de este documento será detallar la forma en la que nos pondremos en marcha para cumplir con las expectativas en cuanto a seguridad se refiere.


<a name="_page2_x85.32_y302.08"></a>Fases


- **Fase 1:** Nos apoyaremos en informes publicados relativos a amenazas de organizaciones y proveedores de herramientas de ciberseguridad.
- **Fase 2:** Estableceremos herramientas y mecanismos de monitorización y detección.


<a name="_page2_x85.32_y419.97"></a>Enfoque real

Vamos a realizar una lista de los potenciales incidentes que podemos tener, basándonos en las tendencias de incidentes a nivel nacional y en nuestras propias debilidades. INCIBE confirma que los ciberataques están creciendo (crecimiento del 8.8% en España). Centraremos nuestros esfuerzos en mejorar nuestros puntos débiles, analizando y monitoreando.


<a name="_page3_x85.32_y363.82"></a>Adaptativo

Sabemos que es fundamental concienciar a la plantilla de trabajadores de que debe alertar al departamento de IT sobre todo aquello que pueda resultar sospechoso. Desde un correo de spam, hasta cualquier acceso no reconocido dentro de la empresa. Como medida de precaución, instalaremos un sistema de detección de incidentes de ciberseguridad.

Partimos de que todo incidente debe pasar un primer filtro.

La monitorización de los equipos es fundamental para detectar cualquier tipo de amenaza dentro de la empresa. Pues nos aporta un control muy amplio de la situación en la que ésta se encuentra.

Creemos que no solo en los equipos está el control. optamos entonces por tener también el control de nuestros activos.

Existen muchos frameworks que nos ayudan a detectar y a clasificar las amenazas. ¿Cómo detecto estas amenazas?. Las mismas herramientas que te sirven para defenderte, te sirven también detectarlas.


Las principales amenazas que se han registrado entre 2022 y 2023, han sido estas. Sabiendo esto, podemos hacer un mayor hincapié en amenazas por ransomware. Teniendo más peso los logs que se relacionen con este tipo de ataques.

Todas estas amenazas, se pueden producir dentro de nuestra empresa.

Este 2023, según las empresas los estudios de Cyvolt e Innovery, ha habido ciertas tendencias en cuanto a los incidentes. Se han incrementado los ataques de Ransomware y ataques DDoS. Podemos ver que diversas empresas marcan los ataques de Ransomware y DDoS como los más comunes.

<a name="_page4_x85.32_y487.44"></a>Identificación

Debemos saber identificar bien una amenaza y diferenciarla de un simple evento.

Se entiende por **evento** de seguridad la ocurrencia detectada de un estado de un sistema, servicio o red que indica una posible violación de la política de seguridad de la información, un fallo de las salvaguardas, o una situación desconocida hasta el momento y que puede ser relevante para la seguridad.

Los **eventos** incluyen un usuario que se conecta a un archivo compartido, un servidor que recibe una solicitud de una página web, un usuario que envía un correo electrónico y un cortafuegos que bloquea un intento de conexión.

Un **incidente**, es cualquier evento que no sea parte de la operación estándar de

un servicio que ocasione, o pueda ocasionar, una interrupción o una reducción de la calidad de ese servicio.

Un incidente de seguridad informática es una violación o amenaza inminente de violación de las políticas de seguridad informática, políticas de uso aceptable o prácticas de seguridad estándar. Ejemplo de esto es:

Un atacante obtiene datos confidenciales y amenaza con hacerlos públicos si la organización no paga una suma de dinero designada.

Sabemos que es fundamental concienciar a la plantilla de trabajadores de que deben alertar al departamento de IT sobre todo aquello que pueda resultar sospechoso. Desde un correo de spam, hasta cualquier acceso no reconocido dentro de la empresa.

A la hora de implantar un sistema de detección de incidentes, hemos de tener claro el ciclo de vida de este.

Debemos en primer lugar hacer un triaje de aquellas amenazas que se notifican. Debe existir un marco a seguir para analizar y clasificar cada amenaza.

<a name="_page5_x85.32_y360.94"></a>Clasificación

Una vez habiendo realizado este estudio y basándonos en él y en las tendencias mundiales, hemos realizado una lista de los posibles incidentes que nos afectarían, además de clasificarlos según diferentes criterios.

Naturaleza del Incidente:

**Ataques de Malware:**

- Virus, gusanos, troyanos.
- Ransomware.
- Spyware.

  **Ataques de Ingeniería Social:**

- Phishing.
- Ataques de Denegación de Servicio (DoS) y Distribuido (DDoS).
- Sobrecarga de servidores.

  **Violaciones de Datos y Pérdida de Información:**

- Acceso no autorizado a datos.
- Brechas en la seguridad de bases de datos.

  **Ataques a la Infraestructura de Red:**

- Secuestro de sesiones.
- Ataques Man-in-the-Middle.

  **Criticidad**:

  **Crítico:**

- Incidentes que podrían paralizar completamente las operaciones de la empresa.
- Pérdida total o compromiso de datos críticos.

  **Alto:**

- Incidentes que afectan significativamente las operaciones.
- Pérdida parcial o compromiso de información sensible.

  **Moderado:**

- Incidentes que afectan de manera limitada las operaciones.
- Pérdida de datos no críticos.

  Bajo:

- Incidentes con impacto mínimo en las operaciones y datos.

  **Número de Sistemas Afectados:**

  **Aislado:**

- Un sistema afectado.

  **Localizado:**

- Varios sistemas dentro de un área específica.

  **Extendido:**

- Afecta a múltiples áreas o sucursales.

  **Generalizado:**

- Afecta a toda la organización.

  **Impacto en la Organización:**

  **Operacional:**

- Interrupción de servicios.
- Degradación del rendimiento.

  **Financiero:**

- Pérdida de ingresos.
- Costos de recuperación.

  **Reputacional:**

- Daño a la imagen de la empresa.
- Pérdida de confianza de clientes y socios.

  **Requerimientos Legales y Regulatorios:**

1. **Incumplimiento de Normativas de Protección de Datos:**
- GDPR, HIPAA, etc.
2. **Violación de Regulaciones de Seguridad:**
- Normativas sectoriales específicas.

Es esencial contar con un plan de respuesta a incidentes y políticas de seguridad sólidas para minimizar el riesgo y mitigar los impactos en caso de incidentes. Además, la formación continua del personal en ciberseguridad es fundamental para prevenir y responder eficientemente a estas amenazas.

<a name="_page7_x85.32_y375.94"></a>Implantación de un sistema de detección.

<a name="_page7_x85.32_y428.39"></a>Introducción.

En el contexto empresarial actual en el que se encuentra Cybersoft y dado que nuestra principal preocupación es la ciberseguridad en todos los servicios que ofrecemos ya sea desarrollo web , de aplicaciones entre varios de los trabajos que realizamos, la ciberseguridad se ha vuelto una preocupación crucial para asegurar la continuidad y salvaguardar la información que manejamos de nuestros clientes.

Los incidentes cibernéticos pueden resultar en pérdida de datos confidenciales suponiendonos como consecuencia un gran daño de reputación a nuestra organización con las respectivas consecuencias económicas que eso supone.

Por tanto es imprescindible que Cybersoft establezca un sistema robusto de detección de incidentes de ciberseguridad para identificar y responder eficazmente a posibles amenazas.

<a name="_page8_x85.32_y70.02"></a>Objetivos.

Tener claro los objetivos que queremos alcanzar mediante la implementación de diferentes herramientas y mecanismos de ciberseguridad es algo esencial. Dentro de Cibersoft vemos claro que nuestros principales objetivos se pueden clasificar en 4 puntos claros.

1. Implementar un sistema proactivo de detección de ciberseguridad
1. Establecer herramientas y mecanismos de monitorización en tiempo real para identificar actividades sospechosas en la red y los sistemas informáticos.
1. Mejorar la capacidad de respuesta ante incidentes,minimizando el tiempo de detección y mitigación.
1. Salvaguardar la integridad,confidencialidad y disponibilidad de la información de la empresa.

<a name="_page8_x85.32_y271.73"></a>Estrategia de implementación.

Dado que inicialmente nuestra empresa cuenta con un presupuesto reducido, iniciaremos esta securización utilizando en la medida de lo posible soluciones Open Source. La estrategia a seguir es la siguiente.

1. **Sistema de Gestión de Eventos e Información de Seguridad (SIEM):** Una plataforma que recopila, relaciona y analiza registros de eventos de seguridad de varios dispositivos y sistemas en tiempo real para identificar patrones de actividad sospechosa.

   **ELK Stack** es una opción sólida para la gestión de eventos y la información de seguridad debido a su capacidad para recopilar, relacionar y analizar registros de eventos de seguridad en tiempo real. Además, ofrece una interfaz visual intuitiva (Kibana) para identificar patrones de actividad sospechosa.

   **Otras alternativa de código abierto:** Elasticsearch, Logstash, Kibana (ELK Stack) o Graylog.

2. **Sistema de Prevención de Intrusiones (IPS):** Dispositivos que monitorean el tráfico de red en busca de actividades maliciosas o anomalías y pueden tomar medidas proactivas para bloquear o prevenir ataques.

   **Snort** es una excelente opción de código abierto para la prevención de intrusiones, ya que es capaz de monitorear el tráfico de red en busca de actividades maliciosas o anomalías y tomar medidas proactivas para bloquear o prevenir ataques. Además, cuenta con una amplia comunidad de usuarios que contribuyen al desarrollo y mantenimiento del software.

   **Otras alternativas de código abierto**: Suricata.

3. **Análisis de Comportamiento de Usuarios (UBA):** Herramientas que monitorean el comportamiento de los usuarios dentro de la red y los sistemas para detectar actividades anómalas que podrían indicar compromisos de cuentas o acceso no autorizado.

   **Osquery** es una herramienta potente que monitorea el comportamiento de los usuarios dentro de la red y los sistemas para detectar actividades anómalas. Su capacidad para analizar datos en tiempo real y su flexibilidad para realizar consultas complejas lo convierten en una opción ideal para detectar compromisos de cuentas o acceso no autorizado.

   **Otras alternativas de código abierto**: Osquery.

4. **Escáneres de Vulnerabilidades:** Software que escanea la red y los sistemas en busca de vulnerabilidades conocidas que podrían ser explotadas por atacantes.

   **OpenVAS** es una herramienta de escaneo de vulnerabilidades de código abierto que ofrece una amplia cobertura en la búsqueda de vulnerabilidades conocidas en la red y los sistemas. Su capacidad para identificar y priorizar las vulnerabilidades de manera efectiva lo convierte en una opción ideal para proteger contra posibles ataques.

   **Otras alternativas de código abierto:** OpenVAS, Nessus Essentials (versión gratuita limitada).

5. **Honeypots:** Sistemas de señuelo diseñados para atraer a los atacantes y recopilar información sobre sus tácticas y técnicas.

   **Honeyd** es una excelente alternativa de código abierto para implementar honeypots, ya que está diseñado para atraer a los atacantes y recopilar información sobre sus tácticas y técnicas. Su capacidad para simular múltiples sistemas y servicios lo convierte en una herramienta efectiva para detectar y mitigar posibles amenazas.

   **Otras alternativas de código abierto:** Honeyd, Modern Honey Network (MHN).

6. **Firewalls de Próxima Generación (NGFW):** Dispositivos que van más allá de las funciones tradicionales de firewall para inspeccionar el tráfico de red en busca de amenazas avanzadas y aplicar políticas de seguridad granulares.

   **OPNsense** es una opción robusta de código abierto para firewalls de próxima generación, ya que va más allá de las funciones tradicionales de firewall para inspeccionar el tráfico de red en busca de amenazas avanzadas. Su capacidad para aplicar políticas de seguridad granulares y su amplia comunidad de usuarios lo convierten en una opción ideal para proteger la red contra posibles ataques.

   **Otras alternativas de código abierto:** OPNsense, pfSense.

7. **Análisis de Tráfico de Red:** Herramientas que analizan el tráfico de red en busca de patrones sospechosos o maliciosos, como comunicaciones con dominios maliciosos o transferencias de archivos no autorizadas.

   **Wireshark** es una herramienta líder de código abierto para el análisis de tráfico de red, ya que permite identificar patrones sospechosos o maliciosos en el tráfico de red. Su capacidad para capturar y analizar datos en tiempo real lo convierte en una opción ideal para detectar posibles amenazas y vulnerabilidades en la red.

   **Otras alternativas de código abierto:** Wireshark, Suricata (también puede funcionar como IDS/IPS).

8. **Agentes de Seguridad en los Endpoints:** Software instalado en dispositivos finales (computadoras, servidores, dispositivos móviles) para monitorear y proteger contra actividades maliciosas en el nivel del sistema operativo.

   **OSSEC** es una herramienta de código abierto que ofrece una protección efectiva contra actividades maliciosas en el nivel del sistema operativo en dispositivos finales. Su capacidad para monitorear y proteger contra intrusiones, rootkits y otros ataques en tiempo real lo convierte en una opción ideal para garantizar la seguridad de los endpoints.

   **Otras alternativas de código abierto:** OSSEC.

9. **Inteligencia de Amenazas:** Fuentes de información que proporcionan datos sobre amenazas actuales y emergentes, incluyendo indicadores de compromiso (IOC) y firmas de malware.

   **OpenCTI** es una plataforma de inteligencia de amenazas de código abierto que proporciona datos sobre amenazas actuales y emergentes, incluyendo indicadores de compromiso (IOC) y firmas de malware. Su capacidad para recopilar, correlacionar y analizar información de amenazas lo convierte en una opción ideal para mantenerse al día con las últimas tendencias en ciberseguridad.

   **Otras alternativas de código abierto:** OpenCTI (Cyber Threat Intelligence Platform).

<a name="_page11_x85.32_y99.11"></a>Resultados Esperados.

1. Mejora en la capacidad de detección de incidentes de ciberseguridad.
1. Reducción del tiempo de respuesta ante incidentes.
1. Protección de la información crítica de la empresa.
1. Mejora de la confianza de los clientes y socios comerciales en la seguridad de la empresa.

<a name="_page11_x85.32_y217.00"></a>Conclusiones.

La implementación de un sistema sólido de detección de incidentes de ciberseguridad es esencial para proteger los activos digitales y garantizar la continuidad operativa de la empresa. Al seguir una estrategia integral y seleccionar cuidadosamente herramientas como ELK Stack, nuestra organización estará mejor preparada para enfrentar las amenazas cibernéticas en un entorno empresarial cada vez más complejo y dinámico. La inversión en la capacitación del personal y el desarrollo de políticas y procedimientos adecuados complementarán esta iniciativa, fortaleciendo así la postura de seguridad de la organización.
12
