import React from 'react';
import {Box, VStack} from "@chakra-ui/react";
import PageTitle from "../utils/PageTitle";
import UserOpinion, {UserOpinionProps} from "./UserOpinion";

const opinions: UserOpinionProps[] = [
    {
        userName: "ala",
        opinion: "gnbfdhoisjghgnbfdhoisjghbfngdsfdafdhdgnbfdhoisjghbfngdsfdafdhdgnbfdhoisjghbfngdsfdafdhdgnbfdhoisjghbfngdsfdafdhdbfngdsfdafdhdgfd"
    },
    {userName: "ala", opinion: "gnbfdhoisjghbfngdsfdafdhdggnbfdhoisjghbfngdsfdafdhdgnbfdhoisjghbfngdsfdafdhdfd"},
    {
        userName: "ala",
        opinion: "gnbfdhoisjghbfngdsfdafdhdgnbfdhoisjghbfngdsfdafdhdgnbfdhoisjghbfngdsfdafdhdgnbfdhoisjghbfngdsfdafdhdgnbfdhoisjghbfngdsfdafdhdgfd"
    },

]

const UsersOpinions = () => {
    let key = 0;

    return (
        <Box w={'100%'}>
            <PageTitle title={"Opinie naszych gości"}/>

            <VStack w='100%' spacing={10}>
                {opinions.map(
                    o => <UserOpinion key={key++} userName={o.userName} opinion={o.opinion}/>
                )}
            </VStack>
        </Box>
    );
};

export default UsersOpinions;