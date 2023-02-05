import * as vscode from 'vscode';

export class TerminalOperator {
    private nextTermId = 1;

    constructor() {
        console.log("TerminalOperator construct");
    }

    public create() {
        vscode.window.createTerminal({
            name: `Ext Terminal #${this.nextTermId++}`,
            hideFromUser: false
        } as any);
    }
}