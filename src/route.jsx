import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./MainPage";
import ContactPage from "./ContactPage";

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                    {/*<Route path="blogs" element={<Blogs />} />*/}
                <Route path="contact" element={<ContactPage />} />
                    {/*<Route path="*" element={<NoPage />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}