goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__16897 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16898 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16898);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___17002 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___17002)){
var new_db_17003 = temp__5804__auto___17002;
var fexpr__16904_17004 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16904_17004.cljs$core$IFn$_invoke$arity$1 ? fexpr__16904_17004.cljs$core$IFn$_invoke$arity$1(new_db_17003) : fexpr__16904_17004.call(null,new_db_17003));
} else {
}

var seq__16905 = cljs.core.seq(effects_without_db);
var chunk__16906 = null;
var count__16907 = (0);
var i__16908 = (0);
while(true){
if((i__16908 < count__16907)){
var vec__16919 = chunk__16906.cljs$core$IIndexed$_nth$arity$2(null,i__16908);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16919,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16919,(1),null);
var temp__5802__auto___17011 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17011)){
var effect_fn_17012 = temp__5802__auto___17011;
(effect_fn_17012.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17012.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17012.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17013 = seq__16905;
var G__17014 = chunk__16906;
var G__17015 = count__16907;
var G__17016 = (i__16908 + (1));
seq__16905 = G__17013;
chunk__16906 = G__17014;
count__16907 = G__17015;
i__16908 = G__17016;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16905);
if(temp__5804__auto__){
var seq__16905__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16905__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16905__$1);
var G__17024 = cljs.core.chunk_rest(seq__16905__$1);
var G__17025 = c__5568__auto__;
var G__17026 = cljs.core.count(c__5568__auto__);
var G__17027 = (0);
seq__16905 = G__17024;
chunk__16906 = G__17025;
count__16907 = G__17026;
i__16908 = G__17027;
continue;
} else {
var vec__16922 = cljs.core.first(seq__16905__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16922,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16922,(1),null);
var temp__5802__auto___17029 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17029)){
var effect_fn_17030 = temp__5802__auto___17029;
(effect_fn_17030.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17030.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17030.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17031 = cljs.core.next(seq__16905__$1);
var G__17032 = null;
var G__17033 = (0);
var G__17034 = (0);
seq__16905 = G__17031;
chunk__16906 = G__17032;
count__16907 = G__17033;
i__16908 = G__17034;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__16523__auto___17035 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__16524__auto___17036 = (end__16523__auto___17035 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16524__auto___17036,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__16523__auto___17035);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16897);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___17037 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___17037)){
var new_db_17038 = temp__5804__auto___17037;
var fexpr__16930_17039 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16930_17039.cljs$core$IFn$_invoke$arity$1 ? fexpr__16930_17039.cljs$core$IFn$_invoke$arity$1(new_db_17038) : fexpr__16930_17039.call(null,new_db_17038));
} else {
}

