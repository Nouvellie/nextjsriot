import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchCahmpionsDetails } from "@/utils/api";

const ChampionDetail = () => {
    const router = useRouter();
    const {id} = router.query;

    const {data, error, isLoading} = useQuery(['champion', id], () => fetchChampionDetails(id), {
        enabled: !!id,
    });

    if(!isLoading) return <p>Loading...</p>
    if (error) return <p>Error loading champion details.</p>;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
        </div>
    );
};

export default ChampionDetail;