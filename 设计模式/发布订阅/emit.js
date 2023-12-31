class EventEmitter{
    constructor(){
        this._events = this._events || new Map(); // 储存事件/回调键值对
        this._maxListeners = this._maxListeners || 10; // 设立监听上限
    }
    on() {

    }

    once() {

    }

    emit() {

    }

    off() {
      
    }
}