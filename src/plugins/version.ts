import { createRequire } from 'module';
import { Plugin } from './plugin.js';

const require = createRequire(import.meta.url);
const { version } = require('../../package.json') as { version: string };

export default function (): Plugin {
    return {
        name: 'version',

        async onMessage({ command, message }) {
            if (command === 'version') {
                await message.channel.send(version);
            }
        },
    };
}
