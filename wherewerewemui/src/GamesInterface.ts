import { useId } from "react";

interface GamesInterface {
	title: string;
	lastDone: string[];
	upNext: string[];
}



export let allGames: GamesInterface[] = [
	{
		title : "Fallout 4",
		lastDone : ["This is the last thing done in Fallout 4", 'Another Last Done'],
		upNext : ["This is up next in Fallout 4", 'Follow Up Next Task'],
	},
	{
		title : "Helldivers 2",
		lastDone : ["This is the last thing done in Helldivers 2", 'Another Last Done'],
		upNext : ["This is up next in Helldivers 2", 'Follow Up Next Task'],

	},
	{
		title : "Stardew Valley",
		lastDone : ["This is the last thing done in Stardew Valley", 'Another Last Done'],
		upNext : ["This is up next in Stardew Valley", 'Follow Up Next Task'],
	}

];

export default GamesInterface;