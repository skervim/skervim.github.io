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
      };var element = document.getElementById("baf4dcb6-394d-4350-88c4-54fc7210f392");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'baf4dcb6-394d-4350-88c4-54fc7210f392' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"dcc1014b-a241-453a-94a0-fa7264d51cfe":{"roots":{"references":[{"attributes":{"callback":null,"renderers":[{"id":"6910544e-ee27-4ced-9d86-a9567455cbf9","type":"GlyphRenderer"}],"tooltips":[["Date","@{date}"],["Games","@{Games}"]]},"id":"6328f1af-8b87-4391-8835-d1b64c69a572","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"b567888c-3724-45ee-8543-4264809632f1","type":"VBar"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"de916e83-c2e4-427f-b1f0-c908aa0627fc","type":"CategoricalTickFormatter"},"major_label_orientation":1.5707963267948966,"plot":{"id":"9dfc4604-a22f-4e23-b915-05d0e2b2da3f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d960f217-e3e0-4f33-a01b-ee5447c03e5f","type":"CategoricalTicker"}},"id":"f151c969-cc78-40ef-a4e0-d27e28462e90","type":"CategoricalAxis"},{"attributes":{"callback":null,"end":43457},"id":"7e05955f-faa0-45b2-b14f-1b6b3fd7833a","type":"Range1d"},{"attributes":{"callback":null,"factors":["2014/07","2014/08","2014/09","2014/10","2014/11","2014/12","2015/01","2015/02","2015/03","2015/04","2015/05","2015/06","2015/07","2015/08","2015/09","2015/10","2015/11","2015/12","2016/01","2016/02","2016/03","2016/04","2016/05","2016/06","2016/07","2016/08","2016/09","2016/10","2016/11","2016/12","2017/01","2017/02","2017/03","2017/04","2017/05","2017/06","2017/07","2017/08","2017/09","2017/10","2017/11","2017/12","2018/01","2018/02","2018/03"]},"id":"884b4da0-8ed1-4593-b3b5-fd62b500874c","type":"FactorRange"},{"attributes":{},"id":"d5abeaea-25ac-483b-b95c-e4d251e7313a","type":"BasicTicker"},{"attributes":{"source":{"id":"5ebe2278-9640-422e-bfc2-39604a1e7c43","type":"ColumnDataSource"}},"id":"d6b77b0c-ea0c-4c84-9858-d9659344a501","type":"CDSView"},{"attributes":{"overlay":{"id":"a949109d-45a1-4f9b-b117-972f1b9ce938","type":"BoxAnnotation"}},"id":"bd5b7f98-b407-4b10-a39f-882a0c8c74da","type":"BoxZoomTool"},{"attributes":{},"id":"d87b9eb4-0177-4c04-8188-f7255a871861","type":"SaveTool"},{"attributes":{},"id":"9a77cc0f-eec3-4a36-a540-28bd2125ff1b","type":"ResetTool"},{"attributes":{},"id":"b65a85b9-eb38-48fe-9946-76bb80857171","type":"WheelZoomTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"9dfc4604-a22f-4e23-b915-05d0e2b2da3f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d960f217-e3e0-4f33-a01b-ee5447c03e5f","type":"CategoricalTicker"}},"id":"4fd04b0d-9037-4d73-b73a-fe07e8b1470c","type":"Grid"},{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[20528,16868,23063,16851,16931,25517,13988,18909,19497,20370,25265,21825,25814,23551,22186,20658,28899,43457,33154,31390,31132,30059,37535,21502,21531,23989,30649,32014,41364,33945,32758,20690,17286,21528,18052,18691,17130,8577,8987,24636,16379,15529,16216,22320,5239],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04","2015/03","2015/02","2015/01","2014/12","2014/11","2014/10","2014/09","2014/08","2014/07"]}},"id":"5ebe2278-9640-422e-bfc2-39604a1e7c43","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"26fb6453-e14f-407c-b6a7-83fc6f4fc07c","type":"VBar"},{"attributes":{},"id":"c13b115b-8332-450e-ae0d-d73e6540bbee","type":"LinearScale"},{"attributes":{"plot":null,"text":"King of the hill","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"3829a144-03f0-443a-b890-345cef94f828","type":"Title"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"9dfc4604-a22f-4e23-b915-05d0e2b2da3f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d5abeaea-25ac-483b-b95c-e4d251e7313a","type":"BasicTicker"}},"id":"29b496cc-a815-4093-a6de-54f699f05588","type":"Grid"},{"attributes":{},"id":"fe3b16ef-e00d-401b-9792-22ccfb74e98d","type":"PanTool"},{"attributes":{},"id":"d960f217-e3e0-4f33-a01b-ee5447c03e5f","type":"CategoricalTicker"},{"attributes":{},"id":"6c1fd5c7-0b2b-4907-b51d-d5bd2d91e6ee","type":"CategoricalScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6328f1af-8b87-4391-8835-d1b64c69a572","type":"HoverTool"},{"id":"d87b9eb4-0177-4c04-8188-f7255a871861","type":"SaveTool"},{"id":"fe3b16ef-e00d-401b-9792-22ccfb74e98d","type":"PanTool"},{"id":"b65a85b9-eb38-48fe-9946-76bb80857171","type":"WheelZoomTool"},{"id":"bd5b7f98-b407-4b10-a39f-882a0c8c74da","type":"BoxZoomTool"},{"id":"9a77cc0f-eec3-4a36-a540-28bd2125ff1b","type":"ResetTool"}]},"id":"f45f1557-563a-44d2-afb4-a38aff4950c5","type":"Toolbar"},{"attributes":{"data_source":{"id":"5ebe2278-9640-422e-bfc2-39604a1e7c43","type":"ColumnDataSource"},"glyph":{"id":"26fb6453-e14f-407c-b6a7-83fc6f4fc07c","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b567888c-3724-45ee-8543-4264809632f1","type":"VBar"},"selection_glyph":null,"view":{"id":"d6b77b0c-ea0c-4c84-9858-d9659344a501","type":"CDSView"}},"id":"6910544e-ee27-4ced-9d86-a9567455cbf9","type":"GlyphRenderer"},{"attributes":{},"id":"8d83f3e2-e62a-4e7e-a65e-b41ce32e686c","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"f151c969-cc78-40ef-a4e0-d27e28462e90","type":"CategoricalAxis"}],"left":[{"id":"67a0fa40-c21e-455e-a228-efc97a102b43","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":400,"plot_width":750,"renderers":[{"id":"f151c969-cc78-40ef-a4e0-d27e28462e90","type":"CategoricalAxis"},{"id":"4fd04b0d-9037-4d73-b73a-fe07e8b1470c","type":"Grid"},{"id":"67a0fa40-c21e-455e-a228-efc97a102b43","type":"LinearAxis"},{"id":"29b496cc-a815-4093-a6de-54f699f05588","type":"Grid"},{"id":"a949109d-45a1-4f9b-b117-972f1b9ce938","type":"BoxAnnotation"},{"id":"6910544e-ee27-4ced-9d86-a9567455cbf9","type":"GlyphRenderer"}],"title":{"id":"3829a144-03f0-443a-b890-345cef94f828","type":"Title"},"toolbar":{"id":"f45f1557-563a-44d2-afb4-a38aff4950c5","type":"Toolbar"},"x_range":{"id":"884b4da0-8ed1-4593-b3b5-fd62b500874c","type":"FactorRange"},"x_scale":{"id":"6c1fd5c7-0b2b-4907-b51d-d5bd2d91e6ee","type":"CategoricalScale"},"y_range":{"id":"7e05955f-faa0-45b2-b14f-1b6b3fd7833a","type":"Range1d"},"y_scale":{"id":"c13b115b-8332-450e-ae0d-d73e6540bbee","type":"LinearScale"}},"id":"9dfc4604-a22f-4e23-b915-05d0e2b2da3f","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"8d83f3e2-e62a-4e7e-a65e-b41ce32e686c","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"9dfc4604-a22f-4e23-b915-05d0e2b2da3f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d5abeaea-25ac-483b-b95c-e4d251e7313a","type":"BasicTicker"}},"id":"67a0fa40-c21e-455e-a228-efc97a102b43","type":"LinearAxis"},{"attributes":{},"id":"de916e83-c2e4-427f-b1f0-c908aa0627fc","type":"CategoricalTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a949109d-45a1-4f9b-b117-972f1b9ce938","type":"BoxAnnotation"}],"root_ids":["9dfc4604-a22f-4e23-b915-05d0e2b2da3f"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"dcc1014b-a241-453a-94a0-fa7264d51cfe","elementid":"baf4dcb6-394d-4350-88c4-54fc7210f392","modelid":"9dfc4604-a22f-4e23-b915-05d0e2b2da3f"}];
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