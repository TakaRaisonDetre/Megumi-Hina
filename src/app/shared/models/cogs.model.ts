export interface COGS{
    id: string;
    product_id:string;
    name: string;
    description?: string;
    size: number;
    vendor: string;
    item_cost:number;
    original_color:string;
    isNew:Boolean;
}