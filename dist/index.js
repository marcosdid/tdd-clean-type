"use strict";
class Person {
    speak(name) {
        return `Olá ${name?.toUpperCase() ?? "fulano"} !!!`;
    }
}
const p = new Person();
p.speak("marcos");
p.speak();
//# sourceMappingURL=index.js.map