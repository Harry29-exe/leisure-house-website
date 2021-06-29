import {extendTheme} from "@chakra-ui/react";
import {colors} from "./Colors";
import {mode} from "@chakra-ui/theme-tools"
import {breakpoints} from "./Breakpoints";
import {Modal} from "./components/Modal";

export const Theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: mode("primary.20", "gray.900")(props),
            }
        })
    },
    config: {
        initialColorMode: "dark"
    },
    colors,
    breakpoints,
    components: {

    }

})