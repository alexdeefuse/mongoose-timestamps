module.exports = exports = function timestampsPlugin(schema, options){
	
	//	add extra fields
	schema.add({ created: Date });
	schema.add({ updated: Date });
	
	//	declare indexes
	schema.path('created').index( true );
	schema.path('updated').index( true );
	
	//	intercept save and handle new or update
	schema.pre('save', function(next){
		var self = this;
		
		if( this.isNew ){
			this.created = this.updated = new Date();
		}else{
			this.updated = new Date();
		}
		
		next();
	});
	
}