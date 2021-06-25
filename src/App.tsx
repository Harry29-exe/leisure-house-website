import * as React from "react"
import {background, Box, ChakraProvider, Image} from "@chakra-ui/react"
import {Theme} from "./config/chakra/Theme";
import VNavbar from "./modules/utils/Navbar/VNavbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import VMainPage from "./modules/MainPage/VMainPage";
import wood from "./resources/wood.jpg";
import Reservations from "./modules/Reservations";

export const App = () => (
    <ChakraProvider theme={Theme}>
        <div style={{backgroundImage: `url(${wood})`, backgroundRepeat: 'repeat', width: "100%", height: "100%", minHeight: "100vh"}}>
            <BrowserRouter>
                <VNavbar/>

                <Switch>
                    <Route exact path='/'>
                        <VMainPage/>
                    </Route>

                    <Route path='/reservations'>
                        <Reservations/>
                    </Route>

                    <Route path='/gallery'>

                    </Route>
                </Switch>

            </BrowserRouter>
        </div>
    </ChakraProvider>
)
