
const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");
const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");
const counter = document.getElementById("counter");
const title = document.getElementById("title");

const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");
const innerBtn = document.getElementById("innerBtn");

const logEl = document.getElementById("log");
const logClearBtn = document.getElementById("logClear");
const showDetails = document.getElementById("showDetails");
const demoLink = document.getElementById("demoLink");

console.log("window.document===document: ", window.document === document)


title.textContent = "Task ul (DOM: content, attribute, style, class)"

title.innerHTML = `Task ul <span style = "font-size: 14px">Hello</span>`

let nextId = 1;

function eventPhaseName(phase) {
    if (phase === 1) return "CAPTURE 1";
    if (phase === 2) return "TARGET 2";
    if (phase === 3) return "BUBBLE 3";

    return String(phase)
}

function log(msg) {
    const time = new Date().toLocaleDateString()
    logEl.textContent += `[${time} + ${msg}\n]`;
    logEl.scrollTop = logEl.scrollHeight;

}

function logEvent(label, e) {
    if(!showDetails.checked) {
        log(label);
        return
    }
    const t = e.target?.id ? `#${e.target.id}` : e.target?.tagName;

    const ct = e.currentTarget?.id ? `#${e.currentTarget.id}` : e.currentTarget?.tagName;

    log(
        `${label} | type=${e.type} phase=${eventPhaseName(e.eventPhase)}` + 
        `target=${t} currentTarget=${ct}`
    )
}


button.addEventListener("click", addTask);
button.addEventListener("click", clearAll);

input.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        addTask();
    }
})

//addBtn.addEventListener("click", onListClick);
//clearBtn.addEventListener("dblclick", onListDblClick);
list.addEventListener("click", onListClick);
list.addEventListener("dblclick", onListDblClick);


function addTask() {
    const text = input.value.trim();

    if (text === "") {
        input.setAttribute("placeholder", "empty");
        input.style.borderColor = "red";
        input.focus();
        return;
    }

    input.style.borderColor = "";
    input.setAttribute("placeholder", "Enter task");

    const li = document.createElement("li");
    li.textContent = text;
    li.classList.add("task");
    li.style.cursor = "pointer";
    li.setAttribute("data-id", String(nextId++));
    li.setAttribute("title", "click - do, double click - delete");

    list.appendChild(li);

    input.value = "";
    input.focus();

    updateCounters();
}

function clearAll() {
    list.innerHTML = "";
    updateCounters();
}

function updateCounters() {
    const all = list.querySelectorAll("li").length;
    const done = list.querySelectorAll("li.done").length;

    counter.textContent = `Total: ${all} - Complited: ${done}`;
}

function onListClick(e) {
    if (e.target.tagName !== "LI") return;

    const li = e.target;

    li.classList.toggle("active");
    li.classList.toggle("done");

    const id = li.getAttribute("data-id");
    console.log("Click on:", id);

    updateCounters();
}

function onListDblClick(e) {
    if (e.target.tagName !== "LI") return;

    e.target.remove();

    updateCounters();
}

logClearBtn.addEventListener("click", () => {
  logEl.textContent = "";
  log("Log cleared.");
}, {once: false});

demoLink.addEventListener("click", (e) => {
  e.preventDefault();
  logEvent("Navigation canceled", e);
});

outer.addEventListener("click", (e) => logEvent("Outer capture", e), true);
outer.addEventListener("click", (e) => logEvent("Outer bubble", e), false);

middle.addEventListener("click", (e) => logEvent("Middle capture", e), true);
middle.addEventListener("click", (e) => logEvent("Middle bubble", e), false);

inner.addEventListener("click", (e) => logEvent("Inner capture", e), true);
inner.addEventListener("click", (e) => logEvent("Inner bubble", e), false);

innerBtn.addEventListener("click", (e) => {
    logEvent("Click on inner btn", e)
})



