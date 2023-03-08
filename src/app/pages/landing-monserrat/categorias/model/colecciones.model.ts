export interface Lienas{
  title: string;
  image: string;
  //atributo opcional
  description?: string;
  products?: Products[];
}

export interface Products{
  name: string;
  description?: string;
  image?: string;
}

export interface lastColection{
  name: string;
  description?: string;
  image?: string;
}
