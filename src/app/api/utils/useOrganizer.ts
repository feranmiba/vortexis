import { useCallback } from "react";
import Hackathon_details from "./interface";


export default function useOrganizer() {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

  const createHackathon = useCallback(async (data: Hackathon_details) => {
    try {
      const response = await fetch(`${apiUrl}/hackathon`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
      });
  
      if (!response.ok) {
        throw new Error("Failed to create hackathon");
      }
  
      const result = await response.json();
      console.log("Hackathon created:", result);
      return result;
    } catch (error: any) {
      console.error("Error creating hackathon:", error.message || error);
      throw error;
    }
  }, []);

  const updateHackathon = useCallback(
    async (id: string, data: Hackathon_details) => {
      try {
        const response = await fetch(`${apiUrl}/hackathon/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Failed to update hackathon");
        }

        const result = await response.json();
        console.log("Hackathon updated:", result);
        return result;
      } catch (error: any) {
        console.error("Error updating hackathon:", error.message || error);
        throw error;
      }
    }, []);

    const inviteJudges = useCallback(
      async (hackathonId: string, judgeEmails: string[]) => {
        try {
          const response = await fetch(`${apiUrl}/hackathon/${hackathonId}/invite-judge`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ emails: judgeEmails }),
          });

          if (!response.ok) {
            throw new Error("Failed to invite judges");
          }

          const result = await response.json();
          console.log("Judges invited:", result);
          return result;
        }
        catch (error: any) {
          console.error("Error inviting judges:", error.message || error);
          throw error;
        }
      }
    , []);
        
    

    const getParticipants = useCallback(
      async() => {
      try {
        const response = await fetch(`${apiUrl}/hackathon`, {
            method: "GET"
        })

        if(!response.ok) {
            alert("Unable to fech participants")
        }

        const data =  await response.json()
        return data;

      } catch (error) {
        console.error("Network error")
      } 
    }, [], )

    const getSubmission = useCallback(
      async() => {
      try {
        const response = await fetch(`${apiUrl}/hackathon/submission`, {
            method: "GET"
        })

        if(!response.ok) {
            alert("Unable to fetch submissions")
        }

        const data = response.json()
      } catch (error) {
        console.error("Network error")
      } 
    }, [], )

    const getSubmissionById = useCallback(
      async (id: string) => {
        try {
          const response = await fetch(`${apiUrl}/hackathon/${id}/submission/`, {
            method: "GET"
          });

          if (!response.ok) {
            alert("Unable to fetch submission");
          }

          const data = await response.json();
          return data;
        } catch (error) {
          console.error("Network error", error);
        }
      }, [], );

      const deleteSubmission = useCallback(
        async (id: string) => {
          try {
            const response = await fetch(`${apiUrl}/hackathon/${id}/submission/`, {
              method: "DELETE"
            });

            if (!response.ok) {
              alert("Unable to delete submission");
            }

            const data = await response.json();
            return data;
          } catch (error) {
            console.error("Network error", error);
          }
        }, [], );

    return { 
        getParticipants,
        createHackathon,
        getSubmission,
        getSubmissionById,
        updateHackathon,
        deleteSubmission,
        inviteJudges
    }
    
}