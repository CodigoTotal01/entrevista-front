# EntrevistaFront

## Para ejecutar el programa del frontend
(Antes se debera ejecutar el backend → https://github.com/CodigoTotal01/backend-entrevista )
Ejecutar el front → `ng serve` eh ir a  `http://localhost:4200/`. (automaticamente los redijira al login)

# Nota
Todo el contenido en cuando deciciones tecnicas sera por la parte del Front para las del backent dirigirce al anterior enlace, donde hace referencia del backent.
## Deciciones técnicas
* En cuanto al diseño por cuestion de tiempo desidi emplear un template de terceros, de esta forma algun que otro defecto a nivel de maquetación me seria mas facil poder solucionarlo. Esto me permitio ganar mas tiempo para invertirlo en la parte de la creacion del backend y consumo de las API.
* Cuando comence a crear mis servicios (services component) emplee el servicio HttpClient (para el consumo de las API), emple operadores rxjs para simplificar la optencion de la data, y tambien lo emplee para poder guardar el token el usuario e email (guardado en el local storage) los datos fueron enviados por el backent usando JWT. 
* La proteccion de rutas emplee canActivated y canLoad (Guards) para que se respete la seguridad de las paginas ajenas al login y el registro;
* Sistema de rutas empleando LazyLoad para la carga efectiva de mis componentes. 
* Los formularios son reactivos (neuvas caracteristicas de angular)
* Uso de clases e interfaces en casos especiales (dependiendo el uso)

# Problemas durante el desarrollo
* Cuento con conocimientos de testing en angular, pero por el tiempo y falta de conocimientos mas avanzados no implemente en su mayoria estos ya que como bien se sabe realizar la parte del testing puede demorar igual o mas que el propio de la pagina.
* Falta implementar contenders Docker, por que aun no e comenzado mi curso de Docker y por ello no se como se usarlo.






