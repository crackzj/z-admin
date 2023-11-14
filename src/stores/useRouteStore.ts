import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRouteStore = defineStore('useRouteStore',()=>{
	const isLogin = ref(false)
	
	return {
		isLogin,
	}
})