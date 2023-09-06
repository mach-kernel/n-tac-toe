goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31586 = arguments.length;
var i__5770__auto___31588 = (0);
while(true){
if((i__5770__auto___31588 < len__5769__auto___31586)){
args__5775__auto__.push((arguments[i__5770__auto___31588]));

var G__31590 = (i__5770__auto___31588 + (1));
i__5770__auto___31588 = G__31590;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__30627 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30627,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30627,(1),null);
var vec__30630 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30630,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30630,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30636){
var vec__30638 = p__30636;
var seq__30639 = cljs.core.seq(vec__30638);
var first__30640 = cljs.core.first(seq__30639);
var seq__30639__$1 = cljs.core.next(seq__30639);
var method_name = first__30640;
var ___$2 = seq__30639__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__30598__auto__","x__30598__auto__",1639328738,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__30599__auto__","args__30599__auto__",1967427413,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__30600__auto__","methods__30600__auto__",1838376559,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__30598__auto__","x__30598__auto__",1639328738,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__30600__auto__","methods__30600__auto__",1838376559,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__30598__auto__","x__30598__auto__",1639328738,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__30599__auto__","args__30599__auto__",1967427413,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__30601__auto__","x__30601__auto__",1040076395,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__30602__auto__","args__30602__auto__",-1845893180,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__30603__auto__","meta__30603__auto__",1609491873,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__30601__auto__","x__30601__auto__",1040076395,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__30604__auto__","method__30604__auto__",-523154419,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__30603__auto__","meta__30603__auto__",1609491873,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__30604__auto__","method__30604__auto__",-523154419,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__30604__auto__","method__30604__auto__",-523154419,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__30601__auto__","x__30601__auto__",1040076395,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__30602__auto__","args__30602__auto__",-1845893180,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__30601__auto__","x__30601__auto__",1040076395,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq30621){
var G__30622 = cljs.core.first(seq30621);
var seq30621__$1 = cljs.core.next(seq30621);
var G__30623 = cljs.core.first(seq30621__$1);
var seq30621__$2 = cljs.core.next(seq30621__$1);
var G__30624 = cljs.core.first(seq30621__$2);
var seq30621__$3 = cljs.core.next(seq30621__$2);
var G__30625 = cljs.core.first(seq30621__$3);
var seq30621__$4 = cljs.core.next(seq30621__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30622,G__30623,G__30624,G__30625,seq30621__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31654 = arguments.length;
var i__5770__auto___31663 = (0);
while(true){
if((i__5770__auto___31663 < len__5769__auto___31654)){
args__5775__auto__.push((arguments[i__5770__auto___31663]));

var G__31666 = (i__5770__auto___31663 + (1));
i__5770__auto___31663 = G__31666;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__30803 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__30805 = null;
var count__30806 = (0);
var i__30807 = (0);
while(true){
if((i__30807 < count__30806)){
var vec__31190 = chunk__30805.cljs$core$IIndexed$_nth$arity$2(null,i__30807);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31190,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31190,(1),null);
var extend_via_metadata_31683 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_31684 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_31685 = sci.impl.vars.getName(proto_ns_31684);
var pns_str_31686 = (cljs.core.truth_(extend_via_metadata_31683)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_31685):null);
var seq__31193_31697 = cljs.core.seq(mmap);
var chunk__31195_31698 = null;
var count__31196_31699 = (0);
var i__31197_31700 = (0);
while(true){
if((i__31197_31700 < count__31196_31699)){
var vec__31244_31711 = chunk__31195_31698.cljs$core$IIndexed$_nth$arity$2(null,i__31197_31700);
var meth_name_31712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31244_31711,(0),null);
var f_31713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31244_31711,(1),null);
var meth_str_31714 = cljs.core.name(meth_name_31712);
var meth_sym_31715 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_31714);
var env_31716 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_31717 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_31716,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_31685,meth_sym_31715], null));
var multi_method_31718 = cljs.core.deref(multi_method_var_31717);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_31718,atype,(cljs.core.truth_(extend_via_metadata_31683)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_31686,meth_str_31714);
return ((function (seq__31193_31697,chunk__31195_31698,count__31196_31699,i__31197_31700,seq__30803,chunk__30805,count__30806,i__30807,fq,meth_str_31714,meth_sym_31715,env_31716,multi_method_var_31717,multi_method_31718,vec__31244_31711,meth_name_31712,f_31713,extend_via_metadata_31683,proto_ns_31684,pns_31685,pns_str_31686,vec__31190,proto,mmap){
return (function() { 
var G__31729__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_31713,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_31713,this$,args);
}
};
var G__31729 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__31734__i = 0, G__31734__a = new Array(arguments.length -  1);
while (G__31734__i < G__31734__a.length) {G__31734__a[G__31734__i] = arguments[G__31734__i + 1]; ++G__31734__i;}
  args = new cljs.core.IndexedSeq(G__31734__a,0,null);
} 
return G__31729__delegate.call(this,this$,args);};
G__31729.cljs$lang$maxFixedArity = 1;
G__31729.cljs$lang$applyTo = (function (arglist__31735){
var this$ = cljs.core.first(arglist__31735);
var args = cljs.core.rest(arglist__31735);
return G__31729__delegate(this$,args);
});
G__31729.cljs$core$IFn$_invoke$arity$variadic = G__31729__delegate;
return G__31729;
})()
;
;})(seq__31193_31697,chunk__31195_31698,count__31196_31699,i__31197_31700,seq__30803,chunk__30805,count__30806,i__30807,fq,meth_str_31714,meth_sym_31715,env_31716,multi_method_var_31717,multi_method_31718,vec__31244_31711,meth_name_31712,f_31713,extend_via_metadata_31683,proto_ns_31684,pns_31685,pns_str_31686,vec__31190,proto,mmap))
})():f_31713));


