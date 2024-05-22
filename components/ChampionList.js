import React from "react";
import { useQuery } from "react-query";
import { fetchChampions } from "@/utils/api";
import Link from "next/link";

const ChampionList = () => {
    const {data, error, isLoading } = useQuery('champions', fetchChampions);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading champions.</p>;

    return (
        <div>
            <h1>Champions</h1>
            <ul>
                {data.map((champion) => (
                    <li key={champion.id}>
                        <Link href={`/champions/${champion.id}`}>
                            <a>{champion.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChampionList;