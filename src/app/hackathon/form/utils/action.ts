import { useCallback } from "react";

export interface Form {
    preferences: string[];
    skills: string;
    location: string;
    hackathons: string[];
    time_zone: string;
}

export const useForm  = () => {
    const CreateRecommendation = useCallback( async (form: Form) => {
        console.log(form)
        try {
            const response = await fetch("api/hackathon/recommendation", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            })

            const data = response.json();   

            if (response.ok) {
                console.log(data);
                console.log("Recommendation created succeessfully")
                return data;
            } else {
                console.log("Recommendation failed to create")
            }
        } catch (error) {
            console.log("Recommendation failed to create")
            console.error(error);
        }
     }, []);

     const getAllCountries = useCallback( async () => { 
        try {
            const response = await fetch("https://restcountries.com/v3.1/all", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const data = await response.json();
            if (response.ok) { 
                console.log(data);
                const countries = data.map((country: any) => country.name.common);
                console.log(countries);
                console.log("Countries fetched succeessfully")
                return countries;
            } else {
                console.log("Countries failed to fetch")
            }

        } catch (error) {
            console.log("Countries failed to fetch")
        }
     }, []);
     return {
        CreateRecommendation,
        getAllCountries
     }

}