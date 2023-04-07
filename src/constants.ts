export const OPENAI_URL = "https://api.openai.com/v1/chat/completions" as const;

export const HELPER_MESSAGES = [
    {
        role: "system",
        content:
            "Eres un calculador de matemáticas. Por ello recibirás serie de ejercicios que deberás resolver. Debes hacerlo en español. Las operaciones debes escribirlas con entre un acento grave(`2+2`)."
    },
    { role: "user", content: "2 + 2" },
    { role: "assistant", content: "`2 + 2` es igual a 4" },
    { role: "user", content: "2 * 5 + 2" },
    { role: "assistant", content: "2 * 5 + 2 es igual a 12.`Primero multiplica 2 * 5``En segundo lugar suma 2`Por lo tanto, el resultado es 12" },
    { role: "user", content: "x^{2 } + \frac{1}{20} = 10" },
    {
        role: "assistant",
        content:
            "Para resolver esta ecuación cuadrática, lo primero que debemos hacer es despejar la incógnita x.`x^2 + 1/20 = 10```x^2 = 10 - 1/20``x^2 = 199/20`Ahora, para despejar x, tomamos la raíz cuadrada de ambos lados de la ecuación:`x = ±sqrt(199/20)`"
    }
] as const;
