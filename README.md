# CypressGrupo13
# Nota: En los siguientes enlaces se pueden encontrar los repositorios con las pruebas en Kraken y Cypress: 

[KrakenGrupo13](https://github.com/CamiloAndresGTRUniandes/KrakenGrupo13)

[CypressGrupo13](https://github.com/CamiloAndresGTRUniandes/CypressGrupo13)


Criterios de revisión

# 1. Funcionalidades bajo pruebas:

| Id | Nombre |
| ------ | ------- |
| 1 | Posts|
| 2 |Pages|
| 3 |Your Profile|
| 4 |Tags|
| 5 |Member|
| 6 |Ajustes|
| 7 |Posts > published|
| 8 |Posts > scheduled|

# 2. Escenarios de prueba.


| Id | Nombre | Escenarios |
| ------ | ------- |---------|
| 1. | Posts| Crear un nuevo post|
| 2.  |      |Editar un post publicado previamente|
| 3. || Crear un post agendado para ser publicado en el futuro|
| 4. |Posts > scheduled|Hacer unpublish de un post agendado |
| 5. |Posts > published|Eliminar un post publicado|
| 6. |Pages|Crear una nueva pagina|
| 7. ||Agendar la creación de una nueva pagina|
| 8. ||Eliminar una pagina|
| 9. ||Hacer unschedule de una pagina agendada|
| 10 .||Hacer unpublish de una pagina publicada|
| 11. |Your Profile|Modificar mi contraseña de perfil|
| 12. ||Modificar mis datos de perfil|
| 13. |Tags|Crear un tag|
| 14. ||Actualizar un tag
| 15. ||Eliminar un tag
| 16. |Member|Actualizar a  un member
| 17. ||Crear un member y comprobar que si lo guardo|
| 18. ||Borrar un member|
| 19. |Ajustes|Modificar el color de la aplicacion|
| 20. ||Modificar el titulo de la aplicacion|



# 3. Pros y contras

## Cypress
### Pros:
1. Fácil codificación de los casos de prueba.
2. Excelente acoplamiento con el uso de etiquetas XPath
3. Excelente integración con librerías externas (ejemplo fakerjs)
4. Muy buena integración con javaScript
5. Es muy rapido en la ejecución
### Contras:
1. Que no es posible grabar videos
2. Que no genera reportes de forma automática

# 4. Pasos de ejecución
## Versiones:
### NodeJs:
![image](https://user-images.githubusercontent.com/111469024/201499278-779f3f7e-087f-4107-a0aa-c6813cfc2e8f.png)


### Ghost:
Versión actual:

![imagen](https://user-images.githubusercontent.com/111519973/201498178-353198c6-ce73-4c19-aa5e-538996d086ce.png)
Versión regresión visual:
![imagen](https://user-images.githubusercontent.com/111519973/202934767-9ad2507b-733a-45bc-aa02-b9600b807a3c.png)



### Pasos:
1. Descargar el repositorio actualizado desde : [Repositorio con pruebas](https://github.com/CamiloAndresGTRUniandes/CypressGrupo13.git)
2. Guardar los datos de acceso a Ghost(email y contraseña) en el archivo \cypress\e2e\3-ghost\pages_object\userData.js, quedando el archivo como se puede observar en la siguiente imágen:
![image](https://user-images.githubusercontent.com/111469024/201499357-53fc9973-5766-4709-911a-c4487cdbc0c8.png)
3. Si desea cambiar la ruta de ghost para la ejecución de los casos de prueba puede hacer en el archivo \cypress\e2e\3-ghost\pages_object\Home.js:
![imagen](https://user-images.githubusercontent.com/111519973/202934941-30ad1c86-1d7f-40a7-82a7-111950435aec.png)

4. Para instalar las dependencias necesarias se debe correr el siguiente comando en la ruta raiz 
 ### npm install
 ![image](https://user-images.githubusercontent.com/111469024/201499422-cca275a1-115f-4940-92aa-66ddd95a2367.png)

5. Para ejecutar los casos de prueba se debe correr el siguiente comando en la ruta raiz 
 ### npx cypress open
 ![image](https://user-images.githubusercontent.com/111469024/201499427-18a8614a-b089-45e3-b95c-766a463808d6.png)

6. En la ventana de Cypress dar click a la opción E2E Testing
![image](https://user-images.githubusercontent.com/111469024/201499467-8cc3d089-7973-4437-8fc8-e9391b9a64b2.png)

7. Luego de esto seleccionar el navegador de nuestra preferencia y dar click al boton Start e2e testing: (Nosotros usamos edge dado que con chrome se usa mayor cantidad de recursos)
![image](https://user-images.githubusercontent.com/111469024/201499542-fe5745b3-89e8-4f46-878b-2e61649af9c9.png)

8. Seleccionar la prueba a ejecutar:
![imagen](https://user-images.githubusercontent.com/111519973/202935348-1436f802-8a06-4bb5-889d-3ec97c603fb3.png)

9. En la siguiente imágen podemos ver como se ejecutan las pruebas:
![image](https://user-images.githubusercontent.com/111469024/201523558-2879f479-b391-4df6-bc22-ec0db2e18175.png)

10. Los escenarios de pruebas de regresion
![imagen](https://user-images.githubusercontent.com/111519973/202935428-4e33298e-1915-4d8f-b349-ab94deba344a.png)

11. Modal con la ruta de reportes de regresion


![imagen](https://user-images.githubusercontent.com/111519973/202935567-8af73f7a-c68b-41c9-bd29-66b9d3add8ca.png)

12. Copia la ruta del reporte y ver el antes y el despues(imagen del reporte)

![imagen](https://user-images.githubusercontent.com/111519973/202935728-8014b90d-3f37-4305-9d2f-7edb491360c3.png)



## Las rutas a los documentos con las estrategias de pruebas actualizadas son:

   a.  [Estrategia 1](https://uniandes-my.sharepoint.com/:b:/g/personal/c_guevarat_uniandes_edu_co/ERT-COBT4vdLpjGATIuMeNkBocFtiasAeRVKXIBpybhXpg?e=GDabaw)
   
   b.  [Estrategia 2](https://uniandes-my.sharepoint.com/:b:/g/personal/c_guevarat_uniandes_edu_co/EVJ5O73YYIlKrXtciCnl80kBH8T3qWeyHSi9EavqQfcLXQ?e=uJ7KUA)
   