var G__31736 = seq__31193_31697;
var G__31737 = chunk__31195_31698;
var G__31738 = count__31196_31699;
var G__31739 = (i__31197_31700 + (1));
seq__31193_31697 = G__31736;
chunk__31195_31698 = G__31737;
count__31196_31699 = G__31738;
i__31197_31700 = G__31739;
continue;
} else {
var temp__5804__auto___31740 = cljs.core.seq(seq__31193_31697);
if(temp__5804__auto___31740){
var seq__31193_31741__$1 = temp__5804__auto___31740;
if(cljs.core.chunked_seq_QMARK_(seq__31193_31741__$1)){
var c__5568__auto___31742 = cljs.core.chunk_first(seq__31193_31741__$1);
var G__31743 = cljs.core.chunk_rest(seq__31193_31741__$1);
var G__31744 = c__5568__auto___31742;
var G__31745 = cljs.core.count(c__5568__auto___31742);
var G__31746 = (0);
seq__31193_31697 = G__31743;
chunk__31195_31698 = G__31744;
count__31196_31699 = G__31745;
i__31197_31700 = G__31746;
continue;
} else {
var vec__31285_31747 = cljs.core.first(seq__31193_31741__$1);
var meth_name_31749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31285_31747,(0),null);
var f_31750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31285_31747,(1),null);
var meth_str_31752 = cljs.core.name(meth_name_31749);
var meth_sym_31753 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_31752);
var env_31754 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_31755 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_31754,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_31685,meth_sym_31753], null));
var multi_method_31756 = cljs.core.deref(multi_method_var_31755);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_31756,atype,(cljs.core.truth_(extend_via_metadata_31683)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_31686,meth_str_31752);
return ((function (seq__31193_31697,chunk__31195_31698,count__31196_31699,i__31197_31700,seq__30803,chunk__30805,count__30806,i__30807,fq,meth_str_31752,meth_sym_31753,env_31754,multi_method_var_31755,multi_method_31756,vec__31285_31747,meth_name_31749,f_31750,seq__31193_31741__$1,temp__5804__auto___31740,extend_via_metadata_31683,proto_ns_31684,pns_31685,pns_str_31686,vec__31190,proto,mmap){
return (function() { 
var G__31768__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_31750,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_31750,this$,args);
}
};
var G__31768 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__31769__i = 0, G__31769__a = new Array(arguments.length -  1);
while (G__31769__i < G__31769__a.length) {G__31769__a[G__31769__i] = arguments[G__31769__i + 1]; ++G__31769__i;}
  args = new cljs.core.IndexedSeq(G__31769__a,0,null);
} 
return G__31768__delegate.call(this,this$,args);};
G__31768.cljs$lang$maxFixedArity = 1;
G__31768.cljs$lang$applyTo = (function (arglist__31770){
var this$ = cljs.core.first(arglist__31770);
var args = cljs.core.rest(arglist__31770);
return G__31768__delegate(this$,args);
});
G__31768.cljs$core$IFn$_invoke$arity$variadic = G__31768__delegate;
return G__31768;
})()
;
;})(seq__31193_31697,chunk__31195_31698,count__31196_31699,i__31197_31700,seq__30803,chunk__30805,count__30806,i__30807,fq,meth_str_31752,meth_sym_31753,env_31754,multi_method_var_31755,multi_method_31756,vec__31285_31747,meth_name_31749,f_31750,seq__31193_31741__$1,temp__5804__auto___31740,extend_via_metadata_31683,proto_ns_31684,pns_31685,pns_str_31686,vec__31190,proto,mmap))
})():f_31750));


