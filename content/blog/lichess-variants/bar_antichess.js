(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("28fba6c1-d1e6-4a2c-b29e-7a890add6a57");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '28fba6c1-d1e6-4a2c-b29e-7a890add6a57' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"1e86b5a6-49be-422f-823e-bd40ecb5f491":{"roots":{"references":[{"attributes":{},"id":"58ec2e6e-f316-4b1b-846e-fd4df0d1a810","type":"BasicTicker"},{"attributes":{},"id":"063718a0-a75b-4e87-93ac-961688730ba7","type":"LinearScale"},{"attributes":{"overlay":{"id":"96a3ebce-70c4-48c4-80fc-92678726ec45","type":"BoxAnnotation"}},"id":"b1bff0b1-495c-42bd-97ec-ce486bf64e9e","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[154723,146152,154203,148506,154067,133595,126720,124454,131092,132088,149931,145238,152908,134673,147475,136031,131439,124975,105227,116282,120863,125670,123656,108660,98072,86169,91542,83609,73128,59176,58064,55373,49585,55238,68674,59755,64312,71515,79356,29598],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04","2015/03","2015/02","2015/01","2014/12"]}},"id":"d4461697-36fe-4fd4-9dba-295beaa3c92c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d4461697-36fe-4fd4-9dba-295beaa3c92c","type":"ColumnDataSource"},"glyph":{"id":"c0f1dec6-f9ad-4de0-ad43-dbcdc64c317f","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ff67b857-2cad-4b34-af45-17bae8be88cf","type":"VBar"},"selection_glyph":null,"view":{"id":"eb275469-675e-4d80-bf42-78f325f6df51","type":"CDSView"}},"id":"d3087781-c56d-4cbd-aac9-5ab5621e42b2","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"13254c83-3dd9-422b-a54e-7d656a4e67d8","type":"HoverTool"},{"id":"6944e57e-d4f4-4dec-be61-f6cd4e2e9192","type":"SaveTool"},{"id":"3d1100ad-2597-4473-9c41-ca0bb14ffedd","type":"PanTool"},{"id":"42a22837-e92e-47e6-abaf-a31d7ebc7d23","type":"WheelZoomTool"},{"id":"b1bff0b1-495c-42bd-97ec-ce486bf64e9e","type":"BoxZoomTool"},{"id":"0eeef8a3-6cd2-435e-b132-b253c291d575","type":"ResetTool"}]},"id":"fe2dafe0-d5ae-4757-a70b-7cf620a8ad1d","type":"Toolbar"},{"attributes":{},"id":"9a10d429-19c4-40af-bed7-ced2bf46d5d9","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":154723},"id":"6afd13a3-49d9-426b-8a0f-424ed2399437","type":"Range1d"},{"attributes":{},"id":"0eeef8a3-6cd2-435e-b132-b253c291d575","type":"ResetTool"},{"attributes":{"callback":null,"factors":["2014/12","2015/01","2015/02","2015/03","2015/04","2015/05","2015/06","2015/07","2015/08","2015/09","2015/10","2015/11","2015/12","2016/01","2016/02","2016/03","2016/04","2016/05","2016/06","2016/07","2016/08","2016/09","2016/10","2016/11","2016/12","2017/01","2017/02","2017/03","2017/04","2017/05","2017/06","2017/07","2017/08","2017/09","2017/10","2017/11","2017/12","2018/01","2018/02","2018/03"]},"id":"938c4906-0da9-41a5-88c3-056ae32a8db0","type":"FactorRange"},{"attributes":{},"id":"6a723724-8e46-4cb8-8bbe-d30b9ca3731d","type":"CategoricalTicker"},{"attributes":{"callback":null,"renderers":[{"id":"d3087781-c56d-4cbd-aac9-5ab5621e42b2","type":"GlyphRenderer"}],"tooltips":[["Date","@{date}"],["Games","@{Games}"]]},"id":"13254c83-3dd9-422b-a54e-7d656a4e67d8","type":"HoverTool"},{"attributes":{"plot":null,"text":"Antichess","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"68731671-d9b2-4fa3-97a1-c00c24f75d02","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"ff67b857-2cad-4b34-af45-17bae8be88cf","type":"VBar"},{"attributes":{"source":{"id":"d4461697-36fe-4fd4-9dba-295beaa3c92c","type":"ColumnDataSource"}},"id":"eb275469-675e-4d80-bf42-78f325f6df51","type":"CDSView"},{"attributes":{},"id":"42a22837-e92e-47e6-abaf-a31d7ebc7d23","type":"WheelZoomTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"6e9f9365-9f21-44a7-a4c6-3c1a39bf7d8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a723724-8e46-4cb8-8bbe-d30b9ca3731d","type":"CategoricalTicker"}},"id":"5b0c5462-e4d7-4718-b8b6-8ebc5a5c2b88","type":"Grid"},{"attributes":{},"id":"3d1100ad-2597-4473-9c41-ca0bb14ffedd","type":"PanTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"6e9f9365-9f21-44a7-a4c6-3c1a39bf7d8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"58ec2e6e-f316-4b1b-846e-fd4df0d1a810","type":"BasicTicker"}},"id":"71208571-8eb4-457b-9e3e-d59818a8c624","type":"Grid"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"8eb8898b-6957-4976-ba15-de2d05c9d48b","type":"CategoricalTickFormatter"},"major_label_orientation":1.5707963267948966,"plot":{"id":"6e9f9365-9f21-44a7-a4c6-3c1a39bf7d8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a723724-8e46-4cb8-8bbe-d30b9ca3731d","type":"CategoricalTicker"}},"id":"c21fe966-d178-406e-8ce6-197a46b8776b","type":"CategoricalAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"c0f1dec6-f9ad-4de0-ad43-dbcdc64c317f","type":"VBar"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"9a10d429-19c4-40af-bed7-ced2bf46d5d9","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6e9f9365-9f21-44a7-a4c6-3c1a39bf7d8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"58ec2e6e-f316-4b1b-846e-fd4df0d1a810","type":"BasicTicker"}},"id":"2c07ed53-a721-43ef-bc68-c7373edf8df8","type":"LinearAxis"},{"attributes":{"below":[{"id":"c21fe966-d178-406e-8ce6-197a46b8776b","type":"CategoricalAxis"}],"left":[{"id":"2c07ed53-a721-43ef-bc68-c7373edf8df8","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":400,"plot_width":800,"renderers":[{"id":"c21fe966-d178-406e-8ce6-197a46b8776b","type":"CategoricalAxis"},{"id":"5b0c5462-e4d7-4718-b8b6-8ebc5a5c2b88","type":"Grid"},{"id":"2c07ed53-a721-43ef-bc68-c7373edf8df8","type":"LinearAxis"},{"id":"71208571-8eb4-457b-9e3e-d59818a8c624","type":"Grid"},{"id":"96a3ebce-70c4-48c4-80fc-92678726ec45","type":"BoxAnnotation"},{"id":"d3087781-c56d-4cbd-aac9-5ab5621e42b2","type":"GlyphRenderer"}],"title":{"id":"68731671-d9b2-4fa3-97a1-c00c24f75d02","type":"Title"},"toolbar":{"id":"fe2dafe0-d5ae-4757-a70b-7cf620a8ad1d","type":"Toolbar"},"x_range":{"id":"938c4906-0da9-41a5-88c3-056ae32a8db0","type":"FactorRange"},"x_scale":{"id":"5839edf9-0d9a-40d9-8639-c59bc87abd3f","type":"CategoricalScale"},"y_range":{"id":"6afd13a3-49d9-426b-8a0f-424ed2399437","type":"Range1d"},"y_scale":{"id":"063718a0-a75b-4e87-93ac-961688730ba7","type":"LinearScale"}},"id":"6e9f9365-9f21-44a7-a4c6-3c1a39bf7d8e","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96a3ebce-70c4-48c4-80fc-92678726ec45","type":"BoxAnnotation"},{"attributes":{},"id":"5839edf9-0d9a-40d9-8639-c59bc87abd3f","type":"CategoricalScale"},{"attributes":{},"id":"8eb8898b-6957-4976-ba15-de2d05c9d48b","type":"CategoricalTickFormatter"},{"attributes":{},"id":"6944e57e-d4f4-4dec-be61-f6cd4e2e9192","type":"SaveTool"}],"root_ids":["6e9f9365-9f21-44a7-a4c6-3c1a39bf7d8e"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"1e86b5a6-49be-422f-823e-bd40ecb5f491","elementid":"28fba6c1-d1e6-4a2c-b29e-7a890add6a57","modelid":"6e9f9365-9f21-44a7-a4c6-3c1a39bf7d8e"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.14.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();