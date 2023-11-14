const getValueType = (value: any) => {
	const type = Object.prototype.toString.call(value)
	return type.slice(8, -1)
}

export const useStorage = (type: 'sessionStorage'| 'localStorage' = 'sessionStorage')=>{
	const set = (key: string, value: any)=> {
		const valueType = getValueType(value)
		window[type].setItem(key,JSON.stringify({type: valueType, value}))
	}
	
	const get = (key: string) =>{
		const value = window[type].getItem(key)
		if(value){
			const { value: val} = JSON.parse(value)
			return val
		}
		return null
	}
	
	const remove = (key: string)=> {
		window[type].removeItem(key)
	}
	
	const clear = (excludes?: string[])=> {
		// 获取排除项
		const keys = Object.keys(window[type])
		const defaultExcudes = ['dynamicRouter', 'serverDynamicRouter']
		const excludesArr = excludes ? [ ...excludes, ...defaultExcudes] : defaultExcudes
		const excludesKeys = excludesArr ? keys.filter(key => !excludesArr.includes(key)) : keys
		for(const key of excludesKeys){
			window[type].removeItem(key)
		}
	}

	return {
		set,get,remove,clear
	}
}