var G__31771 = cljs.core.next(seq__31193_31741__$1);
var G__31772 = null;
var G__31773 = (0);
var G__31774 = (0);
seq__31193_31697 = G__31771;
chunk__31195_31698 = G__31772;
count__31196_31699 = G__31773;
i__31197_31700 = G__31774;
continue;
}
} else {
}
}
break;
}


var G__31775 = seq__30803;
var G__31776 = chunk__30805;
var G__31777 = count__30806;
var G__31778 = (i__30807 + (1));
seq__30803 = G__31775;
chunk__30805 = G__31776;
count__30806 = G__31777;
i__30807 = G__31778;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30803);
if(temp__5804__auto__){
var seq__30803__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30803__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30803__$1);
var G__31781 = cljs.core.chunk_rest(seq__30803__$1);
var G__31782 = c__5568__auto__;
var G__31783 = cljs.core.count(c__5568__auto__);
var G__31784 = (0);
seq__30803 = G__31781;
chunk__30805 = G__31782;
count__30806 = G__31783;
i__30807 = G__31784;
continue;
} else {
var vec__31294 = cljs.core.first(seq__30803__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31294,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31294,(1),null);
var extend_via_metadata_31796 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_31797 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_31798 = sci.impl.vars.getName(proto_ns_31797);
var pns_str_31799 = (cljs.core.truth_(extend_via_metadata_31796)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_31798):null);
var seq__31327_31801 = cljs.core.seq(mmap);
var chunk__31328_31802 = null;
var count__31329_31803 = (0);
var i__31330_31804 = (0);
while(true){
if((i__31330_31804 < count__31329_31803)){
var vec__31375_31806 = chunk__31328_31802.cljs$core$IIndexed$_nth$arity$2(null,i__31330_31804);
var meth_name_31807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31375_31806,(0),null);
var f_31808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31375_31806,(1),null);
var meth_str_31810 = cljs.core.name(meth_name_31807);
var meth_sym_31811 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_31810);
var env_31812 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_31813 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_31812,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_31798,meth_sym_31811], null));
var multi_method_31814 = cljs.core.deref(multi_method_var_31813);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_31814,atype,(cljs.core.truth_(extend_via_metadata_31796)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_31799,meth_str_31810);
return ((function (seq__31327_31801,chunk__31328_31802,count__31329_31803,i__31330_31804,seq__30803,chunk__30805,count__30806,i__30807,fq,meth_str_31810,meth_sym_31811,env_31812,multi_method_var_31813,multi_method_31814,vec__31375_31806,meth_name_31807,f_31808,extend_via_metadata_31796,proto_ns_31797,pns_31798,pns_str_31799,vec__31294,proto,mmap,seq__30803__$1,temp__5804__auto__){
return (function() { 
var G__31816__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_31808,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_31808,this$,args);
}
};
var G__31816 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__31818__i = 0, G__31818__a = new Array(arguments.length -  1);
while (G__31818__i < G__31818__a.length) {G__31818__a[G__31818__i] = arguments[G__31818__i + 1]; ++G__31818__i;}
  args = new cljs.core.IndexedSeq(G__31818__a,0,null);
} 
return G__31816__delegate.call(this,this$,args);};
G__31816.cljs$lang$maxFixedArity = 1;
G__31816.cljs$lang$applyTo = (function (arglist__31831){
var this$ = cljs.core.first(arglist__31831);
var args = cljs.core.rest(arglist__31831);
return G__31816__delegate(this$,args);
});
G__31816.cljs$core$IFn$_invoke$arity$variadic = G__31816__delegate;
return G__31816;
})()
;
;})(seq__31327_31801,chunk__31328_31802,count__31329_31803,i__31330_31804,seq__30803,chunk__30805,count__30806,i__30807,fq,meth_str_31810,meth_sym_31811,env_31812,multi_method_var_31813,multi_method_31814,vec__31375_31806,meth_name_31807,f_31808,extend_via_metadata_31796,proto_ns_31797,pns_31798,pns_str_31799,vec__31294,proto,mmap,seq__30803__$1,temp__5804__auto__))
})():f_31808));


