import { useState } from "react"

export const useContador = (inital = 0, min, max ) => {
    const [ counter, setCounter ] = useState(inital)

    let sumaContador = () => {
        if (counter < max){
            setCounter(counter + 1)
        }
    }
    
    let restaContador = () => {
        if (counter > min){
            setCounter(counter - 1)
        }
    }

    return ({counter, sumaContador, restaContador})
}
