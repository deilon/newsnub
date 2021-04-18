export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: "light",
    properties: {
        "--backgroundColor": "#FFFFFF",
        "--fgPrimaryColor":  "#313237",
        "--fgSecondaryColor": "#788D9B",
        "--backdropColor":    "#EEEEF0",
    
        "--accentColor": "#5A7AFF",
        "--backgroundShadow": "0px 6px 31px -30px #000000"
    }
}

export const dark: Theme = {
    name: "dark",
    properties: {
        "--backgroundColor": "#18191A",
        "--fgPrimaryColor":  "#F1F2F3",
        "--fgSecondaryColor": "#656C70",
        "--backdropColor":    "#242526",
    
        "--accentColor": "#5A7AFF",
        "--backgroundShadow": "0px 6px 31px -30px #FFFFFF"
    }
}