import {
	DocumentUri,
	Location,
	NotificationType,
	NotificationType0,
	Position,
	Range,
	RequestType,
	RequestType0,
	SemanticTokens,
	SemanticTokensLegend,
	TextDocumentIdentifier,
	TextDocumentPositionParams,
} from 'vscode-languageserver/node';

export namespace D3Request {
	export const type: RequestType<TextDocumentIdentifier, string | null | undefined, any> = new RequestType('volar/d3');
}
export namespace TagCloseRequest {
	export const type: RequestType<TextDocumentPositionParams, string | null | undefined, any> = new RequestType('html/tag');
}
export namespace RefCloseRequest {
	export const type: RequestType<TextDocumentPositionParams, string | null | undefined, any> = new RequestType('volar/ref');
}
export namespace DocumentVersionRequest {
	export const type: RequestType<{
		uri: string,
	}, number | undefined, any> = new RequestType('vue/docUpdated');
}
export namespace ActiveSelectionRequest {
	export const type: RequestType0<{
		uri: string,
		offset: number,
	} | undefined, any> = new RequestType0('vue/activeSelection');
}
export namespace VerifyAllScriptsRequest {
	export const type: RequestType<undefined, undefined, any> = new RequestType('volar.action.verifyAllScripts');
}
export namespace WriteVirtualFilesRequest {
	export const type: RequestType<undefined, undefined, any> = new RequestType('volar.action.writeVirtualFiles');
}

export namespace RestartServerNotification {
	export const type: NotificationType<undefined> = new NotificationType('volar.action.restartServer');
}
export namespace ShowReferencesNotification {
	export const type: NotificationType<{ uri: DocumentUri, position: Position, references: Location[] }> = new NotificationType('vue.findReferences');
}
export namespace GetServerNameCasesRequest {
	export const type: RequestType<TextDocumentIdentifier, {
		tag: 'both' | 'kebabCase' | 'pascalCase' | 'unsure',
		attr: 'both' | 'kebabCase' | 'pascalCase' | 'unsure',
	}, any> = new RequestType('volar/getTagNameCaseServer');
}
export namespace GetClientNameCasesRequest {
	export const type: RequestType<TextDocumentIdentifier, {
		tag: 'both' | 'kebabCase' | 'pascalCase',
		attr: 'kebabCase' | 'pascalCase',
	}, any> = new RequestType('volar/getTagNameCaseClient');
}

// semantic tokens
export namespace RangeSemanticTokensRequest {
	export const type: RequestType<{
		textDocument: TextDocumentIdentifier;
		range: Range;
	}, SemanticTokens | undefined, any> = new RequestType('vue.semanticTokens');
}
export namespace SemanticTokenLegendRequest {
	export const type: RequestType0<SemanticTokensLegend, any> = new RequestType0('vue.semanticTokenLegend');
}
export namespace SemanticTokensChangedNotification {
	export const type: NotificationType0 = new NotificationType0('vue.semanticTokensChanged');
}
