# Posibles errores

---

- [Desactivación automática de extensiones GNOME](#extensiones-de-gnome-se-desactivan-automaticamente)
- [Problemas al visualizar texto](#problemas-al-visualizar-texto-en-web)

---

## Extensiones de GNOME se desactivan automáticamente

Esto me paso al actualizar el sistema, ya que también **actualizó la version de GNOME**, por lo que **algunas extensiones se habían desactivado** "porque habían dejado de ser compatibles".

![Extensiones de GNOME no compatiblkes](images/extensiones-no-compatibles.png)

> Algunas extensiones de las que aparecen en la imagen ya no uso, las que uso actualmente se encuentran en el apartado [Configuración del sistema](configuracion.md).

Mi solución fue forzar el funcionamiento de las extensiones >_<

```bash
gsettings set org.gnome.shell disable-extension-version-validation true
```

Esto puede provocar incosistencias, no es la mejor solución, pero puedo decir que en mi experiencia las extensiones han revivido y nunca me ha roto el sistema :)

De todas formas, siempre se puede volver a activar la comprobación de las extensiones con la versión de GNOME con: 

```bash
gsettings set org.gnome.shell disable-extension-version-validation false
```

---

## Problemas al visualizar texto en WEB

Este problema lo tengo cuando instalo GNOME con Arch Linux a tráves de **archinstall**.

Para solucionarlo encontré en Reddit que hay ciertas fuentes de texto que no trae el sistema y que hay que instalar. Se supone que instalando las siguientes se cubren todos los casos:

* noto-fonts
* noto-fonts-cjk
* noto-fonts-emoji

Instalamos las fuentes a través de Pacman:

```bash
sudo pacman -S noto-fonts noto-fonts-cjk noto-fonts-emoji noto-fonts-extra
```