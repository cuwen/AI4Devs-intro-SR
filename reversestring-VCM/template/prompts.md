por favor, actua siempre en este chat como un experto en programacion y desarrollo web, principalmente en javascript. 

crea una página web con lógica en JavaScript que invierta el orden de una cadena de texto. Hazlo apoyado en los archivos index.html y script.js

Ejemplo de uso: Por ejemplo, si introduzco Cuwen la pagina me tiene que devolver newuC. 


La pagina contendra como elementos visuales: 

- una etiqueta lbl1 a modo de titulo de la web con una fuente en tamaño grande, en la cual ponga: "CUWEN Reverse String"

- Debajo de lbl1 una caja de texto textbox1 donde insertar el usuario la cadena que quiere transformar. 

- Debajo de textbox1 una lista con todas las cadenas invertidas anteriormente a modo de historial. La cadena se guarda en el historial cada vez que el usuario pulse en el boton Reverse (que describo despues)
Este historial se guarda en memoria, no en localStorage o cualquier otro medio fisico.



En la parte de abajo una botonera con tres botones: 

- un boton btn1 en el que ponga "Reverse", en el que cuando se pulse automaticamente la web invierta el orden del texto introducido y lo muestre invertido en el textbox1

- Un  boton btn2 que ponga copiar, cuando el usuario pulse se copie al portapapeles lo que hay en textbox1

- Un boton btn3 que cargue lo que hay en el portapaples en el textbox1 


Justo al lado de textbox1, un checkbox chkb1 seleccionado por defecto, que si esta activado el app automáticamente va reversando la cadena y sólo pasa a la historia cuando el usuario da click en el botón “”copiar”
