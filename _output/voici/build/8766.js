"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8766,6385],{98766:(e,n,a)=>{a.r(n),a.d(n,{default:()=>s});var t=a(3414),r=a(68211);const o=new r.Token("@jupyterlab/docmanager:IDocumentManager","A service for the manager for all\n  documents used by the application. Use this if you want to open and close documents,\n  create and delete files, and otherwise interact with the file system.");new r.Token("@jupyterlab/docmanager:IDocumentWidgetOpener","A service to open a widget.");var i,d=a(2903),l=a(8587);!function(e){e.handleLink="rendermime:handle-local-link"}(i||(i={}));const s={id:"@jupyterlab/rendermime-extension:plugin",description:"Provides the render mime registry.",optional:[o,d.ILatexTypesetter,t.ISanitizer,d.IMarkdownParser,l.ITranslator],provides:d.IRenderMimeRegistry,activate:function(e,n,a,t,r,o){const s=(null!=o?o:l.nullTranslator).load("jupyterlab");return n&&e.commands.addCommand(i.handleLink,{label:s.__("Handle Local Link"),execute:a=>{const t=a.path,r=a.id,o=a.scope||"server";if(t)return"kernel"===o?e.commands.hasCommand(c)?e.commands.execute(c,{path:t}):void console.warn("Cannot open kernel file: debugger sources provider not available"):n.services.contents.get(t,{content:!1}).then((()=>{const e=n.registry.defaultRenderedWidgetFactory(t),a=n.openOrReveal(t,e.name);a&&r&&a.setFragment(r)}))}}),new d.RenderMimeRegistry({initialFactories:d.standardRendererFactories,linkHandler:n?{handleLink:(n,a,t)=>{"A"===n.tagName&&n.hasAttribute("download")||e.commandLinker.connectNode(n,i.handleLink,{path:a,id:t})},handlePath:(n,a,t,r)=>{e.commandLinker.connectNode(n,i.handleLink,{path:a,id:r,scope:t})}}:void 0,latexTypesetter:null!=a?a:void 0,markdownParser:null!=r?r:void 0,translator:null!=o?o:void 0,sanitizer:null!=t?t:void 0})},autoStart:!0},c="debugger:open-source"}}]);