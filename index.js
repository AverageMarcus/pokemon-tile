import { html, LitElement } from '@polymer/lit-element'

const typeColours = {
  normal: '#A8A878',
  fire: '#F08030',
  fighting: '#C03028',
  water: '#6890F0',
  grass: '#78C850',
  poison: '#A040A0',
  electric: '#F8D030',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  dragon: '#7038F8',
  ghost: '#705898',
  dark: '#705848',
  fairy: '#EE99AC',
  steel: '#B8B8D0',
  psychic: '#F85888',
  ice: '#98D8D8',
  flying: '#A890F0'
};

class PokemonTile extends LitElement {

  static get properties() {
    return {
      pokedexId: {
        type: String,
        attrName: 'pokedexId'
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.data = undefined;
    this.getAsyncData();
  }

  async getAsyncData() {
    if (this.data) return;
    await this.getImage(this.pokedexId);
    this.requestUpdate();
  }

  getImage(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(pokemon => {
        this.data = pokemon;
      });
  }

  render() {
    const style = html`
      <style>
        figure {
          min-width: 150px;
          text-align: center;
          margin: 0;
          border: 1px solid rgba(0, 0, 0, .3);
          box-shadow: 1px 1px 1px #ccc;
          font-family: Helvetica, sans-serif;
        }

        figcaption {
          color: #fff;
          background: rgba(0, 0, 0, .5);
          line-height: 1.5em;
        }

        figcaption:first-letter {
          text-transform: uppercase;
        }
      </style>
    `;

    if (!this.data) {
      return html`
        ${style}

        <figure>
          <figcaption>
            Loading...
          <figcaption>
        </figure>
      `;
    } else {
      const types = this.data.types.map(type => type.type.name);
      let background = typeColours[types[0]];
      if (types.length > 1) {
        background = `linear-gradient(90deg, ${typeColours[types[0]]} 50%, ${typeColours[types[1]]} 50%)`;
      }

      return html`
        ${style}

        <figure style="background: ${background}">
          <img src="${this.data.sprites.front_default}"/>
          <figcaption>
            ${this.data.name}
          <figcaption>
        </figure>
      `;
    }
  }
}

customElements.define('pokemon-tile', PokemonTile);
