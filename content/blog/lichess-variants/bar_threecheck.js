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
      };var element = document.getElementById("bc873bd7-c6f6-454b-bdc2-8b374319bfa2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bc873bd7-c6f6-454b-bdc2-8b374319bfa2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"624cfd61-c94c-4553-9035-54ff7cdff55b":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"8488f7bb-5a6b-4412-b185-2d7fc55e4c3b","subtype":"Figure","type":"Plot"},"ticker":{"id":"21d59651-f62f-436f-9bc9-93aa11b3f575","type":"CategoricalTicker"}},"id":"d5f7c1f3-127f-4581-b524-fadf3a4abb5b","type":"Grid"},{"attributes":{"callback":null,"end":75423},"id":"a49ee431-ef16-43a2-91dc-311a2f84262a","type":"Range1d"},{"attributes":{},"id":"20a799d4-3a5e-4000-a0f6-ca52fd8d3113","type":"BasicTicker"},{"attributes":{},"id":"fd2d9d39-4376-4a93-bfc5-89d2dd2f4232","type":"LinearScale"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"11e4fe83-a35e-4e32-9d15-a2aaf69b012c","type":"CategoricalTickFormatter"},"major_label_orientation":1.5707963267948966,"plot":{"id":"8488f7bb-5a6b-4412-b185-2d7fc55e4c3b","subtype":"Figure","type":"Plot"},"ticker":{"id":"21d59651-f62f-436f-9bc9-93aa11b3f575","type":"CategoricalTicker"}},"id":"6a22d1f3-0165-4f9f-b5ae-257932f3b6ed","type":"CategoricalAxis"},{"attributes":{},"id":"2fb62824-2cc3-4d9b-8f89-9696457c5f39","type":"CategoricalScale"},{"attributes":{},"id":"36e07aa1-a5c5-4d3c-adf1-65c3a945a24f","type":"ResetTool"},{"attributes":{"callback":null,"factors":["2014/07","2014/08","2014/09","2014/10","2014/11","2014/12","2015/01","2015/02","2015/03","2015/04","2015/05","2015/06","2015/07","2015/08","2015/09","2015/10","2015/11","2015/12","2016/01","2016/02","2016/03","2016/04","2016/05","2016/06","2016/07","2016/08","2016/09","2016/10","2016/11","2016/12","2017/01","2017/02","2017/03","2017/04","2017/05","2017/06","2017/07","2017/08","2017/09","2017/10","2017/11","2017/12","2018/01","2018/02","2018/03"]},"id":"2ef8399e-920e-4178-b7fd-d8e727f66f21","type":"FactorRange"},{"attributes":{},"id":"11e4fe83-a35e-4e32-9d15-a2aaf69b012c","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"e1cc9d37-61ee-4eb9-8feb-ba9238340d2f","type":"ColumnDataSource"}},"id":"2eefbdf2-6de5-4af5-a0b1-4df6db4dbeca","type":"CDSView"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"8488f7bb-5a6b-4412-b185-2d7fc55e4c3b","subtype":"Figure","type":"Plot"},"ticker":{"id":"20a799d4-3a5e-4000-a0f6-ca52fd8d3113","type":"BasicTicker"}},"id":"ddc61c14-50e3-43cc-9182-94d9676a8ff6","type":"Grid"},{"attributes":{},"id":"21d59651-f62f-436f-9bc9-93aa11b3f575","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[29427,31529,75423,24286,32414,22385,19892,20301,20325,18040,19326,14425,17719,18221,23073,14916,13915,13040,15499,16393,20313,22529,20338,16254,16913,14788,15539,16052,13185,10878,12818,13749,14351,14664,10716,9897,8562,8718,9387,27717,19315,19314,25327,41164,1890],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04","2015/03","2015/02","2015/01","2014/12","2014/11","2014/10","2014/09","2014/08","2014/07"]}},"id":"e1cc9d37-61ee-4eb9-8feb-ba9238340d2f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e1cc9d37-61ee-4eb9-8feb-ba9238340d2f","type":"ColumnDataSource"},"glyph":{"id":"9827c496-be52-404f-ad64-930b58511d26","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a870b150-b686-45d3-ad0b-a1154996c9de","type":"VBar"},"selection_glyph":null,"view":{"id":"2eefbdf2-6de5-4af5-a0b1-4df6db4dbeca","type":"CDSView"}},"id":"af6e1af8-3466-474d-8868-8650b77367c5","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"79c6bb8c-ed90-48a1-919b-346af63ae869","type":"BoxAnnotation"}},"id":"60474053-f9de-489f-a44a-e874ca24a91e","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"6a22d1f3-0165-4f9f-b5ae-257932f3b6ed","type":"CategoricalAxis"}],"left":[{"id":"b499c8dd-22d0-48c6-aa9b-7614a4a9c55f","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":400,"plot_width":750,"renderers":[{"id":"6a22d1f3-0165-4f9f-b5ae-257932f3b6ed","type":"CategoricalAxis"},{"id":"d5f7c1f3-127f-4581-b524-fadf3a4abb5b","type":"Grid"},{"id":"b499c8dd-22d0-48c6-aa9b-7614a4a9c55f","type":"LinearAxis"},{"id":"ddc61c14-50e3-43cc-9182-94d9676a8ff6","type":"Grid"},{"id":"79c6bb8c-ed90-48a1-919b-346af63ae869","type":"BoxAnnotation"},{"id":"af6e1af8-3466-474d-8868-8650b77367c5","type":"GlyphRenderer"}],"title":{"id":"13420fe6-355b-4b7c-a875-491932884c37","type":"Title"},"toolbar":{"id":"e6500626-7589-48e5-a748-d8e08b615bbd","type":"Toolbar"},"x_range":{"id":"2ef8399e-920e-4178-b7fd-d8e727f66f21","type":"FactorRange"},"x_scale":{"id":"2fb62824-2cc3-4d9b-8f89-9696457c5f39","type":"CategoricalScale"},"y_range":{"id":"a49ee431-ef16-43a2-91dc-311a2f84262a","type":"Range1d"},"y_scale":{"id":"fd2d9d39-4376-4a93-bfc5-89d2dd2f4232","type":"LinearScale"}},"id":"8488f7bb-5a6b-4412-b185-2d7fc55e4c3b","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"dcd5e5f9-9dfe-4e41-9db3-dcd1115bae90","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"8488f7bb-5a6b-4412-b185-2d7fc55e4c3b","subtype":"Figure","type":"Plot"},"ticker":{"id":"20a799d4-3a5e-4000-a0f6-ca52fd8d3113","type":"BasicTicker"}},"id":"b499c8dd-22d0-48c6-aa9b-7614a4a9c55f","type":"LinearAxis"},{"attributes":{},"id":"dcd5e5f9-9dfe-4e41-9db3-dcd1115bae90","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Three Check","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"13420fe6-355b-4b7c-a875-491932884c37","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"79c6bb8c-ed90-48a1-919b-346af63ae869","type":"BoxAnnotation"},{"attributes":{},"id":"f219eac6-4f34-4540-87e6-c81df9e79e25","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"9827c496-be52-404f-ad64-930b58511d26","type":"VBar"},{"attributes":{},"id":"7c638abb-b38c-4290-92b6-702f488c9ac2","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"a870b150-b686-45d3-ad0b-a1154996c9de","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"daa21525-27dd-4ab9-b658-b04c74b4db36","type":"HoverTool"},{"id":"f219eac6-4f34-4540-87e6-c81df9e79e25","type":"SaveTool"},{"id":"cfe1ce81-a84c-4dd5-ae63-d824b485a59f","type":"PanTool"},{"id":"7c638abb-b38c-4290-92b6-702f488c9ac2","type":"WheelZoomTool"},{"id":"60474053-f9de-489f-a44a-e874ca24a91e","type":"BoxZoomTool"},{"id":"36e07aa1-a5c5-4d3c-adf1-65c3a945a24f","type":"ResetTool"}]},"id":"e6500626-7589-48e5-a748-d8e08b615bbd","type":"Toolbar"},{"attributes":{},"id":"cfe1ce81-a84c-4dd5-ae63-d824b485a59f","type":"PanTool"},{"attributes":{"callback":null,"renderers":[{"id":"af6e1af8-3466-474d-8868-8650b77367c5","type":"GlyphRenderer"}],"tooltips":[["Date","@{date}"],["Games","@{Games}"]]},"id":"daa21525-27dd-4ab9-b658-b04c74b4db36","type":"HoverTool"}],"root_ids":["8488f7bb-5a6b-4412-b185-2d7fc55e4c3b"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"624cfd61-c94c-4553-9035-54ff7cdff55b","elementid":"bc873bd7-c6f6-454b-bdc2-8b374319bfa2","modelid":"8488f7bb-5a6b-4412-b185-2d7fc55e4c3b"}];
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