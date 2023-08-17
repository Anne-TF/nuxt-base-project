<template>
  <div>
    <h3>Pokemons</h3>
    {{ pending }}
    {{ data }}
  </div>
</template>

<script lang="ts" setup>
import PokemonRepository from '~/repositories/pokemon.repository';
const config = useRuntimeConfig();
const pokemonRepository = new PokemonRepository();

const { data, error, pending, refresh } = useAsyncData('pokemons', () =>
{
    return pokemonRepository.getPokemons({
        baseUrl: config.public.server.baseUrl,
        queryParams: {
            limit: 10,
            offset: 0
        },
        data: {
            // pick: ['count']
        }
    });
});
</script>
