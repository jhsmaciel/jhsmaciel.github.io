import React from 'react';
import { ThemeProvider as ThemeProviderMaterial, createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { STORAGE_ITEM_NAME_THEME } from 'constants/storage';

interface ThemeDataContext {
    changeTheme(mode: PaletteMode): void
    mode?: PaletteMode
}

const ThemeContext = React.createContext<ThemeDataContext>({ changeTheme: () => {}, mode: 'light'});

export const ThemeProvider = ({children}: {children: React.ReactNode}) => { 
    const [mode, setMode] = React.useState<PaletteMode>(() => {
        const storagedTheme = localStorage.getItem(STORAGE_ITEM_NAME_THEME);
        if (storagedTheme) {
            return storagedTheme as PaletteMode;
        } else {
            return 'light';
        }
    });

    const colorMode = React.useMemo<ThemeDataContext>(
        () => ({
            changeTheme: (newMode: PaletteMode) => {
                if (newMode) {
                    localStorage.setItem(STORAGE_ITEM_NAME_THEME, newMode);
                    setMode(
                        newMode
                    );
                }
            },
            mode,
        }),
        [mode],
    );

    const theme = React.useMemo(
        () =>
        createTheme({
            palette: {
                mode,
            },
        }),
        [mode],
    );

    return (
        <ThemeContext.Provider value={colorMode}>
            <ThemeProviderMaterial theme={theme}>
                {children}
            </ThemeProviderMaterial>
        </ThemeContext.Provider>
    )
}


export function useTheme(): ThemeDataContext {
    const context = React.useContext<ThemeDataContext>(ThemeContext);
    return context;
}