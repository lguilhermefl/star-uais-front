<script setup lang="ts">
import { ref } from 'vue'
import * as SWApi from 'swapi-ts'

import type { Ref } from 'vue'
import type { Collection, CollectionDataType } from './types'
import { collectionsToFetch, collectionsNames } from './config'

import PanelNav from './HomeNav.vue'
import ButtonItem from './ButtonItem.vue'
import FilmsCard from './Cards/FilmsCard.vue'
import PeopleCard from './Cards/PeopleCard.vue'
import PlanetsCard from './Cards/PlanetsCard.vue'
import SpeciesCard from './Cards/SpeciesCard.vue'
import StarshipsCard from './Cards/StarshipsCard.vue'
import VehiclesCard from './Cards/VehiclesCard.vue'
import LoaderAnimation from './LoaderAnimation.vue'

const currentCollection: Ref<{ name: string; isLoading: boolean | string }> = ref({
  name: '',
  isLoading: false
})
const collectionInfo: Ref<CollectionDataType> = ref([])

const getCollectionInfo = (collection: Collection) => {
  if (currentCollection.value.name !== collection) currentCollection.value.name = collection
  currentCollection.value.isLoading = true

  SWApi[collection]
    .find()
    .then((data) => {
      const dataInfo = data.resources.map((resource) => resource.value)
      collectionInfo.value = dataInfo as any
      currentCollection.value.isLoading = false
    })
    .catch(() => (currentCollection.value.isLoading = 'error'))
}
</script>

<template>
  <div class="container">
    <PanelNav>
      <ButtonItem
        v-for="(collection, index) in collectionsToFetch"
        :key="collection + '-' + index"
        :name="collection"
        :class="{ active: currentCollection.name === collection }"
        :disabled="currentCollection.isLoading && currentCollection.isLoading !== 'error'"
        @get-collection-info="getCollectionInfo"
        >{{ collectionsNames[index] }}</ButtonItem
      >
    </PanelNav>

    <section v-if="currentCollection.isLoading !== 'error'" class="cards">
      <div v-if="currentCollection.isLoading" class="loader-container">
        <h4 class="status-msg">O conteúdo está sendo carregado, aguarde...</h4>
        <LoaderAnimation />
      </div>
      <div
        class="cards-container"
        v-if="currentCollection.name === 'Films' && !currentCollection.isLoading"
      >
        <FilmsCard
          v-for="(item, index) in collectionInfo"
          :key="item.url + '-' + index"
          :item="item"
        />
      </div>

      <div
        class="cards-container"
        v-if="currentCollection.name === 'People' && !currentCollection.isLoading"
      >
        <PeopleCard
          v-for="(item, index) in collectionInfo"
          :key="item.url + '-' + index"
          :item="item"
        />
      </div>

      <div
        class="cards-container"
        v-if="currentCollection.name === 'Planets' && !currentCollection.isLoading"
      >
        <PlanetsCard
          v-for="(item, index) in collectionInfo"
          :key="item.url + '-' + index"
          :item="item"
        />
      </div>

      <div
        class="cards-container"
        v-if="currentCollection.name === 'Species' && !currentCollection.isLoading"
      >
        <SpeciesCard
          v-for="(item, index) in collectionInfo"
          :key="item.url + '-' + index"
          :item="item"
        />
      </div>

      <div
        class="cards-container"
        v-if="currentCollection.name === 'Starships' && !currentCollection.isLoading"
      >
        <StarshipsCard
          v-for="(item, index) in collectionInfo"
          :key="item.url + '-' + index"
          :item="item"
        />
      </div>

      <div
        class="cards-container"
        v-if="currentCollection.name === 'Vehicles' && !currentCollection.isLoading"
      >
        <VehiclesCard
          v-for="(item, index) in collectionInfo"
          :key="item.url + '-' + index"
          :item="item"
        />
      </div>
    </section>
    <div v-else>
      <h4 class="status-msg error">
        Oops! Houve um erro ao carregar as informações do servidor, tente novamente!
      </h4>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.cards {
  width: 100%;
}

.loader-container {
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 40px;
  color: var(--vt-c-white);
}

.status-msg {
  font-size: 1.2rem;
  text-align: center;
}

.error {
  color: var(--color-error);
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5%;
  width: 100%;
  margin-bottom: 1rem;
}
</style>
