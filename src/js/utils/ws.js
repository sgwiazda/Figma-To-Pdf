import io from 'socket.io-client'

const ON_FRAME_STEP = "ON_FRAME_STEP"
const ON_PDF_FRAME_STEP = "ON_PDF_FRAME_STEP"

export default class WebSocketManager {
    static init() {
        this.socket = io('http://localhost:3002');
    }

    static onFrameStep(cb) {
        this.socket.on(ON_FRAME_STEP, cb)
    }

    static onPdfFrameStep(cb) {
        this.socket.on(ON_PDF_FRAME_STEP, cb)
    }

    static off() {
        this.socket.off(ON_FRAME_STEP)
        this.socket.off(ON_PDF_FRAME_STEP)
    }
}