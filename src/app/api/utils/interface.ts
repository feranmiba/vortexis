export default interface Hackathon_details {
    title: string; 
    description: string; 
    venue: string; 
    details?: string | null;
    grand_prize?: number; 
    start_date: string;
    end_date: string;
    visibility?: boolean;
    min_team_size?: number; 
    max_team_size?: number;
    organization?: number | null; 
    skills?: string[];
    judges?: string[]; 
  }
  