import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {RedirectPage} from "../../pages/Redirect";
import {PrivateRoute} from "../PrivateRoute";
import {AuthorizedPage} from "../../pages/Authorized";
import {StatisticsPage} from "../../pages/Main";
import {ProfilePage} from "../../pages/ProfilePage";
import {PeoplePage} from "../../pages/PeoplePage";
import {FC} from "react";
import {SpendingPage} from "../../pages/SpendingPage";

export const AppContent: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/redirect" element={<RedirectPage/>}/>
                <Route path="/authorized" element={<AuthorizedPage/>}/>
                <Route element={<PrivateRoute/>}>
                    <Route path="/main" element={<StatisticsPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/spending" element={<SpendingPage/>}/>
                    <Route path="/spending/:id" element={<SpendingPage/>}/>
                    <Route path="/people">
                        <Route path="/people/all" element={<PeoplePage activeTab={"all"}/>}/>
                        <Route path="/people/friends" element={<PeoplePage activeTab={"friends"}/>}/>
                    </Route>
                   <Route path="*" element={<Navigate to="/main"/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}