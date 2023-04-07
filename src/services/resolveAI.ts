import { HELPER_MESSAGES, OPENAI_URL } from "../constants";
import { type ResolveIA, type ResolveMessage, type QueryLatex } from "../types";

export const OPENAI_OPTIONS = (query: QueryLatex) => ({
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_APIKEY}`
    },
    body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [...HELPER_MESSAGES, { role: "user", content: `La operación a resolver es ${query}.` }],
        temperature: 0.7,
        max_tokens: 1000
    })
});

export const contractResolveIA = (resolve: ResolveIA): ResolveMessage => {
    const choices = resolve?.choices;
    const firstChoice = choices?.at(0);
    const message = firstChoice?.message;

    if (!message) throw new Error("No se encontraron mensages");

    return message;
};

export const resolveAI = async (query: QueryLatex): Promise<ResolveMessage> => {
    const res = await fetch(OPENAI_URL, OPENAI_OPTIONS(query));
    const resolve: ResolveIA = await res.json();

    const contractResolve = contractResolveIA(resolve);
    return contractResolve;
};
