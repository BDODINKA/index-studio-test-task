import {instance} from "./apiConfig";

export const api = {
    getPosts(pageCount:number){
        return instance.get<ResponseType>(`items?page=${pageCount}`)
    },
    async getPostId(id:number){
        return instance.get(`items/${id}`)
    }
}


export type ResponseType = {
	items: ResponsePostsType[];
	total: number;
	page: number;
	size: number;
	pages: number;
}
export type ResponsePostsType = {
	id: string;
	seen: boolean;
	price: number;
	title: string;
	address: string;
	about: string;
	createdAt: string;
}