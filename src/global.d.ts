/// <reference types="@sveltejs/kit" />

declare interface IActionReturn {
    update?: (parameters: any) => void,
	destroy?: () => void
}

declare interface IListener {
    node: HTMLElement,
    text: string,
    symbol?: string,
}
