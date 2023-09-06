goog.provide('n_tac_toe.game');

/**
 * The meta tic-tac-toe game. There are two types of boards:
 * A regular nxn tic-tac-toe board (vec of vec of chars)
 * A nxn board of regular tic-tac-toe boards (where each space is a Board)
 * A nxn board is won by winning each game for a space for either X or O, e.g.
 * X wins all spaces in a row, or diagonally, etc.
 * @interface
 */
n_tac_toe.game.TicTacToe = function(){};

var n_tac_toe$game$TicTacToe$move$dyn_37269 = (function (this$,c,y,x){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (n_tac_toe.game.move[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(this$,c,y,x) : m__5394__auto__.call(null,this$,c,y,x));
} else {
var m__5392__auto__ = (n_tac_toe.game.move["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(this$,c,y,x) : m__5392__auto__.call(null,this$,c,y,x));
} else {
throw cljs.core.missing_protocol("TicTacToe.move",this$);
}
}
});
n_tac_toe.game.move = (function n_tac_toe$game$move(this$,c,y,x){
if((((!((this$ == null)))) && ((!((this$.n_tac_toe$game$TicTacToe$move$arity$4 == null)))))){
return this$.n_tac_toe$game$TicTacToe$move$arity$4(this$,c,y,x);
} else {
return n_tac_toe$game$TicTacToe$move$dyn_37269(this$,c,y,x);
}
});

var n_tac_toe$game$TicTacToe$suggest_move$dyn_37270 = (function (this$,c){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (n_tac_toe.game.suggest_move[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5394__auto__.call(null,this$,c));
} else {
var m__5392__auto__ = (n_tac_toe.game.suggest_move["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5392__auto__.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("TicTacToe.suggest-move",this$);
}
}
});
n_tac_toe.game.suggest_move = (function n_tac_toe$game$suggest_move(this$,c){
if((((!((this$ == null)))) && ((!((this$.n_tac_toe$game$TicTacToe$suggest_move$arity$2 == null)))))){
return this$.n_tac_toe$game$TicTacToe$suggest_move$arity$2(this$,c);
} else {
return n_tac_toe$game$TicTacToe$suggest_move$dyn_37270(this$,c);
}
});

var n_tac_toe$game$TicTacToe$score$dyn_37271 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (n_tac_toe.game.score[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (n_tac_toe.game.score["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("TicTacToe.score",this$);
}
}
});
n_tac_toe.game.score = (function n_tac_toe$game$score(this$){
if((((!((this$ == null)))) && ((!((this$.n_tac_toe$game$TicTacToe$score$arity$1 == null)))))){
return this$.n_tac_toe$game$TicTacToe$score$arity$1(this$);
} else {
return n_tac_toe$game$TicTacToe$score$dyn_37271(this$);
}
});

var n_tac_toe$game$TicTacToe$win_QMARK_$dyn_37272 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (n_tac_toe.game.win_QMARK_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (n_tac_toe.game.win_QMARK_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("TicTacToe.win?",this$);
}
}
});
n_tac_toe.game.win_QMARK_ = (function n_tac_toe$game$win_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.n_tac_toe$game$TicTacToe$win_QMARK_$arity$1 == null)))))){
return this$.n_tac_toe$game$TicTacToe$win_QMARK_$arity$1(this$);
} else {
return n_tac_toe$game$TicTacToe$win_QMARK_$dyn_37272(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
n_tac_toe.game.Board = (function (rows,__meta,__extmap,__hash){
this.rows = rows;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(n_tac_toe.game.Board.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(n_tac_toe.game.Board.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37164,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37168 = k37164;
var G__37168__$1 = (((G__37168 instanceof cljs.core.Keyword))?G__37168.fqn:null);
switch (G__37168__$1) {
case "rows":
return self__.rows;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37164,else__5346__auto__);

}
}));

(n_tac_toe.game.Board.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37169){
var vec__37170 = p__37169;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37170,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37170,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(n_tac_toe.game.Board.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#n-tac-toe.game.Board{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rows","rows",850049680),self__.rows],null))], null),self__.__extmap));
}));

(n_tac_toe.game.Board.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37163){
var self__ = this;
var G__37163__$1 = this;
return (new cljs.core.RecordIter((0),G__37163__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(n_tac_toe.game.Board.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(n_tac_toe.game.Board.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new n_tac_toe.game.Board(self__.rows,self__.__meta,self__.__extmap,self__.__hash));
}));

(n_tac_toe.game.Board.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(n_tac_toe.game.Board.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1382369184 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(n_tac_toe.game.Board.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37165,other37166){
var self__ = this;
var this37165__$1 = this;
return (((!((other37166 == null)))) && ((((this37165__$1.constructor === other37166.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37165__$1.rows,other37166.rows)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37165__$1.__extmap,other37166.__extmap)))))));
}));

