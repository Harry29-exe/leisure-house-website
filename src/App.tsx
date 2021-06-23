import * as React from "react"
import {Box, ChakraProvider, Image} from "@chakra-ui/react"
import {Theme} from "./config/chakra/Theme";
import VNavbar from "./modules/utils/Navbar/VNavbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import VMainPage from "./modules/MainPage/VMainPage";

export const App = () => (
    <ChakraProvider theme={Theme}>
        <BrowserRouter>
            <VNavbar/>

            <Switch>
                <Route exact path='/'>
                    <VMainPage/>
                </Route>

                <Route path='/reservations'>

                </Route>

                <Route path='/gallery'>

                </Route>
            </Switch>

        </BrowserRouter>
    </ChakraProvider>
)
