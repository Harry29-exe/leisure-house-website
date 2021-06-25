import React, {useState} from 'react';
import {AttractionModel, fetchAttractions} from "./AttractionsPresenter";

const Attractions = () => {
    const [state, setState] = useState<AttractionModel[]>();

    if(!state) {
        fetchAttractions()
            .then(
                value => setState(value),
                reason => console.log(reason));
    }

    return (
        <div>
            {state &&

                state.map(
                a => <div key={a.name}>{a.name + a.description}</div>
            )}
        </div>
    );
};

export default Attractions;