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
      };var element = document.getElementById("27923c6c-7a01-43a1-a38f-b1cb36ace64f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '27923c6c-7a01-43a1-a38f-b1cb36ace64f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"99618ace-fff3-4d6a-82a6-8a8bff01b60b":{"roots":{"references":[{"attributes":{},"id":"d874e37e-57af-44b4-a83d-d81fe67ef416","type":"SaveTool"},{"attributes":{},"id":"eefca7fb-f742-41b4-992f-e874bb1385b8","type":"ResetTool"},{"attributes":{"below":[{"id":"5783c19e-9183-45f4-af1f-6bcd3e862394","type":"CategoricalAxis"}],"left":[{"id":"7934ae12-014a-4806-b622-510eb6d6cc0e","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":400,"plot_width":750,"renderers":[{"id":"5783c19e-9183-45f4-af1f-6bcd3e862394","type":"CategoricalAxis"},{"id":"d5b3e550-244a-4a10-9539-5839860368f7","type":"Grid"},{"id":"7934ae12-014a-4806-b622-510eb6d6cc0e","type":"LinearAxis"},{"id":"77b7e822-5e16-4e99-82d8-e11ddb898acf","type":"Grid"},{"id":"20d8144d-9a55-45ac-a102-e2f40466e1b0","type":"BoxAnnotation"},{"id":"a46d2642-a62e-4037-829d-7ad77838d844","type":"GlyphRenderer"}],"title":{"id":"ff72ff74-666e-43ab-b293-abef3f275906","type":"Title"},"toolbar":{"id":"2b4277dc-6068-47d5-956a-ca839c356825","type":"Toolbar"},"x_range":{"id":"b6e9be9b-c31e-426a-9687-ce7cf367d4ca","type":"FactorRange"},"x_scale":{"id":"8f9235f1-1653-4832-8260-7a37ed1eeeac","type":"CategoricalScale"},"y_range":{"id":"1adffd2d-e025-464c-a511-337707ac72ab","type":"Range1d"},"y_scale":{"id":"dbbc2b66-c85f-476a-8c38-02c698745c32","type":"LinearScale"}},"id":"c210cf1a-cf9f-4185-a4eb-fd5d9eefe69e","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"20d8144d-9a55-45ac-a102-e2f40466e1b0","type":"BoxAnnotation"}},"id":"d0a79f79-8e6f-4b0b-9294-32ed872d0189","type":"BoxZoomTool"},{"attributes":{},"id":"dbbc2b66-c85f-476a-8c38-02c698745c32","type":"LinearScale"},{"attributes":{"callback":null,"renderers":[{"id":"a46d2642-a62e-4037-829d-7ad77838d844","type":"GlyphRenderer"}],"tooltips":[["Date","@{date}"],["Games","@{Games}"]]},"id":"a228e06f-b480-40fc-b2e0-f2985bc7c597","type":"HoverTool"},{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[20701,18726,20495,24128,18629,15776,12283,11358,13293,13128,15820,15344,16302,19606,21239,16437,16186,14452,13912,13424,13705,16561,12635,12520,11745,13271,12320,13808,12646,10105,8881,8303,9398,9045,14437,8780],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04"]}},"id":"3a2cb580-79a5-4b22-ac92-e08b9c8a5177","type":"ColumnDataSource"},{"attributes":{},"id":"74ca0789-553b-4d6d-afbc-0a862fb16c9c","type":"BasicTicker"},{"attributes":{"callback":null,"end":24128},"id":"1adffd2d-e025-464c-a511-337707ac72ab","type":"Range1d"},{"attributes":{},"id":"00ec6695-6dfb-49ea-84cf-915bb223bd2e","type":"PanTool"},{"attributes":{},"id":"530e165d-c802-46a0-8494-ed1d4ce6e766","type":"CategoricalTicker"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"ed38a253-8049-4f44-bb89-b3368df2f30f","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"c210cf1a-cf9f-4185-a4eb-fd5d9eefe69e","subtype":"Figure","type":"Plot"},"ticker":{"id":"74ca0789-553b-4d6d-afbc-0a862fb16c9c","type":"BasicTicker"}},"id":"7934ae12-014a-4806-b622-510eb6d6cc0e","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a228e06f-b480-40fc-b2e0-f2985bc7c597","type":"HoverTool"},{"id":"d874e37e-57af-44b4-a83d-d81fe67ef416","type":"SaveTool"},{"id":"00ec6695-6dfb-49ea-84cf-915bb223bd2e","type":"PanTool"},{"id":"2757a97d-4d8d-42e2-934a-d849c57f2960","type":"WheelZoomTool"},{"id":"d0a79f79-8e6f-4b0b-9294-32ed872d0189","type":"BoxZoomTool"},{"id":"eefca7fb-f742-41b4-992f-e874bb1385b8","type":"ResetTool"}]},"id":"2b4277dc-6068-47d5-956a-ca839c356825","type":"Toolbar"},{"attributes":{},"id":"d0c96470-5aa6-422f-91a6-d6f9a4b2d3a9","type":"CategoricalTickFormatter"},{"attributes":{},"id":"ed38a253-8049-4f44-bb89-b3368df2f30f","type":"BasicTickFormatter"},{"attributes":{},"id":"2757a97d-4d8d-42e2-934a-d849c57f2960","type":"WheelZoomTool"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"d0c96470-5aa6-422f-91a6-d6f9a4b2d3a9","type":"CategoricalTickFormatter"},"major_label_orientation":1.5707963267948966,"plot":{"id":"c210cf1a-cf9f-4185-a4eb-fd5d9eefe69e","subtype":"Figure","type":"Plot"},"ticker":{"id":"530e165d-c802-46a0-8494-ed1d4ce6e766","type":"CategoricalTicker"}},"id":"5783c19e-9183-45f4-af1f-6bcd3e862394","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"f5e54e31-6df3-42b7-b2bb-e446ef12bcbf","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"20d8144d-9a55-45ac-a102-e2f40466e1b0","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Horde","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"ff72ff74-666e-43ab-b293-abef3f275906","type":"Title"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"c210cf1a-cf9f-4185-a4eb-fd5d9eefe69e","subtype":"Figure","type":"Plot"},"ticker":{"id":"530e165d-c802-46a0-8494-ed1d4ce6e766","type":"CategoricalTicker"}},"id":"d5b3e550-244a-4a10-9539-5839860368f7","type":"Grid"},{"attributes":{"callback":null,"factors":["2015/04","2015/05","2015/06","2015/07","2015/08","2015/09","2015/10","2015/11","2015/12","2016/01","2016/02","2016/03","2016/04","2016/05","2016/06","2016/07","2016/08","2016/09","2016/10","2016/11","2016/12","2017/01","2017/02","2017/03","2017/04","2017/05","2017/06","2017/07","2017/08","2017/09","2017/10","2017/11","2017/12","2018/01","2018/02","2018/03"]},"id":"b6e9be9b-c31e-426a-9687-ce7cf367d4ca","type":"FactorRange"},{"attributes":{"data_source":{"id":"3a2cb580-79a5-4b22-ac92-e08b9c8a5177","type":"ColumnDataSource"},"glyph":{"id":"5a45c2fb-ac76-4f73-924f-c0d4cb6fd161","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f5e54e31-6df3-42b7-b2bb-e446ef12bcbf","type":"VBar"},"selection_glyph":null,"view":{"id":"94b7659a-682e-454c-be70-6bcfe36686ec","type":"CDSView"}},"id":"a46d2642-a62e-4037-829d-7ad77838d844","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3a2cb580-79a5-4b22-ac92-e08b9c8a5177","type":"ColumnDataSource"}},"id":"94b7659a-682e-454c-be70-6bcfe36686ec","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"5a45c2fb-ac76-4f73-924f-c0d4cb6fd161","type":"VBar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"c210cf1a-cf9f-4185-a4eb-fd5d9eefe69e","subtype":"Figure","type":"Plot"},"ticker":{"id":"74ca0789-553b-4d6d-afbc-0a862fb16c9c","type":"BasicTicker"}},"id":"77b7e822-5e16-4e99-82d8-e11ddb898acf","type":"Grid"},{"attributes":{},"id":"8f9235f1-1653-4832-8260-7a37ed1eeeac","type":"CategoricalScale"}],"root_ids":["c210cf1a-cf9f-4185-a4eb-fd5d9eefe69e"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"99618ace-fff3-4d6a-82a6-8a8bff01b60b","elementid":"27923c6c-7a01-43a1-a38f-b1cb36ace64f","modelid":"c210cf1a-cf9f-4185-a4eb-fd5d9eefe69e"}];
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