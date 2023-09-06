goog.provide('n_tac_toe.events');
if((typeof n_tac_toe !== 'undefined') && (typeof n_tac_toe.events !== 'undefined') && (typeof n_tac_toe.events.next_play !== 'undefined')){
} else {
n_tac_toe.events.next_play = new cljs.core.PersistentArrayMap(null, 2, ["x","o","o","x"], null);
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("n-tac-toe.events","initialize-db","n-tac-toe.events/initialize-db",1044377001),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__30913__auto__ = n_tac_toe.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__30913__auto__;
}catch (e37947){var e = e37947;
throw e;
}}):(function (_,___$1){
return n_tac_toe.db.default_db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("n-tac-toe.events","new-game","n-tac-toe.events/new-game",1199756189),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.list(new cljs.core.Symbol("game","new-game","game/new-game",1748083077,null),(3)),new cljs.core.Keyword(null,"turn","turn",75759344),"x",new cljs.core.Keyword(null,"win?","win?",235817510),null)));

var result__30913__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var result__30913__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__30913__auto__;
})(),new cljs.core.Keyword(null,"game","game",-441523833),(function (){var result__30913__auto__ = n_tac_toe.game.new_game((3));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("game","new-game","game/new-game",1748083077,null),(3)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__30913__auto__;
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"turn","turn",75759344),"x",new cljs.core.Keyword(null,"win?","win?",235817510),null], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.list(new cljs.core.Symbol("game","new-game","game/new-game",1748083077,null),(3)),new cljs.core.Keyword(null,"turn","turn",75759344),"x",new cljs.core.Keyword(null,"win?","win?",235817510),null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__30913__auto__;
}catch (e37948){var e = e37948;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"game","game",-441523833),n_tac_toe.game.new_game((3)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"turn","turn",75759344),"x",new cljs.core.Keyword(null,"win?","win?",235817510),null], 0));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("n-tac-toe.events","win?","n-tac-toe.events/win?",1335060025),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__37949){
var map__37950 = p__37949;
var map__37950__$1 = cljs.core.__destructure_map(map__37950);
var db = map__37950__$1;
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37950__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"game","game",1199007694,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"win?","win?",235817510),cljs.core.list(new cljs.core.Symbol("game","win?","game/win?",1877369983,null),new cljs.core.Symbol(null,"game","game",1199007694,null)))));

var result__30913__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__30913__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__30913__auto__;
})(),new cljs.core.Keyword(null,"win?","win?",235817510),(function (){var result__30913__auto__ = n_tac_toe.game.win_QMARK_((function (){var result__30913__auto__ = game;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__30913__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("game","win?","game/win?",1877369983,null),new cljs.core.Symbol(null,"game","game",1199007694,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__30913__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"win?","win?",235817510),cljs.core.list(new cljs.core.Symbol("game","win?","game/win?",1877369983,null),new cljs.core.Symbol(null,"game","game",1199007694,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__30913__auto__;
}catch (e37951){var e = e37951;
throw e;
}}):(function (p__37952){
var map__37953 = p__37952;
var map__37953__$1 = cljs.core.__destructure_map(map__37953);
var db = map__37953__$1;
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37953__$1,new cljs.core.Keyword(null,"game","game",-441523833));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"win?","win?",235817510),n_tac_toe.game.win_QMARK_(game));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("n-tac-toe.events","play","n-tac-toe.events/play",-1744522707),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__37954,p__37955){
var map__37956 = p__37954;
var map__37956__$1 = cljs.core.__destructure_map(map__37956);
var map__37957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__37957__$1 = cljs.core.__destructure_map(map__37957);
var db = map__37957__$1;
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var vec__37958 = p__37955;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958,(1),null);
var yb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958,(2),null);
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958,(3),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958,(4),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958,(5),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"db","db",993250759)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-board","new-board",-1603870110,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"game","game",1199007694,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)], null)),cljs.core.list(new cljs.core.Symbol("game","move","game/move",-475647904,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.list(new cljs.core.Symbol("game","move","game/move",-475647904,null),new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.Symbol(null,"new-board","new-board",-1603870110,null),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)),new cljs.core.Keyword(null,"turn","turn",75759344),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"next-play","next-play",-16128891,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),new cljs.core.Keyword(null,"allowed","allowed",1436019743),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","win?","n-tac-toe.events/win?",1335060025)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null),"x"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","cpu-play","n-tac-toe.events/cpu-play",2009078601),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null))], null)], null))));

