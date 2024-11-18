# Istorecba

## 📖 Descripción del Proyecto
Istorecba es un ecommerce diseñado para la venta de productos Apple. Ofrece una experiencia intuitiva y eficiente para los usuarios, permitiendo explorar, seleccionar y comprar productos con facilidad. El proyecto fue desarrollado utilizando **React** con **Vite** y está integrado con **Firebase Firestore** para la gestión de la base de datos.

---

## 🛠️ Tecnologías Utilizadas
- **React** con **Vite**: Desarrollo del frontend.
- **SCSS**: Estilos dinámicos y estructurados.
- **Firebase Firestore**: Base de datos para almacenar y gestionar los productos y órdenes.
- **Toastify JS**: Notificaciones personalizadas.
- **React Router**: Navegación entre las diferentes páginas de la aplicación.

---

## ✨ Funcionalidades Principales
- **Catálogo de productos**: Visualización dinámica de todos los productos disponibles.
- **Carrito de compras**: Gestión de los productos seleccionados, con actualización en tiempo real.
- **Detalle del producto**: Información específica sobre cada producto, con la opción de añadirlo al carrito.
- **Confirmación de compras**: Generación de un documento en Firestore al completar una compra, con los detalles del pedido.
- **Responsive Design**: Optimizado para dispositivos móviles y de escritorio.

---

## 📂 Estructura del Proyecto
```plaintext
Istorecba/
├── public/
├── src/
│   ├── assets/         # Recursos estáticos (imágenes, íconos, etc.)
│   ├── components/     # Componentes reutilizables de React
│   ├── pages/          # Páginas principales de la app
│   ├── context/        # Contextos para gestión de estado global
│   ├── firebase/       # Configuración e integración con Firestore
│   ├── styles/         # Archivos SCSS
│   └── App.jsx         # Componente principal de la aplicación
├── .gitignore
├── README.md           # Documentación del proyecto
├── package.json
└── vite.config.js

## 🚀 Instrucciones para Ejecutar el Proyecto
1. Clona el repositorio:
   ```bash
   git clone https://github.com/Juaanx7/ProyectoFinalAcosta.git
2. Instala las dependencias:
    npm install
3. Inicia el servidor de desarrollo:
    npm run dev
4. Abre el navegador en: http://localhost:5173

## 🧑‍💻 Autor
- **Juan Acosta Quiñones**
- Proyecto desarrollado como parte del curso de **React** para la carrera de **Desarrollo de Software Full Stack** en **CoderHouse**.
