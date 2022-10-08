import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "app/providers/router/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './AppRouter.module.scss';

const AppRouter = () => {
    return (
    <div className={classNames(cls.AppRouter, {}, [])}>
        <Suspense fallback={<PageLoader />}>
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