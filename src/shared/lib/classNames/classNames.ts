type Mods  = Record<string, boolean | string> // Record(запись) - тип поддерживающий функцонал объекта (<значение|ключ>) 

export function classNames(cls:string, mods:Mods, additional:string[]):string {
    return [
        cls,
        ...additional,
        Object.entries(mods)
        .filter(([key, value]) => Boolean(value))
        .map(([key, value]) => key)
    ].join(' ');
}