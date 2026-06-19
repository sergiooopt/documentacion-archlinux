# Documentacion de Arch Linux con MkDocs

Este repositorio contiene mi **documentación personal** sobre la configuración **de Arch Linux** que se puede levantar como una página web gracias a [MkDocs](https://www.mkdocs.org/).

La idea detrás de este repo es tener una documentación sobre las cosas más interesantes que voy modificando en mi sistema operativo Arch Linux, aunque cuento con dualboot con Windows 11 (el cual tengo un poco apartado >_<).

---

## Estructura

```text
documentacion-archlinux/
│
├── docs/            Archivos Markdown de documentación
└── mkdocs.yml       Configuración de MkDocs
```

---

## Puesta en marcha

A continuación se explica **como levantar la web** con la documentación. Necesitamos tener instalado en nuestra máquina:

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

Ahora puedes iniciar el servidor local de MkDocs en **localhost:8000** con `mkdocs serve`.

---

## Licencia 

Se incluye licencia MIT - [LICENSE](LICENSE) para hacer con este repositorio lo que se apetezca, carece un poco de sentido porque es algo más personal y por el momento no está versionado, pero ante todo libertad :)
