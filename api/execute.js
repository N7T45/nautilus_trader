let executionState = false;

export default function handler(req, res) {

    if (req.method === "POST") {
        executionState = true;

        return res.status(200).json({
            engine: "nautilus-trader",
            execution: executionState,
            message: "Execution started"
        });
    }

    if (req.method === "DELETE") {
        executionState = false;

        return res.status(200).json({
            engine: "nautilus-trader",
            execution: executionState,
            message: "Execution stopped"
        });
    }

    res.status(200).json({
        engine: "nautilus-trader",
        execution: executionState
    });
}