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
      };var element = document.getElementById("17fdfa5d-d806-44bf-afab-34fd9723ffc8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '17fdfa5d-d806-44bf-afab-34fd9723ffc8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6f3aa140-a093-4c12-93d7-1dc85c2f6300":{"roots":{"references":[{"attributes":{},"id":"bc642c65-4188-4367-8d57-9219d9a53bab","type":"WheelZoomTool"},{"attributes":{},"id":"ad4207d7-b9f1-485f-b5a1-edb77b08d3db","type":"BasicTicker"},{"attributes":{"callback":null,"end":154723},"id":"d58f5f08-0cd2-4d24-84a0-4a8ae0a7538b","type":"Range1d"},{"attributes":{},"id":"2ea22186-2140-46c2-9123-5069862a2592","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b0913504-99af-4c78-964f-52d0c1e47b25","type":"HoverTool"},{"id":"2ea22186-2140-46c2-9123-5069862a2592","type":"SaveTool"},{"id":"206ed109-3d86-48c8-8575-21161ccdb579","type":"PanTool"},{"id":"bc642c65-4188-4367-8d57-9219d9a53bab","type":"WheelZoomTool"},{"id":"1b9bc8f8-d356-4413-8bcd-89e8d8c0a832","type":"BoxZoomTool"},{"id":"8c411f54-ff0e-4dd0-9f10-3e535e764d99","type":"ResetTool"}]},"id":"11a17597-4719-4d53-abb6-0a951d335ead","type":"Toolbar"},{"attributes":{},"id":"d98e835f-3e59-437d-89ad-abab85ac923c","type":"LinearScale"},{"attributes":{"source":{"id":"21ddd85b-e8f2-41a0-8b3c-15e8e3d5a009","type":"ColumnDataSource"}},"id":"eda92660-086d-43a9-833c-8068c7a91786","type":"CDSView"},{"attributes":{},"id":"206ed109-3d86-48c8-8575-21161ccdb579","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"272664f7-deeb-4801-9ebe-87df67d18abf","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"21ddd85b-e8f2-41a0-8b3c-15e8e3d5a009","type":"ColumnDataSource"},"glyph":{"id":"ce4ecbee-d398-429d-a061-f0c798b3a33b","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7116c0a5-cc0b-4418-8a35-93e36ff5b19e","type":"VBar"},"selection_glyph":null,"view":{"id":"eda92660-086d-43a9-833c-8068c7a91786","type":"CDSView"}},"id":"ec7a4fa9-0aa7-4163-bf4b-20323596b751","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["2014/12","2015/01","2015/02","2015/03","2015/04","2015/05","2015/06","2015/07","2015/08","2015/09","2015/10","2015/11","2015/12","2016/01","2016/02","2016/03","2016/04","2016/05","2016/06","2016/07","2016/08","2016/09","2016/10","2016/11","2016/12","2017/01","2017/02","2017/03","2017/04","2017/05","2017/06","2017/07","2017/08","2017/09","2017/10","2017/11","2017/12","2018/01","2018/02","2018/03"]},"id":"12206e8d-9e24-4116-9c39-9cc2c341815d","type":"FactorRange"},{"attributes":{},"id":"71421483-f49c-40aa-ac16-3acf13b19a45","type":"CategoricalTicker"},{"attributes":{"callback":null,"renderers":[{"id":"ec7a4fa9-0aa7-4163-bf4b-20323596b751","type":"GlyphRenderer"}],"tooltips":[["Date","@{date}"],["Games","@{Games}"]]},"id":"b0913504-99af-4c78-964f-52d0c1e47b25","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"ce4ecbee-d398-429d-a061-f0c798b3a33b","type":"VBar"},{"attributes":{"overlay":{"id":"272664f7-deeb-4801-9ebe-87df67d18abf","type":"BoxAnnotation"}},"id":"1b9bc8f8-d356-4413-8bcd-89e8d8c0a832","type":"BoxZoomTool"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"9a7d4b82-544c-4c62-93b8-359e866d534d","type":"CategoricalTickFormatter"},"major_label_orientation":1.5707963267948966,"plot":{"id":"6909e13c-cf6a-4584-992a-0a23f47f47ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"71421483-f49c-40aa-ac16-3acf13b19a45","type":"CategoricalTicker"}},"id":"ea16903a-468d-474b-bf9f-b11d4a9e4f72","type":"CategoricalAxis"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"8b9337ea-05ec-471f-be6e-b253750a256b","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6909e13c-cf6a-4584-992a-0a23f47f47ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad4207d7-b9f1-485f-b5a1-edb77b08d3db","type":"BasicTicker"}},"id":"d66c9a66-46bc-4ebc-8f84-83a9ff0984cc","type":"LinearAxis"},{"attributes":{"below":[{"id":"ea16903a-468d-474b-bf9f-b11d4a9e4f72","type":"CategoricalAxis"}],"left":[{"id":"d66c9a66-46bc-4ebc-8f84-83a9ff0984cc","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":400,"plot_width":750,"renderers":[{"id":"ea16903a-468d-474b-bf9f-b11d4a9e4f72","type":"CategoricalAxis"},{"id":"01b7d71f-5912-4468-90c2-54e8c2c6beed","type":"Grid"},{"id":"d66c9a66-46bc-4ebc-8f84-83a9ff0984cc","type":"LinearAxis"},{"id":"d2f85c94-7aac-45cb-8816-862371718b02","type":"Grid"},{"id":"272664f7-deeb-4801-9ebe-87df67d18abf","type":"BoxAnnotation"},{"id":"ec7a4fa9-0aa7-4163-bf4b-20323596b751","type":"GlyphRenderer"}],"title":{"id":"7382e267-94e3-4606-a89b-20c37d4a048c","type":"Title"},"toolbar":{"id":"11a17597-4719-4d53-abb6-0a951d335ead","type":"Toolbar"},"x_range":{"id":"12206e8d-9e24-4116-9c39-9cc2c341815d","type":"FactorRange"},"x_scale":{"id":"7373a889-363d-4f35-ab57-1989524a9f7c","type":"CategoricalScale"},"y_range":{"id":"d58f5f08-0cd2-4d24-84a0-4a8ae0a7538b","type":"Range1d"},"y_scale":{"id":"d98e835f-3e59-437d-89ad-abab85ac923c","type":"LinearScale"}},"id":"6909e13c-cf6a-4584-992a-0a23f47f47ea","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[154723,146152,154203,148506,154067,133595,126720,124454,131092,132088,149931,145238,152908,134673,147475,136031,131439,124975,105227,116282,120863,125670,123656,108660,98072,86169,91542,83609,73128,59176,58064,55373,49585,55238,68674,59755,64312,71515,79356,29598],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04","2015/03","2015/02","2015/01","2014/12"]}},"id":"21ddd85b-e8f2-41a0-8b3c-15e8e3d5a009","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Antichess","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"7382e267-94e3-4606-a89b-20c37d4a048c","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"7116c0a5-cc0b-4418-8a35-93e36ff5b19e","type":"VBar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"6909e13c-cf6a-4584-992a-0a23f47f47ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad4207d7-b9f1-485f-b5a1-edb77b08d3db","type":"BasicTicker"}},"id":"d2f85c94-7aac-45cb-8816-862371718b02","type":"Grid"},{"attributes":{},"id":"8c411f54-ff0e-4dd0-9f10-3e535e764d99","type":"ResetTool"},{"attributes":{},"id":"7373a889-363d-4f35-ab57-1989524a9f7c","type":"CategoricalScale"},{"attributes":{},"id":"8b9337ea-05ec-471f-be6e-b253750a256b","type":"BasicTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"6909e13c-cf6a-4584-992a-0a23f47f47ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"71421483-f49c-40aa-ac16-3acf13b19a45","type":"CategoricalTicker"}},"id":"01b7d71f-5912-4468-90c2-54e8c2c6beed","type":"Grid"},{"attributes":{},"id":"9a7d4b82-544c-4c62-93b8-359e866d534d","type":"CategoricalTickFormatter"}],"root_ids":["6909e13c-cf6a-4584-992a-0a23f47f47ea"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"6f3aa140-a093-4c12-93d7-1dc85c2f6300","elementid":"17fdfa5d-d806-44bf-afab-34fd9723ffc8","modelid":"6909e13c-cf6a-4584-992a-0a23f47f47ea"}];
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