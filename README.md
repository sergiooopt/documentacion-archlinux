# Documentacion de Arch Linux con MkDocs

Este repositorio contiene mi **documentación personal** sobre la configuración **de Arch Linux** que se puede levantar como una página web gracias a [MkDocs](https://www.mkdocs.org/).

La idea detrás de este repo es tener una documentación sobre las cosas más interesantes que voy modificando en mi sistema operativo Arch Linux, aunque cuento con dualboot con Windows 11 (el cual tengo un poco apartado >_<).

---

## Visualización

Para visualizar la documentación desde página web podemos entrar en [Github Pages](https://sergiooopt.github.io/documentacion-archlinux/).

El flujo de trabajo para levantar la web con mkdocs es muy sencillo. Cuando lanzas `mkdocs gh-deploy` hace por ti:

1. `mkdocs build` temporal.
2. Pasar el build a la rama gh-pages (si no existe se crea).
3. Hacer commit y pushear a **origin** por defecto.

---

## Estructura

```text
documentacion-archlinux/
│
├── docs/         Archivos Markdown de documentación
├── site/         Web construida con mkdocs build
└── mkdocs.yml    Archivo de configuración
```

---

## Puesta en marcha

A continuación se explica como **levantar la web** en un entorno **local**. Necesitamos tener instalado en nuestra máquina:

* Python
* pip

También debemos clonar el repositorio:

```bash
git clone https://github.com/sergiooopt/configuracion-archlinux.git
cd configuracion-archlinux
```

### Dependencias de Python

Creamos un entorno virtual para las dependencias de Python:

```bash
$ python -m venv venv
$ source venv/bin/activate
```

Instalamos las dependencias:

```bash
pip install mkdocs mkdocs-material
```


### Levantar web

Ahora puedes iniciar el servidor local con `mkdocs serve`, por defecto arranca en **localhost:8000**.

---

## Licencia 

MIT - ver [LICENSE](LICENSE) para más detalles.
