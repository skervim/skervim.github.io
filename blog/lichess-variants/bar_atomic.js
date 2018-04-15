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
      };var element = document.getElementById("7ff36197-1463-43e8-b8d8-3c3b47002f7f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7ff36197-1463-43e8-b8d8-3c3b47002f7f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"83edba13-56b2-480f-bc27-f4ec84ac3709":{"roots":{"references":[{"attributes":{},"id":"f46efbf5-e3c4-48e9-be63-678e426e87cc","type":"SaveTool"},{"attributes":{},"id":"9cf03e4d-8782-4e70-8532-521822f786f2","type":"BasicTicker"},{"attributes":{},"id":"57c24810-0db2-4de9-b707-3beef554dd63","type":"BasicTickFormatter"},{"attributes":{},"id":"12eae278-9115-4d65-b0b4-8b36457e7ab1","type":"CategoricalScale"},{"attributes":{"below":[{"id":"6784decb-b2af-42df-abfe-f7653b4400b1","type":"CategoricalAxis"}],"left":[{"id":"f9806624-c597-47b0-9b95-85a25ef7898c","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":400,"plot_width":750,"renderers":[{"id":"6784decb-b2af-42df-abfe-f7653b4400b1","type":"CategoricalAxis"},{"id":"512fff51-905e-4364-9f26-470a2c8362c3","type":"Grid"},{"id":"f9806624-c597-47b0-9b95-85a25ef7898c","type":"LinearAxis"},{"id":"e6f96ab9-44fd-44cc-87a7-eda18292dd3c","type":"Grid"},{"id":"eb660e60-70e7-4b36-bf75-1f860cf71756","type":"BoxAnnotation"},{"id":"ee4e10e6-bc27-4b8c-8496-c4cd3c61a5a1","type":"GlyphRenderer"}],"title":{"id":"38a96dd2-1515-4dfc-80c1-a3b006afb2cb","type":"Title"},"toolbar":{"id":"82e38330-86d6-4237-9230-d050c80fc2c9","type":"Toolbar"},"x_range":{"id":"a962f32a-ab95-45bc-a7fd-0418f76657df","type":"FactorRange"},"x_scale":{"id":"12eae278-9115-4d65-b0b4-8b36457e7ab1","type":"CategoricalScale"},"y_range":{"id":"a33ac9f7-9357-4eb7-99a4-aba0c3249674","type":"Range1d"},"y_scale":{"id":"7828b902-9b00-4068-be60-9e54110094c3","type":"LinearScale"}},"id":"ba0bab12-a254-492f-adae-ecafa622267b","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"renderers":[{"id":"ee4e10e6-bc27-4b8c-8496-c4cd3c61a5a1","type":"GlyphRenderer"}],"tooltips":[["Date","@{date}"],["Games","@{Games}"]]},"id":"b1374123-d871-4a62-8954-5ad0b853041f","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"eb660e60-70e7-4b36-bf75-1f860cf71756","type":"BoxAnnotation"},{"attributes":{},"id":"fe927538-ea0a-4079-b7fe-aa76e1e1bc58","type":"ResetTool"},{"attributes":{"callback":null,"end":132414},"id":"a33ac9f7-9357-4eb7-99a4-aba0c3249674","type":"Range1d"},{"attributes":{},"id":"a3c39510-fd17-4a54-9cac-51e23e1d880f","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"a3c39510-fd17-4a54-9cac-51e23e1d880f","type":"CategoricalTickFormatter"},"major_label_orientation":1.5707963267948966,"plot":{"id":"ba0bab12-a254-492f-adae-ecafa622267b","subtype":"Figure","type":"Plot"},"ticker":{"id":"e25b7dcd-375f-43d8-8161-ca2d5f5fe19e","type":"CategoricalTicker"}},"id":"6784decb-b2af-42df-abfe-f7653b4400b1","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b1374123-d871-4a62-8954-5ad0b853041f","type":"HoverTool"},{"id":"f46efbf5-e3c4-48e9-be63-678e426e87cc","type":"SaveTool"},{"id":"4b9bab31-a173-4cab-97c8-26c0e114356e","type":"PanTool"},{"id":"8b36ef0c-bdb9-4be6-8c77-229ef87c90e2","type":"WheelZoomTool"},{"id":"5c2c01cc-20a5-4ce1-804b-853d2824aed5","type":"BoxZoomTool"},{"id":"fe927538-ea0a-4079-b7fe-aa76e1e1bc58","type":"ResetTool"}]},"id":"82e38330-86d6-4237-9230-d050c80fc2c9","type":"Toolbar"},{"attributes":{},"id":"4b9bab31-a173-4cab-97c8-26c0e114356e","type":"PanTool"},{"attributes":{},"id":"7828b902-9b00-4068-be60-9e54110094c3","type":"LinearScale"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"ba0bab12-a254-492f-adae-ecafa622267b","subtype":"Figure","type":"Plot"},"ticker":{"id":"9cf03e4d-8782-4e70-8532-521822f786f2","type":"BasicTicker"}},"id":"e6f96ab9-44fd-44cc-87a7-eda18292dd3c","type":"Grid"},{"attributes":{"callback":null,"factors":["2015/01","2015/02","2015/03","2015/04","2015/05","2015/06","2015/07","2015/08","2015/09","2015/10","2015/11","2015/12","2016/01","2016/02","2016/03","2016/04","2016/05","2016/06","2016/07","2016/08","2016/09","2016/10","2016/11","2016/12","2017/01","2017/02","2017/03","2017/04","2017/05","2017/06","2017/07","2017/08","2017/09","2017/10","2017/11","2017/12","2018/01","2018/02","2018/03"]},"id":"a962f32a-ab95-45bc-a7fd-0418f76657df","type":"FactorRange"},{"attributes":{"plot":null,"text":"Atomic","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"38a96dd2-1515-4dfc-80c1-a3b006afb2cb","type":"Title"},{"attributes":{"data_source":{"id":"4ebb951e-0fc6-4855-b419-59c3b9e75a8f","type":"ColumnDataSource"},"glyph":{"id":"e6eecad9-53f8-44f9-99f6-fd480b134da7","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39dd0b98-beda-47aa-8828-be98e46dc7a4","type":"VBar"},"selection_glyph":null,"view":{"id":"71af4e72-1895-4466-b4dc-587e551dc400","type":"CDSView"}},"id":"ee4e10e6-bc27-4b8c-8496-c4cd3c61a5a1","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[95236,132414,103922,104729,75494,68728,62830,65938,66929,63153,60051,64126,71266,67850,68592,81701,77418,60317,65781,51464,59874,68689,66663,74438,84281,65865,55123,52117,42237,22885,25945,24620,33403,30694,28857,24757,35759,40401,36430],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04","2015/03","2015/02","2015/01"]}},"id":"4ebb951e-0fc6-4855-b419-59c3b9e75a8f","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4ebb951e-0fc6-4855-b419-59c3b9e75a8f","type":"ColumnDataSource"}},"id":"71af4e72-1895-4466-b4dc-587e551dc400","type":"CDSView"},{"attributes":{},"id":"e25b7dcd-375f-43d8-8161-ca2d5f5fe19e","type":"CategoricalTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ba0bab12-a254-492f-adae-ecafa622267b","subtype":"Figure","type":"Plot"},"ticker":{"id":"e25b7dcd-375f-43d8-8161-ca2d5f5fe19e","type":"CategoricalTicker"}},"id":"512fff51-905e-4364-9f26-470a2c8362c3","type":"Grid"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"57c24810-0db2-4de9-b707-3beef554dd63","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"ba0bab12-a254-492f-adae-ecafa622267b","subtype":"Figure","type":"Plot"},"ticker":{"id":"9cf03e4d-8782-4e70-8532-521822f786f2","type":"BasicTicker"}},"id":"f9806624-c597-47b0-9b95-85a25ef7898c","type":"LinearAxis"},{"attributes":{},"id":"8b36ef0c-bdb9-4be6-8c77-229ef87c90e2","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"e6eecad9-53f8-44f9-99f6-fd480b134da7","type":"VBar"},{"attributes":{"overlay":{"id":"eb660e60-70e7-4b36-bf75-1f860cf71756","type":"BoxAnnotation"}},"id":"5c2c01cc-20a5-4ce1-804b-853d2824aed5","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"39dd0b98-beda-47aa-8828-be98e46dc7a4","type":"VBar"}],"root_ids":["ba0bab12-a254-492f-adae-ecafa622267b"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"83edba13-56b2-480f-bc27-f4ec84ac3709","elementid":"7ff36197-1463-43e8-b8d8-3c3b47002f7f","modelid":"ba0bab12-a254-492f-adae-ecafa622267b"}];
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