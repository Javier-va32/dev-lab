# **Trabajo de investigación**

## **¿Qué es un commit?**

Un commit es como una "foto" de un proyecto en un instante determinado, que se guarda en un repositorio. Se puede volver a esa versión del proyecto en cualquier momento utilizando comandos de Git. 

## **¿Qué es conventional commit?** 

Conventional Commit es una convención de nombres para los mensajes de commit en Git. Su objetivo es mantener un historial claro, legible y automatizable sobre los cambios en un proyecto. Un commit bajo esta convención tiene una estructura como esta:

```<tipo>(<alcance>): <descripción breve>```

| Parte                    | Significado                                                  | Ejemplo                                            |
| ------------------------ | ------------------------------------------------------------ | -------------------------------------------------- |
| **tipo**                 | Indica el tipo de cambio realizado.                          | `feat`, `fix`, `docs`, `refactor`, `test`, `chore` |
| **alcance** *(opcional)* | Especifica el módulo o archivo afectado.                     | `auth`, `ui`, `api`                                |
| **descripción**          | Breve explicación del cambio (en presente, sin punto final). | `add login validation`                             |

## **¿Por qué es importante usarlo?**

- **Claridad y orden:**

    - Cada commit muestra claramente qué tipo de cambio se hizo, lo que facilita entender la historia del proyecto.

- **Automatización:**

    - Changelogs (listas de cambios para nuevas versiones).

    - Versionado semántico (SemVer) — por ejemplo, si haces un feat, puede aumentar la versión menor (1.2.0 → 1.3.0).

- **Trabajo en equipo más limpio:**

    - Cualquier desarrollador puede entender qué hizo cada commit sin leer todo el código.

- **F acilita revisiones y debugging:**

    - Si algo falla, puedes buscar solo los fix: o feat: para localizar rápidamente el cambio relevante.

## **Tipos más comunes**

| Tipo      | Significado                                                |
|------------|------------------------------------------------------------|
| **feat:**     | Nueva funcionalidad                                       |
| **fix:**      | Corrección de errores                                     |
| **docs:**     | Cambios en documentación                                  |
| **style:**    | Cambios de formato (espacios, comas...)                   |
| **refactor:** | Reestructuración de código sin cambiar su comportamiento  |
| **test:**     | Añadir o modificar pruebas                                |
| **chore:**    | Tareas menores, como configuración o dependencias         |