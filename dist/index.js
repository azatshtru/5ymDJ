import { signal, memo } from 'https://cdn.jsdelivr.net/gh/azatshtru/relic/lib/relic-core.js';
import { syn, mount, bind } from 'https://cdn.jsdelivr.net/gh/azatshtru/relic/lib/relic-anvil.js';

function Counter() {
    const count = signal(0);
    return syn('div').children([
        syn('h1').text('Counter'),
        syn('p').text(count),
        syn('button').text('+1').on('click', () => count.mut(c => c + 1)),
    ]);
}

mount(Counter(), document.body);
