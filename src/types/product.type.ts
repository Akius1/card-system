export type Data = {
    id:number,
  name: string;
  images: string,
  description: string;
  countries: any[];
  available: boolean;
  code: string;
  type: string;
  price: number
};


export type InitialStateType = {
    // status: string;
    data: Data[];
  };
  
  
  export type CartType ={
      id : number,
      count: number
  }

  
export type ProductProps = {
    product: Data ;
    cart: Array<CartType>;
    setCart : any
  };

  export type DashboardProps = {
    cart: Array<CartType>;
    setCart : any
  };


export interface IResponseData{
    status: string,
    data: {
        benefitsList: Data[];
    }
}