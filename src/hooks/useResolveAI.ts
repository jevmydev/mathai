import { type QueryLatex, type ResolveMessage } from "../types";
import { useState } from "react";
import { resolveAI } from "../services/resolveAI";

export const useResolveAI = () => {
    const [resolve, setResolve] = useState<ResolveMessage | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const updateResolve = async (query: QueryLatex) => {
        try {
            setLoading(true);

            const newResolve = await resolveAI(query);
            setResolve(newResolve);
        } catch (err) {
            setError(`Fetch resolve AI: ${err}`);
            throw new Error(`Fetch resolve AI: ${err}`);
        } finally {
            setLoading(false);
        }
    };

    return { resolve, loading, error, updateResolve };
};
