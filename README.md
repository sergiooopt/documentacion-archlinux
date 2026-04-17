# Documentacion de Arch Linux con MkDocs

Este repositorio contiene mi documentación personal sobre la configuración de Arch Linux, se puede levantar como una página web.

La idea de este repositorio es tener un documentación accesible sobre mi configuración y ser de ayuda a otras personas que quieran saber más
sobre esta distro o sobre Linux en general. También tenía ganas de probar la herramienta [MkDocs](https://www.mkdocs.org/).

---

## Requisitos

Para trabajar con la documentación necesitas tener instalado:

* Python
* pip

---

## Clonar el repositorio

Clona el repositorio y entra en el:

```bash
git clone https://github.com/sergiooopt/configuracion-archlinux.git
cd configuracion-archlinux
```

---

## Crear el entorno virtual

Crea un entorno virtual de Python para instalar posteriormente las dependencias:

```bash
python -m venv venv
```

---

## Instalar dependencias

Instala MkDocs y el tema utilizado en el proyecto:

```bash
pip install mkdocs mkdocs-material
```

---

## Activar entorno virtual

Activa el entorno virtual para poder usar las dependencias instaladas:

```bash
source venv/bin/activate
```

---

## Ejecutar el servidor

Ahora puedes iniciar el servidor local de MkDocs:

```bash
mkdocs serve
```

Para ver la documentacion ve a `http://localhost:8000` en cualquier navegador web.