(n_tac_toe.game.Board.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new n_tac_toe.game.Board(self__.rows,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(n_tac_toe.game.Board.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37164){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37173 = k37164;
var G__37173__$1 = (((G__37173 instanceof cljs.core.Keyword))?G__37173.fqn:null);
switch (G__37173__$1) {
case "rows":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37164);

}
}));

(n_tac_toe.game.Board.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37163){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37174 = cljs.core.keyword_identical_QMARK_;
var expr__37175 = k__5352__auto__;
if(cljs.core.truth_((pred__37174.cljs$core$IFn$_invoke$arity$2 ? pred__37174.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rows","rows",850049680),expr__37175) : pred__37174.call(null,new cljs.core.Keyword(null,"rows","rows",850049680),expr__37175)))){
return (new n_tac_toe.game.Board(G__37163,self__.__meta,self__.__extmap,null));
} else {
return (new n_tac_toe.game.Board(self__.rows,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37163),null));
}
}));

(n_tac_toe.game.Board.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rows","rows",850049680),self__.rows,null))], null),self__.__extmap));
}));

(n_tac_toe.game.Board.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37163){
var self__ = this;
var this__5342__auto____$1 = this;
return (new n_tac_toe.game.Board(self__.rows,G__37163,self__.__extmap,self__.__hash));
}));

(n_tac_toe.game.Board.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(n_tac_toe.game.Board.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null)], null);
}));

(n_tac_toe.game.Board.cljs$lang$type = true);

(n_tac_toe.game.Board.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"n-tac-toe.game/Board",null,(1),null));
}));

(n_tac_toe.game.Board.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"n-tac-toe.game/Board");
}));

/**
 * Positional factory function for n-tac-toe.game/Board.
 */
n_tac_toe.game.__GT_Board = (function n_tac_toe$game$__GT_Board(rows){
return (new n_tac_toe.game.Board(rows,null,null,null));
});

/**
 * Factory function for n-tac-toe.game/Board, taking a map of keywords to field values.
 */
n_tac_toe.game.map__GT_Board = (function n_tac_toe$game$map__GT_Board(G__37167){
var extmap__5385__auto__ = (function (){var G__37177 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37167,new cljs.core.Keyword(null,"rows","rows",850049680));
if(cljs.core.record_QMARK_(G__37167)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37177);
} else {
return G__37177;
}
})();
return (new n_tac_toe.game.Board(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(G__37167),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
n_tac_toe.game.MetaBoard = (function (rows,__meta,__extmap,__hash){
this.rows = rows;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(n_tac_toe.game.MetaBoard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(n_tac_toe.game.MetaBoard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37179,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37183 = k37179;
var G__37183__$1 = (((G__37183 instanceof cljs.core.Keyword))?G__37183.fqn:null);
switch (G__37183__$1) {
case "rows":
return self__.rows;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37179,else__5346__auto__);

}
}));

(n_tac_toe.game.MetaBoard.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37184){
var vec__37185 = p__37184;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37185,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37185,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(n_tac_toe.game.MetaBoard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#n-tac-toe.game.MetaBoard{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rows","rows",850049680),self__.rows],null))], null),self__.__extmap));
}));

(n_tac_toe.game.MetaBoard.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37178){
var self__ = this;
var G__37178__$1 = this;
return (new cljs.core.RecordIter((0),G__37178__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(n_tac_toe.game.MetaBoard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(n_tac_toe.game.MetaBoard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new n_tac_toe.game.MetaBoard(self__.rows,self__.__meta,self__.__extmap,self__.__hash));
}));

(n_tac_toe.game.MetaBoard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(n_tac_toe.game.MetaBoard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (338757533 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(n_tac_toe.game.MetaBoard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37180,other37181){
var self__ = this;
var this37180__$1 = this;
return (((!((other37181 == null)))) && ((((this37180__$1.constructor === other37181.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37180__$1.rows,other37181.rows)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37180__$1.__extmap,other37181.__extmap)))))));
}));

(n_tac_toe.game.MetaBoard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new n_tac_toe.game.MetaBoard(self__.rows,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(n_tac_toe.game.MetaBoard.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37179){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37188 = k37179;
var G__37188__$1 = (((G__37188 instanceof cljs.core.Keyword))?G__37188.fqn:null);
switch (G__37188__$1) {
case "rows":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37179);

}
}));

