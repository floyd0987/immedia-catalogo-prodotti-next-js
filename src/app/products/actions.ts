"use server"

import { log } from "console";



const getProducts = async (categoryId: any, price_min: any, price_max: any, page: number) => {
    
    const limit = 12;
    const offset = page * limit;

    const categoryIdQueryString = categoryId && `categoryId=${categoryId}`;
    const priceRangeMinQueryString = price_min && `price_min=${price_min}`;
    const priceRangeMaxQueryString = price_max && `price_max=${price_max}`;
    const paginationQueryString = `limit=${limit}&offset=${offset}`;

    const queryString = [categoryIdQueryString, priceRangeMinQueryString, priceRangeMaxQueryString, paginationQueryString].filter(Boolean).join('&');
    const url = "https://api.escuelajs.co/api/v1/products/" + (queryString ? `?${queryString}` : '')

    const response = await fetch(url, { cache: 'no-store' });
    const data = await response.json();

    return data
}

export default getProducts;