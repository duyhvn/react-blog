import axios from 'axios';
import { useState } from 'react';
import { FetchState, PostData } from "../const/types";

export function useGetAppConfig() {
    const APP_CONFIG_ENDPOINT = "/blog-config/"
    const [fetchState, setFetchState] = useState<FetchState>(FetchState.DEFAULT);
    const [appConfig, setAppConfig] = useState<PostData>();
    const getAppConfig = async (id: number) => {
        try {
            setFetchState(FetchState.LOADING);
            const url = `${process.env.REACT_APP_API_HOST}${APP_CONFIG_ENDPOINT}${id}`;
            const res = await axios.get(url);
            const resData = res.data as PostData;
            setAppConfig(resData);
            setFetchState(FetchState.SUCCESS);
        } catch (err) {
            setFetchState(FetchState.ERROR);
        }
        return appConfig;
    };
    return [appConfig, fetchState, getAppConfig] as const;
}