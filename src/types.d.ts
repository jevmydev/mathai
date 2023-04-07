export type QueryLatex = string;

export interface LatexType {
    latex: QueryLatex;
    updateLatex: (newLatex: QueryLatex) => void;
}

export interface ResolveMessage {
    role: string;
    content: string;
}

export interface ResolveChoices {
    message: ResolveMessage;
}

export interface ResolveAI {
    choices: Array<ResolveChoices>;
}
