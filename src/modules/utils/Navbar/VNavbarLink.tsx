import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import {Link} from "@chakra-ui/react";

export interface LinkProps {
    name: string,
    path: string
}

const VNavbarLink = (props: LinkProps) => {
    return (
        <Link as={RouterLink} p={1} fontStyle='italic'
              to={props.path}>{props.name}</Link>
    );
};

export default VNavbarLink;

