goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__20326 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__20327 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__20327);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20392 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20392)){
var new_db_20393 = temp__5804__auto___20392;
var fexpr__20328_20394 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20328_20394.cljs$core$IFn$_invoke$arity$1 ? fexpr__20328_20394.cljs$core$IFn$_invoke$arity$1(new_db_20393) : fexpr__20328_20394.call(null,new_db_20393));
} else {
}

var seq__20329 = cljs.core.seq(effects_without_db);
var chunk__20330 = null;
var count__20331 = (0);
var i__20332 = (0);
while(true){
if((i__20332 < count__20331)){
var vec__20339 = chunk__20330.cljs$core$IIndexed$_nth$arity$2(null,i__20332);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20339,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20339,(1),null);
var temp__5802__auto___20395 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20395)){
var effect_fn_20396 = temp__5802__auto___20395;
(effect_fn_20396.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20396.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20396.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20397 = seq__20329;
var G__20398 = chunk__20330;
var G__20399 = count__20331;
var G__20400 = (i__20332 + (1));
seq__20329 = G__20397;
chunk__20330 = G__20398;
count__20331 = G__20399;
i__20332 = G__20400;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20329);
if(temp__5804__auto__){
var seq__20329__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20329__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20329__$1);
var G__20401 = cljs.core.chunk_rest(seq__20329__$1);
var G__20402 = c__5568__auto__;
var G__20403 = cljs.core.count(c__5568__auto__);
var G__20404 = (0);
seq__20329 = G__20401;
chunk__20330 = G__20402;
count__20331 = G__20403;
i__20332 = G__20404;
continue;
} else {
var vec__20342 = cljs.core.first(seq__20329__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20342,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20342,(1),null);
var temp__5802__auto___20405 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20405)){
var effect_fn_20406 = temp__5802__auto___20405;
(effect_fn_20406.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20406.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20406.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20407 = cljs.core.next(seq__20329__$1);
var G__20408 = null;
var G__20409 = (0);
var G__20410 = (0);
seq__20329 = G__20407;
chunk__20330 = G__20408;
count__20331 = G__20409;
i__20332 = G__20410;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19860__auto___20411 = re_frame.interop.now();
var duration__19861__auto___20412 = (end__19860__auto___20411 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__19861__auto___20412,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__19860__auto___20411);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20326);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20413 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20413)){
var new_db_20414 = temp__5804__auto___20413;
var fexpr__20345_20415 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20345_20415.cljs$core$IFn$_invoke$arity$1 ? fexpr__20345_20415.cljs$core$IFn$_invoke$arity$1(new_db_20414) : fexpr__20345_20415.call(null,new_db_20414));
} else {
}

