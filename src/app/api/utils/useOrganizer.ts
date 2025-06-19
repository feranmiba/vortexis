import { useCallback } from "react";

export default function useOrganizer() {

    const createHackathon = useCallback(async () => {

    }, [])
    

    const getParticipants = useCallback(
      async() => {
      try {
        const response = await fetch(`apiurl/participants`, {
            method: "GET"
        })

        if(!response.ok) {
            alert("Unable to fech participants")
        }

        const data = response.json()
      } catch (error) {
        console.error("Network error")
      } 
    }, [], )


    return { 
        getParticipants
    }
    
}