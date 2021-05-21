export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: "light",
    properties: {
        "--background-color": "#FFFFFF",
        "--fg-primary-color":  "#313237",
        "--fg-secondary-color": "#788D9B",
        "--backdrop-color":    "#EEEEF0",
    
        "--accent-color": "#5A7AFF",
        "--background-shadow": "0px 2px 63px -49px  #000000"
    }
}

export const dark: Theme = {
    name: "dark",
    properties: {
        "--background-color": "#18191A",
        "--fg-primary-color":  "#F1F2F3",
        "--fg-secondary-color": "#656C70",
        "--backdrop-color":    "#242526",
    
        "--accent-color": "#5A7AFF",
        "--background-shadow": "0px 2px 63px -49px  #FFFFFF"
    }
}