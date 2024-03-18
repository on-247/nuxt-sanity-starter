import {ulid} from 'ulid'

type ComponentID = string
type Component = any
type RenderID = string

let registerdDrawers: Record<ComponentID, Component> = {}
let renderedDrawers: Record<RenderID, () => Component> = reactive({})

function toPascalCase(str: string){
    return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return chr.toUpperCase()});
}

function dotNotationToPascalCase(dotnotation: string) {
    return dotnotation
        .split('.')
        .map(toPascalCase)
        .join('')
}

/**
 * Register drawers.
 */
export const useDrawerRegister = (drawers: string[]) => {
    for (const drawer of drawers) {
        registerdDrawers[drawer] = resolveComponent('Drawer' + dotNotationToPascalCase(drawer))
    }
}

/**
 * Activate drawer.
 */
export const useDrawerActivate = (id: ComponentID, data?: any) => {
    if (!(id in registerdDrawers)) return
    let renderId = ulid()
    let renderFunction = () => h(
        registerdDrawers[id],
        {id: renderId, data}
    )
    renderedDrawers[renderId] = renderFunction

    return () => useDrawerDeactivate(renderId)
}

/**
 * Deactivate drawer.
 */
export const useDrawerDeactivate = (id: RenderID) => {
    if (!(id in renderedDrawers)) return

    delete renderedDrawers[id]
}

/**
 * Returns (to-be) rendered drawers.
 */
export const useDrawerRender = () => {
    return renderedDrawers
}