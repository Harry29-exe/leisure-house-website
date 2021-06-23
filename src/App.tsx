import * as React from "react"
import {Box, ChakraProvider} from "@chakra-ui/react"
import {Theme} from "./config/chakra/Theme";
import VNavbar from "./modules/utils/Navbar/VNavbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export const App = () => (
    <ChakraProvider theme={Theme}>
        <BrowserRouter>
            <VNavbar links={[{name: 'Home', path: '/home'}, {name: 'reservations', path: '/reservations'}]}/>

            <Switch>
                <Route path='/home'>
                    <Box bg={'primary.400'}>Hello</Box>
                </Route>
            </Switch>

        </BrowserRouter>
    </ChakraProvider>
)
