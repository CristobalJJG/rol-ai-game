# RolAiGame

Este proyecto pretende ser un **juego de rol** , con el objetivo de poder ser jugado tanto en solitario como en multijugador local(en un principio). El principal *plot* del juego es que el master será GPT, de forma que poniendo un pequeño texto, nos haga una historia en base a lo que le hayamos escrito.

Gracias a OpenAi se podrían desarrollar varias mejoras al juego:

* **"Texto a voz"** por parte de GPT
* **"Texto a voz"** para que el jugador pueda interactuar con el **master**.
* Generación de **imágenes** en base a la historia que nos cuente GPT.
* Generación de **personajes** en función a la descripción del usuario.

---

A nivel técnico, el proyecto está desarrollado en **Angular** y **NodeJs**. La idea es que el juego sea jugable tanto en web como en dispositivos móviles.

![NodeJS](https://img.shields.io/badge/node.js-1e1e1e?style=for-the-badge&logo=node.js) ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular) ![OpenAi](https://img.shields.io/badge/openai-%123.svg?style=for-the-badge&logo=openai)

Que los **datos** de los personajes como pueden ser el nombre, la vida, la fuerza, la clase, etc. Se puedan **completar** tanto en la **web** como en una plantilla **JSON o YAML**.

---

## Especies de personajes

Esta será la "raza", de momento, existirá solo la humana.
La idea es que la raza aporte unas ventajas y unas debilidades al personaje.

```json
{
    "name": "Human",
    "description": "A versatile species known for their adaptability and intelligence.",
    "abilities": ["Problem-solving", "Communication", "Creativity"],
    "weaknesses": ["Vulnerability to diseases", "Limited physical strength"]
}
```

Estas podrían servir para el transcurso de la historia, por ejemplo, si el personaje es humano, podría tener más facilidad para comunicarse con otros personajes, pero a su vez, ser más vulnerable a enfermedades.

---

## Clases de personajes

La clase del personaje será la que determine el rol que tendrá en el juego. Por ejemplo, si es un bárbaro, tendrá más fuerza y resistencia, pero menos inteligencia y habilidades sociales.

```json
{
    "name": "Barbarian",
    "description": "A fierce warrior known for their brute strength.",
    "physicalAttack": { "min": 10, "real": 12, "max": 15 },
    "magicalAttack": { "min": 0, "real": 1, "max": 5 },
    "healthPoints": { "min": 100, "real": 100, "max": 125 },
    "receivedDamage": { "min": 5, "real": 10, "max": 15 },
    "items": ["Sword", "Shield", "Maze"],
    "advantages": [
      "High physical attack damage",
      "High health points",
      "Access to powerful physical weapons"
    ],
    "disadvantages": [
      "Low magical attack damage",
      "Limited access to magical abilities",
      "Vulnerable to ranged attacks"
    ]
}
```

Todos los personajes tendrán un daño fisico y mágico, puntos de vida y daño recibido. Además, tendrán una serie de objetos que podrán utilizar en el juego.

También tendrán una serie de ventajas y desventajas en función de la clase que elijan. Estas estarán a conjunto con la raza del personaje. De forma que si un humano es bárbaro

---

## Items

Cada clase de jugador tendrá una serie de objetos que podrá utilizar en el juego. Estos objetos podrán ser de tipo físico, mágico o curativo, y tendrán una serie de propiedades que los definirán.

```json
{
    {
        "name": "Escudo",
        "defense": 5,
        "type": "fisico",
        "blockChance": 0.75
    },
    {
        "name": "Maze",
        "damage": 15,
        "type": "fisico",
        "hitCount": { "min": 0, "max": 1 }
    },
    {
        "name": "Potion",
        "healing": 15,
        "type": "health"
    }
}
```

---
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