var G__31832 = seq__31327_31801;
var G__31833 = chunk__31328_31802;
var G__31834 = count__31329_31803;
var G__31835 = (i__31330_31804 + (1));
seq__31327_31801 = G__31832;
chunk__31328_31802 = G__31833;
count__31329_31803 = G__31834;
i__31330_31804 = G__31835;
continue;
} else {
var temp__5804__auto___31839__$1 = cljs.core.seq(seq__31327_31801);
if(temp__5804__auto___31839__$1){
var seq__31327_31840__$1 = temp__5804__auto___31839__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31327_31840__$1)){
var c__5568__auto___31841 = cljs.core.chunk_first(seq__31327_31840__$1);
var G__31842 = cljs.core.chunk_rest(seq__31327_31840__$1);
var G__31843 = c__5568__auto___31841;
var G__31844 = cljs.core.count(c__5568__auto___31841);
var G__31845 = (0);
seq__31327_31801 = G__31842;
chunk__31328_31802 = G__31843;
count__31329_31803 = G__31844;
i__31330_31804 = G__31845;
continue;
} else {
var vec__31419_31846 = cljs.core.first(seq__31327_31840__$1);
var meth_name_31847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31419_31846,(0),null);
var f_31848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31419_31846,(1),null);
var meth_str_31849 = cljs.core.name(meth_name_31847);
var meth_sym_31850 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_31849);
var env_31851 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_31852 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_31851,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_31798,meth_sym_31850], null));
var multi_method_31853 = cljs.core.deref(multi_method_var_31852);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_31853,atype,(cljs.core.truth_(extend_via_metadata_31796)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_31799,meth_str_31849);
return ((function (seq__31327_31801,chunk__31328_31802,count__31329_31803,i__31330_31804,seq__30803,chunk__30805,count__30806,i__30807,fq,meth_str_31849,meth_sym_31850,env_31851,multi_method_var_31852,multi_method_31853,vec__31419_31846,meth_name_31847,f_31848,seq__31327_31840__$1,temp__5804__auto___31839__$1,extend_via_metadata_31796,proto_ns_31797,pns_31798,pns_str_31799,vec__31294,proto,mmap,seq__30803__$1,temp__5804__auto__){
return (function() { 
var G__31854__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_31848,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_31848,this$,args);
}
};
var G__31854 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__31856__i = 0, G__31856__a = new Array(arguments.length -  1);
while (G__31856__i < G__31856__a.length) {G__31856__a[G__31856__i] = arguments[G__31856__i + 1]; ++G__31856__i;}
  args = new cljs.core.IndexedSeq(G__31856__a,0,null);
} 
return G__31854__delegate.call(this,this$,args);};
G__31854.cljs$lang$maxFixedArity = 1;
G__31854.cljs$lang$applyTo = (function (arglist__31858){
var this$ = cljs.core.first(arglist__31858);
var args = cljs.core.rest(arglist__31858);
return G__31854__delegate(this$,args);
});
G__31854.cljs$core$IFn$_invoke$arity$variadic = G__31854__delegate;
return G__31854;
})()
;
;})(seq__31327_31801,chunk__31328_31802,count__31329_31803,i__31330_31804,seq__30803,chunk__30805,count__30806,i__30807,fq,meth_str_31849,meth_sym_31850,env_31851,multi_method_var_31852,multi_method_31853,vec__31419_31846,meth_name_31847,f_31848,seq__31327_31840__$1,temp__5804__auto___31839__$1,extend_via_metadata_31796,proto_ns_31797,pns_31798,pns_str_31799,vec__31294,proto,mmap,seq__30803__$1,temp__5804__auto__))
})():f_31848));


