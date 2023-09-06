goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__48410 = libspec;
var seq__48411 = cljs.core.seq(vec__48410);
var first__48412 = cljs.core.first(seq__48411);
var seq__48411__$1 = cljs.core.next(seq__48411);
var lib = first__48412;
var spec = seq__48411__$1;
var libspec__$1 = vec__48410;
var vec__48413 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48413,(0),null);
var vec__48416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48413,(1),null);
var seq__48417 = cljs.core.seq(vec__48416);
var first__48418 = cljs.core.first(seq__48417);
var seq__48417__$1 = cljs.core.next(seq__48417);
var _ = first__48418;
var first__48418__$1 = cljs.core.first(seq__48417__$1);
var seq__48417__$2 = cljs.core.next(seq__48417__$1);
var alias = first__48418__$1;
var post_spec = seq__48417__$2;
var post = vec__48416;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__48421 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48421,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__48421;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__48429 = cljs.core.seq(new_as_aliases);
var chunk__48430 = null;
var count__48431 = (0);
var i__48432 = (0);
while(true){
if((i__48432 < count__48431)){
var vec__48441 = chunk__48430.cljs$core$IIndexed$_nth$arity$2(null,i__48432);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48441,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48441,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__48532 = seq__48429;
var G__48533 = chunk__48430;
var G__48534 = count__48431;
var G__48535 = (i__48432 + (1));
seq__48429 = G__48532;
chunk__48430 = G__48533;
count__48431 = G__48534;
i__48432 = G__48535;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48429);
if(temp__5804__auto__){
var seq__48429__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48429__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48429__$1);
var G__48538 = cljs.core.chunk_rest(seq__48429__$1);
var G__48539 = c__5568__auto__;
var G__48540 = cljs.core.count(c__5568__auto__);
var G__48541 = (0);
seq__48429 = G__48538;
chunk__48430 = G__48539;
count__48431 = G__48540;
i__48432 = G__48541;
continue;
} else {
var vec__48450 = cljs.core.first(seq__48429__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48450,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48450,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__48543 = cljs.core.next(seq__48429__$1);
var G__48544 = null;
var G__48545 = (0);
var G__48546 = (0);
seq__48429 = G__48543;
chunk__48430 = G__48544;
count__48431 = G__48545;
i__48432 = G__48546;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__48470 = arguments.length;
switch (G__48470) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__48477 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__48477__$1 = cljs.core.__destructure_map(map__48477);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48477__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48477__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__48478 = ret__$1;
var G__48478__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48478,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__48478);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48478__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__48478__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__48497,p__48498){
var map__48500 = p__48497;
var map__48500__$1 = cljs.core.__destructure_map(map__48500);
var ret__$1 = map__48500__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48500__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__48501 = p__48498;
var seq__48502 = cljs.core.seq(vec__48501);
var first__48503 = cljs.core.first(seq__48502);
var seq__48502__$1 = cljs.core.next(seq__48502);
var spec_key = first__48503;
var libspecs = seq__48502__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__48506 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__48506__$1 = cljs.core.__destructure_map(map__48506);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48506__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48506__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__48510 = ret__$1;
var G__48510__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48510,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__48510);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48510__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__48510__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
