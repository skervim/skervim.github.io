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
      };var element = document.getElementById("6e71fa72-ca90-440e-a815-124a792da6de");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6e71fa72-ca90-440e-a815-124a792da6de' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d902c909-8fb2-4b05-9292-a08d98cd58bb":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7d16bfcb-f319-4770-a333-213337b63b53","type":"BoxAnnotation"},{"attributes":{"callback":null,"renderers":[{"id":"1328596d-3c85-43f2-8ece-fa627fb2bc4c","type":"GlyphRenderer"}],"tooltips":[["Date","@{date}"],["Games","@{Games}"]]},"id":"9ba38122-6651-4b52-803b-c048e1d3c1cb","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"d0aa6308-e8b7-455f-b392-bc3adbd89d32","type":"VBar"},{"attributes":{"callback":null,"end":183112},"id":"349f6f3f-bc4b-44ba-9bbf-c381f6446888","type":"Range1d"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"0bcb199e-4fa5-42fe-b3bf-28a0a40121af","type":"CategoricalTickFormatter"},"major_label_orientation":1.5707963267948966,"plot":{"id":"98bd75ed-0677-4017-9264-a7f073fa9829","subtype":"Figure","type":"Plot"},"ticker":{"id":"011860ba-6cbf-47c5-b17f-f1b12a771663","type":"CategoricalTicker"}},"id":"15d084b2-c539-4ead-afcf-016ed65eb157","type":"CategoricalAxis"},{"attributes":{},"id":"977ad69d-e63a-4ba2-a030-f647565c789c","type":"BasicTicker"},{"attributes":{"below":[{"id":"15d084b2-c539-4ead-afcf-016ed65eb157","type":"CategoricalAxis"}],"left":[{"id":"37c7f566-379a-4576-b403-568aed88e22b","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":400,"plot_width":750,"renderers":[{"id":"15d084b2-c539-4ead-afcf-016ed65eb157","type":"CategoricalAxis"},{"id":"8141337c-5b80-4b28-8001-4b26fe1c07ba","type":"Grid"},{"id":"37c7f566-379a-4576-b403-568aed88e22b","type":"LinearAxis"},{"id":"c4f06a2f-b03e-4981-8a4d-e8fe1b2b1471","type":"Grid"},{"id":"7d16bfcb-f319-4770-a333-213337b63b53","type":"BoxAnnotation"},{"id":"1328596d-3c85-43f2-8ece-fa627fb2bc4c","type":"GlyphRenderer"}],"title":{"id":"49505e7b-9e80-445b-b061-0ac3881c6c88","type":"Title"},"toolbar":{"id":"31b3779f-88ca-4c68-9236-488f2a760dc4","type":"Toolbar"},"x_range":{"id":"24fa518c-4291-4f34-9c1e-5738d9163692","type":"FactorRange"},"x_scale":{"id":"7f98df6f-5e9f-4ecb-a927-805a2b91ae7e","type":"CategoricalScale"},"y_range":{"id":"349f6f3f-bc4b-44ba-9bbf-c381f6446888","type":"Range1d"},"y_scale":{"id":"982464bb-8cc7-4074-b72d-1af2e9a2f27c","type":"LinearScale"}},"id":"98bd75ed-0677-4017-9264-a7f073fa9829","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"7d16bfcb-f319-4770-a333-213337b63b53","type":"BoxAnnotation"}},"id":"05d8a391-0d19-4492-8f3e-71d9eea64338","type":"BoxZoomTool"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"d3d159cd-66e6-4018-bcd0-c9133ccc6cc2","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"98bd75ed-0677-4017-9264-a7f073fa9829","subtype":"Figure","type":"Plot"},"ticker":{"id":"977ad69d-e63a-4ba2-a030-f647565c789c","type":"BasicTicker"}},"id":"37c7f566-379a-4576-b403-568aed88e22b","type":"LinearAxis"},{"attributes":{},"id":"982464bb-8cc7-4074-b72d-1af2e9a2f27c","type":"LinearScale"},{"attributes":{},"id":"a59f34d3-650a-4929-836b-613a0135aaf9","type":"ResetTool"},{"attributes":{},"id":"7f98df6f-5e9f-4ecb-a927-805a2b91ae7e","type":"CategoricalScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"ddea7b18-f6b1-4706-a056-fe1c943981d0","type":"VBar"},{"attributes":{},"id":"011860ba-6cbf-47c5-b17f-f1b12a771663","type":"CategoricalTicker"},{"attributes":{},"id":"2635b380-c130-4636-8ab6-994201767b09","type":"PanTool"},{"attributes":{},"id":"0bcb199e-4fa5-42fe-b3bf-28a0a40121af","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9ba38122-6651-4b52-803b-c048e1d3c1cb","type":"HoverTool"},{"id":"493c20f4-a582-492d-afa3-98f5cf15dab0","type":"SaveTool"},{"id":"2635b380-c130-4636-8ab6-994201767b09","type":"PanTool"},{"id":"b487e42c-348e-414a-ba97-d2deed23c608","type":"WheelZoomTool"},{"id":"05d8a391-0d19-4492-8f3e-71d9eea64338","type":"BoxZoomTool"},{"id":"a59f34d3-650a-4929-836b-613a0135aaf9","type":"ResetTool"}]},"id":"31b3779f-88ca-4c68-9236-488f2a760dc4","type":"Toolbar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"98bd75ed-0677-4017-9264-a7f073fa9829","subtype":"Figure","type":"Plot"},"ticker":{"id":"011860ba-6cbf-47c5-b17f-f1b12a771663","type":"CategoricalTicker"}},"id":"8141337c-5b80-4b28-8001-4b26fe1c07ba","type":"Grid"},{"attributes":{"source":{"id":"25a15942-f933-48d6-b6ad-ed6c76a051c1","type":"ColumnDataSource"}},"id":"239e1475-24be-43cc-a67b-07ba0c7939c4","type":"CDSView"},{"attributes":{},"id":"d3d159cd-66e6-4018-bcd0-c9133ccc6cc2","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"25a15942-f933-48d6-b6ad-ed6c76a051c1","type":"ColumnDataSource"},"glyph":{"id":"ddea7b18-f6b1-4706-a056-fe1c943981d0","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d0aa6308-e8b7-455f-b392-bc3adbd89d32","type":"VBar"},"selection_glyph":null,"view":{"id":"239e1475-24be-43cc-a67b-07ba0c7939c4","type":"CDSView"}},"id":"1328596d-3c85-43f2-8ece-fa627fb2bc4c","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"98bd75ed-0677-4017-9264-a7f073fa9829","subtype":"Figure","type":"Plot"},"ticker":{"id":"977ad69d-e63a-4ba2-a030-f647565c789c","type":"BasicTicker"}},"id":"c4f06a2f-b03e-4981-8a4d-e8fe1b2b1471","type":"Grid"},{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[183112,153326,144154,156442,148822,149147,134457,138680,135970,141416,138404,130724,145621,144550,174619,180072,148164,157761,150777,148257,149567,133741,153344,145266,126428,164020,123469],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01"]}},"id":"25a15942-f933-48d6-b6ad-ed6c76a051c1","type":"ColumnDataSource"},{"attributes":{},"id":"b487e42c-348e-414a-ba97-d2deed23c608","type":"WheelZoomTool"},{"attributes":{},"id":"493c20f4-a582-492d-afa3-98f5cf15dab0","type":"SaveTool"},{"attributes":{"callback":null,"factors":["2016/01","2016/02","2016/03","2016/04","2016/05","2016/06","2016/07","2016/08","2016/09","2016/10","2016/11","2016/12","2017/01","2017/02","2017/03","2017/04","2017/05","2017/06","2017/07","2017/08","2017/09","2017/10","2017/11","2017/12","2018/01","2018/02","2018/03"]},"id":"24fa518c-4291-4f34-9c1e-5738d9163692","type":"FactorRange"},{"attributes":{"plot":null,"text":"Crazyhouse","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"49505e7b-9e80-445b-b061-0ac3881c6c88","type":"Title"}],"root_ids":["98bd75ed-0677-4017-9264-a7f073fa9829"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"d902c909-8fb2-4b05-9292-a08d98cd58bb","elementid":"6e71fa72-ca90-440e-a815-124a792da6de","modelid":"98bd75ed-0677-4017-9264-a7f073fa9829"}];
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