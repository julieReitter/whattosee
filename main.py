#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import os
import urllib
import jinja2
import webapp2


# App Handler - Renders Jinja Templates, Inherited by other handlers
class ApplicationController(webapp2.RequestHandler):
  template_dir = os.path.join(os.path.dirname(__file__), 'app/views')
  JINJA_ENV = jinja2.Environment(
    loader = jinja2.FileSystemLoader(template_dir),
    autoescape=True)

  # renders html template
  def render(self, template, **kw):
    self.write(self.render_str(template, **kw))

  def write(self, *a, **kw):
    self.response.out.write(*a, **kw)

  def render_str(self, template, **params):
    t = self.JINJA_ENV.get_template(template)
    return t.render(params)


# Main Page handler
class MainController(ApplicationController):
  def get(self):
    self.render("application.html")

app = webapp2.WSGIApplication([('/.*', MainController) ], debug=True)