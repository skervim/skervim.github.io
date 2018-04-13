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
      };var element = document.getElementById("4b44fb9a-bf64-4df0-b05d-e307b8adc587");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4b44fb9a-bf64-4df0-b05d-e307b8adc587' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8387b85f-20df-4f20-911a-5b714111086d":{"roots":{"references":[{"attributes":{"items":[],"plot":{"id":"5ca01cfe-db1f-40e5-9984-1f6173975ca5","subtype":"Figure","type":"Plot"}},"id":"172be91c-e112-4e00-a76c-e232f3ae999a","type":"Legend"},{"attributes":{"plot":null,"text":"Three Check","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"81bb5783-1f70-44d3-a304-5ac40f2a587f","type":"Title"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"9404011f-6a4a-4412-a242-7a87cb2eec92","type":"CategoricalTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"5ca01cfe-db1f-40e5-9984-1f6173975ca5","subtype":"Figure","type":"Plot"},"ticker":{"id":"dfbdcd7c-fb00-4bd8-92ed-42223cd62e91","type":"CategoricalTicker"}},"id":"a7c7efda-c3de-4cae-b6bb-18611925e97b","type":"CategoricalAxis"},{"attributes":{},"id":"9404011f-6a4a-4412-a242-7a87cb2eec92","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"value":"#30a2da"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"62a9c9b8-f29d-4bea-82ca-978e8ec5dfed","type":"VBar"},{"attributes":{"overlay":{"id":"8498f8ff-a252-4d8d-95c2-c43b85554bf6","type":"BoxAnnotation"}},"id":"810b98bf-0c1c-4c5d-b834-52e55d26c3d4","type":"BoxZoomTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"5ca01cfe-db1f-40e5-9984-1f6173975ca5","subtype":"Figure","type":"Plot"},"ticker":{"id":"2aefd5c3-c2d1-4017-840d-499b93e24ff1","type":"BasicTicker"}},"id":"d1738ee2-6744-44fa-82c6-b9b8f6c745a2","type":"Grid"},{"attributes":{"data_source":{"id":"bd8d7575-5ef9-4c35-8f30-2bbf24cd19f2","type":"ColumnDataSource"},"glyph":{"id":"62a9c9b8-f29d-4bea-82ca-978e8ec5dfed","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b0c53325-164a-4675-b329-bd268fa27945","type":"VBar"},"selection_glyph":null,"view":{"id":"d4362f5d-0c9d-4e13-979e-0c0807c7a7a1","type":"CDSView"}},"id":"9494a526-d226-4010-8008-462ec98800b2","type":"GlyphRenderer"},{"attributes":{},"id":"dfbdcd7c-fb00-4bd8-92ed-42223cd62e91","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[29427,31529,75423,24286,32414,22385,19892,20301,20325,18040,19326,14425,17719,18221,23073,14916,13915,13040,15499,16393,20313,22529,20338,16254,16913,14788,15539,16052,13185,10878,12818,13749,14351,14664,10716,9897,8562,8718,9387,27717,19315,19314,25327,41164,1890],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04","2015/03","2015/02","2015/01","2014/12","2014/11","2014/10","2014/09","2014/08","2014/07"]}},"id":"bd8d7575-5ef9-4c35-8f30-2bbf24cd19f2","type":"ColumnDataSource"},{"attributes":{},"id":"43ddeda8-5f02-406e-835d-332f7cd01605","type":"PanTool"},{"attributes":{},"id":"2bd10fff-57ca-4274-994c-5737e24738fc","type":"CategoricalScale"},{"attributes":{},"id":"bd4697d9-bb29-425b-a795-73a02030a746","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8498f8ff-a252-4d8d-95c2-c43b85554bf6","type":"BoxAnnotation"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"a6a02378-2d0d-48b4-956d-d9a41b993b0d","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"5ca01cfe-db1f-40e5-9984-1f6173975ca5","subtype":"Figure","type":"Plot"},"ticker":{"id":"2aefd5c3-c2d1-4017-840d-499b93e24ff1","type":"BasicTicker"}},"id":"0e53e591-6910-4c5f-bec8-1676ea7f58ba","type":"LinearAxis"},{"attributes":{},"id":"a6a02378-2d0d-48b4-956d-d9a41b993b0d","type":"BasicTickFormatter"},{"attributes":{},"id":"a922343c-a361-4cd5-867a-2e32f1b1604b","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#30a2da"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"b0c53325-164a-4675-b329-bd268fa27945","type":"VBar"},{"attributes":{},"id":"de99f8eb-ddec-4a50-80fd-276a5e226c16","type":"SaveTool"},{"attributes":{"source":{"id":"bd8d7575-5ef9-4c35-8f30-2bbf24cd19f2","type":"ColumnDataSource"}},"id":"d4362f5d-0c9d-4e13-979e-0c0807c7a7a1","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"de99f8eb-ddec-4a50-80fd-276a5e226c16","type":"SaveTool"},{"id":"43ddeda8-5f02-406e-835d-332f7cd01605","type":"PanTool"},{"id":"645852c2-ae29-4b07-8cf6-12b5ed8c2479","type":"WheelZoomTool"},{"id":"810b98bf-0c1c-4c5d-b834-52e55d26c3d4","type":"BoxZoomTool"},{"id":"bd4697d9-bb29-425b-a795-73a02030a746","type":"ResetTool"}]},"id":"7602245b-c161-46d5-8366-3de2288cdff5","type":"Toolbar"},{"attributes":{"callback":null,"end":75423},"id":"c6542554-fe97-4110-a22f-83ce8aa5b732","type":"Range1d"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"5ca01cfe-db1f-40e5-9984-1f6173975ca5","subtype":"Figure","type":"Plot"},"ticker":{"id":"dfbdcd7c-fb00-4bd8-92ed-42223cd62e91","type":"CategoricalTicker"}},"id":"fce7cebc-b309-4579-b501-026fd7e22577","type":"Grid"},{"attributes":{},"id":"2aefd5c3-c2d1-4017-840d-499b93e24ff1","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04","2015/03","2015/02","2015/01","2014/12","2014/11","2014/10","2014/09","2014/08","2014/07"]},"id":"4fce3ea0-82b5-4833-865a-d3f8c65994be","type":"FactorRange"},{"attributes":{},"id":"645852c2-ae29-4b07-8cf6-12b5ed8c2479","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"a7c7efda-c3de-4cae-b6bb-18611925e97b","type":"CategoricalAxis"}],"left":[{"id":"0e53e591-6910-4c5f-bec8-1676ea7f58ba","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":300,"renderers":[{"id":"a7c7efda-c3de-4cae-b6bb-18611925e97b","type":"CategoricalAxis"},{"id":"fce7cebc-b309-4579-b501-026fd7e22577","type":"Grid"},{"id":"0e53e591-6910-4c5f-bec8-1676ea7f58ba","type":"LinearAxis"},{"id":"d1738ee2-6744-44fa-82c6-b9b8f6c745a2","type":"Grid"},{"id":"8498f8ff-a252-4d8d-95c2-c43b85554bf6","type":"BoxAnnotation"},{"id":"172be91c-e112-4e00-a76c-e232f3ae999a","type":"Legend"},{"id":"9494a526-d226-4010-8008-462ec98800b2","type":"GlyphRenderer"}],"title":{"id":"81bb5783-1f70-44d3-a304-5ac40f2a587f","type":"Title"},"toolbar":{"id":"7602245b-c161-46d5-8366-3de2288cdff5","type":"Toolbar"},"x_range":{"id":"4fce3ea0-82b5-4833-865a-d3f8c65994be","type":"FactorRange"},"x_scale":{"id":"2bd10fff-57ca-4274-994c-5737e24738fc","type":"CategoricalScale"},"y_range":{"id":"c6542554-fe97-4110-a22f-83ce8aa5b732","type":"Range1d"},"y_scale":{"id":"a922343c-a361-4cd5-867a-2e32f1b1604b","type":"LinearScale"}},"id":"5ca01cfe-db1f-40e5-9984-1f6173975ca5","subtype":"Figure","type":"Plot"}],"root_ids":["5ca01cfe-db1f-40e5-9984-1f6173975ca5"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"8387b85f-20df-4f20-911a-5b714111086d","elementid":"4b44fb9a-bf64-4df0-b05d-e307b8adc587","modelid":"5ca01cfe-db1f-40e5-9984-1f6173975ca5"}];
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