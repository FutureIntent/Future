
export interface ActionInterface {
    processAction: (action: string, text: string) => void;
    actionHi: () => void;
    actionGpt: (text: string) => void;
}

export type ActionType = {
    [key: string]: any
};