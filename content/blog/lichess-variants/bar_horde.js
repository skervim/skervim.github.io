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
      };var element = document.getElementById("32751605-0709-4e4d-9b61-88ef1ba78172");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '32751605-0709-4e4d-9b61-88ef1ba78172' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f0d08e70-c7ba-4d3f-a673-1a2df4da971f":{"roots":{"references":[{"attributes":{},"id":"744c50c1-34ff-4110-9b9f-4e414ae74f2f","type":"SaveTool"},{"attributes":{"callback":null,"factors":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04"]},"id":"4faef937-756c-4da0-95e6-7b9ecde7fb7f","type":"FactorRange"},{"attributes":{},"id":"bb4d945b-e454-4f4b-ae22-eb7b3acfeb44","type":"BasicTicker"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"1640bf00-b677-4977-bc1e-8e748b5ce449","type":"CategoricalTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"b2f7d066-9151-4317-9025-900daed4f240","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a183c6b-5322-4274-96da-e65d08cc8988","type":"CategoricalTicker"}},"id":"abba1d33-428e-48aa-abe8-1da6afc9becc","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"744c50c1-34ff-4110-9b9f-4e414ae74f2f","type":"SaveTool"},{"id":"f7d8e237-8a25-4f7c-a2ec-314e7eeff334","type":"PanTool"},{"id":"66d76b6a-35dc-44f4-a747-99e9c3f1b768","type":"WheelZoomTool"},{"id":"9c6c6ce7-f93a-40db-9a18-13fcc0208ac5","type":"BoxZoomTool"},{"id":"bec3678a-4697-4c38-bfee-75fcbe1a86b9","type":"ResetTool"}]},"id":"420e969a-acfe-4add-9ad3-325d6dd37fff","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a07b05c4-b986-4e27-9d89-4e0c039ac4d8","type":"BoxAnnotation"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"b2f7d066-9151-4317-9025-900daed4f240","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb4d945b-e454-4f4b-ae22-eb7b3acfeb44","type":"BasicTicker"}},"id":"93ad898a-acdd-4dfb-aae6-4f30eb0ff650","type":"Grid"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"b2f7d066-9151-4317-9025-900daed4f240","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a183c6b-5322-4274-96da-e65d08cc8988","type":"CategoricalTicker"}},"id":"186dd531-10aa-498b-a92e-92217574bcaa","type":"Grid"},{"attributes":{},"id":"89c524ad-3f8f-49e3-8c01-9fb95ec6afc5","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":24128},"id":"3f38faa6-183f-450b-9791-391ca12e87ae","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#30a2da"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"3bbe38e4-14e9-4393-8aed-2ee976408c45","type":"VBar"},{"attributes":{"plot":null,"text":"Horde","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"9e243d06-d6b6-440a-8c54-a80f76c7e850","type":"Title"},{"attributes":{},"id":"1d1b663b-41ad-4b75-9db2-dffb491fb13f","type":"LinearScale"},{"attributes":{"items":[],"plot":{"id":"b2f7d066-9151-4317-9025-900daed4f240","subtype":"Figure","type":"Plot"}},"id":"36ef8881-49fe-4a02-8a68-bfe15f7afa4e","type":"Legend"},{"attributes":{},"id":"5a183c6b-5322-4274-96da-e65d08cc8988","type":"CategoricalTicker"},{"attributes":{},"id":"1640bf00-b677-4977-bc1e-8e748b5ce449","type":"CategoricalTickFormatter"},{"attributes":{"below":[{"id":"abba1d33-428e-48aa-abe8-1da6afc9becc","type":"CategoricalAxis"}],"left":[{"id":"1a08bcb3-e50f-4197-8966-51211fe5f7ce","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":300,"renderers":[{"id":"abba1d33-428e-48aa-abe8-1da6afc9becc","type":"CategoricalAxis"},{"id":"186dd531-10aa-498b-a92e-92217574bcaa","type":"Grid"},{"id":"1a08bcb3-e50f-4197-8966-51211fe5f7ce","type":"LinearAxis"},{"id":"93ad898a-acdd-4dfb-aae6-4f30eb0ff650","type":"Grid"},{"id":"a07b05c4-b986-4e27-9d89-4e0c039ac4d8","type":"BoxAnnotation"},{"id":"36ef8881-49fe-4a02-8a68-bfe15f7afa4e","type":"Legend"},{"id":"b3402905-6a33-48ff-950a-bfb396f30447","type":"GlyphRenderer"}],"title":{"id":"9e243d06-d6b6-440a-8c54-a80f76c7e850","type":"Title"},"toolbar":{"id":"420e969a-acfe-4add-9ad3-325d6dd37fff","type":"Toolbar"},"x_range":{"id":"4faef937-756c-4da0-95e6-7b9ecde7fb7f","type":"FactorRange"},"x_scale":{"id":"185f48d0-7de1-4506-b100-a0e4d33cbac8","type":"CategoricalScale"},"y_range":{"id":"3f38faa6-183f-450b-9791-391ca12e87ae","type":"Range1d"},"y_scale":{"id":"1d1b663b-41ad-4b75-9db2-dffb491fb13f","type":"LinearScale"}},"id":"b2f7d066-9151-4317-9025-900daed4f240","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"89c524ad-3f8f-49e3-8c01-9fb95ec6afc5","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"b2f7d066-9151-4317-9025-900daed4f240","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb4d945b-e454-4f4b-ae22-eb7b3acfeb44","type":"BasicTicker"}},"id":"1a08bcb3-e50f-4197-8966-51211fe5f7ce","type":"LinearAxis"},{"attributes":{},"id":"f7d8e237-8a25-4f7c-a2ec-314e7eeff334","type":"PanTool"},{"attributes":{},"id":"185f48d0-7de1-4506-b100-a0e4d33cbac8","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"b2723d66-d2b4-4f08-a7fc-0cd07dde6d31","type":"ColumnDataSource"},"glyph":{"id":"2f434ab2-6057-4828-9f8f-9992fb481117","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3bbe38e4-14e9-4393-8aed-2ee976408c45","type":"VBar"},"selection_glyph":null,"view":{"id":"a828daab-b093-451c-b0db-5df9c83f5c90","type":"CDSView"}},"id":"b3402905-6a33-48ff-950a-bfb396f30447","type":"GlyphRenderer"},{"attributes":{},"id":"bec3678a-4697-4c38-bfee-75fcbe1a86b9","type":"ResetTool"},{"attributes":{},"id":"66d76b6a-35dc-44f4-a747-99e9c3f1b768","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"a07b05c4-b986-4e27-9d89-4e0c039ac4d8","type":"BoxAnnotation"}},"id":"9c6c6ce7-f93a-40db-9a18-13fcc0208ac5","type":"BoxZoomTool"},{"attributes":{"source":{"id":"b2723d66-d2b4-4f08-a7fc-0cd07dde6d31","type":"ColumnDataSource"}},"id":"a828daab-b093-451c-b0db-5df9c83f5c90","type":"CDSView"},{"attributes":{"fill_color":{"value":"#30a2da"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"2f434ab2-6057-4828-9f8f-9992fb481117","type":"VBar"},{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[20701,18726,20495,24128,18629,15776,12283,11358,13293,13128,15820,15344,16302,19606,21239,16437,16186,14452,13912,13424,13705,16561,12635,12520,11745,13271,12320,13808,12646,10105,8881,8303,9398,9045,14437,8780],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04"]}},"id":"b2723d66-d2b4-4f08-a7fc-0cd07dde6d31","type":"ColumnDataSource"}],"root_ids":["b2f7d066-9151-4317-9025-900daed4f240"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"f0d08e70-c7ba-4d3f-a673-1a2df4da971f","elementid":"32751605-0709-4e4d-9b61-88ef1ba78172","modelid":"b2f7d066-9151-4317-9025-900daed4f240"}];
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