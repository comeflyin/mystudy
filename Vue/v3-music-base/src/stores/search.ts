import { defineStore } from 'pinia';
import { getSearchSuggest } from '@/api/index';
import type { SearchSuggest } from "@/modules/search";

export const useSearchStore = defineStore('search', {
    state: () => {
        return {
            showSearchView: false,
            searchKeyWord: '',
            suggestData: {} as SearchSuggest// singer,album,song,video,playlist,mv,lyric,radio,user...
        }
    },
    getters: {
        showHot: state => state.searchKeyWord === ''
    },
    actions: {
        async suggest(){
            // ref 不一样 proxy
            this.suggestData = await getSearchSuggest(this.searchKeyWord)
        }
    }   
})