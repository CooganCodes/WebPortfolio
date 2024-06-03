window.addEventListener('error', event => {
    if (event.message === 'ResizeObserver loop limit exceeded') {
        event.stopImmediatePropagation();
    }
}, true);
