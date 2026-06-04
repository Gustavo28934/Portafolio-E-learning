# 🎨 Guía de Inicio Local para Diseñadores (Next.js)

¡Hola! Bienvenido/a al proyecto. No te preocupes si no tienes experiencia con código o terminales; esta guía está hecha paso a paso para que puedas levantar el proyecto en tu computadora, ver tus cambios en vivo y colaborar con el equipo de desarrollo de forma segura.

---

## 🛠️ Paso 1: Lo que necesitas instalar (Solo se hace una vez)

Antes de empezar, necesitamos instalar tres herramientas básicas en tu computadora.

### 1. Visual Studio Code (Tu editor de diseño/código)
Es el programa donde podrás ver las carpetas del proyecto y editar los archivos visuales o de texto.
* **¿Cómo instalarlo?** Ve a [code.visualstudio.com](https://code.visualstudio.com/), descarga la versión para tu sistema operativo (Windows o Mac) e instálalo como cualquier otro programa.

### 2. Node.js (El motor que corre el proyecto)
Es lo que permite que el proyecto de Next.js funcione en tu computadora.
* **¿Cómo instalarlo?** Ve a [nodejs.org](https://nodejs.org/). Descarga e instala la versión que dice **LTS** (es la más estable). Dale a "Siguiente" en todo durante la instalación.

### 3. Git (Para descargar y actualizar el proyecto)
Es la herramienta que nos permite compartir los archivos de código de forma ordenada.
* **Si usas Mac:** Abre la aplicación **Terminal** (búscala con Spotlight con `Cmd + Espacio`) e intenta escribir `git --version` y presiona Enter. Si no lo tienes, Mac te pedirá automáticamente instalar las "Herramientas de línea de comandos". Acepta.
* **Si usas Windows:** Descarga e instala [git-scm.com](https://git-scm.com/). Durante la instalación, puedes dejar todas las opciones por defecto.

---

## 🚀 Paso 2: Abrir el proyecto en tu computadora

Una vez que tengas todo instalado, sigue estos pasos para abrir el proyecto por primera vez:

1.  Abre **Visual Studio Code**.
2.  En el menú superior, ve a **File (Archivo)** > **Open Folder (Abrir carpeta)**.
3.  Busca y selecciona la carpeta de este proyecto que acabas de descargar o clonar.

¡Listo! Verás la estructura de archivos en el panel izquierdo.

---

## 💻 Paso 3: Encender el proyecto (Modo Local)

Para ver el proyecto funcionando en tu navegador web como si estuviera en internet, haremos lo siguiente:

### 1. Abre la Terminal integrada
No te asustes por la palabra "Terminal". En Visual Studio Code es muy fácil:
* En el menú superior, haz clic en **Terminal** > **New Terminal (Nueva Terminal)**.
* Se abrirá un panel en la parte inferior de tu pantalla con letras.

### 2. Instalar los paquetes del proyecto
La primera vez que abras el proyecto, escribe el siguiente comando en esa terminal inferior y presiona **Enter**:
```bash
npm install
```


### 3. Iniciar el servidor de desarrollo
Ahora, escribe este comando en la misma terminal y presiona **Enter**:
```bash
npm run dev
```


### 4. ¡Mira tu trabajo en vivo!
Abre tu navegador web favorito (Chrome, Safari, Brave, Edge, etc.) y entra a la siguiente dirección:
```bash
http://localhost:3000
```

¡Felicidades! Ya estás viendo el proyecto corriendo de forma local desde tu máquina.

✨ Magia del "Auto-update": Deja esa pestaña del navegador abierta a un lado de tu pantalla. El archivo principal que define lo que ves está en la ruta app/page.tsx. Si abres ese archivo en Visual Studio Code, modificas un texto o un color y guardas el archivo (Ctrl + S en Windows o Cmd + S en Mac), verás el cambio reflejado en tu navegador inmediatamente, ¡sin necesidad de recargar la página!

### 🛑 Cómo apagar el proyecto cuando termines
Cuando hayas terminado de trabajar por el día o quieras cerrar los programas:
- Haz clic dentro de la terminal de Visual Studio Code (donde está corriendo el proyecto con todo el texto).
- Presiona las teclas Ctrl + C al mismo tiempo en tu teclado. Esto apagará el servidor local de inmediato.
- Ya puedes cerrar Visual Studio Code con total seguridad.
