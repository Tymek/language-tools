///<reference types="svelte" />
<></>;
    import { store1 } from './somewhere';
    const store2 = ''/*Ωignore_startΩ*/;let $store2 = __sveltets_1_store_get(store2);/*Ωignore_endΩ*/;
;<></>;function render() {
<></>;/*Ωignore_startΩ*/;let $store1 = __sveltets_1_store_get(store1);/*Ωignore_endΩ*/<>

{$store1}
{$store2}</>
return { props: /** @type {Record<string, never>} */ ({}), slots: {}, events: {} }}

export default class Input__SvelteComponent_ extends __sveltets_1_createSvelte2TsxComponent(__sveltets_1_partial(__sveltets_1_with_any_event(render()))) {
}