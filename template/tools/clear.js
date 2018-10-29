const windows = process.platform.indexOf('win') === 0;

function clear() {
    let i, lines;
    let stdout = '';

    if (windows === false) {
        stdout += '\x1B[2J';
    } else {
        try {
            lines = process.stdout.getWindowSize()[1];
            for (i = 0; i < lines; i++) {
                stdout += '\r\n';
            }
        } catch (e) {
            // https://github.com/alexjoverm/typescript-library-starter/issues/137
            process.stdout.write('\x1B[2J\x1B[0f')
        }
    }

    // Reset cursur
    stdout += '\x1B[0f';

    process.stdout.write(stdout);
}

export default clear;
