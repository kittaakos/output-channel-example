import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Example for https://github.com/eclipse-theia/theia/discussions/8085');
    context.subscriptions.push(vscode.commands.registerCommand('hello-world-example-generated', (...args: any[]) => {
        vscode.window.showInformationMessage('Hello!');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('start-debugging', async (...args: any[]) => {
        const testChannel = vscode.window.createOutputChannel('test-channel');
        testChannel.appendLine('starting...');
        await vscode.debug.startDebugging(vscode.workspace.workspaceFolders![0], {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/index.js",
        });
        testChannel.appendLine('running...');
        testChannel.appendLine('running...');
        testChannel.appendLine('running...');
        testChannel.show(true);
    }));
}