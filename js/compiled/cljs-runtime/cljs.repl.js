goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47051){
var map__47052 = p__47051;
var map__47052__$1 = cljs.core.__destructure_map(map__47052);
var m = map__47052__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47052__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47052__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47054_47370 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47055_47371 = null;
var count__47056_47372 = (0);
var i__47057_47373 = (0);
while(true){
if((i__47057_47373 < count__47056_47372)){
var f_47374 = chunk__47055_47371.cljs$core$IIndexed$_nth$arity$2(null,i__47057_47373);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_47374], 0));


var G__47375 = seq__47054_47370;
var G__47376 = chunk__47055_47371;
var G__47377 = count__47056_47372;
var G__47378 = (i__47057_47373 + (1));
seq__47054_47370 = G__47375;
chunk__47055_47371 = G__47376;
count__47056_47372 = G__47377;
i__47057_47373 = G__47378;
continue;
} else {
var temp__5804__auto___47379 = cljs.core.seq(seq__47054_47370);
if(temp__5804__auto___47379){
var seq__47054_47380__$1 = temp__5804__auto___47379;
if(cljs.core.chunked_seq_QMARK_(seq__47054_47380__$1)){
var c__5568__auto___47381 = cljs.core.chunk_first(seq__47054_47380__$1);
var G__47383 = cljs.core.chunk_rest(seq__47054_47380__$1);
var G__47384 = c__5568__auto___47381;
var G__47385 = cljs.core.count(c__5568__auto___47381);
var G__47386 = (0);
seq__47054_47370 = G__47383;
chunk__47055_47371 = G__47384;
count__47056_47372 = G__47385;
i__47057_47373 = G__47386;
continue;
} else {
var f_47387 = cljs.core.first(seq__47054_47380__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_47387], 0));


var G__47388 = cljs.core.next(seq__47054_47380__$1);
var G__47389 = null;
var G__47390 = (0);
var G__47391 = (0);
seq__47054_47370 = G__47388;
chunk__47055_47371 = G__47389;
count__47056_47372 = G__47390;
i__47057_47373 = G__47391;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47392 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_47392], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_47392)))?cljs.core.second(arglists_47392):arglists_47392)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47069_47393 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47070_47394 = null;
var count__47071_47395 = (0);
var i__47072_47396 = (0);
while(true){
if((i__47072_47396 < count__47071_47395)){
var vec__47085_47398 = chunk__47070_47394.cljs$core$IIndexed$_nth$arity$2(null,i__47072_47396);
var name_47399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47085_47398,(0),null);
var map__47088_47400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47085_47398,(1),null);
var map__47088_47401__$1 = cljs.core.__destructure_map(map__47088_47400);
var doc_47402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47088_47401__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47088_47401__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_47399], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_47403], 0));

if(cljs.core.truth_(doc_47402)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_47402], 0));
} else {
}


var G__47405 = seq__47069_47393;
var G__47406 = chunk__47070_47394;
var G__47407 = count__47071_47395;
var G__47408 = (i__47072_47396 + (1));
seq__47069_47393 = G__47405;
chunk__47070_47394 = G__47406;
count__47071_47395 = G__47407;
i__47072_47396 = G__47408;
continue;
} else {
var temp__5804__auto___47409 = cljs.core.seq(seq__47069_47393);
if(temp__5804__auto___47409){
var seq__47069_47410__$1 = temp__5804__auto___47409;
if(cljs.core.chunked_seq_QMARK_(seq__47069_47410__$1)){
var c__5568__auto___47411 = cljs.core.chunk_first(seq__47069_47410__$1);
var G__47412 = cljs.core.chunk_rest(seq__47069_47410__$1);
var G__47413 = c__5568__auto___47411;
var G__47414 = cljs.core.count(c__5568__auto___47411);
var G__47415 = (0);
seq__47069_47393 = G__47412;
chunk__47070_47394 = G__47413;
count__47071_47395 = G__47414;
i__47072_47396 = G__47415;
continue;
} else {
var vec__47094_47416 = cljs.core.first(seq__47069_47410__$1);
var name_47417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47094_47416,(0),null);
var map__47097_47418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47094_47416,(1),null);
var map__47097_47419__$1 = cljs.core.__destructure_map(map__47097_47418);
var doc_47420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47097_47419__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47097_47419__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_47417], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_47421], 0));

if(cljs.core.truth_(doc_47420)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_47420], 0));
} else {
}


var G__47423 = cljs.core.next(seq__47069_47410__$1);
var G__47424 = null;
var G__47425 = (0);
var G__47426 = (0);
seq__47069_47393 = G__47423;
chunk__47070_47394 = G__47424;
count__47071_47395 = G__47425;
i__47072_47396 = G__47426;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__47105 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47106 = null;
var count__47107 = (0);
var i__47108 = (0);
while(true){
if((i__47108 < count__47107)){
var role = chunk__47106.cljs$core$IIndexed$_nth$arity$2(null,i__47108);
var temp__5804__auto___47430__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___47430__$1)){
var spec_47431 = temp__5804__auto___47430__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_47431)], 0));
} else {
}


var G__47432 = seq__47105;
var G__47433 = chunk__47106;
var G__47434 = count__47107;
var G__47435 = (i__47108 + (1));
seq__47105 = G__47432;
chunk__47106 = G__47433;
count__47107 = G__47434;
i__47108 = G__47435;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__47105);
if(temp__5804__auto____$1){
var seq__47105__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__47105__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47105__$1);
var G__47436 = cljs.core.chunk_rest(seq__47105__$1);
var G__47437 = c__5568__auto__;
var G__47438 = cljs.core.count(c__5568__auto__);
var G__47439 = (0);
seq__47105 = G__47436;
chunk__47106 = G__47437;
count__47107 = G__47438;
i__47108 = G__47439;
continue;
} else {
var role = cljs.core.first(seq__47105__$1);
var temp__5804__auto___47441__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___47441__$2)){
var spec_47442 = temp__5804__auto___47441__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_47442)], 0));
} else {
}


