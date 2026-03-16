# Configuración inicial

Ahora vamos a hacer los primeros pasos de la configuración.

---

### Instalar una terminal

Aunque GNOME trae una terminal por defecto, esta es muy simple, en mi caso prefiero instalar la terminal de gnome que viene con otras distribuciones, esto es según tus preferencias.

```bash
sudo pacman -S gnome-terminal
```

---

### Instalar un gestor de paquetes para AUR

El **AUR (Arch User Repository)** es un repositorio mantenido por la comunidad donde se encuentran los programas que no están en los repositorios oficiales.

Hay varios gestores de AUR pero en mi caso utilizo yay. Para instalar:

```bash
sudo pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
```

Instalamos el paquete:

```bash
makepkg -si
```

Cuando termine la instalación podemos eliminar el repositorio clonado:

```bash
cd ..
rm -rf yay
```

---

### Instalar un navegador web

En mi caso, mi navegador favorito es **Brave**.
Hemos preparado **Yay** porque la instalación de este navegador depende de AUR.

Para instalar de manera sencilla:

```bash
curl -fsS https://dl.brave.com/install.sh | sh
```

