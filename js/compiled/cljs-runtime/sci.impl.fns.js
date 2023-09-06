goog.provide('sci.impl.fns');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(ctx,nsm,fn_name,macro_QMARK_,args){
if(cljs.core.truth_(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count),") passed to: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsm),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('')].join('');
})()));
}
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,bindings,fn_body,fn_name,macro_QMARK_){
var bindings_fn = new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951).cljs$core$IFn$_invoke$arity$1(fn_body);
var bindings__$1 = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var disable_arity_checks_QMARK_ = ctx.get(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__30426 = (fixed_arity | (0));
switch (G__30426) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
while(true){
var ret = sci.impl.evaluator.eval(ctx,bindings__$1,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
continue;
} else {
return ret;
}
break;
}
});

break;
case (1):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__30432 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__30431){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__30432,G__30431);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31592 = cljs.core._nth(recur_val,(0));
G__30431 = G__31592;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__30436 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__30435){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__30436,G__30435);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31594 = cljs.core._nth(recur_val,(0));
G__30435 = G__31594;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__30440 = cljs.core._nth(params,(0));
var G__30441 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__30438,G__30439){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__30440,G__30438);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30441,G__30439);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31595 = cljs.core._nth(recur_val,(0));
var G__31596 = cljs.core._nth(recur_val,(1));
G__30438 = G__31595;
G__30439 = G__31596;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__30447 = cljs.core._nth(params,(0));
var G__30448 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__30445,G__30446){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__30447,G__30445);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30448,G__30446);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31597 = cljs.core._nth(recur_val,(0));
var G__31598 = cljs.core._nth(recur_val,(1));
G__30445 = G__31597;
G__30446 = G__31598;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__30453 = cljs.core._nth(params,(0));
var G__30454 = cljs.core._nth(params,(1));
var G__30455 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__30450,G__30451,G__30452){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__30453,G__30450);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30454,G__30451);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30455,G__30452);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31599 = cljs.core._nth(recur_val,(0));
var G__31600 = cljs.core._nth(recur_val,(1));
var G__31601 = cljs.core._nth(recur_val,(2));
G__30450 = G__31599;
G__30451 = G__31600;
G__30452 = G__31601;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__30460 = cljs.core._nth(params,(0));
var G__30461 = cljs.core._nth(params,(1));
var G__30462 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__30457,G__30458,G__30459){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__30460,G__30457);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30461,G__30458);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30462,G__30459);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31602 = cljs.core._nth(recur_val,(0));
var G__31603 = cljs.core._nth(recur_val,(1));
var G__31604 = cljs.core._nth(recur_val,(2));
G__30457 = G__31602;
G__30458 = G__31603;
G__30459 = G__31604;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__30487 = cljs.core._nth(params,(0));
var G__30488 = cljs.core._nth(params,(1));
var G__30489 = cljs.core._nth(params,(2));
var G__30490 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__30483,G__30484,G__30485,G__30486){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__30487,G__30483);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30488,G__30484);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30489,G__30485);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30490,G__30486);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31605 = cljs.core._nth(recur_val,(0));
var G__31606 = cljs.core._nth(recur_val,(1));
var G__31607 = cljs.core._nth(recur_val,(2));
var G__31608 = cljs.core._nth(recur_val,(3));
G__30483 = G__31605;
G__30484 = G__31606;
G__30485 = G__31607;
G__30486 = G__31608;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__30496 = cljs.core._nth(params,(0));
var G__30497 = cljs.core._nth(params,(1));
var G__30498 = cljs.core._nth(params,(2));
var G__30499 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__30492,G__30493,G__30494,G__30495){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__30496,G__30492);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30497,G__30493);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30498,G__30494);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30499,G__30495);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31609 = cljs.core._nth(recur_val,(0));
var G__31610 = cljs.core._nth(recur_val,(1));
var G__31611 = cljs.core._nth(recur_val,(2));
var G__31612 = cljs.core._nth(recur_val,(3));
G__30492 = G__31609;
G__30493 = G__31610;
G__30494 = G__31611;
G__30495 = G__31612;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__30506 = cljs.core._nth(params,(0));
var G__30507 = cljs.core._nth(params,(1));
var G__30508 = cljs.core._nth(params,(2));
var G__30509 = cljs.core._nth(params,(3));
var G__30510 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__30501,G__30502,G__30503,G__30504,G__30505){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__30506,G__30501);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30507,G__30502);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30508,G__30503);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30509,G__30504);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30510,G__30505);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31614 = cljs.core._nth(recur_val,(0));
var G__31615 = cljs.core._nth(recur_val,(1));
var G__31616 = cljs.core._nth(recur_val,(2));
var G__31617 = cljs.core._nth(recur_val,(3));
var G__31618 = cljs.core._nth(recur_val,(4));
G__30501 = G__31614;
G__30502 = G__31615;
G__30503 = G__31616;
G__30504 = G__31617;
G__30505 = G__31618;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__30516 = cljs.core._nth(params,(0));
var G__30517 = cljs.core._nth(params,(1));
var G__30518 = cljs.core._nth(params,(2));
var G__30519 = cljs.core._nth(params,(3));
var G__30520 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__30511,G__30512,G__30513,G__30514,G__30515){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__30516,G__30511);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30517,G__30512);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30518,G__30513);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30519,G__30514);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30520,G__30515);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31620 = cljs.core._nth(recur_val,(0));
var G__31621 = cljs.core._nth(recur_val,(1));
var G__31622 = cljs.core._nth(recur_val,(2));
var G__31623 = cljs.core._nth(recur_val,(3));
var G__31624 = cljs.core._nth(recur_val,(4));
G__30511 = G__31620;
G__30512 = G__31621;
G__30513 = G__31622;
G__30514 = G__31623;
G__30515 = G__31624;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__30527 = cljs.core._nth(params,(0));
var G__30528 = cljs.core._nth(params,(1));
var G__30529 = cljs.core._nth(params,(2));
var G__30530 = cljs.core._nth(params,(3));
var G__30531 = cljs.core._nth(params,(4));
var G__30532 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__30521,G__30522,G__30523,G__30524,G__30525,G__30526){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__30527,G__30521);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30528,G__30522);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30529,G__30523);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30530,G__30524);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30531,G__30525);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30532,G__30526);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31627 = cljs.core._nth(recur_val,(0));
var G__31628 = cljs.core._nth(recur_val,(1));
var G__31629 = cljs.core._nth(recur_val,(2));
var G__31630 = cljs.core._nth(recur_val,(3));
var G__31631 = cljs.core._nth(recur_val,(4));
var G__31632 = cljs.core._nth(recur_val,(5));
G__30521 = G__31627;
G__30522 = G__31628;
G__30523 = G__31629;
G__30524 = G__31630;
G__30525 = G__31631;
G__30526 = G__31632;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__30540 = cljs.core._nth(params,(0));
var G__30541 = cljs.core._nth(params,(1));
var G__30542 = cljs.core._nth(params,(2));
var G__30543 = cljs.core._nth(params,(3));
var G__30544 = cljs.core._nth(params,(4));
var G__30545 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__30534,G__30535,G__30536,G__30537,G__30538,G__30539){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__30540,G__30534);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30541,G__30535);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30542,G__30536);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30543,G__30537);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30544,G__30538);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30545,G__30539);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31634 = cljs.core._nth(recur_val,(0));
var G__31635 = cljs.core._nth(recur_val,(1));
var G__31636 = cljs.core._nth(recur_val,(2));
var G__31637 = cljs.core._nth(recur_val,(3));
var G__31638 = cljs.core._nth(recur_val,(4));
var G__31639 = cljs.core._nth(recur_val,(5));
G__30534 = G__31634;
G__30535 = G__31635;
G__30536 = G__31636;
G__30537 = G__31637;
G__30538 = G__31638;
G__30539 = G__31639;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__30555 = cljs.core._nth(params,(0));
var G__30556 = cljs.core._nth(params,(1));
var G__30557 = cljs.core._nth(params,(2));
var G__30558 = cljs.core._nth(params,(3));
var G__30559 = cljs.core._nth(params,(4));
var G__30560 = cljs.core._nth(params,(5));
var G__30561 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__30548,G__30549,G__30550,G__30551,G__30552,G__30553,G__30554){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__30555,G__30548);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30556,G__30549);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30557,G__30550);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30558,G__30551);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30559,G__30552);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30560,G__30553);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30561,G__30554);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31640 = cljs.core._nth(recur_val,(0));
var G__31641 = cljs.core._nth(recur_val,(1));
var G__31642 = cljs.core._nth(recur_val,(2));
var G__31643 = cljs.core._nth(recur_val,(3));
var G__31644 = cljs.core._nth(recur_val,(4));
var G__31645 = cljs.core._nth(recur_val,(5));
var G__31646 = cljs.core._nth(recur_val,(6));
G__30548 = G__31640;
G__30549 = G__31641;
G__30550 = G__31642;
G__30551 = G__31643;
G__30552 = G__31644;
G__30553 = G__31645;
G__30554 = G__31646;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__30570 = cljs.core._nth(params,(0));
var G__30571 = cljs.core._nth(params,(1));
var G__30572 = cljs.core._nth(params,(2));
var G__30573 = cljs.core._nth(params,(3));
var G__30574 = cljs.core._nth(params,(4));
var G__30575 = cljs.core._nth(params,(5));
var G__30576 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__30563,G__30564,G__30565,G__30566,G__30567,G__30568,G__30569){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__30570,G__30563);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30571,G__30564);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30572,G__30565);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30573,G__30566);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30574,G__30567);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30575,G__30568);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30576,G__30569);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31647 = cljs.core._nth(recur_val,(0));
var G__31648 = cljs.core._nth(recur_val,(1));
var G__31649 = cljs.core._nth(recur_val,(2));
var G__31650 = cljs.core._nth(recur_val,(3));
var G__31651 = cljs.core._nth(recur_val,(4));
var G__31652 = cljs.core._nth(recur_val,(5));
var G__31653 = cljs.core._nth(recur_val,(6));
G__30563 = G__31647;
G__30564 = G__31648;
G__30565 = G__31649;
G__30566 = G__31650;
G__30567 = G__31651;
G__30568 = G__31652;
G__30569 = G__31653;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__30589 = cljs.core._nth(params,(0));
var G__30590 = cljs.core._nth(params,(1));
var G__30591 = cljs.core._nth(params,(2));
var G__30592 = cljs.core._nth(params,(3));
var G__30593 = cljs.core._nth(params,(4));
var G__30594 = cljs.core._nth(params,(5));
var G__30595 = cljs.core._nth(params,(6));
var G__30596 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__30581,G__30582,G__30583,G__30584,G__30585,G__30586,G__30587,G__30588){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__30589,G__30581);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30590,G__30582);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30591,G__30583);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30592,G__30584);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30593,G__30585);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30594,G__30586);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30595,G__30587);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__30596,G__30588);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31655 = cljs.core._nth(recur_val,(0));
var G__31656 = cljs.core._nth(recur_val,(1));
var G__31657 = cljs.core._nth(recur_val,(2));
var G__31658 = cljs.core._nth(recur_val,(3));
var G__31659 = cljs.core._nth(recur_val,(4));
var G__31660 = cljs.core._nth(recur_val,(5));
var G__31661 = cljs.core._nth(recur_val,(6));
var G__31662 = cljs.core._nth(recur_val,(7));
G__30581 = G__31655;
G__30582 = G__31656;
G__30583 = G__31657;
G__30584 = G__31658;
G__30585 = G__31659;
G__30586 = G__31660;
G__30587 = G__31661;
G__30588 = G__31662;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__30613 = cljs.core._nth(params,(0));
var G__30614 = cljs.core._nth(params,(1));
var G__30615 = cljs.core._nth(params,(2));
var G__30616 = cljs.core._nth(params,(3));
var G__30617 = cljs.core._nth(params,(4));
var G__30618 = cljs.core._nth(params,(5));
var G__30619 = cljs.core._nth(params,(6));
var G__30620 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__30605,G__30606,G__30607,G__30608,G__30609,G__30610,G__30611,G__30612){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__30613,G__30605);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30614,G__30606);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30615,G__30607);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30616,G__30608);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30617,G__30609);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30618,G__30610);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30619,G__30611);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__30620,G__30612);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31668 = cljs.core._nth(recur_val,(0));
var G__31669 = cljs.core._nth(recur_val,(1));
var G__31670 = cljs.core._nth(recur_val,(2));
var G__31671 = cljs.core._nth(recur_val,(3));
var G__31672 = cljs.core._nth(recur_val,(4));
var G__31673 = cljs.core._nth(recur_val,(5));
var G__31674 = cljs.core._nth(recur_val,(6));
var G__31675 = cljs.core._nth(recur_val,(7));
G__30605 = G__31668;
G__30606 = G__31669;
G__30607 = G__31670;
G__30608 = G__31671;
G__30609 = G__31672;
G__30610 = G__31673;
G__30611 = G__31674;
G__30612 = G__31675;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__30655 = cljs.core._nth(params,(0));
var G__30656 = cljs.core._nth(params,(1));
var G__30657 = cljs.core._nth(params,(2));
var G__30658 = cljs.core._nth(params,(3));
var G__30659 = cljs.core._nth(params,(4));
var G__30660 = cljs.core._nth(params,(5));
var G__30661 = cljs.core._nth(params,(6));
var G__30662 = cljs.core._nth(params,(7));
var G__30663 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__30646,G__30647,G__30648,G__30649,G__30650,G__30651,G__30652,G__30653,G__30654){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__30655,G__30646);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30656,G__30647);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30657,G__30648);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30658,G__30649);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30659,G__30650);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30660,G__30651);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30661,G__30652);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__30662,G__30653);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__30663,G__30654);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31687 = cljs.core._nth(recur_val,(0));
var G__31688 = cljs.core._nth(recur_val,(1));
var G__31689 = cljs.core._nth(recur_val,(2));
var G__31690 = cljs.core._nth(recur_val,(3));
var G__31691 = cljs.core._nth(recur_val,(4));
var G__31692 = cljs.core._nth(recur_val,(5));
var G__31693 = cljs.core._nth(recur_val,(6));
var G__31694 = cljs.core._nth(recur_val,(7));
var G__31695 = cljs.core._nth(recur_val,(8));
G__30646 = G__31687;
G__30647 = G__31688;
G__30648 = G__31689;
G__30649 = G__31690;
G__30650 = G__31691;
G__30651 = G__31692;
G__30652 = G__31693;
G__30653 = G__31694;
G__30654 = G__31695;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__30674 = cljs.core._nth(params,(0));
var G__30675 = cljs.core._nth(params,(1));
var G__30676 = cljs.core._nth(params,(2));
var G__30677 = cljs.core._nth(params,(3));
var G__30678 = cljs.core._nth(params,(4));
var G__30679 = cljs.core._nth(params,(5));
var G__30680 = cljs.core._nth(params,(6));
var G__30681 = cljs.core._nth(params,(7));
var G__30682 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__30665,G__30666,G__30667,G__30668,G__30669,G__30670,G__30671,G__30672,G__30673){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__30674,G__30665);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30675,G__30666);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30676,G__30667);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30677,G__30668);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30678,G__30669);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30679,G__30670);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30680,G__30671);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__30681,G__30672);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__30682,G__30673);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31702 = cljs.core._nth(recur_val,(0));
var G__31703 = cljs.core._nth(recur_val,(1));
var G__31704 = cljs.core._nth(recur_val,(2));
var G__31705 = cljs.core._nth(recur_val,(3));
var G__31706 = cljs.core._nth(recur_val,(4));
var G__31707 = cljs.core._nth(recur_val,(5));
var G__31708 = cljs.core._nth(recur_val,(6));
var G__31709 = cljs.core._nth(recur_val,(7));
var G__31710 = cljs.core._nth(recur_val,(8));
G__30665 = G__31702;
G__30666 = G__31703;
G__30667 = G__31704;
G__30668 = G__31705;
G__30669 = G__31706;
G__30670 = G__31707;
G__30671 = G__31708;
G__30672 = G__31709;
G__30673 = G__31710;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__30697 = cljs.core._nth(params,(0));
var G__30698 = cljs.core._nth(params,(1));
var G__30699 = cljs.core._nth(params,(2));
var G__30700 = cljs.core._nth(params,(3));
var G__30701 = cljs.core._nth(params,(4));
var G__30702 = cljs.core._nth(params,(5));
var G__30703 = cljs.core._nth(params,(6));
var G__30704 = cljs.core._nth(params,(7));
var G__30705 = cljs.core._nth(params,(8));
var G__30706 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__30687,G__30688,G__30689,G__30690,G__30691,G__30692,G__30693,G__30694,G__30695,G__30696){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__30697,G__30687);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30698,G__30688);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30699,G__30689);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30700,G__30690);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30701,G__30691);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30702,G__30692);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30703,G__30693);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__30704,G__30694);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__30705,G__30695);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__30706,G__30696);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31719 = cljs.core._nth(recur_val,(0));
var G__31720 = cljs.core._nth(recur_val,(1));
var G__31721 = cljs.core._nth(recur_val,(2));
var G__31722 = cljs.core._nth(recur_val,(3));
var G__31723 = cljs.core._nth(recur_val,(4));
var G__31724 = cljs.core._nth(recur_val,(5));
var G__31725 = cljs.core._nth(recur_val,(6));
var G__31726 = cljs.core._nth(recur_val,(7));
var G__31727 = cljs.core._nth(recur_val,(8));
var G__31728 = cljs.core._nth(recur_val,(9));
G__30687 = G__31719;
G__30688 = G__31720;
G__30689 = G__31721;
G__30690 = G__31722;
G__30691 = G__31723;
G__30692 = G__31724;
G__30693 = G__31725;
G__30694 = G__31726;
G__30695 = G__31727;
G__30696 = G__31728;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__30717 = cljs.core._nth(params,(0));
var G__30718 = cljs.core._nth(params,(1));
var G__30719 = cljs.core._nth(params,(2));
var G__30720 = cljs.core._nth(params,(3));
var G__30721 = cljs.core._nth(params,(4));
var G__30722 = cljs.core._nth(params,(5));
var G__30723 = cljs.core._nth(params,(6));
var G__30724 = cljs.core._nth(params,(7));
var G__30725 = cljs.core._nth(params,(8));
var G__30726 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__30707,G__30708,G__30709,G__30710,G__30711,G__30712,G__30713,G__30714,G__30715,G__30716){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__30717,G__30707);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30718,G__30708);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30719,G__30709);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30720,G__30710);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30721,G__30711);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30722,G__30712);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30723,G__30713);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__30724,G__30714);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__30725,G__30715);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__30726,G__30716);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31758 = cljs.core._nth(recur_val,(0));
var G__31759 = cljs.core._nth(recur_val,(1));
var G__31760 = cljs.core._nth(recur_val,(2));
var G__31761 = cljs.core._nth(recur_val,(3));
var G__31762 = cljs.core._nth(recur_val,(4));
var G__31763 = cljs.core._nth(recur_val,(5));
var G__31764 = cljs.core._nth(recur_val,(6));
var G__31765 = cljs.core._nth(recur_val,(7));
var G__31766 = cljs.core._nth(recur_val,(8));
var G__31767 = cljs.core._nth(recur_val,(9));
G__30707 = G__31758;
G__30708 = G__31759;
G__30709 = G__31760;
G__30710 = G__31761;
G__30711 = G__31762;
G__30712 = G__31763;
G__30713 = G__31764;
G__30714 = G__31765;
G__30715 = G__31766;
G__30716 = G__31767;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__30745 = cljs.core._nth(params,(0));
var G__30746 = cljs.core._nth(params,(1));
var G__30747 = cljs.core._nth(params,(2));
var G__30748 = cljs.core._nth(params,(3));
var G__30749 = cljs.core._nth(params,(4));
var G__30750 = cljs.core._nth(params,(5));
var G__30751 = cljs.core._nth(params,(6));
var G__30752 = cljs.core._nth(params,(7));
var G__30753 = cljs.core._nth(params,(8));
var G__30754 = cljs.core._nth(params,(9));
var G__30755 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__30734,G__30735,G__30736,G__30737,G__30738,G__30739,G__30740,G__30741,G__30742,G__30743,G__30744){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__30745,G__30734);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30746,G__30735);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30747,G__30736);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30748,G__30737);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30749,G__30738);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30750,G__30739);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30751,G__30740);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__30752,G__30741);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__30753,G__30742);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__30754,G__30743);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__30755,G__30744);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31785 = cljs.core._nth(recur_val,(0));
var G__31786 = cljs.core._nth(recur_val,(1));
var G__31787 = cljs.core._nth(recur_val,(2));
var G__31788 = cljs.core._nth(recur_val,(3));
var G__31789 = cljs.core._nth(recur_val,(4));
var G__31790 = cljs.core._nth(recur_val,(5));
var G__31791 = cljs.core._nth(recur_val,(6));
var G__31792 = cljs.core._nth(recur_val,(7));
var G__31793 = cljs.core._nth(recur_val,(8));
var G__31794 = cljs.core._nth(recur_val,(9));
var G__31795 = cljs.core._nth(recur_val,(10));
G__30734 = G__31785;
G__30735 = G__31786;
G__30736 = G__31787;
G__30737 = G__31788;
G__30738 = G__31789;
G__30739 = G__31790;
G__30740 = G__31791;
G__30741 = G__31792;
G__30742 = G__31793;
G__30743 = G__31794;
G__30744 = G__31795;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__30768 = cljs.core._nth(params,(0));
var G__30769 = cljs.core._nth(params,(1));
var G__30770 = cljs.core._nth(params,(2));
var G__30771 = cljs.core._nth(params,(3));
var G__30772 = cljs.core._nth(params,(4));
var G__30773 = cljs.core._nth(params,(5));
var G__30774 = cljs.core._nth(params,(6));
var G__30775 = cljs.core._nth(params,(7));
var G__30776 = cljs.core._nth(params,(8));
var G__30777 = cljs.core._nth(params,(9));
var G__30778 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__30757,G__30758,G__30759,G__30760,G__30761,G__30762,G__30763,G__30764,G__30765,G__30766,G__30767){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__30768,G__30757);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30769,G__30758);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30770,G__30759);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30771,G__30760);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30772,G__30761);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30773,G__30762);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30774,G__30763);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__30775,G__30764);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__30776,G__30765);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__30777,G__30766);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__30778,G__30767);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31820 = cljs.core._nth(recur_val,(0));
var G__31821 = cljs.core._nth(recur_val,(1));
var G__31822 = cljs.core._nth(recur_val,(2));
var G__31823 = cljs.core._nth(recur_val,(3));
var G__31824 = cljs.core._nth(recur_val,(4));
var G__31825 = cljs.core._nth(recur_val,(5));
var G__31826 = cljs.core._nth(recur_val,(6));
var G__31827 = cljs.core._nth(recur_val,(7));
var G__31828 = cljs.core._nth(recur_val,(8));
var G__31829 = cljs.core._nth(recur_val,(9));
var G__31830 = cljs.core._nth(recur_val,(10));
G__30757 = G__31820;
G__30758 = G__31821;
G__30759 = G__31822;
G__30760 = G__31823;
G__30761 = G__31824;
G__30762 = G__31825;
G__30763 = G__31826;
G__30764 = G__31827;
G__30765 = G__31828;
G__30766 = G__31829;
G__30767 = G__31830;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__30791 = cljs.core._nth(params,(0));
var G__30792 = cljs.core._nth(params,(1));
var G__30793 = cljs.core._nth(params,(2));
var G__30794 = cljs.core._nth(params,(3));
var G__30795 = cljs.core._nth(params,(4));
var G__30796 = cljs.core._nth(params,(5));
var G__30797 = cljs.core._nth(params,(6));
var G__30798 = cljs.core._nth(params,(7));
var G__30799 = cljs.core._nth(params,(8));
var G__30800 = cljs.core._nth(params,(9));
var G__30801 = cljs.core._nth(params,(10));
var G__30802 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__30779,G__30780,G__30781,G__30782,G__30783,G__30784,G__30785,G__30786,G__30787,G__30788,G__30789,G__30790){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__30791,G__30779);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30792,G__30780);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30793,G__30781);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30794,G__30782);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30795,G__30783);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30796,G__30784);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30797,G__30785);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__30798,G__30786);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__30799,G__30787);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__30800,G__30788);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__30801,G__30789);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__30802,G__30790);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31860 = cljs.core._nth(recur_val,(0));
var G__31861 = cljs.core._nth(recur_val,(1));
var G__31862 = cljs.core._nth(recur_val,(2));
var G__31863 = cljs.core._nth(recur_val,(3));
var G__31864 = cljs.core._nth(recur_val,(4));
var G__31865 = cljs.core._nth(recur_val,(5));
var G__31866 = cljs.core._nth(recur_val,(6));
var G__31867 = cljs.core._nth(recur_val,(7));
var G__31868 = cljs.core._nth(recur_val,(8));
var G__31869 = cljs.core._nth(recur_val,(9));
var G__31870 = cljs.core._nth(recur_val,(10));
var G__31871 = cljs.core._nth(recur_val,(11));
G__30779 = G__31860;
G__30780 = G__31861;
G__30781 = G__31862;
G__30782 = G__31863;
G__30783 = G__31864;
G__30784 = G__31865;
G__30785 = G__31866;
G__30786 = G__31867;
G__30787 = G__31868;
G__30788 = G__31869;
G__30789 = G__31870;
G__30790 = G__31871;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__30826 = cljs.core._nth(params,(0));
var G__30827 = cljs.core._nth(params,(1));
var G__30828 = cljs.core._nth(params,(2));
var G__30829 = cljs.core._nth(params,(3));
var G__30830 = cljs.core._nth(params,(4));
var G__30831 = cljs.core._nth(params,(5));
var G__30832 = cljs.core._nth(params,(6));
var G__30833 = cljs.core._nth(params,(7));
var G__30834 = cljs.core._nth(params,(8));
var G__30835 = cljs.core._nth(params,(9));
var G__30836 = cljs.core._nth(params,(10));
var G__30837 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__30814,G__30815,G__30816,G__30817,G__30818,G__30819,G__30820,G__30821,G__30822,G__30823,G__30824,G__30825){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__30826,G__30814);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30827,G__30815);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30828,G__30816);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30829,G__30817);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30830,G__30818);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30831,G__30819);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30832,G__30820);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__30833,G__30821);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__30834,G__30822);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__30835,G__30823);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__30836,G__30824);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__30837,G__30825);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31881 = cljs.core._nth(recur_val,(0));
var G__31882 = cljs.core._nth(recur_val,(1));
var G__31883 = cljs.core._nth(recur_val,(2));
var G__31884 = cljs.core._nth(recur_val,(3));
var G__31885 = cljs.core._nth(recur_val,(4));
var G__31886 = cljs.core._nth(recur_val,(5));
var G__31887 = cljs.core._nth(recur_val,(6));
var G__31888 = cljs.core._nth(recur_val,(7));
var G__31889 = cljs.core._nth(recur_val,(8));
var G__31890 = cljs.core._nth(recur_val,(9));
var G__31891 = cljs.core._nth(recur_val,(10));
var G__31892 = cljs.core._nth(recur_val,(11));
G__30814 = G__31881;
G__30815 = G__31882;
G__30816 = G__31883;
G__30817 = G__31884;
G__30818 = G__31885;
G__30819 = G__31886;
G__30820 = G__31887;
G__30821 = G__31888;
G__30822 = G__31889;
G__30823 = G__31890;
G__30824 = G__31891;
G__30825 = G__31892;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__30859 = cljs.core._nth(params,(0));
var G__30860 = cljs.core._nth(params,(1));
var G__30861 = cljs.core._nth(params,(2));
var G__30862 = cljs.core._nth(params,(3));
var G__30863 = cljs.core._nth(params,(4));
var G__30864 = cljs.core._nth(params,(5));
var G__30865 = cljs.core._nth(params,(6));
var G__30866 = cljs.core._nth(params,(7));
var G__30867 = cljs.core._nth(params,(8));
var G__30868 = cljs.core._nth(params,(9));
var G__30869 = cljs.core._nth(params,(10));
var G__30870 = cljs.core._nth(params,(11));
var G__30871 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__30846,G__30847,G__30848,G__30849,G__30850,G__30851,G__30852,G__30853,G__30854,G__30855,G__30856,G__30857,G__30858){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__30859,G__30846);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30860,G__30847);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30861,G__30848);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30862,G__30849);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30863,G__30850);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30864,G__30851);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30865,G__30852);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__30866,G__30853);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__30867,G__30854);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__30868,G__30855);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__30869,G__30856);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__30870,G__30857);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__30871,G__30858);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31898 = cljs.core._nth(recur_val,(0));
var G__31899 = cljs.core._nth(recur_val,(1));
var G__31900 = cljs.core._nth(recur_val,(2));
var G__31901 = cljs.core._nth(recur_val,(3));
var G__31902 = cljs.core._nth(recur_val,(4));
var G__31903 = cljs.core._nth(recur_val,(5));
var G__31904 = cljs.core._nth(recur_val,(6));
var G__31905 = cljs.core._nth(recur_val,(7));
var G__31906 = cljs.core._nth(recur_val,(8));
var G__31907 = cljs.core._nth(recur_val,(9));
var G__31908 = cljs.core._nth(recur_val,(10));
var G__31909 = cljs.core._nth(recur_val,(11));
var G__31910 = cljs.core._nth(recur_val,(12));
G__30846 = G__31898;
G__30847 = G__31899;
G__30848 = G__31900;
G__30849 = G__31901;
G__30850 = G__31902;
G__30851 = G__31903;
G__30852 = G__31904;
G__30853 = G__31905;
G__30854 = G__31906;
G__30855 = G__31907;
G__30856 = G__31908;
G__30857 = G__31909;
G__30858 = G__31910;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__30890 = cljs.core._nth(params,(0));
var G__30891 = cljs.core._nth(params,(1));
var G__30892 = cljs.core._nth(params,(2));
var G__30893 = cljs.core._nth(params,(3));
var G__30894 = cljs.core._nth(params,(4));
var G__30895 = cljs.core._nth(params,(5));
var G__30896 = cljs.core._nth(params,(6));
var G__30897 = cljs.core._nth(params,(7));
var G__30898 = cljs.core._nth(params,(8));
var G__30899 = cljs.core._nth(params,(9));
var G__30900 = cljs.core._nth(params,(10));
var G__30901 = cljs.core._nth(params,(11));
var G__30902 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__30877,G__30878,G__30879,G__30880,G__30881,G__30882,G__30883,G__30884,G__30885,G__30886,G__30887,G__30888,G__30889){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__30890,G__30877);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30891,G__30878);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30892,G__30879);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30893,G__30880);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30894,G__30881);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30895,G__30882);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30896,G__30883);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__30897,G__30884);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__30898,G__30885);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__30899,G__30886);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__30900,G__30887);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__30901,G__30888);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__30902,G__30889);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31917 = cljs.core._nth(recur_val,(0));
var G__31918 = cljs.core._nth(recur_val,(1));
var G__31919 = cljs.core._nth(recur_val,(2));
var G__31920 = cljs.core._nth(recur_val,(3));
var G__31921 = cljs.core._nth(recur_val,(4));
var G__31922 = cljs.core._nth(recur_val,(5));
var G__31923 = cljs.core._nth(recur_val,(6));
var G__31924 = cljs.core._nth(recur_val,(7));
var G__31925 = cljs.core._nth(recur_val,(8));
var G__31926 = cljs.core._nth(recur_val,(9));
var G__31927 = cljs.core._nth(recur_val,(10));
var G__31928 = cljs.core._nth(recur_val,(11));
var G__31929 = cljs.core._nth(recur_val,(12));
G__30877 = G__31917;
G__30878 = G__31918;
G__30879 = G__31919;
G__30880 = G__31920;
G__30881 = G__31921;
G__30882 = G__31922;
G__30883 = G__31923;
G__30884 = G__31924;
G__30885 = G__31925;
G__30886 = G__31926;
G__30887 = G__31927;
G__30888 = G__31928;
G__30889 = G__31929;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__30923 = cljs.core._nth(params,(0));
var G__30924 = cljs.core._nth(params,(1));
var G__30925 = cljs.core._nth(params,(2));
var G__30926 = cljs.core._nth(params,(3));
var G__30927 = cljs.core._nth(params,(4));
var G__30928 = cljs.core._nth(params,(5));
var G__30929 = cljs.core._nth(params,(6));
var G__30930 = cljs.core._nth(params,(7));
var G__30931 = cljs.core._nth(params,(8));
var G__30932 = cljs.core._nth(params,(9));
var G__30933 = cljs.core._nth(params,(10));
var G__30934 = cljs.core._nth(params,(11));
var G__30935 = cljs.core._nth(params,(12));
var G__30936 = cljs.core._nth(params,(13));
var G__30937 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__30908,G__30909,G__30910,G__30911,G__30912,G__30913,G__30914,G__30915,G__30916,G__30917,G__30918,G__30919,G__30920,G__30921,G__30922){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__30923,G__30908);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30924,G__30909);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30925,G__30910);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30926,G__30911);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30927,G__30912);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30928,G__30913);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30929,G__30914);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__30930,G__30915);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__30931,G__30916);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__30932,G__30917);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__30933,G__30918);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__30934,G__30919);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__30935,G__30920);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__30936,G__30921);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__30937,G__30922);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31943 = cljs.core._nth(recur_val,(0));
var G__31944 = cljs.core._nth(recur_val,(1));
var G__31945 = cljs.core._nth(recur_val,(2));
var G__31946 = cljs.core._nth(recur_val,(3));
var G__31947 = cljs.core._nth(recur_val,(4));
var G__31948 = cljs.core._nth(recur_val,(5));
var G__31949 = cljs.core._nth(recur_val,(6));
var G__31950 = cljs.core._nth(recur_val,(7));
var G__31951 = cljs.core._nth(recur_val,(8));
var G__31952 = cljs.core._nth(recur_val,(9));
var G__31953 = cljs.core._nth(recur_val,(10));
var G__31954 = cljs.core._nth(recur_val,(11));
var G__31955 = cljs.core._nth(recur_val,(12));
var G__31956 = cljs.core._nth(recur_val,(13));
var G__31957 = cljs.core._nth(recur_val,(14));
G__30908 = G__31943;
G__30909 = G__31944;
G__30910 = G__31945;
G__30911 = G__31946;
G__30912 = G__31947;
G__30913 = G__31948;
G__30914 = G__31949;
G__30915 = G__31950;
G__30916 = G__31951;
G__30917 = G__31952;
G__30918 = G__31953;
G__30919 = G__31954;
G__30920 = G__31955;
G__30921 = G__31956;
G__30922 = G__31957;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__30954 = cljs.core._nth(params,(0));
var G__30955 = cljs.core._nth(params,(1));
var G__30956 = cljs.core._nth(params,(2));
var G__30957 = cljs.core._nth(params,(3));
var G__30958 = cljs.core._nth(params,(4));
var G__30959 = cljs.core._nth(params,(5));
var G__30960 = cljs.core._nth(params,(6));
var G__30961 = cljs.core._nth(params,(7));
var G__30962 = cljs.core._nth(params,(8));
var G__30963 = cljs.core._nth(params,(9));
var G__30964 = cljs.core._nth(params,(10));
var G__30965 = cljs.core._nth(params,(11));
var G__30966 = cljs.core._nth(params,(12));
var G__30967 = cljs.core._nth(params,(13));
var G__30968 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__30939,G__30940,G__30941,G__30942,G__30943,G__30944,G__30945,G__30946,G__30947,G__30948,G__30949,G__30950,G__30951,G__30952,G__30953){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__30954,G__30939);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30955,G__30940);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30956,G__30941);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30957,G__30942);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30958,G__30943);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30959,G__30944);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__30960,G__30945);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__30961,G__30946);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__30962,G__30947);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__30963,G__30948);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__30964,G__30949);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__30965,G__30950);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__30966,G__30951);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__30967,G__30952);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__30968,G__30953);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31963 = cljs.core._nth(recur_val,(0));
var G__31964 = cljs.core._nth(recur_val,(1));
var G__31965 = cljs.core._nth(recur_val,(2));
var G__31966 = cljs.core._nth(recur_val,(3));
var G__31967 = cljs.core._nth(recur_val,(4));
var G__31968 = cljs.core._nth(recur_val,(5));
var G__31969 = cljs.core._nth(recur_val,(6));
var G__31970 = cljs.core._nth(recur_val,(7));
var G__31971 = cljs.core._nth(recur_val,(8));
var G__31972 = cljs.core._nth(recur_val,(9));
var G__31973 = cljs.core._nth(recur_val,(10));
var G__31974 = cljs.core._nth(recur_val,(11));
var G__31975 = cljs.core._nth(recur_val,(12));
var G__31976 = cljs.core._nth(recur_val,(13));
var G__31977 = cljs.core._nth(recur_val,(14));
G__30939 = G__31963;
G__30940 = G__31964;
G__30941 = G__31965;
G__30942 = G__31966;
G__30943 = G__31967;
G__30944 = G__31968;
G__30945 = G__31969;
G__30946 = G__31970;
G__30947 = G__31971;
G__30948 = G__31972;
G__30949 = G__31973;
G__30950 = G__31974;
G__30951 = G__31975;
G__30952 = G__31976;
G__30953 = G__31977;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__30994 = cljs.core._nth(params,(0));
var G__30995 = cljs.core._nth(params,(1));
var G__30996 = cljs.core._nth(params,(2));
var G__30997 = cljs.core._nth(params,(3));
var G__30998 = cljs.core._nth(params,(4));
var G__30999 = cljs.core._nth(params,(5));
var G__31000 = cljs.core._nth(params,(6));
var G__31001 = cljs.core._nth(params,(7));
var G__31002 = cljs.core._nth(params,(8));
var G__31003 = cljs.core._nth(params,(9));
var G__31004 = cljs.core._nth(params,(10));
var G__31005 = cljs.core._nth(params,(11));
var G__31006 = cljs.core._nth(params,(12));
var G__31007 = cljs.core._nth(params,(13));
var G__31008 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__30979,G__30980,G__30981,G__30982,G__30983,G__30984,G__30985,G__30986,G__30987,G__30988,G__30989,G__30990,G__30991,G__30992,G__30993){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__30994,G__30979);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__30995,G__30980);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__30996,G__30981);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__30997,G__30982);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__30998,G__30983);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__30999,G__30984);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31000,G__30985);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31001,G__30986);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31002,G__30987);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31003,G__30988);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31004,G__30989);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31005,G__30990);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31006,G__30991);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__31007,G__30992);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__31008,G__30993);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__31986 = cljs.core._nth(recur_val,(0));
var G__31987 = cljs.core._nth(recur_val,(1));
var G__31988 = cljs.core._nth(recur_val,(2));
var G__31989 = cljs.core._nth(recur_val,(3));
var G__31990 = cljs.core._nth(recur_val,(4));
var G__31991 = cljs.core._nth(recur_val,(5));
var G__31992 = cljs.core._nth(recur_val,(6));
var G__31993 = cljs.core._nth(recur_val,(7));
var G__31994 = cljs.core._nth(recur_val,(8));
var G__31995 = cljs.core._nth(recur_val,(9));
var G__31996 = cljs.core._nth(recur_val,(10));
var G__31997 = cljs.core._nth(recur_val,(11));
var G__31998 = cljs.core._nth(recur_val,(12));
var G__31999 = cljs.core._nth(recur_val,(13));
var G__32000 = cljs.core._nth(recur_val,(14));
G__30979 = G__31986;
G__30980 = G__31987;
G__30981 = G__31988;
G__30982 = G__31989;
G__30983 = G__31990;
G__30984 = G__31991;
G__30985 = G__31992;
G__30986 = G__31993;
G__30987 = G__31994;
G__30988 = G__31995;
G__30989 = G__31996;
G__30990 = G__31997;
G__30991 = G__31998;
G__30992 = G__31999;
G__30993 = G__32000;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__31040 = cljs.core._nth(params,(0));
var G__31041 = cljs.core._nth(params,(1));
var G__31042 = cljs.core._nth(params,(2));
var G__31043 = cljs.core._nth(params,(3));
var G__31044 = cljs.core._nth(params,(4));
var G__31045 = cljs.core._nth(params,(5));
var G__31046 = cljs.core._nth(params,(6));
var G__31047 = cljs.core._nth(params,(7));
var G__31048 = cljs.core._nth(params,(8));
var G__31049 = cljs.core._nth(params,(9));
var G__31050 = cljs.core._nth(params,(10));
var G__31051 = cljs.core._nth(params,(11));
var G__31052 = cljs.core._nth(params,(12));
var G__31053 = cljs.core._nth(params,(13));
var G__31054 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__31025,G__31026,G__31027,G__31028,G__31029,G__31030,G__31031,G__31032,G__31033,G__31034,G__31035,G__31036,G__31037,G__31038,G__31039){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31040,G__31025);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31041,G__31026);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31042,G__31027);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31043,G__31028);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31044,G__31029);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31045,G__31030);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31046,G__31031);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31047,G__31032);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31048,G__31033);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31049,G__31034);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31050,G__31035);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31051,G__31036);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31052,G__31037);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__31053,G__31038);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__31054,G__31039);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__32005 = cljs.core._nth(recur_val,(0));
var G__32006 = cljs.core._nth(recur_val,(1));
var G__32007 = cljs.core._nth(recur_val,(2));
var G__32008 = cljs.core._nth(recur_val,(3));
var G__32009 = cljs.core._nth(recur_val,(4));
var G__32010 = cljs.core._nth(recur_val,(5));
var G__32011 = cljs.core._nth(recur_val,(6));
var G__32012 = cljs.core._nth(recur_val,(7));
var G__32013 = cljs.core._nth(recur_val,(8));
var G__32014 = cljs.core._nth(recur_val,(9));
var G__32015 = cljs.core._nth(recur_val,(10));
var G__32016 = cljs.core._nth(recur_val,(11));
var G__32017 = cljs.core._nth(recur_val,(12));
var G__32018 = cljs.core._nth(recur_val,(13));
var G__32019 = cljs.core._nth(recur_val,(14));
G__31025 = G__32005;
G__31026 = G__32006;
G__31027 = G__32007;
G__31028 = G__32008;
G__31029 = G__32009;
G__31030 = G__32010;
G__31031 = G__32011;
G__31032 = G__32012;
G__31033 = G__32013;
G__31034 = G__32014;
G__31035 = G__32015;
G__31036 = G__32016;
G__31037 = G__32017;
G__31038 = G__32018;
G__31039 = G__32019;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31089 = cljs.core._nth(params,(0));
var G__31090 = cljs.core._nth(params,(1));
var G__31091 = cljs.core._nth(params,(2));
var G__31092 = cljs.core._nth(params,(3));
var G__31093 = cljs.core._nth(params,(4));
var G__31094 = cljs.core._nth(params,(5));
var G__31095 = cljs.core._nth(params,(6));
var G__31096 = cljs.core._nth(params,(7));
var G__31097 = cljs.core._nth(params,(8));
var G__31098 = cljs.core._nth(params,(9));
var G__31099 = cljs.core._nth(params,(10));
var G__31100 = cljs.core._nth(params,(11));
var G__31101 = cljs.core._nth(params,(12));
var G__31102 = cljs.core._nth(params,(13));
var G__31103 = cljs.core._nth(params,(14));
var G__31104 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__31073,G__31074,G__31075,G__31076,G__31077,G__31078,G__31079,G__31080,G__31081,G__31082,G__31083,G__31084,G__31085,G__31086,G__31087,G__31088){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31089,G__31073);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31090,G__31074);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31091,G__31075);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31092,G__31076);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31093,G__31077);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31094,G__31078);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31095,G__31079);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31096,G__31080);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31097,G__31081);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31098,G__31082);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31099,G__31083);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31100,G__31084);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31101,G__31085);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__31102,G__31086);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__31103,G__31087);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__31104,G__31088);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__32030 = cljs.core._nth(recur_val,(0));
var G__32031 = cljs.core._nth(recur_val,(1));
var G__32032 = cljs.core._nth(recur_val,(2));
var G__32033 = cljs.core._nth(recur_val,(3));
var G__32034 = cljs.core._nth(recur_val,(4));
var G__32035 = cljs.core._nth(recur_val,(5));
var G__32036 = cljs.core._nth(recur_val,(6));
var G__32037 = cljs.core._nth(recur_val,(7));
var G__32038 = cljs.core._nth(recur_val,(8));
var G__32039 = cljs.core._nth(recur_val,(9));
var G__32040 = cljs.core._nth(recur_val,(10));
var G__32041 = cljs.core._nth(recur_val,(11));
var G__32042 = cljs.core._nth(recur_val,(12));
var G__32043 = cljs.core._nth(recur_val,(13));
var G__32044 = cljs.core._nth(recur_val,(14));
var G__32045 = cljs.core._nth(recur_val,(15));
G__31073 = G__32030;
G__31074 = G__32031;
G__31075 = G__32032;
G__31076 = G__32033;
G__31077 = G__32034;
G__31078 = G__32035;
G__31079 = G__32036;
G__31080 = G__32037;
G__31081 = G__32038;
G__31082 = G__32039;
G__31083 = G__32040;
G__31084 = G__32041;
G__31085 = G__32042;
G__31086 = G__32043;
G__31087 = G__32044;
G__31088 = G__32045;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__31128 = cljs.core._nth(params,(0));
var G__31129 = cljs.core._nth(params,(1));
var G__31130 = cljs.core._nth(params,(2));
var G__31131 = cljs.core._nth(params,(3));
var G__31132 = cljs.core._nth(params,(4));
var G__31133 = cljs.core._nth(params,(5));
var G__31134 = cljs.core._nth(params,(6));
var G__31135 = cljs.core._nth(params,(7));
var G__31136 = cljs.core._nth(params,(8));
var G__31137 = cljs.core._nth(params,(9));
var G__31138 = cljs.core._nth(params,(10));
var G__31139 = cljs.core._nth(params,(11));
var G__31140 = cljs.core._nth(params,(12));
var G__31141 = cljs.core._nth(params,(13));
var G__31142 = cljs.core._nth(params,(14));
var G__31143 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__31112,G__31113,G__31114,G__31115,G__31116,G__31117,G__31118,G__31119,G__31120,G__31121,G__31122,G__31123,G__31124,G__31125,G__31126,G__31127){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31128,G__31112);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31129,G__31113);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31130,G__31114);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31131,G__31115);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31132,G__31116);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31133,G__31117);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31134,G__31118);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31135,G__31119);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31136,G__31120);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31137,G__31121);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31138,G__31122);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31139,G__31123);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31140,G__31124);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__31141,G__31125);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__31142,G__31126);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__31143,G__31127);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__32051 = cljs.core._nth(recur_val,(0));
var G__32052 = cljs.core._nth(recur_val,(1));
var G__32053 = cljs.core._nth(recur_val,(2));
var G__32054 = cljs.core._nth(recur_val,(3));
var G__32055 = cljs.core._nth(recur_val,(4));
var G__32056 = cljs.core._nth(recur_val,(5));
var G__32057 = cljs.core._nth(recur_val,(6));
var G__32058 = cljs.core._nth(recur_val,(7));
var G__32059 = cljs.core._nth(recur_val,(8));
var G__32060 = cljs.core._nth(recur_val,(9));
var G__32061 = cljs.core._nth(recur_val,(10));
var G__32062 = cljs.core._nth(recur_val,(11));
var G__32063 = cljs.core._nth(recur_val,(12));
var G__32064 = cljs.core._nth(recur_val,(13));
var G__32065 = cljs.core._nth(recur_val,(14));
var G__32066 = cljs.core._nth(recur_val,(15));
G__31112 = G__32051;
G__31113 = G__32052;
G__31114 = G__32053;
G__31115 = G__32054;
G__31116 = G__32055;
G__31117 = G__32056;
G__31118 = G__32057;
G__31119 = G__32058;
G__31120 = G__32059;
G__31121 = G__32060;
G__31122 = G__32061;
G__31123 = G__32062;
G__31124 = G__32063;
G__31125 = G__32064;
G__31126 = G__32065;
G__31127 = G__32066;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31171 = cljs.core._nth(params,(0));
var G__31172 = cljs.core._nth(params,(1));
var G__31173 = cljs.core._nth(params,(2));
var G__31174 = cljs.core._nth(params,(3));
var G__31175 = cljs.core._nth(params,(4));
var G__31176 = cljs.core._nth(params,(5));
var G__31177 = cljs.core._nth(params,(6));
var G__31178 = cljs.core._nth(params,(7));
var G__31179 = cljs.core._nth(params,(8));
var G__31180 = cljs.core._nth(params,(9));
var G__31181 = cljs.core._nth(params,(10));
var G__31182 = cljs.core._nth(params,(11));
var G__31183 = cljs.core._nth(params,(12));
var G__31184 = cljs.core._nth(params,(13));
var G__31185 = cljs.core._nth(params,(14));
var G__31186 = cljs.core._nth(params,(15));
var G__31187 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__31154,G__31155,G__31156,G__31157,G__31158,G__31159,G__31160,G__31161,G__31162,G__31163,G__31164,G__31165,G__31166,G__31167,G__31168,G__31169,G__31170){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31171,G__31154);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31172,G__31155);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31173,G__31156);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31174,G__31157);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31175,G__31158);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31176,G__31159);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31177,G__31160);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31178,G__31161);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31179,G__31162);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31180,G__31163);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31181,G__31164);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31182,G__31165);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31183,G__31166);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__31184,G__31167);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__31185,G__31168);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__31186,G__31169);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__31187,G__31170);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__32077 = cljs.core._nth(recur_val,(0));
var G__32078 = cljs.core._nth(recur_val,(1));
var G__32079 = cljs.core._nth(recur_val,(2));
var G__32080 = cljs.core._nth(recur_val,(3));
var G__32081 = cljs.core._nth(recur_val,(4));
var G__32082 = cljs.core._nth(recur_val,(5));
var G__32083 = cljs.core._nth(recur_val,(6));
var G__32084 = cljs.core._nth(recur_val,(7));
var G__32085 = cljs.core._nth(recur_val,(8));
var G__32086 = cljs.core._nth(recur_val,(9));
var G__32087 = cljs.core._nth(recur_val,(10));
var G__32088 = cljs.core._nth(recur_val,(11));
var G__32089 = cljs.core._nth(recur_val,(12));
var G__32090 = cljs.core._nth(recur_val,(13));
var G__32091 = cljs.core._nth(recur_val,(14));
var G__32092 = cljs.core._nth(recur_val,(15));
var G__32093 = cljs.core._nth(recur_val,(16));
G__31154 = G__32077;
G__31155 = G__32078;
G__31156 = G__32079;
G__31157 = G__32080;
G__31158 = G__32081;
G__31159 = G__32082;
G__31160 = G__32083;
G__31161 = G__32084;
G__31162 = G__32085;
G__31163 = G__32086;
G__31164 = G__32087;
G__31165 = G__32088;
G__31166 = G__32089;
G__31167 = G__32090;
G__31168 = G__32091;
G__31169 = G__32092;
G__31170 = G__32093;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__31225 = cljs.core._nth(params,(0));
var G__31226 = cljs.core._nth(params,(1));
var G__31227 = cljs.core._nth(params,(2));
var G__31228 = cljs.core._nth(params,(3));
var G__31229 = cljs.core._nth(params,(4));
var G__31230 = cljs.core._nth(params,(5));
var G__31231 = cljs.core._nth(params,(6));
var G__31232 = cljs.core._nth(params,(7));
var G__31233 = cljs.core._nth(params,(8));
var G__31234 = cljs.core._nth(params,(9));
var G__31235 = cljs.core._nth(params,(10));
var G__31236 = cljs.core._nth(params,(11));
var G__31237 = cljs.core._nth(params,(12));
var G__31238 = cljs.core._nth(params,(13));
var G__31239 = cljs.core._nth(params,(14));
var G__31240 = cljs.core._nth(params,(15));
var G__31241 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__31208,G__31209,G__31210,G__31211,G__31212,G__31213,G__31214,G__31215,G__31216,G__31217,G__31218,G__31219,G__31220,G__31221,G__31222,G__31223,G__31224){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31225,G__31208);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31226,G__31209);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31227,G__31210);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31228,G__31211);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31229,G__31212);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31230,G__31213);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31231,G__31214);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31232,G__31215);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31233,G__31216);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31234,G__31217);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31235,G__31218);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31236,G__31219);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31237,G__31220);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__31238,G__31221);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__31239,G__31222);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__31240,G__31223);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__31241,G__31224);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__32099 = cljs.core._nth(recur_val,(0));
var G__32100 = cljs.core._nth(recur_val,(1));
var G__32101 = cljs.core._nth(recur_val,(2));
var G__32102 = cljs.core._nth(recur_val,(3));
var G__32103 = cljs.core._nth(recur_val,(4));
var G__32104 = cljs.core._nth(recur_val,(5));
var G__32105 = cljs.core._nth(recur_val,(6));
var G__32106 = cljs.core._nth(recur_val,(7));
var G__32107 = cljs.core._nth(recur_val,(8));
var G__32108 = cljs.core._nth(recur_val,(9));
var G__32109 = cljs.core._nth(recur_val,(10));
var G__32110 = cljs.core._nth(recur_val,(11));
var G__32111 = cljs.core._nth(recur_val,(12));
var G__32112 = cljs.core._nth(recur_val,(13));
var G__32113 = cljs.core._nth(recur_val,(14));
var G__32114 = cljs.core._nth(recur_val,(15));
var G__32115 = cljs.core._nth(recur_val,(16));
G__31208 = G__32099;
G__31209 = G__32100;
G__31210 = G__32101;
G__31211 = G__32102;
G__31212 = G__32103;
G__31213 = G__32104;
G__31214 = G__32105;
G__31215 = G__32106;
G__31216 = G__32107;
G__31217 = G__32108;
G__31218 = G__32109;
G__31219 = G__32110;
G__31220 = G__32111;
G__31221 = G__32112;
G__31222 = G__32113;
G__31223 = G__32114;
G__31224 = G__32115;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31267 = cljs.core._nth(params,(0));
var G__31268 = cljs.core._nth(params,(1));
var G__31269 = cljs.core._nth(params,(2));
var G__31270 = cljs.core._nth(params,(3));
var G__31271 = cljs.core._nth(params,(4));
var G__31272 = cljs.core._nth(params,(5));
var G__31273 = cljs.core._nth(params,(6));
var G__31274 = cljs.core._nth(params,(7));
var G__31275 = cljs.core._nth(params,(8));
var G__31276 = cljs.core._nth(params,(9));
var G__31277 = cljs.core._nth(params,(10));
var G__31278 = cljs.core._nth(params,(11));
var G__31279 = cljs.core._nth(params,(12));
var G__31280 = cljs.core._nth(params,(13));
var G__31281 = cljs.core._nth(params,(14));
var G__31282 = cljs.core._nth(params,(15));
var G__31283 = cljs.core._nth(params,(16));
var G__31284 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__31249,G__31250,G__31251,G__31252,G__31253,G__31254,G__31255,G__31256,G__31257,G__31258,G__31259,G__31260,G__31261,G__31262,G__31263,G__31264,G__31265,G__31266){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31267,G__31249);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31268,G__31250);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31269,G__31251);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31270,G__31252);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31271,G__31253);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31272,G__31254);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31273,G__31255);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31274,G__31256);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31275,G__31257);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31276,G__31258);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31277,G__31259);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31278,G__31260);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31279,G__31261);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__31280,G__31262);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__31281,G__31263);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__31282,G__31264);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__31283,G__31265);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__31284,G__31266);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__32129 = cljs.core._nth(recur_val,(0));
var G__32130 = cljs.core._nth(recur_val,(1));
var G__32131 = cljs.core._nth(recur_val,(2));
var G__32132 = cljs.core._nth(recur_val,(3));
var G__32133 = cljs.core._nth(recur_val,(4));
var G__32134 = cljs.core._nth(recur_val,(5));
var G__32135 = cljs.core._nth(recur_val,(6));
var G__32136 = cljs.core._nth(recur_val,(7));
var G__32137 = cljs.core._nth(recur_val,(8));
var G__32138 = cljs.core._nth(recur_val,(9));
var G__32139 = cljs.core._nth(recur_val,(10));
var G__32140 = cljs.core._nth(recur_val,(11));
var G__32141 = cljs.core._nth(recur_val,(12));
var G__32142 = cljs.core._nth(recur_val,(13));
var G__32143 = cljs.core._nth(recur_val,(14));
var G__32144 = cljs.core._nth(recur_val,(15));
var G__32145 = cljs.core._nth(recur_val,(16));
var G__32146 = cljs.core._nth(recur_val,(17));
G__31249 = G__32129;
G__31250 = G__32130;
G__31251 = G__32131;
G__31252 = G__32132;
G__31253 = G__32133;
G__31254 = G__32134;
G__31255 = G__32135;
G__31256 = G__32136;
G__31257 = G__32137;
G__31258 = G__32138;
G__31259 = G__32139;
G__31260 = G__32140;
G__31261 = G__32141;
G__31262 = G__32142;
G__31263 = G__32143;
G__31264 = G__32144;
G__31265 = G__32145;
G__31266 = G__32146;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__31309 = cljs.core._nth(params,(0));
var G__31310 = cljs.core._nth(params,(1));
var G__31311 = cljs.core._nth(params,(2));
var G__31312 = cljs.core._nth(params,(3));
var G__31313 = cljs.core._nth(params,(4));
var G__31314 = cljs.core._nth(params,(5));
var G__31315 = cljs.core._nth(params,(6));
var G__31316 = cljs.core._nth(params,(7));
var G__31317 = cljs.core._nth(params,(8));
var G__31318 = cljs.core._nth(params,(9));
var G__31319 = cljs.core._nth(params,(10));
var G__31320 = cljs.core._nth(params,(11));
var G__31321 = cljs.core._nth(params,(12));
var G__31322 = cljs.core._nth(params,(13));
var G__31323 = cljs.core._nth(params,(14));
var G__31324 = cljs.core._nth(params,(15));
var G__31325 = cljs.core._nth(params,(16));
var G__31326 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__31288,G__31289,G__31290,G__31291,G__31292,G__31293,G__31297,G__31298,G__31299,G__31300,G__31301,G__31302,G__31303,G__31304,G__31305,G__31306,G__31307,G__31308){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31309,G__31288);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31310,G__31289);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31311,G__31290);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31312,G__31291);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31313,G__31292);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31314,G__31293);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31315,G__31297);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31316,G__31298);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31317,G__31299);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31318,G__31300);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31319,G__31301);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31320,G__31302);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31321,G__31303);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__31322,G__31304);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__31323,G__31305);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__31324,G__31306);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__31325,G__31307);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__31326,G__31308);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__32151 = cljs.core._nth(recur_val,(0));
var G__32152 = cljs.core._nth(recur_val,(1));
var G__32153 = cljs.core._nth(recur_val,(2));
var G__32154 = cljs.core._nth(recur_val,(3));
var G__32155 = cljs.core._nth(recur_val,(4));
var G__32156 = cljs.core._nth(recur_val,(5));
var G__32157 = cljs.core._nth(recur_val,(6));
var G__32158 = cljs.core._nth(recur_val,(7));
var G__32159 = cljs.core._nth(recur_val,(8));
var G__32160 = cljs.core._nth(recur_val,(9));
var G__32161 = cljs.core._nth(recur_val,(10));
var G__32162 = cljs.core._nth(recur_val,(11));
var G__32163 = cljs.core._nth(recur_val,(12));
var G__32164 = cljs.core._nth(recur_val,(13));
var G__32165 = cljs.core._nth(recur_val,(14));
var G__32166 = cljs.core._nth(recur_val,(15));
var G__32167 = cljs.core._nth(recur_val,(16));
var G__32168 = cljs.core._nth(recur_val,(17));
G__31288 = G__32151;
G__31289 = G__32152;
G__31290 = G__32153;
G__31291 = G__32154;
G__31292 = G__32155;
G__31293 = G__32156;
G__31297 = G__32157;
G__31298 = G__32158;
G__31299 = G__32159;
G__31300 = G__32160;
G__31301 = G__32161;
G__31302 = G__32162;
G__31303 = G__32163;
G__31304 = G__32164;
G__31305 = G__32165;
G__31306 = G__32166;
G__31307 = G__32167;
G__31308 = G__32168;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31356 = cljs.core._nth(params,(0));
var G__31357 = cljs.core._nth(params,(1));
var G__31358 = cljs.core._nth(params,(2));
var G__31359 = cljs.core._nth(params,(3));
var G__31360 = cljs.core._nth(params,(4));
var G__31361 = cljs.core._nth(params,(5));
var G__31362 = cljs.core._nth(params,(6));
var G__31363 = cljs.core._nth(params,(7));
var G__31364 = cljs.core._nth(params,(8));
var G__31365 = cljs.core._nth(params,(9));
var G__31366 = cljs.core._nth(params,(10));
var G__31367 = cljs.core._nth(params,(11));
var G__31368 = cljs.core._nth(params,(12));
var G__31369 = cljs.core._nth(params,(13));
var G__31370 = cljs.core._nth(params,(14));
var G__31371 = cljs.core._nth(params,(15));
var G__31372 = cljs.core._nth(params,(16));
var G__31373 = cljs.core._nth(params,(17));
var G__31374 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__31337,G__31338,G__31339,G__31340,G__31341,G__31342,G__31343,G__31344,G__31345,G__31346,G__31347,G__31348,G__31349,G__31350,G__31351,G__31352,G__31353,G__31354,G__31355){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31356,G__31337);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31357,G__31338);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31358,G__31339);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31359,G__31340);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31360,G__31341);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31361,G__31342);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31362,G__31343);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31363,G__31344);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31364,G__31345);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31365,G__31346);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31366,G__31347);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31367,G__31348);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31368,G__31349);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__31369,G__31350);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__31370,G__31351);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__31371,G__31352);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__31372,G__31353);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__31373,G__31354);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__31374,G__31355);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__32174 = cljs.core._nth(recur_val,(0));
var G__32175 = cljs.core._nth(recur_val,(1));
var G__32176 = cljs.core._nth(recur_val,(2));
var G__32177 = cljs.core._nth(recur_val,(3));
var G__32178 = cljs.core._nth(recur_val,(4));
var G__32179 = cljs.core._nth(recur_val,(5));
var G__32180 = cljs.core._nth(recur_val,(6));
var G__32181 = cljs.core._nth(recur_val,(7));
var G__32182 = cljs.core._nth(recur_val,(8));
var G__32183 = cljs.core._nth(recur_val,(9));
var G__32184 = cljs.core._nth(recur_val,(10));
var G__32185 = cljs.core._nth(recur_val,(11));
var G__32186 = cljs.core._nth(recur_val,(12));
var G__32187 = cljs.core._nth(recur_val,(13));
var G__32188 = cljs.core._nth(recur_val,(14));
var G__32189 = cljs.core._nth(recur_val,(15));
var G__32190 = cljs.core._nth(recur_val,(16));
var G__32191 = cljs.core._nth(recur_val,(17));
var G__32192 = cljs.core._nth(recur_val,(18));
G__31337 = G__32174;
G__31338 = G__32175;
G__31339 = G__32176;
G__31340 = G__32177;
G__31341 = G__32178;
G__31342 = G__32179;
G__31343 = G__32180;
G__31344 = G__32181;
G__31345 = G__32182;
G__31346 = G__32183;
G__31347 = G__32184;
G__31348 = G__32185;
G__31349 = G__32186;
G__31350 = G__32187;
G__31351 = G__32188;
G__31352 = G__32189;
G__31353 = G__32190;
G__31354 = G__32191;
G__31355 = G__32192;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__31400 = cljs.core._nth(params,(0));
var G__31401 = cljs.core._nth(params,(1));
var G__31402 = cljs.core._nth(params,(2));
var G__31403 = cljs.core._nth(params,(3));
var G__31404 = cljs.core._nth(params,(4));
var G__31405 = cljs.core._nth(params,(5));
var G__31406 = cljs.core._nth(params,(6));
var G__31407 = cljs.core._nth(params,(7));
var G__31408 = cljs.core._nth(params,(8));
var G__31409 = cljs.core._nth(params,(9));
var G__31410 = cljs.core._nth(params,(10));
var G__31411 = cljs.core._nth(params,(11));
var G__31412 = cljs.core._nth(params,(12));
var G__31413 = cljs.core._nth(params,(13));
var G__31414 = cljs.core._nth(params,(14));
var G__31415 = cljs.core._nth(params,(15));
var G__31416 = cljs.core._nth(params,(16));
var G__31417 = cljs.core._nth(params,(17));
var G__31418 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__31381,G__31382,G__31383,G__31384,G__31385,G__31386,G__31387,G__31388,G__31389,G__31390,G__31391,G__31392,G__31393,G__31394,G__31395,G__31396,G__31397,G__31398,G__31399){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31400,G__31381);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31401,G__31382);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31402,G__31383);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31403,G__31384);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31404,G__31385);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31405,G__31386);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31406,G__31387);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31407,G__31388);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31408,G__31389);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31409,G__31390);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31410,G__31391);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31411,G__31392);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31412,G__31393);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__31413,G__31394);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__31414,G__31395);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__31415,G__31396);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__31416,G__31397);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__31417,G__31398);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__31418,G__31399);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__32208 = cljs.core._nth(recur_val,(0));
var G__32209 = cljs.core._nth(recur_val,(1));
var G__32210 = cljs.core._nth(recur_val,(2));
var G__32211 = cljs.core._nth(recur_val,(3));
var G__32212 = cljs.core._nth(recur_val,(4));
var G__32213 = cljs.core._nth(recur_val,(5));
var G__32214 = cljs.core._nth(recur_val,(6));
var G__32215 = cljs.core._nth(recur_val,(7));
var G__32216 = cljs.core._nth(recur_val,(8));
var G__32217 = cljs.core._nth(recur_val,(9));
var G__32218 = cljs.core._nth(recur_val,(10));
var G__32219 = cljs.core._nth(recur_val,(11));
var G__32220 = cljs.core._nth(recur_val,(12));
var G__32221 = cljs.core._nth(recur_val,(13));
var G__32222 = cljs.core._nth(recur_val,(14));
var G__32223 = cljs.core._nth(recur_val,(15));
var G__32224 = cljs.core._nth(recur_val,(16));
var G__32225 = cljs.core._nth(recur_val,(17));
var G__32226 = cljs.core._nth(recur_val,(18));
G__31381 = G__32208;
G__31382 = G__32209;
G__31383 = G__32210;
G__31384 = G__32211;
G__31385 = G__32212;
G__31386 = G__32213;
G__31387 = G__32214;
G__31388 = G__32215;
G__31389 = G__32216;
G__31390 = G__32217;
G__31391 = G__32218;
G__31392 = G__32219;
G__31393 = G__32220;
G__31394 = G__32221;
G__31395 = G__32222;
G__31396 = G__32223;
G__31397 = G__32224;
G__31398 = G__32225;
G__31399 = G__32226;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
case (20):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31450 = cljs.core._nth(params,(0));
var G__31451 = cljs.core._nth(params,(1));
var G__31452 = cljs.core._nth(params,(2));
var G__31453 = cljs.core._nth(params,(3));
var G__31454 = cljs.core._nth(params,(4));
var G__31455 = cljs.core._nth(params,(5));
var G__31456 = cljs.core._nth(params,(6));
var G__31457 = cljs.core._nth(params,(7));
var G__31458 = cljs.core._nth(params,(8));
var G__31459 = cljs.core._nth(params,(9));
var G__31460 = cljs.core._nth(params,(10));
var G__31461 = cljs.core._nth(params,(11));
var G__31462 = cljs.core._nth(params,(12));
var G__31463 = cljs.core._nth(params,(13));
var G__31464 = cljs.core._nth(params,(14));
var G__31465 = cljs.core._nth(params,(15));
var G__31466 = cljs.core._nth(params,(16));
var G__31467 = cljs.core._nth(params,(17));
var G__31468 = cljs.core._nth(params,(18));
var G__31469 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__31430,G__31431,G__31432,G__31433,G__31434,G__31435,G__31436,G__31437,G__31438,G__31439,G__31440,G__31441,G__31442,G__31443,G__31444,G__31445,G__31446,G__31447,G__31448,G__31449){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31450,G__31430);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31451,G__31431);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31452,G__31432);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31453,G__31433);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31454,G__31434);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31455,G__31435);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31456,G__31436);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31457,G__31437);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31458,G__31438);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31459,G__31439);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31460,G__31440);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31461,G__31441);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31462,G__31442);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__31463,G__31443);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__31464,G__31444);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__31465,G__31445);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__31466,G__31446);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__31467,G__31447);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__31468,G__31448);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__31469,G__31449);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__32234 = cljs.core._nth(recur_val,(0));
var G__32235 = cljs.core._nth(recur_val,(1));
var G__32236 = cljs.core._nth(recur_val,(2));
var G__32237 = cljs.core._nth(recur_val,(3));
var G__32238 = cljs.core._nth(recur_val,(4));
var G__32239 = cljs.core._nth(recur_val,(5));
var G__32240 = cljs.core._nth(recur_val,(6));
var G__32241 = cljs.core._nth(recur_val,(7));
var G__32242 = cljs.core._nth(recur_val,(8));
var G__32243 = cljs.core._nth(recur_val,(9));
var G__32244 = cljs.core._nth(recur_val,(10));
var G__32245 = cljs.core._nth(recur_val,(11));
var G__32246 = cljs.core._nth(recur_val,(12));
var G__32247 = cljs.core._nth(recur_val,(13));
var G__32248 = cljs.core._nth(recur_val,(14));
var G__32249 = cljs.core._nth(recur_val,(15));
var G__32250 = cljs.core._nth(recur_val,(16));
var G__32251 = cljs.core._nth(recur_val,(17));
var G__32252 = cljs.core._nth(recur_val,(18));
var G__32253 = cljs.core._nth(recur_val,(19));
G__31430 = G__32234;
G__31431 = G__32235;
G__31432 = G__32236;
G__31433 = G__32237;
G__31434 = G__32238;
G__31435 = G__32239;
G__31436 = G__32240;
G__31437 = G__32241;
G__31438 = G__32242;
G__31439 = G__32243;
G__31440 = G__32244;
G__31441 = G__32245;
G__31442 = G__32246;
G__31443 = G__32247;
G__31444 = G__32248;
G__31445 = G__32249;
G__31446 = G__32250;
G__31447 = G__32251;
G__31448 = G__32252;
G__31449 = G__32253;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
} else {
var G__31501 = cljs.core._nth(params,(0));
var G__31502 = cljs.core._nth(params,(1));
var G__31503 = cljs.core._nth(params,(2));
var G__31504 = cljs.core._nth(params,(3));
var G__31505 = cljs.core._nth(params,(4));
var G__31506 = cljs.core._nth(params,(5));
var G__31507 = cljs.core._nth(params,(6));
var G__31508 = cljs.core._nth(params,(7));
var G__31509 = cljs.core._nth(params,(8));
var G__31510 = cljs.core._nth(params,(9));
var G__31511 = cljs.core._nth(params,(10));
var G__31512 = cljs.core._nth(params,(11));
var G__31513 = cljs.core._nth(params,(12));
var G__31514 = cljs.core._nth(params,(13));
var G__31515 = cljs.core._nth(params,(14));
var G__31516 = cljs.core._nth(params,(15));
var G__31517 = cljs.core._nth(params,(16));
var G__31518 = cljs.core._nth(params,(17));
var G__31519 = cljs.core._nth(params,(18));
var G__31520 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__31481,G__31482,G__31483,G__31484,G__31485,G__31486,G__31487,G__31488,G__31489,G__31490,G__31491,G__31492,G__31493,G__31494,G__31495,G__31496,G__31497,G__31498,G__31499,G__31500){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31501,G__31481);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31502,G__31482);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31503,G__31483);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31504,G__31484);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31505,G__31485);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31506,G__31486);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31507,G__31487);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31508,G__31488);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31509,G__31489);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31510,G__31490);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31511,G__31491);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31512,G__31492);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31513,G__31493);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__31514,G__31494);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__31515,G__31495);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__31516,G__31496);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__31517,G__31497);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__31518,G__31498);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__31519,G__31499);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__31520,G__31500);
var ret__29849__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___29850__auto__ = (ret__29849__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___29850__auto__){
var recur_val = sci.impl.types.getVal(ret__29849__auto__);
var G__32265 = cljs.core._nth(recur_val,(0));
var G__32266 = cljs.core._nth(recur_val,(1));
var G__32267 = cljs.core._nth(recur_val,(2));
var G__32268 = cljs.core._nth(recur_val,(3));
var G__32269 = cljs.core._nth(recur_val,(4));
var G__32270 = cljs.core._nth(recur_val,(5));
var G__32271 = cljs.core._nth(recur_val,(6));
var G__32272 = cljs.core._nth(recur_val,(7));
var G__32273 = cljs.core._nth(recur_val,(8));
var G__32274 = cljs.core._nth(recur_val,(9));
var G__32275 = cljs.core._nth(recur_val,(10));
var G__32276 = cljs.core._nth(recur_val,(11));
var G__32277 = cljs.core._nth(recur_val,(12));
var G__32278 = cljs.core._nth(recur_val,(13));
var G__32279 = cljs.core._nth(recur_val,(14));
var G__32280 = cljs.core._nth(recur_val,(15));
var G__32281 = cljs.core._nth(recur_val,(16));
var G__32282 = cljs.core._nth(recur_val,(17));
var G__32283 = cljs.core._nth(recur_val,(18));
var G__32284 = cljs.core._nth(recur_val,(19));
G__31481 = G__32265;
G__31482 = G__32266;
G__31483 = G__32267;
G__31484 = G__32268;
G__31485 = G__32269;
G__31486 = G__32270;
G__31487 = G__32271;
G__31488 = G__32272;
G__31489 = G__32273;
G__31490 = G__32274;
G__31491 = G__32275;
G__31492 = G__32276;
G__31493 = G__32277;
G__31494 = G__32278;
G__31495 = G__32279;
G__31496 = G__32280;
G__31497 = G__32281;
G__31498 = G__32282;
G__31499 = G__32283;
G__31500 = G__32284;
continue;
} else {
return ret__29849__auto__;
}
break;
}
});
}

