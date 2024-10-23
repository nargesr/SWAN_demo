"use strict";(self.webpackChunk_jupyterlite_xeus=self.webpackChunk_jupyterlite_xeus||[]).push([[413],{413:(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});var i=t(363),r=t(830),n=t(62),o=t(306),a=t(684),l=t(901),d=t(930);class h{constructor(e){this._isDisposed=!1,this._disposed=new l.Signal(this),this._executeDelegate=new d.PromiseDelegate,this._parentHeader=void 0,this._parent=void 0;const{id:s,name:r,sendMessage:n,location:o}=e;this._id=s,this._name=r,this._location=o,this._kernelspec=e.kernelspec,this._sendMessage=n,this._worker=new Worker(new URL(t.p+t.u(213),t.b),{type:void 0}),this._worker.onmessage=e=>{this._processWorkerMessage(e.data)},this._remote=(0,a.wrap)(this._worker),this._remote.initialize(this._kernelspec,i.PageConfig.getBaseUrl()),this.initFileSystem(e)}async handleMessage(e){this._parent=e,this._parentHeader=e.header,await this._sendMessageToWorker(e)}async _sendMessageToWorker(e){if("input_reply"!==e.header.msg_type&&(this._executeDelegate=new d.PromiseDelegate),await this._remote.processMessage({msg:e,parent:this.parent}),"input_reply"!==e.header.msg_type)return await this._executeDelegate.promise}get parentHeader(){return this._parentHeader}get parent(){return this._parent}get location(){return this._location}_processWorkerMessage(e){var s,t,i,r;e.header&&(e.header.session=null!==(t=null===(s=this._parentHeader)||void 0===s?void 0:s.session)&&void 0!==t?t:"",e.session=null!==(r=null===(i=this._parentHeader)||void 0===i?void 0:i.session)&&void 0!==r?r:"",this._sendMessage(e),"status"===e.header.msg_type&&"idle"===e.content.execution_state&&this._executeDelegate.resolve())}get ready(){return Promise.resolve()}get isDisposed(){return this._isDisposed}get disposed(){return this._disposed}dispose(){this.isDisposed||(this._worker.terminate(),this._worker=null,this._remote=null,this._isDisposed=!0,this._disposed.emit(void 0))}get id(){return this._id}get name(){return this._name}async initFileSystem(e){let s,t;if(e.location.includes(":")){const i=e.location.split(":");s=i[0],t=i[1]}else s="",t=e.location;await this._remote.ready(),e.mountDrive&&await this._remote.mount(s,"/drive",i.PageConfig.getBaseUrl()),await this._remote.isDir("/files")?await this._remote.cd("/files"):e.mountDrive&&await this._remote.cd(t)}}function c(e){const s=i.URLExt.join(i.PageConfig.getBaseUrl(),e),t=new XMLHttpRequest;return t.open("GET",s,!1),t.send(null),JSON.parse(t.responseText)}let p=[];try{p=c("xeus/kernels.json")}catch(e){throw console.log(`Could not fetch xeus/kernels.json: ${e}`),e}const u=p.map((e=>({id:`@jupyterlite/xeus-${e}:register`,autoStart:!0,requires:[o.IKernelSpecs],optional:[r.IServiceWorkerManager,n.IBroadcastChannelWrapper],activate:(s,t,r,n)=>{const o=c("xeus/kernels/"+e+"/kernel.json");o.name=e,o.dir=e;for(const[e,s]of Object.entries(o.resources))o.resources[e]=i.URLExt.join(i.PageConfig.getBaseUrl(),s);t.register({spec:o,create:async e=>{const s=!(!(null==r?void 0:r.enabled)||!(null==n?void 0:n.enabled));return s?console.info(`${o.name} contents will be synced with Jupyter Contents`):console.warn(`${o.name} contents will NOT be synced with Jupyter Contents`),new h({...e,mountDrive:s,kernelspec:o})}})}})))}}]);