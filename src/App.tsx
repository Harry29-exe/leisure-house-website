import * as React from "react"
import {ChakraProvider} from "@chakra-ui/react"
import {Theme} from "./config/chakra/Theme";
import VNavbar from "./modules/utils/Navbar/VNavbar";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import MainPage from "./modules/MainPage/MainPage";
import wood from "./resources/wood.jpg";
import Attractions from "./modules/attractions/Attractions";
import NewsPage from "./modules/news/NewsPage";
import ReservationsPage from "./modules/reservations/ReservationsPage";
import ContactPage from "./modules/Contact/ContactPage";
import GalleryPage from "./modules/gallery/GalleryPage";
import Footer from "./modules/utils/footer/Footer";

export const App = () => (
    <ChakraProvider theme={Theme}>
        <div style={{
            backgroundImage: `url(${wood})`,
            backgroundRepeat: 'repeat',
            width: "100%",
            height: "100%",
            minHeight: "100vh"
        }}>
            <HashRouter>
                <VNavbar/>

                <Switch>
                    <Route exact path='/'>
                        <MainPage/>
                    </Route>

                    <Route exact path='/atrakcje'>
                        <Attractions/>
                    </Route>

                    <Route exact path='/aktualności'>
                        <NewsPage/>
                    </Route>

                    <Route exact path='/rezerwacje'>
                        <ReservationsPage/>
                    </Route>

                    <Route exact path='/galeria'>
                        <GalleryPage/>
                    </Route>

                    <Route exact path='/kontakt-dojazd'>
                        <ContactPage/>
                    </Route>
                </Switch>

                <Footer/>

            </HashRouter>
        </div>
    </ChakraProvider>
)
