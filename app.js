function createEventBus() {
    const listeners = new Map()

    function on(event, handler) {
        if (!listeners.has(event)) {
            listeners.set(event, [])
        }
        listeners.get(event).push(handler)
    }

    function emit(event, data) {
        const handlers = listeners.get(event)
        if (!handlers) return

        for (const handler of handlers) {
            handler(data)
        }
    }

    return {on, emit}
}


// Test it like a system, not a demo. But the funny part is i don't know what am doing!!!

const bus = createEventBus()

bus.on("login", user => {
    console.log("log:", user)
})

bus.on("login", user => {
    console.log("analytics:", user)
})

bus.emit("login", { id: 42 })