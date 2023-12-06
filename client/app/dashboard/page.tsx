"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Dashboard: React.FC = () => {
    const [accessToken, setAccessToken] = useState<string | null>(null);

    const params = useSearchParams();
    const code = params.get("code");

    console.log(code);

    useEffect(() => {
        if (code) {
            const API_ENDPOINT = "http://discord.com/api/v10/oauth2/token";
            const CLIENT_ID = "892848741860638781";
            const CLIENT_SECRET = process.env.TOKEN;
            const REDIRECT_URI = "http://localhost:3000/dashboard";

            const data = {
                grant_type: "authorization_code",
                code: code,
                REDIRECT_URI: REDIRECT_URI,
            };

            const headers = {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
            };

            const urlencodedData = new URLSearchParams(data).toString();

            fetch(API_ENDPOINT, {
                method: "POST",
                headers: headers,
                body: urlencodedData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setAccessToken(data.access_token);
                })
                .catch((error) => {
                    console.error(`error: `, error);
                });
        }
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Code: {code}</p>
            <p>Access Token: {accessToken}</p>
        </div>
    );
};

export default Dashboard;
