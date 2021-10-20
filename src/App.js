import React, { useState, useCallback, useEffect } from 'react';
import './styles.css';

import UserContext from './UserContext';
import ListSeances from './ListSeances';
import FavorisInfo from './favorisInfo';



export default function App() {
	const [ token, setToken ] = useState(false);
	const [ tokenExpirationDate, setTokenExpirationDate ] = useState();
	const [ favoris, setFavoris ] = useState([]);
	const [ seance, setSeance ] = useState([
		{
			title: 'blabla',
			id: 1
		},
		{
			title: 'blibli',
			id: 2
		},
		{
			title: 'bloblo',
			id: 3
		},
		{
			title: 'blublu',
			id: 4
		}
	]);
function addToFavorite (seances){

  // seance.forEach(e => favoris.push(e))
  favoris.push(seances)
  console.log("SEANCES")
  console.log(seances)
}
	// const addToFavorite = (seances) => {
	// 	for (let i = 0; i < seance.length; i++) {
     
	// 		favoris.push(seance[i].title);
  //     console.log(i)
	// 	}
	// 	console.log(favoris);
    
	// };

	const deleteToFavorite = (id) => {
		favoris.slice(id);
	};
	// Si oui comparer si l'id du titre passé en params correspond au bon titre
	// push dans favoris

	const login = useCallback((token, expirationTime) => {
		setToken(token);
		const expiration = expirationTime || new Date(new Date().getTime() + 1000 * 60 * 60);
		setTokenExpirationDate(expiration);
		localStorage.setItem(
			'userData',
			JSON.stringify({
				token,
				expirationTime: expiration.toISOString()
			})
		);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		localStorage.removeItem('userData');
	}, []);

	// useEffect(() => {
	//   const storedData = JSON.parse(localStorage.getItem("userData"));
	//   if (
	//     storedData &&
	//     storedData.token &&
	//     new Date(storedData.expirationTime) > new Date()
	//   ) {
	//     login(storedData.token, new Date(storedData.expirationTime));
	//   }
	// }, [login]);

	// useEffect(() => {
	//   if (token && tokenExpirationDate) {
	//     const remainingTime =
	//       tokenExpirationDate.getTime() - new Date().getTime();
	//     logoutTimer = setTimeout(logout, remainingTime);
	//   } else {
	//     clearTimeout(logoutTimer);
	//   }
	// }, [token, logout, tokenExpirationDate]);
// useEffect(()=>{
//   console.log(favoris);

// }, [favoris])
	return (
		// <AuthContext.Provider
		//   value={{
		//     isLoggedIn: !!token,
		//     token: token,
		//     login: login,
		//     logout: logout
		//   }}
		// >
		<UserContext.Provider
			value={{
				seance: seance,
				favoris: favoris,
        setFavoris: setFavoris,
				deleteToFavorite: deleteToFavorite,
				addToFavorite: addToFavorite
			}}
		>
			<ListSeances ></ListSeances>
			<FavorisInfo />
		</UserContext.Provider>
		// {/* <div className="center">
		// <Authentication />
		// <ProtectedPage />
		// </div>
		// </AuthContext.Provider> */}
	);
}
