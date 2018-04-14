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
      };var element = document.getElementById("87d881ce-7633-4ca7-abcf-4a6591e23eac");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '87d881ce-7633-4ca7-abcf-4a6591e23eac' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7bae4299-334a-49ca-9ed9-1ffbdb9c1744":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[77342,79336,62625,58159,58267,45696,43978,41011,41239,41782,37334,33393,38284,32584,36699,34324,34945,32789,33286,30392,29433,26312,33010,30011,29783,30575,30382,29170,31247,29474,26245,23332,20937,19816,18462,18328,17616,16239,18559,23648,29447,26194,23867,23533,23734,21938,24033,21458,18389,18834,21926,17142,11533,11350,9432,10559],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04","2015/03","2015/02","2015/01","2014/12","2014/11","2014/10","2014/09","2014/08","2014/07","2014/06","2014/05","2014/04","2014/03","2014/02","2014/01","2013/12","2013/11","2013/10","2013/09","2013/08"]}},"id":"0cfecd6c-53e1-4090-b628-a4a724c59096","type":"ColumnDataSource"},{"attributes":{},"id":"20b298f3-72e4-42f5-94a5-0792f5ef7fec","type":"ResetTool"},{"attributes":{},"id":"cee79b2a-86fd-42a6-b221-87b30b2b1bbe","type":"CategoricalScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"98c2d9c8-a8de-4f62-934a-c3c454f9262b","type":"HoverTool"},{"id":"c398c78f-7708-418b-8de4-f9ff7f79b01f","type":"SaveTool"},{"id":"d310a815-a0cb-4cbf-b754-d7e52952d458","type":"PanTool"},{"id":"393cf99f-0a01-4fbf-af4e-631a095c1621","type":"WheelZoomTool"},{"id":"db5d7753-6106-4db8-8d48-72468b9e2c6b","type":"BoxZoomTool"},{"id":"20b298f3-72e4-42f5-94a5-0792f5ef7fec","type":"ResetTool"}]},"id":"8103b36b-79ef-4885-b593-171ae5752fee","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"365a936e-0811-4a27-93af-2906177ce38a","type":"VBar"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"8621c20a-48c9-4944-8b51-9537771b0eaf","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"b37bef08-1fb3-47fe-a3b9-e8348f430bd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"a3612fdf-f2c5-46b2-b1a8-13c8d2f472ba","type":"BasicTicker"}},"id":"8e45e5b1-30d7-4eaa-b602-6cdf5e0a9b2d","type":"LinearAxis"},{"attributes":{},"id":"e431e3f3-7812-4409-a12d-8fad7c596b71","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"b37bef08-1fb3-47fe-a3b9-e8348f430bd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"b662e3f9-d19f-4259-bec5-530a30d92ba3","type":"CategoricalTicker"}},"id":"70b7ee0c-18bb-4b9d-94f2-b6e8d263ea19","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"b8b8a4c3-3439-43b3-965d-0761d474657a","type":"VBar"},{"attributes":{},"id":"c398c78f-7708-418b-8de4-f9ff7f79b01f","type":"SaveTool"},{"attributes":{"callback":null,"renderers":[{"id":"79097f8c-f65d-4d37-aa56-0390a81ae1cd","type":"GlyphRenderer"}],"tooltips":[["Date","@{date}"],["Games","@{Games}"]]},"id":"98c2d9c8-a8de-4f62-934a-c3c454f9262b","type":"HoverTool"},{"attributes":{"data_source":{"id":"0cfecd6c-53e1-4090-b628-a4a724c59096","type":"ColumnDataSource"},"glyph":{"id":"365a936e-0811-4a27-93af-2906177ce38a","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b8b8a4c3-3439-43b3-965d-0761d474657a","type":"VBar"},"selection_glyph":null,"view":{"id":"41665323-327a-4972-85f4-c325aaebd9d6","type":"CDSView"}},"id":"79097f8c-f65d-4d37-aa56-0390a81ae1cd","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f96fb910-bafd-4c57-adbb-b4cce12ac6a5","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":79336},"id":"f15104c6-b11d-44a1-aab1-8b4a7a6a1bc8","type":"Range1d"},{"attributes":{},"id":"76b1d0e2-ebad-4e50-9f24-aecb83ea32ca","type":"CategoricalTickFormatter"},{"attributes":{},"id":"d310a815-a0cb-4cbf-b754-d7e52952d458","type":"PanTool"},{"attributes":{"below":[{"id":"54bd5dcc-efd8-4d65-90c2-ce7a6f00fe81","type":"CategoricalAxis"}],"left":[{"id":"8e45e5b1-30d7-4eaa-b602-6cdf5e0a9b2d","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":400,"plot_width":750,"renderers":[{"id":"54bd5dcc-efd8-4d65-90c2-ce7a6f00fe81","type":"CategoricalAxis"},{"id":"70b7ee0c-18bb-4b9d-94f2-b6e8d263ea19","type":"Grid"},{"id":"8e45e5b1-30d7-4eaa-b602-6cdf5e0a9b2d","type":"LinearAxis"},{"id":"79068bab-6d2c-4a20-b318-1389bee556ad","type":"Grid"},{"id":"f96fb910-bafd-4c57-adbb-b4cce12ac6a5","type":"BoxAnnotation"},{"id":"79097f8c-f65d-4d37-aa56-0390a81ae1cd","type":"GlyphRenderer"}],"title":{"id":"2298624a-2c69-42f4-907b-e01043dae22b","type":"Title"},"toolbar":{"id":"8103b36b-79ef-4885-b593-171ae5752fee","type":"Toolbar"},"x_range":{"id":"37f9df19-4fae-4ffd-8c7c-391b234fcf2c","type":"FactorRange"},"x_scale":{"id":"cee79b2a-86fd-42a6-b221-87b30b2b1bbe","type":"CategoricalScale"},"y_range":{"id":"f15104c6-b11d-44a1-aab1-8b4a7a6a1bc8","type":"Range1d"},"y_scale":{"id":"e431e3f3-7812-4409-a12d-8fad7c596b71","type":"LinearScale"}},"id":"b37bef08-1fb3-47fe-a3b9-e8348f430bd2","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"factors":["2013/08","2013/09","2013/10","2013/11","2013/12","2014/01","2014/02","2014/03","2014/04","2014/05","2014/06","2014/07","2014/08","2014/09","2014/10","2014/11","2014/12","2015/01","2015/02","2015/03","2015/04","2015/05","2015/06","2015/07","2015/08","2015/09","2015/10","2015/11","2015/12","2016/01","2016/02","2016/03","2016/04","2016/05","2016/06","2016/07","2016/08","2016/09","2016/10","2016/11","2016/12","2017/01","2017/02","2017/03","2017/04","2017/05","2017/06","2017/07","2017/08","2017/09","2017/10","2017/11","2017/12","2018/01","2018/02","2018/03"]},"id":"37f9df19-4fae-4ffd-8c7c-391b234fcf2c","type":"FactorRange"},{"attributes":{},"id":"393cf99f-0a01-4fbf-af4e-631a095c1621","type":"WheelZoomTool"},{"attributes":{},"id":"a3612fdf-f2c5-46b2-b1a8-13c8d2f472ba","type":"BasicTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"b37bef08-1fb3-47fe-a3b9-e8348f430bd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"a3612fdf-f2c5-46b2-b1a8-13c8d2f472ba","type":"BasicTicker"}},"id":"79068bab-6d2c-4a20-b318-1389bee556ad","type":"Grid"},{"attributes":{"source":{"id":"0cfecd6c-53e1-4090-b628-a4a724c59096","type":"ColumnDataSource"}},"id":"41665323-327a-4972-85f4-c325aaebd9d6","type":"CDSView"},{"attributes":{"overlay":{"id":"f96fb910-bafd-4c57-adbb-b4cce12ac6a5","type":"BoxAnnotation"}},"id":"db5d7753-6106-4db8-8d48-72468b9e2c6b","type":"BoxZoomTool"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"76b1d0e2-ebad-4e50-9f24-aecb83ea32ca","type":"CategoricalTickFormatter"},"major_label_orientation":1.5707963267948966,"plot":{"id":"b37bef08-1fb3-47fe-a3b9-e8348f430bd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"b662e3f9-d19f-4259-bec5-530a30d92ba3","type":"CategoricalTicker"}},"id":"54bd5dcc-efd8-4d65-90c2-ce7a6f00fe81","type":"CategoricalAxis"},{"attributes":{},"id":"b662e3f9-d19f-4259-bec5-530a30d92ba3","type":"CategoricalTicker"},{"attributes":{},"id":"8621c20a-48c9-4944-8b51-9537771b0eaf","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Chess960","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"2298624a-2c69-42f4-907b-e01043dae22b","type":"Title"}],"root_ids":["b37bef08-1fb3-47fe-a3b9-e8348f430bd2"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"7bae4299-334a-49ca-9ed9-1ffbdb9c1744","elementid":"87d881ce-7633-4ca7-abcf-4a6591e23eac","modelid":"b37bef08-1fb3-47fe-a3b9-e8348f430bd2"}];
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