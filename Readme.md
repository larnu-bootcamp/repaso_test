# proyecto de repaso

Configuración basica de jest en un proyecto react ts creado con vite.

comenzar un proyecto con vite + react ts

primer paso, instalar library jest + types

```bash

npm i -D jest @types/jest
```

luego agregamos el script test en nuestro package.json

```bash
"scripts": {
...,
"test": "jest"
}
```

creamos la carpeta src/__tests__

creamos un test de prueba like:

```bash
test('Renders main page correctly', () => {
    expect(true).toBeTruthy();
  });
```

luego instalamos ts-node y ts-jest para que jest entienda los archivos test.tsx

```bash
npm i -D ts-node ts-jest
```

instalamos js dom

```bash
npm i -D jest-environment-jsdom
```

creamos el jest config:

```tsx
export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jsdom",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8"
}
```

debido a que jest no entiende archivos no js 

instalaremos lo siguiente:

npm i -D jest-transform-stub

y luego agregamos el moduleNameMapper en nuestro jest config

```tsx
//jest.config.ts file
export {
  ...,
  moduleNameMapper: {
    "^.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"  
  },
  ...
} 
```