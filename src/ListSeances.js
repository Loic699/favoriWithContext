import React, { useContext } from 'react';
import UserContext from './UserContext';

export default function ListSeances() {
	const favContext = useContext(UserContext);

	function addToFav(seances) {
		favContext.addToFavorite(seances);
	}

	return (
		<div>
			<ul>
				{favContext.seance.map((seance,id ) => (
					<div key={seance.id}>
						
						<p>{seance.title} <button key={seance.id} onClick={addToFav(seance)}> Add to fav</button> </p>
					</div>
				))}
                
			</ul>
		</div>
	);
}
