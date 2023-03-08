// This is my first readeble method Api

import { stdout } from 'node:process'
import { Readable, Writable } from 'node:stream'

class ReadableStream extends Readable { 
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

class MultiByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString() * 10))
        callback()
    }
}

new ReadableStream()
    .pipe(new MultiByTenStream())