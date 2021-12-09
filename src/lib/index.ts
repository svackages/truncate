let _listeners: IListener[] = [];
let _hasResizeListener: boolean;
let _running = false;

const addNode = (listener: IListener): void => {
    _listeners.push(listener);
    if (!_hasResizeListener) {
        _hasResizeListener = true;
        window.addEventListener('resize', _truncate);
    }
};

const removeNode = (nodeToRemove: HTMLElement): void => {
    _listeners = _listeners.filter(({ node }) => node !== nodeToRemove);
    if (!_listeners.length) {
        _hasResizeListener = false;
        window.removeEventListener('resize', _truncate);
    }
};

const _truncateNode = ({ node, text, symbol }: IListener) => {
    node.innerText = text;
    if (node.scrollHeight - node.offsetHeight < 5) return;
    node.innerText = text + symbol;
    while (node.scrollHeight - node.offsetHeight > 5) {
        text = text.slice(0, -1) ;
        node.innerText = text + symbol;
    }
};

const _truncate = (_event: UIEvent ,onlyIndex?: number) => {
    if (!onlyIndex && _running) return;
    _running =  true;
    
    onlyIndex
        ? _truncateNode(_listeners[onlyIndex])
        : _listeners.forEach(_truncateNode);

    _running = false;
};

const truncate = (node: HTMLElement, symbol = '...'): IActionReturn => {
    const text = node.innerText;

    addNode({
        node,
        text,
        symbol,
    });

    _truncate(null, _listeners.length - 1);

	return {
		destroy(): void {
            removeNode(node);
		}
	};
};

export default truncate;    