interface GamesInterface {
	title: string;
	lastDone: string;
	upNext: string;
}

export let allGames: GamesInterface[] = [
	{
		title : "Fallout 4",
		lastDone : "This is the last thing done in Fallout 4",
		upNext : "This is up next in Fallout 4"
	},
	{
		title : "Helldivers 2",
		lastDone : "This is the last thing done in Helldivers 2",
		upNext : "This is up next in Helldivers 2"
	},
	{
		title : "Stardew Valley",
		lastDone : "This is the last thing done in Stardew Valley",
		upNext : "This is up next in Stardew Valley"
	}

];

export default GamesInterface;