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
      };var element = document.getElementById("0b85ccb7-006b-4bf1-af3d-ed45cafcfb5b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0b85ccb7-006b-4bf1-af3d-ed45cafcfb5b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d1f5a882-4977-4690-926b-388694705f0a":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#30a2da"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"f34ba316-79ed-4164-9d04-355406b51e88","type":"VBar"},{"attributes":{},"id":"18138a10-063a-40ef-bb90-5da1031980f7","type":"CategoricalTicker"},{"attributes":{"items":[],"plot":{"id":"13c7b3be-369c-4dc3-83be-c3a17a89a214","subtype":"Figure","type":"Plot"}},"id":"927a20f9-f3b4-4554-b124-d6421f20e4be","type":"Legend"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"50fca27e-9658-46b1-bc7e-068a289a0baa","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"13c7b3be-369c-4dc3-83be-c3a17a89a214","subtype":"Figure","type":"Plot"},"ticker":{"id":"a02a4be3-8787-450c-ac74-25ccff2a86f6","type":"BasicTicker"}},"id":"636a424d-4e8c-448e-8aca-3ab3ef79a501","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Racing Kings","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"7f516be4-af57-40a2-92d2-8ea0919b84b6","type":"Title"},{"attributes":{},"id":"1f0a15d2-872c-40c0-8e44-7e84d9bbcc7a","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"value":"#30a2da"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"8ba5c667-6fcb-40ed-a63a-cc4a217619bb","type":"VBar"},{"attributes":{},"id":"e41248b9-ba3a-4522-af6c-764d2539db09","type":"SaveTool"},{"attributes":{},"id":"ea141c48-8cea-408b-8d66-c2d8e0db5006","type":"ResetTool"},{"attributes":{},"id":"c9eb553e-4929-49a0-9e87-ab11cd81a8b2","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"379bdfa2-3c3e-4640-8600-993c1c6515ee","type":"ColumnDataSource"},"glyph":{"id":"8ba5c667-6fcb-40ed-a63a-cc4a217619bb","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f34ba316-79ed-4164-9d04-355406b51e88","type":"VBar"},"selection_glyph":null,"view":{"id":"625e49f9-0165-4a40-b63d-3ae527be4220","type":"CDSView"}},"id":"8a1f3725-10b8-49df-8448-6dc8bb2d939a","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"84b8521c-0334-45a5-843d-ddb2f75e5aae","type":"BoxAnnotation"},{"attributes":{},"id":"50fca27e-9658-46b1-bc7e-068a289a0baa","type":"BasicTickFormatter"},{"attributes":{},"id":"a02a4be3-8787-450c-ac74-25ccff2a86f6","type":"BasicTicker"},{"attributes":{},"id":"d465bc04-8b17-4ea5-9fff-76ab9fcecd3e","type":"PanTool"},{"attributes":{"below":[{"id":"fef5bc4f-6796-4c22-9987-7225b74b7523","type":"CategoricalAxis"}],"left":[{"id":"636a424d-4e8c-448e-8aca-3ab3ef79a501","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":300,"renderers":[{"id":"fef5bc4f-6796-4c22-9987-7225b74b7523","type":"CategoricalAxis"},{"id":"2cd1ca1c-163a-496f-85e0-f85f682876da","type":"Grid"},{"id":"636a424d-4e8c-448e-8aca-3ab3ef79a501","type":"LinearAxis"},{"id":"401dc427-5ab8-4415-a1cf-ee094e63a43b","type":"Grid"},{"id":"84b8521c-0334-45a5-843d-ddb2f75e5aae","type":"BoxAnnotation"},{"id":"927a20f9-f3b4-4554-b124-d6421f20e4be","type":"Legend"},{"id":"8a1f3725-10b8-49df-8448-6dc8bb2d939a","type":"GlyphRenderer"}],"title":{"id":"7f516be4-af57-40a2-92d2-8ea0919b84b6","type":"Title"},"toolbar":{"id":"0cb864fa-5e9e-46a2-9d62-344ecf89ec05","type":"Toolbar"},"x_range":{"id":"e5f94a2c-db40-4724-b8d6-a51bb8079e9b","type":"FactorRange"},"x_scale":{"id":"6248d47c-b8cc-4f5b-9dc4-1a5e2cd0996c","type":"CategoricalScale"},"y_range":{"id":"3ee10977-3f82-42e2-9a5d-be9806426d07","type":"Range1d"},"y_scale":{"id":"50b792cd-80f6-418a-b99c-9841cf903a16","type":"LinearScale"}},"id":"13c7b3be-369c-4dc3-83be-c3a17a89a214","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"factors":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01"]},"id":"e5f94a2c-db40-4724-b8d6-a51bb8079e9b","type":"FactorRange"},{"attributes":{"overlay":{"id":"84b8521c-0334-45a5-843d-ddb2f75e5aae","type":"BoxAnnotation"}},"id":"e852033b-b37d-4e1b-8815-d4741754df6d","type":"BoxZoomTool"},{"attributes":{},"id":"6248d47c-b8cc-4f5b-9dc4-1a5e2cd0996c","type":"CategoricalScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e41248b9-ba3a-4522-af6c-764d2539db09","type":"SaveTool"},{"id":"d465bc04-8b17-4ea5-9fff-76ab9fcecd3e","type":"PanTool"},{"id":"c9eb553e-4929-49a0-9e87-ab11cd81a8b2","type":"WheelZoomTool"},{"id":"e852033b-b37d-4e1b-8815-d4741754df6d","type":"BoxZoomTool"},{"id":"ea141c48-8cea-408b-8d66-c2d8e0db5006","type":"ResetTool"}]},"id":"0cb864fa-5e9e-46a2-9d62-344ecf89ec05","type":"Toolbar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"13c7b3be-369c-4dc3-83be-c3a17a89a214","subtype":"Figure","type":"Plot"},"ticker":{"id":"18138a10-063a-40ef-bb90-5da1031980f7","type":"CategoricalTicker"}},"id":"2cd1ca1c-163a-496f-85e0-f85f682876da","type":"Grid"},{"attributes":{},"id":"50b792cd-80f6-418a-b99c-9841cf903a16","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[11128,10569,13960,14788,17759,9605,8572,9197,10112,12587,11964,6636,10410,12095,12917,11229,9171,10014,7836,11296,13042,13703,8942,11192,11674,12074,25017],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01"]}},"id":"379bdfa2-3c3e-4640-8600-993c1c6515ee","type":"ColumnDataSource"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"13c7b3be-369c-4dc3-83be-c3a17a89a214","subtype":"Figure","type":"Plot"},"ticker":{"id":"a02a4be3-8787-450c-ac74-25ccff2a86f6","type":"BasicTicker"}},"id":"401dc427-5ab8-4415-a1cf-ee094e63a43b","type":"Grid"},{"attributes":{"source":{"id":"379bdfa2-3c3e-4640-8600-993c1c6515ee","type":"ColumnDataSource"}},"id":"625e49f9-0165-4a40-b63d-3ae527be4220","type":"CDSView"},{"attributes":{"callback":null,"end":25017},"id":"3ee10977-3f82-42e2-9a5d-be9806426d07","type":"Range1d"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"1f0a15d2-872c-40c0-8e44-7e84d9bbcc7a","type":"CategoricalTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"13c7b3be-369c-4dc3-83be-c3a17a89a214","subtype":"Figure","type":"Plot"},"ticker":{"id":"18138a10-063a-40ef-bb90-5da1031980f7","type":"CategoricalTicker"}},"id":"fef5bc4f-6796-4c22-9987-7225b74b7523","type":"CategoricalAxis"}],"root_ids":["13c7b3be-369c-4dc3-83be-c3a17a89a214"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"d1f5a882-4977-4690-926b-388694705f0a","elementid":"0b85ccb7-006b-4bf1-af3d-ed45cafcfb5b","modelid":"13c7b3be-369c-4dc3-83be-c3a17a89a214"}];
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