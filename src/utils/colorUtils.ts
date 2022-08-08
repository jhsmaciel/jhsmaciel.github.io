import { PaletteMode, Theme } from "@mui/material"

export function corAleatoria(): 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' {
    var color = Math.floor(Math.random() * 6)

    switch (color) {
        case 0:
            return 'info'
        case 1:
            return 'warning'
        case 2:
            return 'error'
        case 3:
            return 'success'
        case 4:
            return 'primary'
        case 5:
            return 'secondary'
        default:
            return 'inherit'
    }
}

export const getDesignTokens = (mode: PaletteMode): Partial<Theme> => ({
    palette: {
      mode
    } as any,
    components: {
        MuiButton: {
            styleOverrides: {
            }
        }
    }
});