var G__47443 = cljs.core.next(seq__47105__$1);
var G__47444 = null;
var G__47445 = (0);
var G__47446 = (0);
seq__47105 = G__47443;
chunk__47106 = G__47444;
count__47107 = G__47445;
i__47108 = G__47446;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__47448 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__47449 = cljs.core.ex_cause(t);
via = G__47448;
t = G__47449;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__47169 = datafied_throwable;
var map__47169__$1 = cljs.core.__destructure_map(map__47169);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47169__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47169__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47169__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__47170 = cljs.core.last(via);
var map__47170__$1 = cljs.core.__destructure_map(map__47170);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47170__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47170__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47170__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__47171 = data;
var map__47171__$1 = cljs.core.__destructure_map(map__47171);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47171__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47171__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47171__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__47172 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__47172__$1 = cljs.core.__destructure_map(map__47172);
var top_data = map__47172__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47172__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__47175 = phase;
var G__47175__$1 = (((G__47175 instanceof cljs.core.Keyword))?G__47175.fqn:null);
switch (G__47175__$1) {
case "read-source":
var map__47178 = data;
var map__47178__$1 = cljs.core.__destructure_map(map__47178);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47178__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47178__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__47179 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__47179__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47179,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47179);
var G__47179__$2 = (cljs.core.truth_((function (){var fexpr__47180 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47180.cljs$core$IFn$_invoke$arity$1 ? fexpr__47180.cljs$core$IFn$_invoke$arity$1(source) : fexpr__47180.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47179__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47179__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47179__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47179__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__47183 = top_data;
var G__47183__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47183,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47183);
var G__47183__$2 = (cljs.core.truth_((function (){var fexpr__47185 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47185.cljs$core$IFn$_invoke$arity$1 ? fexpr__47185.cljs$core$IFn$_invoke$arity$1(source) : fexpr__47185.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47183__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47183__$1);
var G__47183__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47183__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47183__$2);
var G__47183__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47183__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47183__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47183__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47183__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__47190 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47190,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47190,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47190,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47190,(3),null);
var G__47197 = top_data;
var G__47197__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47197,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__47197);
var G__47197__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47197__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__47197__$1);
var G__47197__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47197__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__47197__$2);
var G__47197__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47197__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47197__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47197__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47197__$4;
}

break;
case "execution":
var vec__47211 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47211,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47211,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47211,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47211,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__47165_SHARP_){
var or__5045__auto__ = (p1__47165_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__47224 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47224.cljs$core$IFn$_invoke$arity$1 ? fexpr__47224.cljs$core$IFn$_invoke$arity$1(p1__47165_SHARP_) : fexpr__47224.call(null,p1__47165_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__47232 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__47232__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47232,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__47232);
var G__47232__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47232__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47232__$1);
var G__47232__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47232__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__47232__$2);
var G__47232__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47232__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__47232__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47232__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47232__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47175__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__47280){
var map__47281 = p__47280;
var map__47281__$1 = cljs.core.__destructure_map(map__47281);
var triage_data = map__47281__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47281__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47281__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47281__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47281__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47281__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47281__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47281__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47281__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__47286 = phase;
var G__47286__$1 = (((G__47286 instanceof cljs.core.Keyword))?G__47286.fqn:null);
switch (G__47286__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__47289 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__47290 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47291 = loc;
var G__47292 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47309_47492 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47310_47493 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47311_47494 = true;
var _STAR_print_fn_STAR__temp_val__47312_47495 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47311_47494);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47312_47495);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47263_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47263_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47310_47493);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47309_47492);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__47289,G__47290,G__47291,G__47292) : format.call(null,G__47289,G__47290,G__47291,G__47292));

break;
case "macroexpansion":
var G__47325 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__47326 = cause_type;
var G__47327 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47328 = loc;
var G__47329 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47325,G__47326,G__47327,G__47328,G__47329) : format.call(null,G__47325,G__47326,G__47327,G__47328,G__47329));

break;
case "compile-syntax-check":
var G__47331 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__47332 = cause_type;
var G__47333 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47334 = loc;
var G__47335 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47331,G__47332,G__47333,G__47334,G__47335) : format.call(null,G__47331,G__47332,G__47333,G__47334,G__47335));

break;
case "compilation":
var G__47336 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__47337 = cause_type;
var G__47338 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47339 = loc;
var G__47340 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47336,G__47337,G__47338,G__47339,G__47340) : format.call(null,G__47336,G__47337,G__47338,G__47339,G__47340));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__47342 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__47343 = symbol;
var G__47344 = loc;
var G__47345 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47347_47506 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47348_47507 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47349_47508 = true;
var _STAR_print_fn_STAR__temp_val__47350_47509 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47349_47508);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47350_47509);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47277_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47277_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47348_47507);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47347_47506);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__47342,G__47343,G__47344,G__47345) : format.call(null,G__47342,G__47343,G__47344,G__47345));
} else {
var G__47354 = "Execution error%s at %s(%s).\n%s\n";
var G__47355 = cause_type;
var G__47356 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47357 = loc;
var G__47358 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47354,G__47355,G__47356,G__47357,G__47358) : format.call(null,G__47354,G__47355,G__47356,G__47357,G__47358));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47286__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
