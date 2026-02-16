let engineState = {
    online: true,
    execution: false,
    ai: false
};

export function getEngineState() {
    return engineState;
}

export function startExecution() {
    engineState.execution = true;
    console.log("Execution started");
}

export function stopExecution() {
    engineState.execution = false;
    console.log("Execution stopped");
}

export function enableAI() {
    engineState.ai = true;
    console.log("AI enabled");
}