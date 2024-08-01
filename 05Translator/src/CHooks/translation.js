import { useState, useEffect } from "react";

import { translate } from '@vitalets/google-translate-api';




export const translateMe = async (uText, uTarget) => {

    let translatedText = "Translating..."


    useEffect(async () => {


        async function translation(uText, uTarget) {
            try {
                const {text} = await translate(uText, { to: uTarget });
                return text;
            } catch (error) {
                console.error("Error got..", error);
                return null;
            }
        }
    
        translatedText = await translation(uText, uTarget)
        console.log(translatedText);

    }, [uText, uTarget])


    
    return translatedText
    


}


export default translateMe;
