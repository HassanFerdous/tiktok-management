import axios from "axios";

export default async function Home({ params, searchParams }: any) {
	const res = await axios.post("https://open.tiktokapis.com/v2/oauth/token/", {
		client_key: process.env.TIKTOK_CLIENT_ID,
		client_secret: process.env.TIKTOK_CLIENT_SECRET,
		code: searchParams?.code,
		grant_type: "authorization_code",
		redirect_uri: process.env.CLIENT_DOMAIN,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
	});

	return <div className="container py-10">{JSON.stringify(res.data)}</div>;
}
