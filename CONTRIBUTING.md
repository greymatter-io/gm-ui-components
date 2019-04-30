# Contributing

## Guidelines

The intent of this library is to provide apps with a set of re-usable components that have a beneficial, re-usable purpose. When creating or updating components, please keep these guidelines in mind.

1. Component naming should communicate the component's purpose, not its construction. For example, a layout section heading built around an `<h1/>` element should be named `LayoutSectionHeading`, not `H1`. This has the added benefit of clearly separating custom components with primitive HTML elements.
2. Components should serve a single clear use case: "Shell panel headings", "App navigation tabs", "Context menu action button". If you find yourself frequently having to provide style overrides, that's a sign the component is not well-targeted to where it's being used. If you find yourself frequently having to provide the same style overrides over and over to a component, that's a sign you should extend the component to better target its use context.

## Development

### Develop in Storybook

The component library uses React Storybook for local development. To start coding, run:

```sh
npm start
```

Visit <http://localhost:9009>. Storybook will render whatever is in your `MyComponent.stories.js` file and hot reload when changes are made to that file or the component source code.

### Develop using a linked app

#### npm link

It is also possible to install your branch of the library in another app using `npm link`. This creates a symlink in your global node_modules that links to the package where the `npm link` command was executed. This will allow you to make changes in the library and see those changes propogated to the linked app.

1. On your branch of gm-ui-components, run:

  ```sh
  npm link && npm run build -- --watch
  ```

2. In the target app, run:

  ```sh
  npm link gm-ui-components
  ```

#### npm pack

An alternative method is to use `npm pack` to generate a tarball of the library and install that in your target app. This is a good alternative for dockerized environments. The disadvantage is that you will need to regenerate the tarball whenever you make a change to the library code.

1. On your branch of gm-ui-components, run:

  ```sh
  npm run build && npm pack
  ```

2. A tarball will be generated in the root of the project. Drag that into the root of your target app.

3. In the target app, run:

  ```sh
  npm install gm-ui-components-{version}.tgz
  ```

## Testing

To run tests in watch mode, run:

```sh
npm test
```

When testing a component, be sure to write tests that cover all props and user interactions. If you are using an icon from the Glyphs directory, note that svgs are mocked in our testing environment, so you will see `<IconMock />` instead of the actual Icon displayName.

## Updating an existing component

When making modifications to an existing component, be sure to complete the following items:

- Update tests to cover new props or user interactions
- Update the story file with any new props or component states
- Test keyboard interactions
- Test responsiveness

## Adding a new component

To generate a new component in the src/components directory, run:

```sh
npm run generate-component MyComponent
```

This will give you the following structure:

```sh
├── src/
|   └─ components/
|       └─ MyComponent/
|            ├── components/
|            ├── MyComponent.js
|            ├── MyComponent.stories.js
|            ├── MyComponent.test.js
|            └── index.js
```

- `components/`: Directory that contains all subcomponents used by `MyComponent.js`.
- `MyComponent.js`: File that contains the main component. Be sure to fill out all propTypes and default props.
- `MyComponent.stories.js`: Story code rendered by react/storybook for use in development and documentation.

  - The `default` story is meant to render the component in it's default state and document props using the Storybook knobs package. This is used as prop documentation, so be sure that the knob name is 1:1 with the prop it is controlling. See `Button.stories.js` for reference on how to use storybook knobs.
  - Provide a 1 or 2 sentence description of the component and it's intended use case by adding an `info` object as the second argument to `stories.add`. See `Button.stories.js` for reference.
  - Add any additional stories as needed to illustrate different states of the component

- `MyComponent.test.js`: Basic test scaffold that renders a simple snapshot test

- `index.js`: Imports and exports the component. There should be no reason to modify this file.

Make sure that your new component considers responsiveness and accessibility.

## Adding a new SVG

To add a new SVG to the component library, create an .svg file under the src/components/Glyphs folder. Please be sensitive to naming conventions and try to follow existing patterns. The file name should always be prefixed with `Icon`.

You will also need to update the following files after adding the SVG:

- `src/components/Glyphs/index.js`: import and export the new SVG
- `src/components/Icon/Icon.stories.js`: add the new SVG file name to the glyphNames array
