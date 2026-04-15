# Configuración de Arch Linux con MkDocs

Este repositorio contiene mi **documentación personal sobre la configuración de Arch Linux**, organizada como una web estática usando **MkDocs**.

La idea del proyecto es documentar paso a paso mi entorno: configuración del sistema, terminal, ajustes de GNOME, etc.

La documentación se genera como un sitio web local que permite navegar fácilmente.

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
pip install mkdocs mkdocs-dracula-theme
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
