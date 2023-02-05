import * as vscode from 'vscode';

export class TerminalListener {
    constructor() {
        console.log("TerminalListener construct, do nothing.");
    }

    public onDidOpenTerminal() {
        vscode.window.onDidOpenTerminal(terminal => {
            console.log("Terminal opened. Total count: " + vscode.window.terminals.length);
        });

        vscode.window.onDidOpenTerminal((terminal: vscode.Terminal) => {
            console.log("Terminal opened. Terminal name is : " + terminal.name);
        });
    }
} 