import { sortByAlphabeticalOrder } from "./sortByAlphabeticalOrder.js" 
import { sortByReverseAlphabeticalOrder } from "./sortByReverseAlphabeticalOrder.js"


export function sortList(taskList, selected) {
	if(selected.id === 1) {
		return sortByAlphabeticalOrder(taskList)
	} else if(selected.id === 2) {
		return sortByReverseAlphabeticalOrder(taskList)
	}
}