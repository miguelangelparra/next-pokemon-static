import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrID: string) => {
  //Si no existe retorna nulo
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrID}`);

    const pokemon = {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };

    return pokemon;

  } catch (error) {
    return null;
  }
};
