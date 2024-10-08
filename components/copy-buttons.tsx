"use client";
import React, { useState } from "react";

export interface Tokens {
	access_token: string;
	expires_in: number;
	opn_id: string;
	refresh_expires_in: number;
	refresh_token: string;
	token_type: string;
	scope: string;
}

interface Props {
	tokens: Tokens | null;
	error?: string;
}
const CopyButtons = ({ tokens, error }: Props) => {
	const [accessTokenCopied, setAccessTokenCopied] = useState<boolean>(false);
	const [refreshTokenCopied, setRefreshTokenCopied] = useState<boolean>(false);

	const handleCopy = async (
		text: string,
		setCopied: (val: boolean) => void
	) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	if (error || !tokens) return <h1>{error}</h1>;

	return (
		<div className="flex flex-col items-center gap-4 p-4">
			<button
				onClick={() =>
					handleCopy(tokens.access_token, setAccessTokenCopied)
				}
				className="flex items-center gap-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md focus:outline-none focus:ring-1 min-w-[220px] justify-center focus:ring-blue-300 transition duration-200 ease-in-out">
				{accessTokenCopied ? (
					<>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="h-5 w-5 text-white">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m4.5 12.75 6 6 9-13.5"
							/>
						</svg>
						Copied!
					</>
				) : (
					<>
						<svg
							className="h-5 w-5 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
							/>
						</svg>{" "}
						Copy Access Token
					</>
				)}
			</button>

			<button
				onClick={() =>
					handleCopy(tokens.refresh_token, setRefreshTokenCopied)
				}
				className="flex items-center gap-2 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md focus:outline-none focus:ring-1 min-w-[220px] justify-center focus:ring-green-300 transition duration-200 ease-in-out">
				{refreshTokenCopied ? (
					<>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="h-5 w-5 text-white">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m4.5 12.75 6 6 9-13.5"
							/>
						</svg>
						Copied!
					</>
				) : (
					<>
						<svg
							className="h-5 w-5 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
							/>
						</svg>{" "}
						Copy Refresh Token
					</>
				)}
			</button>
		</div>
	);
};

export default CopyButtons;
