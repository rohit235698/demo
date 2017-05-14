import { Component , Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SharedService {
	constructor(private http : Http){
	}
getItems(){
	return [{
		project : 'RBCS',
		server : 'rbcsswu06',
		enviornment : 'DEV'
	},
	{
		project : 'RBCS',
		server : 'rbcsswu03',
		enviornment : 'SIT'
	},
	{
		project : 'RBCS',
		server : 'rbcsswu02',
		enviornment : 'UAT'
	},
	{
		project : 'CLUE',
		server : 'clueswu06',
		enviornment : 'UAT'
	},
	{
		project : 'CLUE',
		server : 'cluesuw03',
		enviornment : 'DEV'
	}]
}

}
