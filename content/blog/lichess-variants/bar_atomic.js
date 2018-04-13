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
      };var element = document.getElementById("0d293427-76b9-4afa-95d7-cae0a254f5d7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0d293427-76b9-4afa-95d7-cae0a254f5d7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"869c609d-cc78-4660-ace3-c65bb7ea9e7a":{"roots":{"references":[{"attributes":{},"id":"bb4fca6f-2b58-4d3a-a272-7f883f317cd1","type":"BasicTicker"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"d997bdff-f7e6-4883-be9c-3e60ac309e44","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"0e2a8ef9-bb2e-4f91-95d8-24a15ad41066","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb4fca6f-2b58-4d3a-a272-7f883f317cd1","type":"BasicTicker"}},"id":"ff0b5c29-85d9-40eb-b9fe-2761dd4faa00","type":"LinearAxis"},{"attributes":{"source":{"id":"dbdd758f-5dd8-4d1e-b268-a264f25fa20e","type":"ColumnDataSource"}},"id":"d4f7ad90-45d5-4bc1-bb1e-935436b9a307","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#30a2da"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"1bf01032-f561-445d-b806-cda00fa628fe","type":"VBar"},{"attributes":{"data_source":{"id":"dbdd758f-5dd8-4d1e-b268-a264f25fa20e","type":"ColumnDataSource"},"glyph":{"id":"e2096df7-0481-4a0b-91b6-51455fbbc1cd","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1bf01032-f561-445d-b806-cda00fa628fe","type":"VBar"},"selection_glyph":null,"view":{"id":"d4f7ad90-45d5-4bc1-bb1e-935436b9a307","type":"CDSView"}},"id":"47211891-7442-4c45-b4d9-718178b2a1bc","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"f743317d-a870-4aa2-8624-cc95ec812b1f","type":"CategoricalAxis"}],"left":[{"id":"ff0b5c29-85d9-40eb-b9fe-2761dd4faa00","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":300,"renderers":[{"id":"f743317d-a870-4aa2-8624-cc95ec812b1f","type":"CategoricalAxis"},{"id":"117521fb-9134-489a-a388-b7911e0e695e","type":"Grid"},{"id":"ff0b5c29-85d9-40eb-b9fe-2761dd4faa00","type":"LinearAxis"},{"id":"215568cc-bef1-422c-9bf9-b98493127b10","type":"Grid"},{"id":"36fe7015-ea4f-4dc8-870a-492dde9ada05","type":"BoxAnnotation"},{"id":"41dac5de-0d04-44cd-b235-93981975dc0c","type":"Legend"},{"id":"47211891-7442-4c45-b4d9-718178b2a1bc","type":"GlyphRenderer"}],"title":{"id":"295c9668-c531-43a4-bbee-2f33fd194eff","type":"Title"},"toolbar":{"id":"298e1dc2-3618-454f-a790-505c9b962ea5","type":"Toolbar"},"x_range":{"id":"7a5df664-f3cf-4608-9d47-87611f7fc3a8","type":"FactorRange"},"x_scale":{"id":"4a0b2575-d9d8-4fb1-b948-f7786ec4e484","type":"CategoricalScale"},"y_range":{"id":"d60b61b9-3edd-49cd-a193-f56510c1a1aa","type":"Range1d"},"y_scale":{"id":"5008b55f-bd4e-406a-9ab7-34a363068a0a","type":"LinearScale"}},"id":"0e2a8ef9-bb2e-4f91-95d8-24a15ad41066","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"36fe7015-ea4f-4dc8-870a-492dde9ada05","type":"BoxAnnotation"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"859decf9-f61d-4ff7-9b0b-cd8ce5fbc1a5","type":"CategoricalTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"0e2a8ef9-bb2e-4f91-95d8-24a15ad41066","subtype":"Figure","type":"Plot"},"ticker":{"id":"bdb100d2-36a4-4fd9-b6c3-1006c1acec16","type":"CategoricalTicker"}},"id":"f743317d-a870-4aa2-8624-cc95ec812b1f","type":"CategoricalAxis"},{"attributes":{},"id":"865a7ea1-7b29-4a18-ab82-9cd1b3ecccab","type":"PanTool"},{"attributes":{"items":[],"plot":{"id":"0e2a8ef9-bb2e-4f91-95d8-24a15ad41066","subtype":"Figure","type":"Plot"}},"id":"41dac5de-0d04-44cd-b235-93981975dc0c","type":"Legend"},{"attributes":{"fill_color":{"value":"#30a2da"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"e2096df7-0481-4a0b-91b6-51455fbbc1cd","type":"VBar"},{"attributes":{},"id":"3852f02d-cd54-4f2e-a4f7-d87f5d64921a","type":"SaveTool"},{"attributes":{},"id":"5008b55f-bd4e-406a-9ab7-34a363068a0a","type":"LinearScale"},{"attributes":{},"id":"6b975357-ba33-40f3-a682-29f3667c9cf3","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"Atomic","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"295c9668-c531-43a4-bbee-2f33fd194eff","type":"Title"},{"attributes":{"overlay":{"id":"36fe7015-ea4f-4dc8-870a-492dde9ada05","type":"BoxAnnotation"}},"id":"7baeb3bb-3111-4e19-8fb8-e88ae730ece7","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[95236,132414,103922,104729,75494,68728,62830,65938,66929,63153,60051,64126,71266,67850,68592,81701,77418,60317,65781,51464,59874,68689,66663,74438,84281,65865,55123,52117,42237,22885,25945,24620,33403,30694,28857,24757,35759,40401,36430],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04","2015/03","2015/02","2015/01"]}},"id":"dbdd758f-5dd8-4d1e-b268-a264f25fa20e","type":"ColumnDataSource"},{"attributes":{},"id":"859decf9-f61d-4ff7-9b0b-cd8ce5fbc1a5","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"end":132414},"id":"d60b61b9-3edd-49cd-a193-f56510c1a1aa","type":"Range1d"},{"attributes":{},"id":"d997bdff-f7e6-4883-be9c-3e60ac309e44","type":"BasicTickFormatter"},{"attributes":{},"id":"4a0b2575-d9d8-4fb1-b948-f7786ec4e484","type":"CategoricalScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"0e2a8ef9-bb2e-4f91-95d8-24a15ad41066","subtype":"Figure","type":"Plot"},"ticker":{"id":"bdb100d2-36a4-4fd9-b6c3-1006c1acec16","type":"CategoricalTicker"}},"id":"117521fb-9134-489a-a388-b7911e0e695e","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3852f02d-cd54-4f2e-a4f7-d87f5d64921a","type":"SaveTool"},{"id":"865a7ea1-7b29-4a18-ab82-9cd1b3ecccab","type":"PanTool"},{"id":"6b975357-ba33-40f3-a682-29f3667c9cf3","type":"WheelZoomTool"},{"id":"7baeb3bb-3111-4e19-8fb8-e88ae730ece7","type":"BoxZoomTool"},{"id":"ac880760-f685-49bd-b4ad-66133932f786","type":"ResetTool"}]},"id":"298e1dc2-3618-454f-a790-505c9b962ea5","type":"Toolbar"},{"attributes":{},"id":"ac880760-f685-49bd-b4ad-66133932f786","type":"ResetTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"0e2a8ef9-bb2e-4f91-95d8-24a15ad41066","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb4fca6f-2b58-4d3a-a272-7f883f317cd1","type":"BasicTicker"}},"id":"215568cc-bef1-422c-9bf9-b98493127b10","type":"Grid"},{"attributes":{},"id":"bdb100d2-36a4-4fd9-b6c3-1006c1acec16","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04","2015/03","2015/02","2015/01"]},"id":"7a5df664-f3cf-4608-9d47-87611f7fc3a8","type":"FactorRange"}],"root_ids":["0e2a8ef9-bb2e-4f91-95d8-24a15ad41066"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"869c609d-cc78-4660-ace3-c65bb7ea9e7a","elementid":"0d293427-76b9-4afa-95d7-cae0a254f5d7","modelid":"0e2a8ef9-bb2e-4f91-95d8-24a15ad41066"}];
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