(n_tac_toe.game.MetaBoard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37178){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37189 = cljs.core.keyword_identical_QMARK_;
var expr__37190 = k__5352__auto__;
if(cljs.core.truth_((pred__37189.cljs$core$IFn$_invoke$arity$2 ? pred__37189.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rows","rows",850049680),expr__37190) : pred__37189.call(null,new cljs.core.Keyword(null,"rows","rows",850049680),expr__37190)))){
return (new n_tac_toe.game.MetaBoard(G__37178,self__.__meta,self__.__extmap,null));
} else {
return (new n_tac_toe.game.MetaBoard(self__.rows,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37178),null));
}
}));

(n_tac_toe.game.MetaBoard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rows","rows",850049680),self__.rows,null))], null),self__.__extmap));
}));

(n_tac_toe.game.MetaBoard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37178){
var self__ = this;
var this__5342__auto____$1 = this;
return (new n_tac_toe.game.MetaBoard(self__.rows,G__37178,self__.__extmap,self__.__hash));
}));

(n_tac_toe.game.MetaBoard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(n_tac_toe.game.MetaBoard.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null)], null);
}));

(n_tac_toe.game.MetaBoard.cljs$lang$type = true);

(n_tac_toe.game.MetaBoard.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"n-tac-toe.game/MetaBoard",null,(1),null));
}));

(n_tac_toe.game.MetaBoard.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"n-tac-toe.game/MetaBoard");
}));

/**
 * Positional factory function for n-tac-toe.game/MetaBoard.
 */
n_tac_toe.game.__GT_MetaBoard = (function n_tac_toe$game$__GT_MetaBoard(rows){
return (new n_tac_toe.game.MetaBoard(rows,null,null,null));
});

/**
 * Factory function for n-tac-toe.game/MetaBoard, taking a map of keywords to field values.
 */
n_tac_toe.game.map__GT_MetaBoard = (function n_tac_toe$game$map__GT_MetaBoard(G__37182){
var extmap__5385__auto__ = (function (){var G__37192 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37182,new cljs.core.Keyword(null,"rows","rows",850049680));
if(cljs.core.record_QMARK_(G__37182)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37192);
} else {
return G__37192;
}
})();
return (new n_tac_toe.game.MetaBoard(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(G__37182),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * Makes an empty game
 */
n_tac_toe.game.new_game = (function n_tac_toe$game$new_game(n){
var n2 = Math.pow(n,(2));
return n_tac_toe.game.__GT_MetaBoard(clojure.walk.prewalk((function (p1__37193_SHARP_){
if(cljs.core.sequential_QMARK_(p1__37193_SHARP_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__37193_SHARP_);
} else {
return p1__37193_SHARP_;
}
}),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(n,cljs.core.map.cljs$core$IFn$_invoke$arity$2(n_tac_toe.game.__GT_Board,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n2,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(n,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n2,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)))))))));
});
(n_tac_toe.game.Board.prototype.n_tac_toe$game$TicTacToe$ = cljs.core.PROTOCOL_SENTINEL);

