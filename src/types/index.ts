export interface Sponsor {
    logo: string;
    name: string;
  }
  
 
  export interface HackathonCard {
    id: string
    title: string
    daysLeft: number
    venue: string
    participants: number
    prize: number
  }

  export interface ThemeData {
    category: string;
    count: number;
    year: string;
  }