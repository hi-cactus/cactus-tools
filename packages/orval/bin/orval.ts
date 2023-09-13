import { generateConfig } from '../generate';

generateConfig('./orval.config.js', {
    watch: false,
    clean: false,
    prettier: true,
    tslint: false,
    mock: true,
});
