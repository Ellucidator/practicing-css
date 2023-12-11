import { ReactNode, createContext } from "react"


export default function DataContext({children}: {children: ReactNode}) {
    const DataContext =createContext({})
    return (
        <DataContext.Provider value={{}}>
            {children}
        </DataContext.Provider>
    )
}