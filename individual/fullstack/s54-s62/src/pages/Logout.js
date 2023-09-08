import {Navigate} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import UserContext from '../UserContext.js';

export default function Logout(){
	const { unsetUser, setUser } = useContext(UserContext);

	// Clears the localstorage/token
	unsetUser();

	// Clears the token from the global user state
	useEffect(() => {
		setUser({
			id: null,
			isAdmin: null
		});
	}, []);

	return(
		<Navigate to='/login'/>
	)
}