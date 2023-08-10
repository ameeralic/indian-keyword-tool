<template>
    <PublicPagesLayout>
        <section class="bg-gray-50 dark:bg-gray-900 min-h-screen px-2">
            <div class="max-w-2xl mx-auto pt-20">
                <img :src="$route.meta.siteUrl + '/assets/ikt.svg'" class="h-20 w-20 mx-auto" alt="">
                <div class="text-2xl font-extrabold text-center mb-10">
                    <span
                        :class="`bg-clip-text text-transparent bf-cover bg-gradient-to-r from-[#FF671F] from-20% via-white via-50% to-[#046A38] to-80%`">
                        Indian
                    </span>

                    <span class="dark:text-white text-gray-900">Keyword Tool</span>
                </div>
                <form>
                    <div class="grid gap-2">
                        <div>
                            <label for="default-search"
                                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" v-model="keywords"
                                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your Keyword.." required>
                                <!-- <button type="submit"
                            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> -->
                            </div>
                        </div>
                        <!-- <v-select 
  :options=GeoTargetCodes 
  label="Name" multiple 
  v-model="selectedGeoTargetCodes"></v-select> -->
                        <div class="grid md:grid-cols-2 gap-2">
                            <div>
                                <button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch"
                                    class="inline-flex w-full justify-center items-center px-4 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button">Select regions <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg></button>

                                <!-- Dropdown menu -->
                                <div id="dropdownSearch"
                                    class="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700">
                                    <div class="p-3">
                                        <label for="input-group-search" class="sr-only">Search</label>
                                        <div class="relative">
                                            <div
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                            </div>
                                            <input type="text" id="input-group-search" v-model="GeoSearch"
                                                @change="filterGeoCodes()"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Search regions">
                                        </div>
                                    </div>
                                    <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownSearchButton">
                                        <li v-for="item in GeoFilterCode" :key="item">
                                            <div
                                                class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                <input id="checkbox-item-11" type="checkbox" :value="item"
                                                    v-model="selectedLocationsArray"
                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                <!-- <input id="checkbox-item-11" type="checkbox"
                                                    :value="'geoTargetConstants/' + item['Criteria ID']"
                                                    v-model="selectedGeoCodesArray"
                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"> -->
                                                <label for="checkbox-item-11"
                                                    class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                                                    {{ item["Canonical Name"] }}</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <button type="button" @click.prevent="submit()"
                                    class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
                            </div>

                        </div>

                    </div>


                </form>
            </div>

            <div class="max-w-4xl mx-auto mt-20" v-if="results.length">
                <h1 class="text-white text-xl font-bold text-center py-5">Results</h1>
                <div class="max-w-xl mx-auto flex justify-between py-10 gap-4">
                    <div>
                        <h2 class="dark:text-white text-gray-700 ">
                            <span class="font-bold">Keywords: </span><br /> {{ searchedKeywords }}
                        </h2>

                    </div>
                    <div>
                        <h2 class="dark:text-white text-gray-700 ">
                            <span class="font-bold">Locations: </span>
                            <ul>
                                <li v-for="location in searchedLocations" :key="location">{{ location }}</li>
                            </ul>
                        </h2>
                    </div>
                </div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Keyword
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center cursor-pointer"
                                        :class="{ 'text-white': toggleSortByAvgMonthlySearch }"
                                        @click.prevent="toggleSortByAvgMonthlySearch = !toggleSortByAvgMonthlySearch">
                                        Avg. Monthly Search
                                        <a href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg></a>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center">
                                        Competition
                                        <!-- <a href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg></a> -->
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center cursor-pointer"
                                        :class="{ 'text-white': toggleSortByCompetitionIndex }"
                                        @click.prevent="toggleSortByCompetitionIndex = !toggleSortByCompetitionIndex">
                                        Competion Index
                                        <a href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg></a>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                v-for="keywordMetric in results" :key="keywordMetric">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ keywordMetric["text"] }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ keywordMetric.keywordIdeaMetrics.avgMonthlySearches }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ keywordMetric.keywordIdeaMetrics.competition }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ keywordMetric.keywordIdeaMetrics.competitionIndex }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>


    </PublicPagesLayout>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import PublicPagesLayout from '../components/PublicPagesLayout/PublicPagesLayout.vue'

import GeoTargetCodes from '../assets/geotarget-india.json'

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>
<script>
import axios from "axios"
import vSelect from "vue-select"
export default {
    data() {
        return {
            keywords: '',
            searchedKeywords: '',
            searchedLocations: '',
            GeoCodes: GeoTargetCodes,
            GeoSearch: '',
            selectedLocationsArray: [],
            GeoFilterCode: GeoTargetCodes,
            results: [],
            toggleSortByAvgMonthlySearch: false,
            toggleSortByCompetitionIndex: false,
        }
    },
    components: {
        vSelect
    },
    computed: {
        keywordsArray() {
            return this.keywords.split(',')
        },
    },
    watch: {
        // whenever question changes, this function will run
        toggleSortByAvgMonthlySearch(newValue, oldValue) {
            if (newValue === true) {
                this.sortByAvgMonthlySearchDsc()
            } else {
                this.sortByAvgMonthlySearchAsc()
            }
        },
        toggleSortByCompetitionIndex(newValue, oldValue) {
            if (newValue === true) {
                this.sortByCompetitionIndexDsc()
            } else {
                this.sortByCompetitionIndexAsc()
            }
        }
    },
    methods: {
        selectedLocationNames() {
            return this.selectedLocationsArray.map((item) =>
                item["Canonical Name"]
            )
        },
        selectedGeoCodesArray() {
            return this.selectedLocationsArray.map((item) =>
                'geoTargetConstants/' + item['Criteria ID']
            )
        },
        filterGeoCodes() {
            console.log(this.GeoSearch);
            this.GeoFilterCode = this.GeoSearch !== '' ? this.GeoCodes.filter(item => {
                var text = item["Canonical Name"]
                return text.startsWith(this.GeoSearch)
            }) : this.GeoCodes
        },
        async submit() {
            this.results = []
            console.log(this.selectedLocationsArray);
            console.log(this.selectedGeoCodesArray());
            var data =
            {
                "geo_target_constants": JSON.stringify(this.selectedGeoCodesArray()),
                "keywords": JSON.stringify(this.keywordsArray),
            }
            const response = await axios.post("/api/getKeywordIdeas", data)
            this.results = response.data
            this.toggleSortByAvgMonthlySearch = true
            this.searchedKeywords = this.keywords
            this.searchedLocations = this.selectedLocationNames()
            console.log(response.data);
        },
        sortByAvgMonthlySearchAsc() {
            this.results.sort((a, b) => {
                return a.keywordIdeaMetrics.avgMonthlySearches - b.keywordIdeaMetrics.avgMonthlySearches;
            });
        },
        sortByAvgMonthlySearchDsc() {
            this.results.sort((a, b) => {
                return b.keywordIdeaMetrics.avgMonthlySearches - a.keywordIdeaMetrics.avgMonthlySearches;
            });
        },
        sortByCompetitionIndexAsc() {
            this.results.sort((a, b) => {
                return a.keywordIdeaMetrics.competitionIndex - b.keywordIdeaMetrics.competitionIndex;
            });
        },
        sortByCompetitionIndexDsc() {
            this.results.sort((a, b) => {
                return b.keywordIdeaMetrics.competitionIndex - a.keywordIdeaMetrics.competitionIndex;
            });
        }
    },
}
</script>