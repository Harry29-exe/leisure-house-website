import * as React from "react"
import {background, Box, ChakraProvider, Image} from "@chakra-ui/react"
import {Theme} from "./config/chakra/Theme";
import VNavbar from "./modules/utils/Navbar/VNavbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./modules/MainPage/MainPage";
import wood from "./resources/wood.jpg";
import Attractions from "./modules/attractions/Attractions";
import NewsPage from "./modules/news/NewsPage";
import ReservationsPage from "./modules/reservations/ReservationsPage";

export const App = () => (
    <ChakraProvider theme={Theme}>
        <div style={{backgroundImage: `url(${wood})`, backgroundRepeat: 'repeat', width: "100%", height: "100%", minHeight: "100vh"}}>
            <BrowserRouter>
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

                    </Route>

                    <Route exact path='/kontakt-dojazd'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19963.208407614584!2d22.65823545!3d51.2853433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1624640287836!5m2!1spl!2spl"
                            width="600" height="450" loading="lazy"></iframe>
                    </Route>
                </Switch>

            </BrowserRouter>
        </div>
    </ChakraProvider>
)
