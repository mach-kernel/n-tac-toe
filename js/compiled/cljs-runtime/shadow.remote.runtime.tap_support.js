goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__47893,p__47894){
var map__47896 = p__47893;
var map__47896__$1 = cljs.core.__destructure_map(map__47896);
var svc = map__47896__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47896__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47896__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47896__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47897 = p__47894;
var map__47897__$1 = cljs.core.__destructure_map(map__47897);
var msg = map__47897__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47897__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47897__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47897__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47897__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__47908,p__47909){
var map__47910 = p__47908;
var map__47910__$1 = cljs.core.__destructure_map(map__47910);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47910__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__47911 = p__47909;
var map__47911__$1 = cljs.core.__destructure_map(map__47911);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47911__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__47920,p__47921){
var map__47924 = p__47920;
var map__47924__$1 = cljs.core.__destructure_map(map__47924);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47924__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47924__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47925 = p__47921;
var map__47925__$1 = cljs.core.__destructure_map(map__47925);
var msg = map__47925__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47925__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__47934,tid){
var map__47936 = p__47934;
var map__47936__$1 = cljs.core.__destructure_map(map__47936);
var svc = map__47936__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47936__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__47948 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__47949 = null;
var count__47950 = (0);
var i__47951 = (0);
while(true){
if((i__47951 < count__47950)){
var vec__47975 = chunk__47949.cljs$core$IIndexed$_nth$arity$2(null,i__47951);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47975,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47975,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__48040 = seq__47948;
var G__48041 = chunk__47949;
var G__48042 = count__47950;
var G__48043 = (i__47951 + (1));
seq__47948 = G__48040;
chunk__47949 = G__48041;
count__47950 = G__48042;
i__47951 = G__48043;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47948);
if(temp__5804__auto__){
var seq__47948__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47948__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47948__$1);
var G__48047 = cljs.core.chunk_rest(seq__47948__$1);
var G__48048 = c__5568__auto__;
var G__48049 = cljs.core.count(c__5568__auto__);
var G__48050 = (0);
seq__47948 = G__48047;
chunk__47949 = G__48048;
count__47950 = G__48049;
i__47951 = G__48050;
continue;
} else {
var vec__47979 = cljs.core.first(seq__47948__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47979,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47979,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__48051 = cljs.core.next(seq__47948__$1);
var G__48052 = null;
var G__48053 = (0);
var G__48054 = (0);
seq__47948 = G__48051;
chunk__47949 = G__48052;
count__47950 = G__48053;
i__47951 = G__48054;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__47939_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__47939_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__47940_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__47940_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__47942_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__47942_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__47943_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__47943_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__48003){
var map__48004 = p__48003;
var map__48004__$1 = cljs.core.__destructure_map(map__48004);
var svc = map__48004__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48004__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48004__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
