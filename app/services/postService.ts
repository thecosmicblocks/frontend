import { get, post } from './apiService';

export const getPosts = async (params: {} | undefined) => await get(`/posts`, params);
export const getClaimNFTInfo = async (postId: any, params?: any) => await get(`/posts/${postId}/nft/claim`, params);