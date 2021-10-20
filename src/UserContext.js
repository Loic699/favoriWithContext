import {  createContext, useState } from 'react';

const UserContext = createContext(
	{
		userName: '',
		setUserName: () => {},
		
	},
	{
		user: '',
		setUser: () => {}
	}, 
	{
		favoris: [],
		setFavoris: () => {},
		addToFavorite: (seances) =>{},
		deleteToFavorite: () => {}
	},
	{
		seances: []
	}
);
//TODO : Preparer un tableau vide de favoris synchronisé avec le userContext

//TODO 2: Preparer une liste de séances fictives (titres fictifs, ID fictif)
//TODO3 : Permettre a l'utilisateur avec un boutton d'ajouter ou retirer un favori dans le tableau des favoris (index)

export default UserContext;
