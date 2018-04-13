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
      };var element = document.getElementById("0fff18b2-a817-427c-b9fe-8c2678be80a0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0fff18b2-a817-427c-b9fe-8c2678be80a0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"929df3f7-7805-41a0-92ac-6990670b1a38":{"roots":{"references":[{"attributes":{"items":[],"plot":{"id":"fee233fd-4830-469f-b714-729ad2167a3e","subtype":"Figure","type":"Plot"}},"id":"00111e07-ee05-4f97-a0b9-da9b4ce38a92","type":"Legend"},{"attributes":{},"id":"0e50f62b-495a-410f-be96-9a0b774a51ea","type":"CategoricalScale"},{"attributes":{},"id":"ef64100c-82a2-48fd-b53c-74912decc2d3","type":"ResetTool"},{"attributes":{},"id":"7f01e335-1298-4667-9771-c6578ca42a9e","type":"CategoricalTicker"},{"attributes":{"fill_color":{"value":"#30a2da"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"63c2b977-f1eb-4238-b0ea-cd5efcd7bc30","type":"VBar"},{"attributes":{"overlay":{"id":"71af0f64-4e72-4ce3-a748-f2b574f0953c","type":"BoxAnnotation"}},"id":"b6ea55a9-4b98-423b-b3b8-f082dc413caf","type":"BoxZoomTool"},{"attributes":{},"id":"90dd5367-2b44-4e45-b5a4-eba84dcfbb99","type":"BasicTicker"},{"attributes":{},"id":"da79a6cd-236f-40a8-be54-1935c2ce0fa6","type":"WheelZoomTool"},{"attributes":{"source":{"id":"9394f49f-ca76-4144-ade9-10391de15201","type":"ColumnDataSource"}},"id":"172a819e-b5d6-4e9a-85f6-16b00ee39d4c","type":"CDSView"},{"attributes":{"callback":null,"factors":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01"]},"id":"e1fd414b-969b-43bb-b13f-872da3fff9d6","type":"FactorRange"},{"attributes":{},"id":"53a9a97f-f2de-4aa8-8a56-d809b9283719","type":"CategoricalTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"71af0f64-4e72-4ce3-a748-f2b574f0953c","type":"BoxAnnotation"},{"attributes":{},"id":"deb3c9e0-8b2a-4baf-b95c-a611ba5924d6","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"9394f49f-ca76-4144-ade9-10391de15201","type":"ColumnDataSource"},"glyph":{"id":"63c2b977-f1eb-4238-b0ea-cd5efcd7bc30","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b93c08fa-52ef-427b-ba5b-a93f7de9fd32","type":"VBar"},"selection_glyph":null,"view":{"id":"172a819e-b5d6-4e9a-85f6-16b00ee39d4c","type":"CDSView"}},"id":"42fba5be-d529-466f-b4cc-c1c644522af5","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"105acf7e-000c-482e-8e43-897ddf528a87","type":"CategoricalAxis"}],"left":[{"id":"3a2f8ef2-732f-45d4-886d-5980d90ff2c2","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":300,"renderers":[{"id":"105acf7e-000c-482e-8e43-897ddf528a87","type":"CategoricalAxis"},{"id":"fbb3aca5-ec40-4b4f-a768-b127eaba3b1d","type":"Grid"},{"id":"3a2f8ef2-732f-45d4-886d-5980d90ff2c2","type":"LinearAxis"},{"id":"e4996116-06e8-40d3-b8e1-0e2209458402","type":"Grid"},{"id":"71af0f64-4e72-4ce3-a748-f2b574f0953c","type":"BoxAnnotation"},{"id":"00111e07-ee05-4f97-a0b9-da9b4ce38a92","type":"Legend"},{"id":"42fba5be-d529-466f-b4cc-c1c644522af5","type":"GlyphRenderer"}],"title":{"id":"f1d191b8-dd60-4d31-af73-48efd8c5c1bc","type":"Title"},"toolbar":{"id":"253f33c0-65e7-4173-ab6d-6f2b8fe19ecd","type":"Toolbar"},"x_range":{"id":"e1fd414b-969b-43bb-b13f-872da3fff9d6","type":"FactorRange"},"x_scale":{"id":"0e50f62b-495a-410f-be96-9a0b774a51ea","type":"CategoricalScale"},"y_range":{"id":"afb60a10-da6c-4c46-b3a2-c94949875a4b","type":"Range1d"},"y_scale":{"id":"36ef0750-a00d-4db4-a92b-9e0a983221ec","type":"LinearScale"}},"id":"fee233fd-4830-469f-b714-729ad2167a3e","subtype":"Figure","type":"Plot"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"fee233fd-4830-469f-b714-729ad2167a3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f01e335-1298-4667-9771-c6578ca42a9e","type":"CategoricalTicker"}},"id":"fbb3aca5-ec40-4b4f-a768-b127eaba3b1d","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"69606c7f-a699-4ad5-88a2-dd654d4b4f17","type":"SaveTool"},{"id":"6c5c71d5-1822-47ad-8cb1-868abaaef292","type":"PanTool"},{"id":"da79a6cd-236f-40a8-be54-1935c2ce0fa6","type":"WheelZoomTool"},{"id":"b6ea55a9-4b98-423b-b3b8-f082dc413caf","type":"BoxZoomTool"},{"id":"ef64100c-82a2-48fd-b53c-74912decc2d3","type":"ResetTool"}]},"id":"253f33c0-65e7-4173-ab6d-6f2b8fe19ecd","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#30a2da"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"b93c08fa-52ef-427b-ba5b-a93f7de9fd32","type":"VBar"},{"attributes":{},"id":"36ef0750-a00d-4db4-a92b-9e0a983221ec","type":"LinearScale"},{"attributes":{},"id":"6c5c71d5-1822-47ad-8cb1-868abaaef292","type":"PanTool"},{"attributes":{"plot":null,"text":"Crazyhouse","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"f1d191b8-dd60-4d31-af73-48efd8c5c1bc","type":"Title"},{"attributes":{},"id":"69606c7f-a699-4ad5-88a2-dd654d4b4f17","type":"SaveTool"},{"attributes":{"callback":null,"end":183112},"id":"afb60a10-da6c-4c46-b3a2-c94949875a4b","type":"Range1d"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"53a9a97f-f2de-4aa8-8a56-d809b9283719","type":"CategoricalTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"fee233fd-4830-469f-b714-729ad2167a3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f01e335-1298-4667-9771-c6578ca42a9e","type":"CategoricalTicker"}},"id":"105acf7e-000c-482e-8e43-897ddf528a87","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[183112,153326,144154,156442,148822,149147,134457,138680,135970,141416,138404,130724,145621,144550,174619,180072,148164,157761,150777,148257,149567,133741,153344,145266,126428,164020,123469],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01"]}},"id":"9394f49f-ca76-4144-ade9-10391de15201","type":"ColumnDataSource"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"fee233fd-4830-469f-b714-729ad2167a3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"90dd5367-2b44-4e45-b5a4-eba84dcfbb99","type":"BasicTicker"}},"id":"e4996116-06e8-40d3-b8e1-0e2209458402","type":"Grid"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"deb3c9e0-8b2a-4baf-b95c-a611ba5924d6","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"fee233fd-4830-469f-b714-729ad2167a3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"90dd5367-2b44-4e45-b5a4-eba84dcfbb99","type":"BasicTicker"}},"id":"3a2f8ef2-732f-45d4-886d-5980d90ff2c2","type":"LinearAxis"}],"root_ids":["fee233fd-4830-469f-b714-729ad2167a3e"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"929df3f7-7805-41a0-92ac-6990670b1a38","elementid":"0fff18b2-a817-427c-b9fe-8c2678be80a0","modelid":"fee233fd-4830-469f-b714-729ad2167a3e"}];
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