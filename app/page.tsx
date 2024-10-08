import CopyButtons, { Tokens } from "@/components/copy-buttons";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function Home({ searchParams }: any) {
	const res = await axios.post(
		"https://open.tiktokapis.com/v2/oauth/token/",
		{
			client_key: process.env.TIKTOK_CLIENT_ID,
			client_secret: process.env.TIKTOK_CLIENT_SECRET,
			code: searchParams?.code,
			grant_type: "authorization_code",
			redirect_uri: process.env.CLIENT_DOMAIN,
		},
		{
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		}
	);
	const data = res.data;
	let tokens: Tokens | null = null;
	if (data.error) {
		tokens = null;
	} else {
		tokens = data;
	}
	if (!tokens) redirect("/login");
	return (
		<div className="container py-10 break-words">
			<CopyButtons tokens={tokens} error={data.error} />
		</div>
	);
}