var result__30913__auto__ = (function (){var new_board = (function (){var result__30913__auto__ = (function (){var result__30920__auto__ = n_tac_toe.game.move((function (){var result__30920__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var result__30913__auto__ = game;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var result__30913__auto__ = yb;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = xb;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"xb","xb",-765832,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__30913__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__30920__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__30920__auto__;
})(),(function (){var result__30913__auto__ = c;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = y;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = x;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__30920__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("game","move","game/move",-475647904,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__30920__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"game","game",1199007694,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)], null)),cljs.core.list(new cljs.core.Symbol("game","move","game/move",-475647904,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__30913__auto__;
})();
var result__30913__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__30913__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var result__30913__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(20),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__30913__auto__;
})(),new cljs.core.Keyword(null,"game","game",-441523833),(function (){var result__30913__auto__ = n_tac_toe.game.move((function (){var result__30913__auto__ = game;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(23),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = new_board;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(24),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-board","new-board",-1603870110,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = yb;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(25),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = xb;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(26),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"xb","xb",-765832,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(22),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("game","move","game/move",-475647904,null),new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.Symbol(null,"new-board","new-board",-1603870110,null),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__30913__auto__;
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"turn","turn",75759344),(function (){var result__30913__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var result__30913__auto__ = n_tac_toe.events.next_play;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(29),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"next-play","next-play",-16128891,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = c;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(30),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(28),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"next-play","next-play",-16128891,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__30913__auto__;
})(),new cljs.core.Keyword(null,"allowed","allowed",1436019743),(function (){var result__30913__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__30913__auto__ = y;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(33),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = x;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(34),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(32),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__30913__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(19),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.list(new cljs.core.Symbol("game","move","game/move",-475647904,null),new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.Symbol(null,"new-board","new-board",-1603870110,null),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)),new cljs.core.Keyword(null,"turn","turn",75759344),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"next-play","next-play",-16128891,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),new cljs.core.Keyword(null,"allowed","allowed",1436019743),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__30913__auto__;
})(),new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (){var result__30913__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__30913__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__30913__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","win?","n-tac-toe.events/win?",1335060025)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(39),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","win?","n-tac-toe.events/win?",1335060025)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(37),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","win?","n-tac-toe.events/win?",1335060025)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = (((function (){var result__30913__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var result__30913__auto__ = turn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(43),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"turn","turn",1716290871,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__30913__auto__;
})(),"x");
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(42),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null),"x"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})())?(function (){var result__30913__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__30913__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","cpu-play","n-tac-toe.events/cpu-play",2009078601),(function (){var result__30913__auto__ = y;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(49),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = x;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(50),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__30913__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(47),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","cpu-play","n-tac-toe.events/cpu-play",2009078601),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__30913__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(45),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","cpu-play","n-tac-toe.events/cpu-play",2009078601),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})():null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(41),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null),"x"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","cpu-play","n-tac-toe.events/cpu-play",2009078601),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__30913__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(36),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","win?","n-tac-toe.events/win?",1335060025)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null),"x"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","cpu-play","n-tac-toe.events/cpu-play",2009078601),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__30913__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(17),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.list(new cljs.core.Symbol("game","move","game/move",-475647904,null),new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.Symbol(null,"new-board","new-board",-1603870110,null),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)),new cljs.core.Keyword(null,"turn","turn",75759344),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"next-play","next-play",-16128891,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),new cljs.core.Keyword(null,"allowed","allowed",1436019743),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","win?","n-tac-toe.events/win?",1335060025)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null),"x"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","cpu-play","n-tac-toe.events/cpu-play",2009078601),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__30913__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-board","new-board",-1603870110,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"game","game",1199007694,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)], null)),cljs.core.list(new cljs.core.Symbol("game","move","game/move",-475647904,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.list(new cljs.core.Symbol("game","move","game/move",-475647904,null),new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.Symbol(null,"new-board","new-board",-1603870110,null),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)),new cljs.core.Keyword(null,"turn","turn",75759344),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"next-play","next-play",-16128891,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),new cljs.core.Keyword(null,"allowed","allowed",1436019743),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","win?","n-tac-toe.events/win?",1335060025)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null),"x"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","cpu-play","n-tac-toe.events/cpu-play",2009078601),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null))], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__30913__auto__;
}catch (e37961){var e = e37961;
throw e;
}}):(function (p__37962,p__37963){
var map__37964 = p__37962;
var map__37964__$1 = cljs.core.__destructure_map(map__37964);
var map__37965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37964__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__37965__$1 = cljs.core.__destructure_map(map__37965);
var db = map__37965__$1;
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37965__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37965__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var vec__37966 = p__37963;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37966,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37966,(1),null);
var yb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37966,(2),null);
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37966,(3),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37966,(4),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37966,(5),null);
var new_board = n_tac_toe.game.move(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),yb,xb], null)),c,y,x);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"game","game",-441523833),n_tac_toe.game.move(game,new_board,yb,xb),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"turn","turn",75759344),cljs.core.get.cljs$core$IFn$_invoke$arity$2(n_tac_toe.events.next_play,c),new cljs.core.Keyword(null,"allowed","allowed",1436019743),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","win?","n-tac-toe.events/win?",1335060025)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(turn,"x"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","cpu-play","n-tac-toe.events/cpu-play",2009078601),y,x], null)], null):null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("n-tac-toe.events","cpu-play","n-tac-toe.events/cpu-play",2009078601),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__37969,p__37970){
var map__37971 = p__37969;
var map__37971__$1 = cljs.core.__destructure_map(map__37971);
var map__37972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37971__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__37972__$1 = cljs.core.__destructure_map(map__37972);
var db = map__37972__$1;
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37972__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37972__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var vec__37973 = p__37970;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37973,(0),null);
var yb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37973,(1),null);
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37973,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.Keyword(null,"db","db",993250759)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null),"o"),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"board","board",-266486106,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cpu-y","cpu-y",194086463,null),new cljs.core.Symbol(null,"cpu-x","cpu-x",-1376398430,null)], null),cljs.core.list(new cljs.core.Symbol("game","suggest-move","game/suggest-move",-735299442,null),new cljs.core.Symbol(null,"board","board",-266486106,null),"o")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","play","n-tac-toe.events/play",-1744522707),"o",new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null),new cljs.core.Symbol(null,"cpu-y","cpu-y",194086463,null),new cljs.core.Symbol(null,"cpu-x","cpu-x",-1376398430,null)], null)], null)], null)], null)))));