var seq__16931 = cljs.core.seq(effects_without_db);
var chunk__16932 = null;
var count__16933 = (0);
var i__16934 = (0);
while(true){
if((i__16934 < count__16933)){
var vec__16947 = chunk__16932.cljs$core$IIndexed$_nth$arity$2(null,i__16934);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16947,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16947,(1),null);
var temp__5802__auto___17040 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17040)){
var effect_fn_17041 = temp__5802__auto___17040;
(effect_fn_17041.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17041.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17041.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17043 = seq__16931;
var G__17044 = chunk__16932;
var G__17045 = count__16933;
var G__17046 = (i__16934 + (1));
seq__16931 = G__17043;
chunk__16932 = G__17044;
count__16933 = G__17045;
i__16934 = G__17046;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16931);
if(temp__5804__auto__){
var seq__16931__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16931__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16931__$1);
var G__17048 = cljs.core.chunk_rest(seq__16931__$1);
var G__17049 = c__5568__auto__;
var G__17050 = cljs.core.count(c__5568__auto__);
var G__17051 = (0);
seq__16931 = G__17048;
chunk__16932 = G__17049;
count__16933 = G__17050;
i__16934 = G__17051;
continue;
} else {
var vec__16950 = cljs.core.first(seq__16931__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16950,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16950,(1),null);
var temp__5802__auto___17053 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17053)){
var effect_fn_17054 = temp__5802__auto___17053;
(effect_fn_17054.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17054.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17054.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17055 = cljs.core.next(seq__16931__$1);
var G__17056 = null;
var G__17057 = (0);
var G__17058 = (0);
seq__16931 = G__17055;
chunk__16932 = G__17056;
count__16933 = G__17057;
i__16934 = G__17058;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__16953){
var map__16954 = p__16953;
var map__16954__$1 = cljs.core.__destructure_map(map__16954);
var effect = map__16954__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16954__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16954__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__16955 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16956 = null;
var count__16957 = (0);
var i__16958 = (0);
while(true){
if((i__16958 < count__16957)){
var effect = chunk__16956.cljs$core$IIndexed$_nth$arity$2(null,i__16958);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__17063 = seq__16955;
var G__17075 = chunk__16956;
var G__17076 = count__16957;
var G__17077 = (i__16958 + (1));
seq__16955 = G__17063;
chunk__16956 = G__17075;
count__16957 = G__17076;
i__16958 = G__17077;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16955);
if(temp__5804__auto__){
var seq__16955__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16955__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16955__$1);
var G__17078 = cljs.core.chunk_rest(seq__16955__$1);
var G__17079 = c__5568__auto__;
var G__17080 = cljs.core.count(c__5568__auto__);
var G__17081 = (0);
seq__16955 = G__17078;
chunk__16956 = G__17079;
count__16957 = G__17080;
i__16958 = G__17081;
continue;
} else {
var effect = cljs.core.first(seq__16955__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__17086 = cljs.core.next(seq__16955__$1);
var G__17087 = null;
var G__17088 = (0);
var G__17089 = (0);
seq__16955 = G__17086;
chunk__16956 = G__17087;
count__16957 = G__17088;
i__16958 = G__17089;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__16963 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16964 = null;
var count__16965 = (0);
var i__16966 = (0);
while(true){
if((i__16966 < count__16965)){
var vec__16974 = chunk__16964.cljs$core$IIndexed$_nth$arity$2(null,i__16966);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16974,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16974,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___17090 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17090)){
var effect_fn_17091 = temp__5802__auto___17090;
(effect_fn_17091.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17091.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17091.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17093 = seq__16963;
var G__17094 = chunk__16964;
var G__17095 = count__16965;
var G__17096 = (i__16966 + (1));
seq__16963 = G__17093;
chunk__16964 = G__17094;
count__16965 = G__17095;
i__16966 = G__17096;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16963);
if(temp__5804__auto__){
var seq__16963__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16963__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16963__$1);
var G__17097 = cljs.core.chunk_rest(seq__16963__$1);
var G__17098 = c__5568__auto__;
var G__17099 = cljs.core.count(c__5568__auto__);
var G__17100 = (0);
seq__16963 = G__17097;
chunk__16964 = G__17098;
count__16965 = G__17099;
i__16966 = G__17100;
continue;
} else {
var vec__16977 = cljs.core.first(seq__16963__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16977,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16977,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___17101 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17101)){
var effect_fn_17102 = temp__5802__auto___17101;
(effect_fn_17102.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17102.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17102.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17104 = cljs.core.next(seq__16963__$1);
var G__17105 = null;
var G__17106 = (0);
var G__17107 = (0);
seq__16963 = G__17104;
chunk__16964 = G__17105;
count__16965 = G__17106;
i__16966 = G__17107;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__16981 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16982 = null;
var count__16983 = (0);
var i__16984 = (0);
while(true){
if((i__16984 < count__16983)){
var event = chunk__16982.cljs$core$IIndexed$_nth$arity$2(null,i__16984);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__17110 = seq__16981;
var G__17111 = chunk__16982;
var G__17112 = count__16983;
var G__17113 = (i__16984 + (1));
seq__16981 = G__17110;
chunk__16982 = G__17111;
count__16983 = G__17112;
i__16984 = G__17113;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16981);
if(temp__5804__auto__){
var seq__16981__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16981__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16981__$1);
var G__17114 = cljs.core.chunk_rest(seq__16981__$1);
var G__17115 = c__5568__auto__;
var G__17116 = cljs.core.count(c__5568__auto__);
var G__17117 = (0);
seq__16981 = G__17114;
chunk__16982 = G__17115;
count__16983 = G__17116;
i__16984 = G__17117;
continue;
} else {
var event = cljs.core.first(seq__16981__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__17118 = cljs.core.next(seq__16981__$1);
var G__17119 = null;
var G__17120 = (0);
var G__17121 = (0);
seq__16981 = G__17118;
chunk__16982 = G__17119;
count__16983 = G__17120;
i__16984 = G__17121;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__16986 = cljs.core.seq(value);
var chunk__16987 = null;
var count__16988 = (0);
var i__16989 = (0);
while(true){
if((i__16989 < count__16988)){
var event = chunk__16987.cljs$core$IIndexed$_nth$arity$2(null,i__16989);
clear_event(event);


var G__17122 = seq__16986;
var G__17123 = chunk__16987;
var G__17124 = count__16988;
var G__17125 = (i__16989 + (1));
seq__16986 = G__17122;
chunk__16987 = G__17123;
count__16988 = G__17124;
i__16989 = G__17125;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16986);
if(temp__5804__auto__){
var seq__16986__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16986__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16986__$1);
var G__17126 = cljs.core.chunk_rest(seq__16986__$1);
var G__17127 = c__5568__auto__;
var G__17128 = cljs.core.count(c__5568__auto__);
var G__17129 = (0);
seq__16986 = G__17126;
chunk__16987 = G__17127;
count__16988 = G__17128;
i__16989 = G__17129;
continue;
} else {
var event = cljs.core.first(seq__16986__$1);
clear_event(event);


var G__17130 = cljs.core.next(seq__16986__$1);
var G__17131 = null;
var G__17132 = (0);
var G__17133 = (0);
seq__16986 = G__17130;
chunk__16987 = G__17131;
count__16988 = G__17132;
i__16989 = G__17133;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
