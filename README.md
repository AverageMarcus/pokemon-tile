# pokemon-tile
Web Component to display a tile showing a specific Pokémon. Make use of the [PokéApi](https://pokeapi.co/)

[Live Demo](https://averagemarcus.github.io/pokemon-tile/) | [NPM](https://www.npmjs.com/package/@averagemarcus/pokemon-tile)

## Usage

1. Include a script reference to the module:
```js
<script type="module" src="https://unpkg.com/@averagemarcus/pokemon-tile?module"></script>
```
2. Add a `<pokemon-tile>` element to your page
```html
<pokemon-tile pokedex-id="25"></pokemon-tile>
<pokemon-tile pokemon-name="ditto"></pokemon-tile>
<pokemon-tile pokedex-id="6" shiny></pokemon-tile>
```

## Contributions

Contributions welcome!

Found a bug? [File an issue](https://github.com/AverageMarcus/pokemon-tile/issues/new)

## Running locally

Once checked out:
1. `npm install`
2. `npm run build`
3. `npm run serve`

# Credits

Huge thanks to the [PokéApi](https://pokeapi.co/) for the data and images, and Nintendo, Game Freak and The Pokémon Company for an awesome series.
