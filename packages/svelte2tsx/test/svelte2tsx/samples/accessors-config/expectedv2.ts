///<reference types="svelte" />
;function render() {

	 let foo: number = undefined/*Ωignore_startΩ*/;foo = __sveltets_1_any(foo);/*Ωignore_endΩ*/;
;
async () => {};
return { props: {foo: foo}, slots: {}, events: {} }}

export default class Input__SvelteComponent_ extends __sveltets_1_createSvelte2TsxComponent(__sveltets_1_partial(['foo'], __sveltets_1_with_any_event(render()))) {
    get foo() { return this.$$prop_def.foo }
    /**accessor*/
    set foo(_) {}
}