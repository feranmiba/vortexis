import { useCallback } from "react";

export interface Form {
    preferences: string[];
    skills: string;
    location: string;
    hackathons: string[];
    time_zone: string;
}

interface Country {
    name: {
      common: string;
    };
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

            const data: Country[] = await response.json();
            if (response.ok) { 
                console.log(data);
                return data.map((country) => country.name.common);
            } else {
                console.log("Countries failed to fetch")
            }

        } catch (error) {
            console.log("Countries failed to fetch")
            console.error(error);
        }
     }, []);
     return {
        CreateRecommendation,
        getAllCountries
     }

}