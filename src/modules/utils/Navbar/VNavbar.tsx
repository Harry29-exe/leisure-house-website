import React from 'react';
import {Center, Link} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import {ColorModeSwitcher} from "../../../ColorModeSwitcher";

interface LinkProps {
    name: string,
    path: string
}

const VNavbar = (props: { links: LinkProps[] }) => {
    return (
        <Center w='100%'>
            {props.links.map(l =>
                <Link as={RouterLink} to={l.path}>{l.name}</Link>
            )}

            <ColorModeSwitcher alignSelf='flex-end'/>
        </Center>
    );
};

export default VNavbar;