goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__19884){
var map__19885 = p__19884;
var map__19885__$1 = cljs.core.__destructure_map(map__19885);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19885__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19885__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19885__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19885__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__19887_19915 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__19888_19916 = null;
var count__19889_19917 = (0);
var i__19890_19918 = (0);
while(true){
if((i__19890_19918 < count__19889_19917)){
var vec__19901_19919 = chunk__19888_19916.cljs$core$IIndexed$_nth$arity$2(null,i__19890_19918);
var k_19920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19901_19919,(0),null);
var cb_19921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19901_19919,(1),null);
try{var G__19905_19922 = cljs.core.deref(re_frame.trace.traces);
(cb_19921.cljs$core$IFn$_invoke$arity$1 ? cb_19921.cljs$core$IFn$_invoke$arity$1(G__19905_19922) : cb_19921.call(null,G__19905_19922));
}catch (e19904){var e_19923 = e19904;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_19920,"while storing",cljs.core.deref(re_frame.trace.traces),e_19923], 0));
}

var G__19924 = seq__19887_19915;
var G__19925 = chunk__19888_19916;
var G__19926 = count__19889_19917;
var G__19927 = (i__19890_19918 + (1));
seq__19887_19915 = G__19924;
chunk__19888_19916 = G__19925;
count__19889_19917 = G__19926;
i__19890_19918 = G__19927;
continue;
} else {
var temp__5804__auto___19928 = cljs.core.seq(seq__19887_19915);
if(temp__5804__auto___19928){
var seq__19887_19929__$1 = temp__5804__auto___19928;
if(cljs.core.chunked_seq_QMARK_(seq__19887_19929__$1)){
var c__5568__auto___19930 = cljs.core.chunk_first(seq__19887_19929__$1);
var G__19931 = cljs.core.chunk_rest(seq__19887_19929__$1);
var G__19932 = c__5568__auto___19930;
var G__19933 = cljs.core.count(c__5568__auto___19930);
var G__19934 = (0);
seq__19887_19915 = G__19931;
chunk__19888_19916 = G__19932;
count__19889_19917 = G__19933;
i__19890_19918 = G__19934;
continue;
} else {
var vec__19907_19935 = cljs.core.first(seq__19887_19929__$1);
var k_19936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19907_19935,(0),null);
var cb_19937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19907_19935,(1),null);
try{var G__19911_19938 = cljs.core.deref(re_frame.trace.traces);
(cb_19937.cljs$core$IFn$_invoke$arity$1 ? cb_19937.cljs$core$IFn$_invoke$arity$1(G__19911_19938) : cb_19937.call(null,G__19911_19938));
}catch (e19910){var e_19939 = e19910;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_19936,"while storing",cljs.core.deref(re_frame.trace.traces),e_19939], 0));
}

var G__19940 = cljs.core.next(seq__19887_19929__$1);
var G__19941 = null;
var G__19942 = (0);
var G__19943 = (0);
seq__19887_19915 = G__19940;
chunk__19888_19916 = G__19941;
count__19889_19917 = G__19942;
i__19890_19918 = G__19943;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
