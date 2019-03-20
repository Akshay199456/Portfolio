import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from '../../containers/HomeContainer';

const AllRoutes = () => {
	return (
		<Switch>
                  <Route exact path = '/' component = {HomeContainer}/>
      	</Switch>
		)
}

export default AllRoutes;