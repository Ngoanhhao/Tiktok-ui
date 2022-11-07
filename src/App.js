import { publicRoute } from './Routes';
import DefaultLayout from './Layout/DefaultLayout';
import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoute.map((route, index) => {
                        var Layout = DefaultLayout;

                        if(route.layout) {
                            Layout = route.layout
                        }else if (route.layout === null) {
                            Layout = Fragment
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <route.component />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
