export type postPayload<T>=T

export type examplePayloadType ={
  title: string,
  body: string,
  userId: number,
}

export type ApiResponse<T> = {
  message: string,
  status: number,
  isSuccessful: boolean,
  errors?: string[],
  data: T
};


export type PaginationResponseType <T> = {
  response: T;
  statusCode: number;
  statusMessage: string;
  totalPages : number,
  totalRecords : number,
  pageNumber : number,
  pageSize: number,
  hasPreviousPage : boolean,
  hasNextPage: boolean
}