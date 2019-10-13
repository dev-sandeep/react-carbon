import { useContext, useEffect } from 'react';
import { BaseContext } from './BaseContext'

const UseBaseContext = () => {
    const [state, setState] = useContext(BaseContext);

    function addToEmission(id, value) {
        switch (id) {
            case "food": {
                setState(state => ({
                    ...state, emission: {
                        ...state.emission, food: value
                    }
                }));
                break;
            }
            case "travel": {
                setState(state => ({
                    ...state, emission: {
                        ...state.emission, travel: value
                    }
                }));
                break;
            }
            case "house": {
                setState(state => ({
                    ...state, emission: {
                        ...state.emission, house: value
                    }
                }));
                break;
            }
            case "energy": {
                setState(state => ({
                    ...state, emission: {
                        ...state.emission, energy: value
                    }
                }));
                break;
            }
        }

        console.log("emission", state.emission);
    }

    function resetEmissionTotal() {
        setState(state => ({
            ...state, emissionTotal: {
                energy: 0,
                food: 0,
                travel: 0,
                house: 0
            }
        }));
    }

    function totalEmission() {
        return state.emission.house + state.emission.travel + state.emission.food + state.emission.energy;
    }
    
    function setNews(news){
        setState(state => ({
            ...state, news
        }));
    }

    function getNews(){

    }
    return {
        addToEmission,
        totalEmission,
        foodEmission: state.emission.food,
        energyEmission: state.emission.energy,
        houseEmission: state.emission.house,
        travelEmission: state.emission.travel,
        resetEmissionTotal,
        setNews
    }
}


export default UseBaseContext;