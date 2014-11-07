App = Ember.Application.create({});

App.Router.map(function() {  
  this.resource('addstock'); 
  this.resource('replenishstock');  
  this.resource('movestock');  
  this.resource('consumestock');
});
//----------ROUTE----------------
App.AddstockRoute = Ember.Route.extend({
  model: function() {
    return {newstock:getHtmlContent('AddNewStock.html')};
  }
});

App.MovestockRoute = Ember.Route.extend({
  model: function() {
    return {movestockcontent:getHtmlContent('MoveStock.html')};
  }
});

App.ReplenishstockRoute = Ember.Route.extend({
  model: function() {		  
    return {replenishstockcontent:getHtmlContent('ReplenishStock.html')};
  }
});

App.ConsumestockRoute = Ember.Route.extend({
  model: function() {
    return {consumestockcontent:getHtmlContent('ConsumeStock.html')};
  }
});

	function getHtmlContent(filename){
	var filePath='Views/'+filename;
		$.ajax({
				url: filePath,
				type: "GET",
				contentType: "html",
				async: false,
				success: function(data) { 
						htmlcontent = data;
				}
			    });
				return htmlcontent;
		};

App.AddstockController = Ember.ObjectController.extend({   
  actions: {
    addval: function() {
     alert("chk");
    }
  }
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});