var result__30913__auto__ = (((function (){var result__30913__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var result__30913__auto__ = turn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"turn","turn",1716290871,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__30913__auto__;
})(),"o");
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null),"o"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__30913__auto__;
})())?(function (){var result__30913__auto__ = (function (){var board = (function (){var result__30913__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var result__30913__auto__ = game;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var result__30913__auto__ = yb;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = xb;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"xb","xb",-765832,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__30913__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__30913__auto__;
})();
var vec__37977 = (function (){var result__30913__auto__ = n_tac_toe.game.suggest_move((function (){var result__30913__auto__ = board;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})(),"o");
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("game","suggest-move","game/suggest-move",-735299442,null),new cljs.core.Symbol(null,"board","board",-266486106,null),"o"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__30913__auto__;
})();
var cpu_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37977,(0),null);
var cpu_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37977,(1),null);
var result__30913__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__30913__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(20),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__30913__auto__;
})(),new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (){var result__30913__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__30913__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__30913__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","play","n-tac-toe.events/play",-1744522707),"o",(function (){var result__30913__auto__ = yb;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(28),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = xb;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(29),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"xb","xb",-765832,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = cpu_y;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(30),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"cpu-y","cpu-y",194086463,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__30913__auto__;
})(),(function (){var result__30913__auto__ = cpu_x;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(31),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"cpu-x","cpu-x",-1376398430,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__30913__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(25),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","play","n-tac-toe.events/play",-1744522707),"o",new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null),new cljs.core.Symbol(null,"cpu-y","cpu-y",194086463,null),new cljs.core.Symbol(null,"cpu-x","cpu-x",-1376398430,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__30913__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(23),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","play","n-tac-toe.events/play",-1744522707),"o",new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null),new cljs.core.Symbol(null,"cpu-y","cpu-y",194086463,null),new cljs.core.Symbol(null,"cpu-x","cpu-x",-1376398430,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__30913__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(22),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","play","n-tac-toe.events/play",-1744522707),"o",new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null),new cljs.core.Symbol(null,"cpu-y","cpu-y",194086463,null),new cljs.core.Symbol(null,"cpu-x","cpu-x",-1376398430,null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__30913__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","play","n-tac-toe.events/play",-1744522707),"o",new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null),new cljs.core.Symbol(null,"cpu-y","cpu-y",194086463,null),new cljs.core.Symbol(null,"cpu-x","cpu-x",-1376398430,null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__30913__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"board","board",-266486106,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cpu-y","cpu-y",194086463,null),new cljs.core.Symbol(null,"cpu-x","cpu-x",-1376398430,null)], null),cljs.core.list(new cljs.core.Symbol("game","suggest-move","game/suggest-move",-735299442,null),new cljs.core.Symbol(null,"board","board",-266486106,null),"o")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","play","n-tac-toe.events/play",-1744522707),"o",new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null),new cljs.core.Symbol(null,"cpu-y","cpu-y",194086463,null),new cljs.core.Symbol(null,"cpu-x","cpu-x",-1376398430,null)], null)], null)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__30913__auto__;
})():null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null),"o"),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"board","board",-266486106,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cpu-y","cpu-y",194086463,null),new cljs.core.Symbol(null,"cpu-x","cpu-x",-1376398430,null)], null),cljs.core.list(new cljs.core.Symbol("game","suggest-move","game/suggest-move",-735299442,null),new cljs.core.Symbol(null,"board","board",-266486106,null),"o")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","play","n-tac-toe.events/play",-1744522707),"o",new cljs.core.Symbol(null,"yb","yb",-1838692634,null),new cljs.core.Symbol(null,"xb","xb",-765832,null),new cljs.core.Symbol(null,"cpu-y","cpu-y",194086463,null),new cljs.core.Symbol(null,"cpu-x","cpu-x",-1376398430,null)], null)], null)], null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__30913__auto__;
}catch (e37976){var e = e37976;
throw e;
}}):(function (p__37980,p__37981){
var map__37982 = p__37980;
var map__37982__$1 = cljs.core.__destructure_map(map__37982);
var map__37983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__37983__$1 = cljs.core.__destructure_map(map__37983);
var db = map__37983__$1;
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37983__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37983__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var vec__37984 = p__37981;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37984,(0),null);
var yb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37984,(1),null);
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37984,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(turn,"o")){
var board = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),yb,xb], null));
var vec__37987 = n_tac_toe.game.suggest_move(board,"o");
var cpu_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37987,(0),null);
var cpu_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37987,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","play","n-tac-toe.events/play",-1744522707),"o",yb,xb,cpu_y,cpu_x], null)], null)], null)], null);
} else {
return null;
}
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("n-tac-toe.events","navigate","n-tac-toe.events/navigate",1822346644),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__37990){
var vec__37991 = p__37990;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37991,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37991,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null)));

var result__30913__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (){var result__30913__auto__ = handler;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__30913__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__30913__auto__;
}catch (e37994){var e = e37994;
throw e;
}}):(function (_,p__37995){
var vec__37996 = p__37995;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37996,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37996,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),handler], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("n-tac-toe.events","set-active-panel","n-tac-toe.events/set-active-panel",-2000622145),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__37999,p__38000){
var map__38001 = p__37999;
var map__38001__$1 = cljs.core.__destructure_map(map__38001);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38001__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__38002 = p__38000;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38002,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38002,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null))], null)));

var result__30913__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__30913__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__30913__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__30913__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var result__30913__auto__ = active_panel;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__30913__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__30913__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__30913__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__30913__auto__;
}catch (e38005){var e = e38005;
throw e;
}}):(function (p__38006,p__38007){
var map__38008 = p__38006;
var map__38008__$1 = cljs.core.__destructure_map(map__38008);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38008__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__38009 = p__38007;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38009,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38009,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel)], null);
})));

//# sourceMappingURL=n_tac_toe.events.js.map