break;
default:
return (function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__32293 = cljs.core.next(args_STAR_);
var G__32294 = cljs.core.next(params__$1);
var G__32295 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__32293;
params__$1 = G__32294;
ret = G__32295;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__31535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31535,(0),null);
var vec__31538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31535,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31538,(0),null);
var G__32302 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__32302;
continue;
} else {
var G__32303 = recur_val;
args = G__32303;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32304__i = 0, G__32304__a = new Array(arguments.length -  0);
while (G__32304__i < G__32304__a.length) {G__32304__a[G__32304__i] = arguments[G__32304__i + 0]; ++G__32304__i;}
  args = new cljs.core.IndexedSeq(G__32304__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__32305){
var args = cljs.core.seq(arglist__32305);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
;

}
})():(function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__32306 = cljs.core.next(args_STAR_);
var G__32307 = cljs.core.next(params__$1);
var G__32308 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__32306;
params__$1 = G__32307;
ret = G__32308;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__31546 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31546,(0),null);
var vec__31549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31546,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31549,(0),null);
var G__32310 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__32310;
continue;
} else {
var G__32311 = recur_val;
args = G__32311;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32312__i = 0, G__32312__a = new Array(arguments.length -  0);
while (G__32312__i < G__32312__a.length) {G__32312__a[G__32312__i] = arguments[G__32312__i + 0]; ++G__32312__i;}
  args = new cljs.core.IndexedSeq(G__32312__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__32313){
var args = cljs.core.seq(arglist__32313);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
);
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref){
var self_ref__$1 = (cljs.core.truth_(self_ref)?cljs.core.volatile_BANG_(null):null);
var bindings__$1 = (cljs.core.truth_(self_ref__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,fn_name,self_ref__$1):bindings);
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,bindings__$1,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,bindings__$1,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__32319__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5802__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__32319 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32320__i = 0, G__32320__a = new Array(arguments.length -  0);
while (G__32320__i < G__32320__a.length) {G__32320__a[G__32320__i] = arguments[G__32320__i + 0]; ++G__32320__i;}
  args = new cljs.core.IndexedSeq(G__32320__a,0,null);
} 
return G__32319__delegate.call(this,args);};
G__32319.cljs$lang$maxFixedArity = 0;
G__32319.cljs$lang$applyTo = (function (arglist__32321){
var args = cljs.core.seq(arglist__32321);
return G__32319__delegate(args);
});
G__32319.cljs$core$IFn$_invoke$arity$variadic = G__32319__delegate;
return G__32319;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__31562_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31562_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f);
if(cljs.core.truth_(self_ref__$1)){
cljs.core.vreset_BANG_(self_ref__$1,f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
