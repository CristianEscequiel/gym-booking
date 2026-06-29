# Gym Booking - Angular

Prueba técnica desarrollada en Angular que simula un sistema de reservas de clases para un gimnasio.

---

# Objetivo

Permitir al usuario:

- Visualizar las clases disponibles.
- Seleccionar una clase.
- Consultar el detalle de la clase.
- Reservar un cupo (simulado).

---

# Tecnologías

- Angular 20
- TypeScript
- RxJS
- SCSS
- Standalone Components

---

# Arquitectura

Se buscó mantener una separación clara de responsabilidades.

```
src/
└── app/
    ├── features/
    │   └── bookings/
    │       ├── components/
    │       │   ├── class-list/
    │       │   ├── class-detail/
    │       ├── models/
    │       │   └── booking.model.ts
    │       └── service/
    │           └── booking.service.ts
    │
    └── shared/
        └── components/
            └── feedback-modal/
```

---

# Flujo de la aplicación

1. La aplicación carga las clases disponibles.
2. El usuario selecciona una clase.
3. Se renderiza el componente de detalle.
4. El usuario realiza la reserva.
5. Se valida la disponibilidad.
6. Se muestra un modal indicando éxito o error.

---

# Comunicación entre componentes

Se decidió utilizar:

- `@Input()` para recibir información.
- `@Output()` para comunicar eventos al componente padre.

Se evitó una comunicación innecesaria mediante servicios para mantener la simplicidad de la prueba.

---

# Manejo de datos

El servicio actualmente retorna un Observable utilizando:

```ts
of(...).pipe(delay(...))
```

Esta decisión permite:

- Simular una llamada HTTP.
- Trabajar con RxJS.
- Facilitar el reemplazo futuro por HttpClient sin modificar la lógica del componente.

---

# Manejo de estados

Se contemplan los siguientes estados:

- Success
- Error

El componente consume el servicio mediante:

```ts
subscribe({
    next,
    error
})
```

permitiendo un manejo explícito de ambos escenarios.

---

# Validaciones

Se incorporó un servicio de validación para centralizar la lógica de negocio.

Actualmente contempla:

- Disponibilidad de cupos.

De esta manera el componente únicamente consume el resultado sin conocer la implementación.

---


# Componentes reutilizables

Se desarrolló un componente Modal reutilizable utilizando:

- `@Input()`
- `@Output()`

Permite mostrar:

- mensajes de éxito
- mensajes de error

sin acoplarse a un caso de uso específico.

---

# UI

Se optó por una interfaz inspirada en aplicaciones deportivas.

Características:

- Fondo oscuro.
- Color principal naranja.
- Diseño responsive mediante CSS Grid.
- Componentes simples y reutilizables.
- SCSS puro (sin frameworks CSS).

---

# Decisiones técnicas

Durante el desarrollo se priorizó:

- Tipado estricto.
- Componentes pequeños.
- Separación entre UI y lógica de negocio.
- Servicios para encapsular la obtención y validación de datos.
- Código fácilmente escalable hacia un backend real.

No se incorporó un gestor de estado global ya que el alcance de la prueba no lo requiere.

---


# Instalación

```bash
npm install
```

---

# Ejecutar

```bash
ng serve
```

Abrir:

```
http://localhost:4200
```

---

# Consideraciones

El objetivo principal fue desarrollar una solución clara, mantenible y alineada con buenas prácticas de Angular, priorizando una arquitectura simple y escalable por sobre la incorporación de funcionalidades innecesarias para el alcance de la prueba.