(n_tac_toe.game.Board.prototype.n_tac_toe$game$TicTacToe$move$arity$4 = (function (p__37204,c,y,x){
var map__37205 = p__37204;
var map__37205__$1 = cljs.core.__destructure_map(map__37205);
var board = map__37205__$1;
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37205__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var map__37206 = this;
var map__37206__$1 = cljs.core.__destructure_map(map__37206);
var board__$1 = map__37206__$1;
var rows__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37206__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
if(((function (){var x__5130__auto__ = y;
var y__5131__auto__ = x;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() < cljs.core.count(rows__$1))){
return n_tac_toe.game.__GT_Board(cljs.core.assoc_in(rows__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),c));
} else {
return board__$1;
}
}));

(n_tac_toe.game.Board.prototype.n_tac_toe$game$TicTacToe$suggest_move$arity$2 = (function (p__37207,c){
var map__37208 = p__37207;
var map__37208__$1 = cljs.core.__destructure_map(map__37208);
var board = map__37208__$1;
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37208__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var map__37209 = this;
var map__37209__$1 = cljs.core.__destructure_map(map__37209);
var board__$1 = map__37209__$1;
var rows__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37209__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var n = cljs.core.count(rows__$1);
var scores = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals),cljs.core._GT_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37194_SHARP_){
return cljs.core.select_keys(p1__37194_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
}),n_tac_toe.game.score(board__$1))));
var p_first_nil = (function (p1__37196_SHARP_,p2__37195_SHARP_){
if((p2__37195_SHARP_ == null)){
return p1__37196_SHARP_;
} else {
return null;
}
});
var or__5045__auto__ = (function (){var G__37213 = scores;
var vec__37214 = G__37213;
var seq__37215 = cljs.core.seq(vec__37214);
var first__37216 = cljs.core.first(seq__37215);
var seq__37215__$1 = cljs.core.next(seq__37215);
var s = first__37216;
var rest = seq__37215__$1;
var G__37213__$1 = G__37213;
while(true){
var vec__37235 = G__37213__$1;
var seq__37236 = cljs.core.seq(vec__37235);
var first__37237 = cljs.core.first(seq__37236);
var seq__37236__$1 = cljs.core.next(seq__37236);
var s__$1 = first__37237;
var rest__$1 = seq__37236__$1;
var temp__5802__auto__ = (function (){var ocr_37238 = cljs.core.meta(s__$1);
try{if((((!((ocr_37238 == null))))?(((((ocr_37238.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_37238.cljs$core$ILookup$))))?true:(((!ocr_37238.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_37238):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_37238))){
try{var ocr_37238_dir__37243 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_37238,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_(ocr_37238_dir__37243,new cljs.core.Keyword(null,"fwd-diag","fwd-diag",2117358788))){
var temp__5804__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(p_first_nil,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.get,rows__$1,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n))));
if(cljs.core.truth_(temp__5804__auto__)){
var yx = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yx,yx], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e37247){if((e37247 instanceof Error)){
var e__29622__auto__ = e37247;
if((e__29622__auto__ === cljs.core.match.backtrack)){
try{var ocr_37238_dir__37243 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_37238,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_(ocr_37238_dir__37243,new cljs.core.Keyword(null,"rev-diag","rev-diag",-1984220153))){
var temp__5804__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(p_first_nil,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.get,cljs.core.reverse(rows__$1),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n))));
if(cljs.core.truth_(temp__5804__auto__)){
var yx = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yx,yx], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e37248){if((e37248 instanceof Error)){
var e__29622__auto____$1 = e37248;
if((e__29622__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_37238_dir__37243 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_37238,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_(ocr_37238_dir__37243,new cljs.core.Keyword(null,"col","col",-1959363084))){
try{var ocr_37238_n__37244 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_37238,new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37238_n__37244,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_37238,new cljs.core.Keyword(null,"n","n",562130025));
var temp__5804__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(p_first_nil,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__37213__$1,x,ocr_37238_n__37244,ocr_37238_dir__37243,e__29622__auto____$1,e__29622__auto__,ocr_37238,vec__37235,seq__37236,first__37237,seq__37236__$1,s__$1,rest__$1,G__37213,vec__37214,seq__37215,first__37216,seq__37215__$1,s,rest,n,scores,p_first_nil,map__37209,map__37209__$1,board__$1,rows__$1,map__37208,map__37208__$1,board,rows){
return (function (p1__37197_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__37197_SHARP_,x);
});})(G__37213__$1,x,ocr_37238_n__37244,ocr_37238_dir__37243,e__29622__auto____$1,e__29622__auto__,ocr_37238,vec__37235,seq__37236,first__37237,seq__37236__$1,s__$1,rest__$1,G__37213,vec__37214,seq__37215,first__37216,seq__37215__$1,s,rest,n,scores,p_first_nil,map__37209,map__37209__$1,board__$1,rows__$1,map__37208,map__37208__$1,board,rows))
,rows__$1)));
if(cljs.core.truth_(temp__5804__auto__)){
var y = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e37252){if((e37252 instanceof Error)){
var e__29622__auto____$2 = e37252;
if((e__29622__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29622__auto____$2;
}
} else {
throw e37252;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37249){if((e37249 instanceof Error)){
var e__29622__auto____$2 = e37249;
if((e__29622__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_37238_dir__37243 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_37238,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_(ocr_37238_dir__37243,new cljs.core.Keyword(null,"row","row",-570139521))){
try{var ocr_37238_n__37244 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_37238,new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37238_n__37244,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_37238,new cljs.core.Keyword(null,"n","n",562130025));
var temp__5804__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(p_first_nil,cljs.core.get.cljs$core$IFn$_invoke$arity$2(rows__$1,y)));
if(cljs.core.truth_(temp__5804__auto__)){
var x = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e37251){if((e37251 instanceof Error)){
var e__29622__auto____$3 = e37251;
if((e__29622__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29622__auto____$3;
}
} else {
throw e37251;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37250){if((e37250 instanceof Error)){
var e__29622__auto____$3 = e37250;
if((e__29622__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29622__auto____$3;
}
} else {
throw e37250;

}
}} else {
throw e__29622__auto____$2;
}
} else {
throw e37249;

}
}} else {
throw e__29622__auto____$1;
}
} else {
throw e37248;

}
}} else {
throw e__29622__auto__;
}
} else {
throw e37247;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37245){if((e37245 instanceof Error)){
var e__29622__auto__ = e37245;
if((e__29622__auto__ === cljs.core.match.backtrack)){
return null;
} else {
throw e__29622__auto__;
}
} else {
throw e37245;

}
}})();
if(cljs.core.truth_(temp__5802__auto__)){
var move = temp__5802__auto__;
return move;
} else {
if(cljs.core.seq(rest__$1)){
var G__37291 = rest__$1;
G__37213__$1 = G__37291;
continue;
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var ry = cljs.core.rand_int(n);
var rx = cljs.core.rand_int(n);
while(true){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ry,rx], null)) == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ry,rx], null);
} else {
var G__37292 = cljs.core.rand_int(n);
var G__37293 = cljs.core.rand_int(n);
ry = G__37292;
rx = G__37293;
continue;
}
break;
}
}
}));

