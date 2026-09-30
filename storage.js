// Uma solicitação por chamada; recusa ou falha nunca impede o uso do diário.
export async function requestPersistence(storage=globalThis.navigator?.storage){
 if(!storage)return 'unsupported';
 try{
  if(typeof storage.persisted==='function'&&await storage.persisted())return 'granted';
  if(typeof storage.persist!=='function')return 'unsupported';
  return await storage.persist()?'granted':'denied';
 }catch{return 'failed';}
}
