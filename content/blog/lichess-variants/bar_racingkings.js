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
      };var element = document.getElementById("63f0e314-08a6-4630-ab7f-5ceea3ca3e54");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '63f0e314-08a6-4630-ab7f-5ceea3ca3e54' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b324a552-7ed7-43fe-ab0c-faf9f6917c8f":{"roots":{"references":[{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"0cbc76ef-0e4d-4cba-ba5e-858cb1ec5c7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd3271d1-9e53-40e2-afbf-8a0196e5acac","type":"BasicTicker"}},"id":"c1cfe45f-edf6-4734-92db-ae63a3d6c149","type":"Grid"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"2ea433cb-5db4-4e6b-b9a1-3c8f2e269f6f","type":"CategoricalTickFormatter"},"major_label_orientation":1.5707963267948966,"plot":{"id":"0cbc76ef-0e4d-4cba-ba5e-858cb1ec5c7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"752e45e4-ae3d-4c38-b211-a8370b63f152","type":"CategoricalTicker"}},"id":"5fd53635-4789-4bee-898a-da79a520fda0","type":"CategoricalAxis"},{"attributes":{},"id":"46b2522c-21bb-4c9c-a308-6da20a015330","type":"ResetTool"},{"attributes":{},"id":"0e543429-ecf1-4065-8f61-62392bffaac4","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"440b31e3-7ed2-45fe-9126-ae6766cc7710","type":"ColumnDataSource"}},"id":"75ee2038-7a36-40a1-a271-c743d6f2c9ee","type":"CDSView"},{"attributes":{"callback":null,"factors":["2016/01","2016/02","2016/03","2016/04","2016/05","2016/06","2016/07","2016/08","2016/09","2016/10","2016/11","2016/12","2017/01","2017/02","2017/03","2017/04","2017/05","2017/06","2017/07","2017/08","2017/09","2017/10","2017/11","2017/12","2018/01","2018/02","2018/03"]},"id":"a387167c-8a40-4797-8f87-06b4d8e0788c","type":"FactorRange"},{"attributes":{},"id":"0bf386ad-d674-4e06-a7ed-3822a6c22fda","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6deba6cf-10a2-4e8a-ad0c-e8cbc1325ff4","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"74c1b87a-bdf2-4422-bbf1-4bd3ff30271d","type":"VBar"},{"attributes":{"below":[{"id":"5fd53635-4789-4bee-898a-da79a520fda0","type":"CategoricalAxis"}],"left":[{"id":"470df48a-dd8f-420c-b16a-201f7e856cf9","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":400,"plot_width":750,"renderers":[{"id":"5fd53635-4789-4bee-898a-da79a520fda0","type":"CategoricalAxis"},{"id":"7fac4bc7-0c17-4049-bbb3-690f47e3fecb","type":"Grid"},{"id":"470df48a-dd8f-420c-b16a-201f7e856cf9","type":"LinearAxis"},{"id":"c1cfe45f-edf6-4734-92db-ae63a3d6c149","type":"Grid"},{"id":"6deba6cf-10a2-4e8a-ad0c-e8cbc1325ff4","type":"BoxAnnotation"},{"id":"bb507324-5632-4f92-b487-4c74fc58fe21","type":"GlyphRenderer"}],"title":{"id":"c69d4b22-15f5-4fdb-9f63-d3463650c40b","type":"Title"},"toolbar":{"id":"4ac92b70-7892-41df-be67-c0cc72b2fe98","type":"Toolbar"},"x_range":{"id":"a387167c-8a40-4797-8f87-06b4d8e0788c","type":"FactorRange"},"x_scale":{"id":"38eb33ad-a232-40f2-8686-cf052b937cc8","type":"CategoricalScale"},"y_range":{"id":"19d81976-4770-4968-8d18-d85a829adebf","type":"Range1d"},"y_scale":{"id":"759746df-eb42-421f-9c86-b56073162c07","type":"LinearScale"}},"id":"0cbc76ef-0e4d-4cba-ba5e-858cb1ec5c7e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"759746df-eb42-421f-9c86-b56073162c07","type":"LinearScale"},{"attributes":{},"id":"2ea433cb-5db4-4e6b-b9a1-3c8f2e269f6f","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"end":25017},"id":"19d81976-4770-4968-8d18-d85a829adebf","type":"Range1d"},{"attributes":{},"id":"bd3271d1-9e53-40e2-afbf-8a0196e5acac","type":"BasicTicker"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"0e543429-ecf1-4065-8f61-62392bffaac4","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"0cbc76ef-0e4d-4cba-ba5e-858cb1ec5c7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd3271d1-9e53-40e2-afbf-8a0196e5acac","type":"BasicTicker"}},"id":"470df48a-dd8f-420c-b16a-201f7e856cf9","type":"LinearAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"0cbc76ef-0e4d-4cba-ba5e-858cb1ec5c7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"752e45e4-ae3d-4c38-b211-a8370b63f152","type":"CategoricalTicker"}},"id":"7fac4bc7-0c17-4049-bbb3-690f47e3fecb","type":"Grid"},{"attributes":{"overlay":{"id":"6deba6cf-10a2-4e8a-ad0c-e8cbc1325ff4","type":"BoxAnnotation"}},"id":"4028459e-ae2d-45bb-a717-be56dbe5b68c","type":"BoxZoomTool"},{"attributes":{},"id":"a26b387b-d752-4f7a-a68f-3088f671213c","type":"WheelZoomTool"},{"attributes":{"callback":null,"renderers":[{"id":"bb507324-5632-4f92-b487-4c74fc58fe21","type":"GlyphRenderer"}],"tooltips":[["Date","@{date}"],["Games","@{Games}"]]},"id":"2fa71c56-56e8-4c91-a769-f019564401ed","type":"HoverTool"},{"attributes":{},"id":"752e45e4-ae3d-4c38-b211-a8370b63f152","type":"CategoricalTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"00ebd12a-8dda-4b2b-8211-83cd30b72b00","type":"VBar"},{"attributes":{"plot":null,"text":"Racing Kings","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"c69d4b22-15f5-4fdb-9f63-d3463650c40b","type":"Title"},{"attributes":{"data_source":{"id":"440b31e3-7ed2-45fe-9126-ae6766cc7710","type":"ColumnDataSource"},"glyph":{"id":"00ebd12a-8dda-4b2b-8211-83cd30b72b00","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74c1b87a-bdf2-4422-bbf1-4bd3ff30271d","type":"VBar"},"selection_glyph":null,"view":{"id":"75ee2038-7a36-40a1-a271-c743d6f2c9ee","type":"CDSView"}},"id":"bb507324-5632-4f92-b487-4c74fc58fe21","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2fa71c56-56e8-4c91-a769-f019564401ed","type":"HoverTool"},{"id":"3f64cadc-3133-493d-aa67-05099d7ed542","type":"SaveTool"},{"id":"0bf386ad-d674-4e06-a7ed-3822a6c22fda","type":"PanTool"},{"id":"a26b387b-d752-4f7a-a68f-3088f671213c","type":"WheelZoomTool"},{"id":"4028459e-ae2d-45bb-a717-be56dbe5b68c","type":"BoxZoomTool"},{"id":"46b2522c-21bb-4c9c-a308-6da20a015330","type":"ResetTool"}]},"id":"4ac92b70-7892-41df-be67-c0cc72b2fe98","type":"Toolbar"},{"attributes":{},"id":"3f64cadc-3133-493d-aa67-05099d7ed542","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[11128,10569,13960,14788,17759,9605,8572,9197,10112,12587,11964,6636,10410,12095,12917,11229,9171,10014,7836,11296,13042,13703,8942,11192,11674,12074,25017],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01"]}},"id":"440b31e3-7ed2-45fe-9126-ae6766cc7710","type":"ColumnDataSource"},{"attributes":{},"id":"38eb33ad-a232-40f2-8686-cf052b937cc8","type":"CategoricalScale"}],"root_ids":["0cbc76ef-0e4d-4cba-ba5e-858cb1ec5c7e"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"b324a552-7ed7-43fe-ab0c-faf9f6917c8f","elementid":"63f0e314-08a6-4630-ab7f-5ceea3ca3e54","modelid":"0cbc76ef-0e4d-4cba-ba5e-858cb1ec5c7e"}];
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