(n_tac_toe.game.Board.prototype.n_tac_toe$game$TicTacToe$score$arity$1 = (function (p__37253){
var map__37254 = p__37253;
var map__37254__$1 = cljs.core.__destructure_map(map__37254);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37254__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var map__37255 = this;
var map__37255__$1 = cljs.core.__destructure_map(map__37255);
var rows__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37255__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var n = cljs.core.count(rows__$1);
var fwd_diag = cljs.core.with_meta(cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.get,rows__$1,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"fwd-diag","fwd-diag",2117358788)], null));
var rev_diag = cljs.core.with_meta(cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.get,cljs.core.reverse(rows__$1),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"rev-diag","rev-diag",-1984220153)], null));
var row_scores = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__37199_SHARP_,p2__37198_SHARP_){
return cljs.core.with_meta(cljs.core.frequencies(p2__37198_SHARP_),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"n","n",562130025),p1__37199_SHARP_], null));
}),rows__$1);
var col_scores = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__37202_SHARP_,p2__37201_SHARP_){
return cljs.core.with_meta(cljs.core.frequencies(p2__37201_SHARP_),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"n","n",562130025),p1__37202_SHARP_], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37200_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.get,rows__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,p1__37200_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n)));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37203_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37203_SHARP_,null);
}),cljs.core.cons(rev_diag,cljs.core.cons(fwd_diag,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(row_scores,col_scores)))));
}));

(n_tac_toe.game.Board.prototype.n_tac_toe$game$TicTacToe$win_QMARK_$arity$1 = (function (p__37256){
var map__37257 = p__37256;
var map__37257__$1 = cljs.core.__destructure_map(map__37257);
var board = map__37257__$1;
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37257__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var map__37258 = this;
var map__37258__$1 = cljs.core.__destructure_map(map__37258);
var board__$1 = map__37258__$1;
var rows__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37258__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.count(rows__$1)]),cljs.core.last),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n_tac_toe.game.score(board__$1)], 0))));
}));
(n_tac_toe.game.MetaBoard.prototype.n_tac_toe$game$TicTacToe$ = cljs.core.PROTOCOL_SENTINEL);

(n_tac_toe.game.MetaBoard.prototype.n_tac_toe$game$TicTacToe$move$arity$4 = (function (p__37260,board,y,x){
var map__37261 = p__37260;
var map__37261__$1 = cljs.core.__destructure_map(map__37261);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37261__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var map__37262 = this;
var map__37262__$1 = cljs.core.__destructure_map(map__37262);
var rows__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37262__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return n_tac_toe.game.__GT_MetaBoard(cljs.core.assoc_in(rows__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),board));
}));

(n_tac_toe.game.MetaBoard.prototype.n_tac_toe$game$TicTacToe$win_QMARK_$arity$1 = (function (p__37263){
var map__37264 = p__37263;
var map__37264__$1 = cljs.core.__destructure_map(map__37264);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37264__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var map__37265 = this;
var map__37265__$1 = cljs.core.__destructure_map(map__37265);
var rows__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(n_tac_toe.game.win_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rows__$1], 0)))));
}));

(n_tac_toe.game.MetaBoard.prototype.n_tac_toe$game$TicTacToe$score$arity$1 = (function (p__37266){
var map__37267 = p__37266;
var map__37267__$1 = cljs.core.__destructure_map(map__37267);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37267__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var map__37268 = this;
var map__37268__$1 = cljs.core.__destructure_map(map__37268);
var rows__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37268__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__37259_SHARP_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(n_tac_toe.game.score,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__37259_SHARP_], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rows__$1], 0));
}));

//# sourceMappingURL=n_tac_toe.game.js.map
