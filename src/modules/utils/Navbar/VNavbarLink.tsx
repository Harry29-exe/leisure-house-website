import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import {ChakraProps, Link} from "@chakra-ui/react";

export interface LinkProps {
    name: string,
    path: string
}

const VNavbarLink = (props: LinkProps & ChakraProps) => {
    const {name, path, ...style} = props;

    return (
        <Link as={RouterLink} p={1} fontStyle='italic' {...style}
              to={path}>{name}</Link>
    );
};

export default VNavbarLink;

