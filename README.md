# Práctica Git – Control de Cambios (local)

## Objetivo
Practicar el flujo básico de Git en un repo local y simular un conflicto sencillo.

## Pasos sugeridos
1) Inicializa el repositorio:
   git init
   git add .
   git commit -m "feat: estructura base (HTML, CSS, JS)"

2) Crea una rama para el footer:
   git checkout -b feature/footer
   # Edita el <footer> de index.html con tu nombre
   git add index.html
   git commit -m "feat(footer): agrega nombre en el pie de página"
   git checkout main
   git merge feature/footer

3) Crea una rama para modo oscuro:
   git checkout -b feature/dark-mode
   # Asegura que el botón alterna el modo oscuro (ya implementado en script.js)
   # Cambia algún color en styles.css si quieres
   git add styles.css script.js
   git commit -m "feat(ui): ajusta estilos para modo oscuro"
   git checkout main
   git merge feature/dark-mode

4) Simula un conflicto (misma línea del <h1>):
   # En main, modifica el <h1> (index.html) a:
   #   <h1>Práctica de Git: Flujo con Ramas y Conflictos</h1>
   git add index.html
   git commit -m "refactor(title): actualiza encabezado en main"

   # En otra rama, cambia el mismo <h1> de forma distinta
   git checkout -b hotfix/title
   # Cambia a:
   #   <h1>Práctica de Git: Control de Cambios y Resolución de Conflictos</h1>
   git add index.html
   git commit -m "fix(title): mejora claridad del encabezado"

   # Regresa a main y trata de fusionar:
   git checkout main
   git merge hotfix/title
   # ❗ Se generará un conflicto en index.html

5) Resuelve el conflicto:
   # Abre index.html, deja la versión final que quieras (o combínalas).
   # Elimina marcadores <<<<<<<, =======, >>>>>>>
   git add index.html
   git commit -m "merge: resuelve conflicto en título principal"

6) Revisa historial y ramas:
   git log --oneline --graph --decorate --all
   git branch

## Buenas prácticas
- Commits pequeños y con mensajes claros (convencional commits).
- Una rama por cambio/feature.
- Resolver conflictos con calma, probando el resultado final.
