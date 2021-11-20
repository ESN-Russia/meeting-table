export class OverlayState {
    activeMode: string = "transparent";
    timerTs: number = 0;
    timerTitle: string = "";
    timerNextTitle: string = "";
    presenterName: string = "";
    presenterTitle: string = "";
}

export class OverlayStateContainer {
    state = new OverlayState();

    toString = () => JSON.stringify(this.state);
    updateStateFromMessage = (message: string) => {
        const stateCandidate: OverlayState = JSON.parse(message);

        this.state = stateCandidate;
    }
}