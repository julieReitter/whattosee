define(['handlebars.runtime'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['movies'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {

  var buffer = "", stack1;
  buffer += "\n    <li>\n      <div class=\"movie\" data-id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n\n        <div class=\"movie--image\">\n          <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.clips)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"js-trailer\" data-trailer=\""
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n            <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.posters)),stack1 == null || stack1 === false ? stack1 : stack1.original)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n          </a>\n        </div>\n\n        <div class=\"movie--details\">\n          <div class=\"movie--rating critics\">\n            "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.ratings)),stack1 == null || stack1 === false ? stack1 : stack1.critics_score)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n          </div>\n          <div class=\"movie--rating audience\">\n            "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.ratings)),stack1 == null || stack1 === false ? stack1 : stack1.critics_score)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n          </div>\n\n          <div class=\"movie--info\">\n            <h3 class=\"movie--title\">"
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n            <a href=\"#\" class=\"movie--extra-btn js-extra\" data-expanded=\"false\">&raquo;</a>\n\n            <div class=\"movie--snippet\">"
    + escapeExpression(((stack1 = (depth0 && depth0.synopsis)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n            <div class=\"movie--showtime\">\n              <a href=\"http://imdb.com/showtimes/title/tt"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.alternate_ids)),stack1 == null || stack1 === false ? stack1 : stack1.imdb)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">Get Showtimes</a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"movie--options\">\n          <a href=\"#\" class=\"button js-viewed\">Seen It</a>\n          <a href=\"#\" class=\"button js-ignore\">Not Interested</a>\n        </div>\n\n      </div>\n    </li>\n  ";
  return buffer;
  }

  buffer += "<ul class=\"movie-list\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.movies), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<ul>";
  return buffer;
  });
});