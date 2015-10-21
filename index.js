var Transformer = require("babel-core").Transformer
,	t           = require("babel-core").types
,	wrapTryCatch = function(node){
	var catchExpression = t.identifier("console.log('error')")
		,	catchBlock = t.blockStatement([catchExpression])
	,	catchStatement = t.catchClause(t.identifier("e"), catchBlock)
	,	tryStatement = t.tryStatement(node.body, catchStatement)
	,	blockStatement = t.blockStatement([tryStatement])

	node.body = blockStatement

	return node
}


module.exports = new Transformer("plugin-example", {
 	FunctionDeclaration: function (node, parent) {
 		return wrapTryCatch(node)
  	},
  	FunctionExpression: function(node, parent){
  		return wrapTryCatch(node)
  	}
});
