// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, my extension "automated-changelog-release-2" is now active!');

	let disposable = vscode.commands.registerCommand('automated-changelog-release-2.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World');
	});
	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('automated-changelog-release-2.msgPrantik', () => {
		vscode.window.showInformationMessage('May Allah bless you.');
	});
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