var G__31872 = cljs.core.next(seq__31327_31840__$1);
var G__31873 = null;
var G__31874 = (0);
var G__31875 = (0);
seq__31327_31801 = G__31872;
chunk__31328_31802 = G__31873;
count__31329_31803 = G__31874;
i__31330_31804 = G__31875;
continue;
}
} else {
}
}
break;
}


var G__31876 = cljs.core.next(seq__30803__$1);
var G__31877 = null;
var G__31878 = (0);
var G__31879 = (0);
seq__30803 = G__31876;
chunk__30805 = G__31877;
count__30806 = G__31878;
i__30807 = G__31879;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq30731){
var G__30732 = cljs.core.first(seq30731);
var seq30731__$1 = cljs.core.next(seq30731);
var G__30733 = cljs.core.first(seq30731__$1);
var seq30731__$2 = cljs.core.next(seq30731__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30732,G__30733,seq30731__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__31426){
var vec__31427 = p__31426;
var seq__31428 = cljs.core.seq(vec__31427);
var first__31429 = cljs.core.first(seq__31428);
var seq__31428__$1 = cljs.core.next(seq__31428);
var args = first__31429;
var body = seq__31428__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__31422__auto__","farg__31422__auto__",123421515,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__31423__auto__","m__31423__auto__",1691437082,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__31422__auto__","farg__31422__auto__",123421515,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__31424__auto__","meth__31424__auto__",1567709794,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__31423__auto__","m__31423__auto__",1691437082,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__31424__auto__","meth__31424__auto__",1567709794,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(type,meths,protocol_ns,extend_via_metadata){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31471){
var vec__31472 = p__31471;
var seq__31473 = cljs.core.seq(vec__31472);
var first__31474 = cljs.core.first(seq__31473);
var seq__31473__$1 = cljs.core.next(seq__31473);
var meth_name = first__31474;
var fn_body = seq__31473__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body):cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__31470_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__31470_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_body], 0))):fn_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31912 = arguments.length;
var i__5770__auto___31913 = (0);
while(true){
if((i__5770__auto___31913 < len__5769__auto___31912)){
args__5775__auto__.push((arguments[i__5770__auto___31913]));

var G__31914 = (i__5770__auto___31913 + (1));
i__5770__auto___31913 = G__31914;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__31475_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__31475_SHARP_)));
}),impls);
var protocol_var = (function (){var G__31522 = ctx;
var G__31523 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__31524 = protocol_name;
var fexpr__31521 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__31521.cljs$core$IFn$_invoke$arity$3 ? fexpr__31521.cljs$core$IFn$_invoke$arity$3(G__31522,G__31523,G__31524) : fexpr__31521.call(null,G__31522,G__31523,G__31524));
})();
var protocol_data = cljs.core.deref(protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31528){
var vec__31529 = p__31528;
var seq__31530 = cljs.core.seq(vec__31529);
var first__31531 = cljs.core.first(seq__31530);
var seq__31530__$1 = cljs.core.next(seq__31530);
var type = first__31531;
var meths = seq__31530__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq31476){
var G__31477 = cljs.core.first(seq31476);
var seq31476__$1 = cljs.core.next(seq31476);
var G__31478 = cljs.core.first(seq31476__$1);
var seq31476__$2 = cljs.core.next(seq31476__$1);
var G__31479 = cljs.core.first(seq31476__$2);
var seq31476__$3 = cljs.core.next(seq31476__$2);
var G__31480 = cljs.core.first(seq31476__$3);
var seq31476__$4 = cljs.core.next(seq31476__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31477,G__31478,G__31479,G__31480,seq31476__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31937 = arguments.length;
var i__5770__auto___31939 = (0);
while(true){
if((i__5770__auto___31939 < len__5769__auto___31937)){
args__5775__auto__.push((arguments[i__5770__auto___31939]));

var G__31942 = (i__5770__auto___31939 + (1));
i__5770__auto___31939 = G__31942;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__31534_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__31534_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31553){
var vec__31554 = p__31553;
var seq__31555 = cljs.core.seq(vec__31554);
var first__31556 = cljs.core.first(seq__31555);
var seq__31555__$1 = cljs.core.next(seq__31555);
var proto = first__31556;
var meths = seq__31555__$1;
var protocol_var = (function (){var G__31558 = ctx;
var G__31559 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__31560 = proto;
var fexpr__31557 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__31557.cljs$core$IFn$_invoke$arity$3 ? fexpr__31557.cljs$core$IFn$_invoke$arity$3(G__31558,G__31559,G__31560) : fexpr__31557.call(null,G__31558,G__31559,G__31560));
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(atype,meths,pns,extend_via_metadata))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq31541){
var G__31542 = cljs.core.first(seq31541);
var seq31541__$1 = cljs.core.next(seq31541);
var G__31543 = cljs.core.first(seq31541__$1);
var seq31541__$2 = cljs.core.next(seq31541__$1);
var G__31544 = cljs.core.first(seq31541__$2);
var seq31541__$3 = cljs.core.next(seq31541__$2);
var G__31545 = cljs.core.first(seq31541__$3);
var seq31541__$4 = cljs.core.next(seq31541__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31542,G__31543,G__31544,G__31545,seq31541__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__31561_SHARP_){
var temp__5804__auto__ = cljs.core.get_method(p1__31561_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var ms = cljs.core.methods$(p1__31561_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__5045__auto__ = (function (){var and__5043__auto__ = p;
if(cljs.core.truth_(and__5043__auto__)){
var pred__31567 = cljs.core._EQ_;
var expr__31568 = p;
if(cljs.core.truth_((pred__31567.cljs$core$IFn$_invoke$arity$2 ? pred__31567.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__31568) : pred__31567.call(null,cljs.core.IDeref,expr__31568)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__31567.cljs$core$IFn$_invoke$arity$2 ? pred__31567.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__31568) : pred__31567.call(null,cljs.core.ISwap,expr__31568)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__31567.cljs$core$IFn$_invoke$arity$2 ? pred__31567.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__31568) : pred__31567.call(null,cljs.core.IReset,expr__31568)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31568)].join('')));
}
}
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__5043__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__5043__auto__){
var G__31579 = clazz;
var G__31579__$1 = (((G__31579 == null))?null:cljs.core.meta(G__31579));
if((G__31579__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__31579__$1);
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__31581_SHARP_){
return cljs.core.get_method(p1__31581_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
