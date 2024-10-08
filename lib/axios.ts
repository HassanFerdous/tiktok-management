import axiosGlobal from "axios";

export const axios = axiosGlobal.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	timeout: 10000,
});
