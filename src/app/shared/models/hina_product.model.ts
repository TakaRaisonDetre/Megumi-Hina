export interface HinaProduct {
     _id: string;
     name: string;
     description?: string;
     category?: string;
     size?: number;
     photo?: string;
     isNew : Boolean;
     price?: Number;
     color?:string;
     makie_name?:string;
     downloadURL:string;
     path:string;
     // labor costs
     makie_artist?:string;
     makie_cost?:number;
     coloring_vender?:string;
     coloring_cost?:number;

   // public gallery?: string[];
  }
  


  