var seq__20346 = cljs.core.seq(effects_without_db);
var chunk__20347 = null;
var count__20348 = (0);
var i__20349 = (0);
while(true){
if((i__20349 < count__20348)){
var vec__20356 = chunk__20347.cljs$core$IIndexed$_nth$arity$2(null,i__20349);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20356,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20356,(1),null);
var temp__5802__auto___20416 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20416)){
var effect_fn_20417 = temp__5802__auto___20416;
(effect_fn_20417.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20417.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20417.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20418 = seq__20346;
var G__20419 = chunk__20347;
var G__20420 = count__20348;
var G__20421 = (i__20349 + (1));
seq__20346 = G__20418;
chunk__20347 = G__20419;
count__20348 = G__20420;
i__20349 = G__20421;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20346);
if(temp__5804__auto__){
var seq__20346__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20346__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20346__$1);
var G__20422 = cljs.core.chunk_rest(seq__20346__$1);
var G__20423 = c__5568__auto__;
var G__20424 = cljs.core.count(c__5568__auto__);
var G__20425 = (0);
seq__20346 = G__20422;
chunk__20347 = G__20423;
count__20348 = G__20424;
i__20349 = G__20425;
continue;
} else {
var vec__20359 = cljs.core.first(seq__20346__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20359,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20359,(1),null);
var temp__5802__auto___20426 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20426)){
var effect_fn_20427 = temp__5802__auto___20426;
(effect_fn_20427.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20427.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20427.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20428 = cljs.core.next(seq__20346__$1);
var G__20429 = null;
var G__20430 = (0);
var G__20431 = (0);
seq__20346 = G__20428;
chunk__20347 = G__20429;
count__20348 = G__20430;
i__20349 = G__20431;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__20362){
var map__20363 = p__20362;
var map__20363__$1 = cljs.core.__destructure_map(map__20363);
var effect = map__20363__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20363__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20363__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__20364 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20365 = null;
var count__20366 = (0);
var i__20367 = (0);
while(true){
if((i__20367 < count__20366)){
var effect = chunk__20365.cljs$core$IIndexed$_nth$arity$2(null,i__20367);
re_frame.fx.dispatch_later(effect);


var G__20432 = seq__20364;
var G__20433 = chunk__20365;
var G__20434 = count__20366;
var G__20435 = (i__20367 + (1));
seq__20364 = G__20432;
chunk__20365 = G__20433;
count__20366 = G__20434;
i__20367 = G__20435;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20364);
if(temp__5804__auto__){
var seq__20364__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20364__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20364__$1);
var G__20436 = cljs.core.chunk_rest(seq__20364__$1);
var G__20437 = c__5568__auto__;
var G__20438 = cljs.core.count(c__5568__auto__);
var G__20439 = (0);
seq__20364 = G__20436;
chunk__20365 = G__20437;
count__20366 = G__20438;
i__20367 = G__20439;
continue;
} else {
var effect = cljs.core.first(seq__20364__$1);
re_frame.fx.dispatch_later(effect);


var G__20440 = cljs.core.next(seq__20364__$1);
var G__20441 = null;
var G__20442 = (0);
var G__20443 = (0);
seq__20364 = G__20440;
chunk__20365 = G__20441;
count__20366 = G__20442;
i__20367 = G__20443;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__20368 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__20369 = null;
var count__20370 = (0);
var i__20371 = (0);
while(true){
if((i__20371 < count__20370)){
var vec__20378 = chunk__20369.cljs$core$IIndexed$_nth$arity$2(null,i__20371);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20378,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20378,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20444 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20444)){
var effect_fn_20445 = temp__5802__auto___20444;
(effect_fn_20445.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20445.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20445.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20446 = seq__20368;
var G__20447 = chunk__20369;
var G__20448 = count__20370;
var G__20449 = (i__20371 + (1));
seq__20368 = G__20446;
chunk__20369 = G__20447;
count__20370 = G__20448;
i__20371 = G__20449;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20368);
if(temp__5804__auto__){
var seq__20368__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20368__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20368__$1);
var G__20450 = cljs.core.chunk_rest(seq__20368__$1);
var G__20451 = c__5568__auto__;
var G__20452 = cljs.core.count(c__5568__auto__);
var G__20453 = (0);
seq__20368 = G__20450;
chunk__20369 = G__20451;
count__20370 = G__20452;
i__20371 = G__20453;
continue;
} else {
var vec__20381 = cljs.core.first(seq__20368__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20381,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20381,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20454 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20454)){
var effect_fn_20455 = temp__5802__auto___20454;
(effect_fn_20455.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20455.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20455.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20456 = cljs.core.next(seq__20368__$1);
var G__20457 = null;
var G__20458 = (0);
var G__20459 = (0);
seq__20368 = G__20456;
chunk__20369 = G__20457;
count__20370 = G__20458;
i__20371 = G__20459;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__20384 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20385 = null;
var count__20386 = (0);
var i__20387 = (0);
while(true){
if((i__20387 < count__20386)){
var event = chunk__20385.cljs$core$IIndexed$_nth$arity$2(null,i__20387);
re_frame.router.dispatch(event);


var G__20460 = seq__20384;
var G__20461 = chunk__20385;
var G__20462 = count__20386;
var G__20463 = (i__20387 + (1));
seq__20384 = G__20460;
chunk__20385 = G__20461;
count__20386 = G__20462;
i__20387 = G__20463;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20384);
if(temp__5804__auto__){
var seq__20384__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20384__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20384__$1);
var G__20464 = cljs.core.chunk_rest(seq__20384__$1);
var G__20465 = c__5568__auto__;
var G__20466 = cljs.core.count(c__5568__auto__);
var G__20467 = (0);
seq__20384 = G__20464;
chunk__20385 = G__20465;
count__20386 = G__20466;
i__20387 = G__20467;
continue;
} else {
var event = cljs.core.first(seq__20384__$1);
re_frame.router.dispatch(event);


var G__20468 = cljs.core.next(seq__20384__$1);
var G__20469 = null;
var G__20470 = (0);
var G__20471 = (0);
seq__20384 = G__20468;
chunk__20385 = G__20469;
count__20386 = G__20470;
i__20387 = G__20471;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__20388 = cljs.core.seq(value);
var chunk__20389 = null;
var count__20390 = (0);
var i__20391 = (0);
while(true){
if((i__20391 < count__20390)){
var event = chunk__20389.cljs$core$IIndexed$_nth$arity$2(null,i__20391);
clear_event(event);


var G__20472 = seq__20388;
var G__20473 = chunk__20389;
var G__20474 = count__20390;
var G__20475 = (i__20391 + (1));
seq__20388 = G__20472;
chunk__20389 = G__20473;
count__20390 = G__20474;
i__20391 = G__20475;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20388);
if(temp__5804__auto__){
var seq__20388__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20388__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20388__$1);
var G__20476 = cljs.core.chunk_rest(seq__20388__$1);
var G__20477 = c__5568__auto__;
var G__20478 = cljs.core.count(c__5568__auto__);
var G__20479 = (0);
seq__20388 = G__20476;
chunk__20389 = G__20477;
count__20390 = G__20478;
i__20391 = G__20479;
continue;
} else {
var event = cljs.core.first(seq__20388__$1);
clear_event(event);


var G__20480 = cljs.core.next(seq__20388__$1);
var G__20481 = null;
var G__20482 = (0);
var G__20483 = (0);
seq__20388 = G__20480;
chunk__20389 = G__20481;
count__20390 = G__20482;
i__20391 = G__20483;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
