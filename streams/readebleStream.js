// This is my first readeble method Api

import { stdout } from 'node:process'
import { Readable } from 'node:stream'

export default class ReadableStream extends Readable { 
    index = 1
    _read() {
        const i = this.index++
        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            }
            const buf = Buffer.from(String(i))
            this.push(buf)
        },500) 
    }   
}

new ReadableStream()
    .pipe(stdout)