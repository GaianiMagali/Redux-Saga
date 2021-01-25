import React from 'react';
import { Switch } from 'react-router-dom';

import { routes } from './routes'
import { RouteWithSubRoutes } from './RouteWithSubRoutes';

export const AppRoutes = () => {
    return (
        <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes
                    key={i}
                    {...route}
                />
            ))}
        </Switch>
    )
}
