"use client";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    const handleDiscordSignIn = () => {
        const client_id = "892848741860638781";
        const REDIRECT_URL = "http://localhost:3000/dashboard";
        const SCOPE = "identify";

        const authorizeUrl = `https://discord.com/api/oauth2/authorize?client_id=${client_id}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=${SCOPE}`;

        router.push(authorizeUrl);
    };
    return <button onClick={handleDiscordSignIn}>discord auth test</button>;
}
