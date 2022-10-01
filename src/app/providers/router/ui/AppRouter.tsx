import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "app/providers/router/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (<div>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    Object.values(routeConfig).map(({ element, path }) => 
                        <Route 
                        key={path} 
                        path={path} 
                        element={
                            <div className="page-wrapper">
                                {element}
                            </div>
                        }  />
                    )
                }
            </Routes>
        </Suspense>
    </div>)
}

export default AppRouter;