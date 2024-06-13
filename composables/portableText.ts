// Auto resolve behaviour module for portableText types and marks

type ComponentID = string
type Component = any
type PortableTextRegister = (string | [string, string] | [(...args: any[]) => any, string])[]

let registered: Record<string, Record<ComponentID, Component>> = {
    types: {},
    marks: {}
}

function toPascalCase(str: string)
{
    return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return chr.toUpperCase()});
}

function dotNotationToPascalCase(dotnotation: string)
{
    return dotnotation
        .split('.')
        .map(toPascalCase)
        .join('')
}

function capitalizeFirstLetter(string: string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function resolveTypes(type: string, components: PortableTextRegister)
{
    for (const component of components)
    {
        let name,
            path
        if (typeof component !== 'string')
        {
            path = component[0]
            name = component[1]
        }
        else {
            path = component
            name = component
        }

        if (typeof path === 'function') {

            return registered[type][name] = ({value}: any, {slots}: any) => path({value}, {slots})

        }

        registered[type][name] = ({value}: any, {slots}: any) =>
        {
            let compName = path.includes('.') ? dotNotationToPascalCase(path) : capitalizeFirstLetter(path),
                // '~' indicates full compnent import path
                importPath = path.includes('~')
                    ? dotNotationToPascalCase(path)
                    : `PortableText${capitalizeFirstLetter(type)}${compName}`

            return h(
                resolveComponent(importPath),
                value
            )
        }
    }
}

export const usePortableTextRegister = ({types, marks}: Record<string, PortableTextRegister>) =>
{
    resolveTypes('types', types ?? [])
    resolveTypes('marks', marks ?? [])
}

export const usePortableText = () =>
{
    return registered
}