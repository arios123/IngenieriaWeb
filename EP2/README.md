# Modelo de la Base de Datos

[Modelo de la BD](Modelo_base_de_datos.png)

## MySQL

Para empezar, durante los primeros pasos y lanzamientos, usaria MySQL. 

Lo usaria porque puede manejar relaciones entre usuarios y sus amigos, mensajes, y sus publicaciones.

Ademas MySQL es mas rapido entonces puede manejar mucha gente si lo usan mucho.

MySQL tambien es un motor popular y bien usado entonces hay mucha informacion sobre como usar y tambien hay mucho apoyo de la comunidad. Seria mas facil encontrar respuestas a errores y complicaciones.

Es un modelo mas facil y menos complicado.

Para escalar este modelo, seria casi igual para escalar lo horizontal como vertical.

Para escalar horizontal:

1. Hay que distribuir el data sobre differentes maquinas. Esta parte es mas compleja.
2. Esto si te sirve para tener mas copias del data en caso que hay algun eror con un servidor.

Para escalar vertical: 

1. Es mas simple porque solo se tiene que anadir mas espacio fisico al servidor.
2. Hay solo una copia del data y se puede perder facil si algo pasa con el servidor
3. Es possible llegar al limite de cuanto espacio fisico se puede anadir al servidor

## PostgreSQL

Ya cuando hay aspectos mas complejos integrados a la aplicacion, puede ser que PostgreSQL sea mas util y mas rapido.

Tambien es un modelo relacional entonces es perfecto para manejar relaciones como usuarios, amigos, amistades, y mensajes. 

Maneja bien consultas complejas y grandes volúmenes de datos, y puede escalar para acomodar una red social en crecimiento con muchas interacciones.

Puede ser útil para implementar la funcionalidad de búsqueda de mensajes o de trabajos. Esto sera mas importante cuando hay mas gente usando la aplicacion y cuando hay mas funcionalidades como tener filtros.

La gestión de conexiones entre usuarios (amigos, seguidores) es sencilla, y los sistemas de mensajería se pueden modelar utilizando tablas relacionadas (usuarios, mensajes, conversaciones).

Este modelo es parecido al MySQL pero es mas poderoso. 

Para escalar vertical:

1. Es mas simple porque solo se tiene que anadir mas espacio fisico al servidor.
2. Hay solo una copia del data y se puede perder facil si algo pasa con el servidor
3. Es possible llegar al limite de cuanto espacio fisico se puede anadir al servidor
4. Como esto se usaria con muchos usuarios, un servidor puede empezar a tardar mas tiempo para realizar consultas.

Para escalar horizontal:

1. No hay limite para cuantos servidors puedes anadir. 
2. Puedes distribuir la carga y puede trabajar mas rapido.
3. Mas proteccion, si hay muchos servidores, la aplicacion puede continuar si uno falla.
4. Se vuelve aún más complejo.