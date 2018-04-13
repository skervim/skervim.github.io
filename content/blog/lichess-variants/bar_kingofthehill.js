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
      };var element = document.getElementById("74df44e6-d585-47d5-b0e7-91d055c5784b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '74df44e6-d585-47d5-b0e7-91d055c5784b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c12dc39b-e512-47c7-a279-5b561d8d1790":{"roots":{"references":[{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"ed7689eb-aae2-4976-ab75-069deff9d8ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c7e037c-b11c-4ab6-b1e2-d7f9ec4f577a","type":"BasicTicker"}},"id":"d6417571-16af-4ece-8c09-04dbfbfde212","type":"Grid"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"b9dc57ae-3214-4176-a258-522a284a8e7e","type":"CategoricalTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"ed7689eb-aae2-4976-ab75-069deff9d8ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"53acd72a-c243-4013-b7cd-53d1d78f001a","type":"CategoricalTicker"}},"id":"c409176e-3616-4443-81b2-bae986a4c795","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"King of the hill","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"d2268c1e-7bfd-4116-a2aa-7f88b8321f8b","type":"Title"},{"attributes":{},"id":"03defc21-47c2-47d1-9422-489d78f10b53","type":"SaveTool"},{"attributes":{},"id":"041dd487-704e-4d4e-a638-505fffa67e0a","type":"LinearScale"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"d1c28a84-3f12-4487-8264-d61db9b6d99a","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"ed7689eb-aae2-4976-ab75-069deff9d8ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c7e037c-b11c-4ab6-b1e2-d7f9ec4f577a","type":"BasicTicker"}},"id":"a1844a03-bce5-4b44-8c20-c7d02ed246fe","type":"LinearAxis"},{"attributes":{"callback":null,"factors":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04","2015/03","2015/02","2015/01","2014/12","2014/11","2014/10","2014/09","2014/08","2014/07"]},"id":"fe28bd26-205a-4bc4-8b3d-ada5d21cbf2a","type":"FactorRange"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ed7689eb-aae2-4976-ab75-069deff9d8ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"53acd72a-c243-4013-b7cd-53d1d78f001a","type":"CategoricalTicker"}},"id":"5c8daf5b-2eba-458c-af38-7febef26af76","type":"Grid"},{"attributes":{"below":[{"id":"c409176e-3616-4443-81b2-bae986a4c795","type":"CategoricalAxis"}],"left":[{"id":"a1844a03-bce5-4b44-8c20-c7d02ed246fe","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":300,"renderers":[{"id":"c409176e-3616-4443-81b2-bae986a4c795","type":"CategoricalAxis"},{"id":"5c8daf5b-2eba-458c-af38-7febef26af76","type":"Grid"},{"id":"a1844a03-bce5-4b44-8c20-c7d02ed246fe","type":"LinearAxis"},{"id":"d6417571-16af-4ece-8c09-04dbfbfde212","type":"Grid"},{"id":"fe6a8b4e-674f-4c2d-a05e-64446190639f","type":"BoxAnnotation"},{"id":"07ce9f91-df8d-4ebd-bb69-7aeb06161bb6","type":"Legend"},{"id":"c09abbac-2a97-4ed6-8651-e8b0fd282f88","type":"GlyphRenderer"}],"title":{"id":"d2268c1e-7bfd-4116-a2aa-7f88b8321f8b","type":"Title"},"toolbar":{"id":"db3f26ca-00f7-4445-ab63-5af766ba40a0","type":"Toolbar"},"x_range":{"id":"fe28bd26-205a-4bc4-8b3d-ada5d21cbf2a","type":"FactorRange"},"x_scale":{"id":"6b229554-fe63-407a-9acc-224c89455cf6","type":"CategoricalScale"},"y_range":{"id":"821542a9-1600-42a7-b0a8-023df76ca4c5","type":"Range1d"},"y_scale":{"id":"041dd487-704e-4d4e-a638-505fffa67e0a","type":"LinearScale"}},"id":"ed7689eb-aae2-4976-ab75-069deff9d8ff","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"059d4050-cac7-4c23-b7e4-b72556b3c998","type":"WheelZoomTool"},{"attributes":{},"id":"b98c0f9c-c70c-4f9b-b89f-bc37406a27bf","type":"ResetTool"},{"attributes":{"items":[],"plot":{"id":"ed7689eb-aae2-4976-ab75-069deff9d8ff","subtype":"Figure","type":"Plot"}},"id":"07ce9f91-df8d-4ebd-bb69-7aeb06161bb6","type":"Legend"},{"attributes":{"data_source":{"id":"6e71e3b6-3531-4861-b3ba-8ba1fc10903a","type":"ColumnDataSource"},"glyph":{"id":"dfd34503-13ec-4a81-a58f-be735c81105a","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1402e53f-f953-4789-9a09-6901cb34d861","type":"VBar"},"selection_glyph":null,"view":{"id":"ccd5bac1-784b-49b2-85a7-0096fdc13216","type":"CDSView"}},"id":"c09abbac-2a97-4ed6-8651-e8b0fd282f88","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"fe6a8b4e-674f-4c2d-a05e-64446190639f","type":"BoxAnnotation"}},"id":"68c7ba47-ad64-46d6-9285-8fd890cf7b50","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fe6a8b4e-674f-4c2d-a05e-64446190639f","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#30a2da"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"1402e53f-f953-4789-9a09-6901cb34d861","type":"VBar"},{"attributes":{},"id":"6b229554-fe63-407a-9acc-224c89455cf6","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[20528,16868,23063,16851,16931,25517,13988,18909,19497,20370,25265,21825,25814,23551,22186,20658,28899,43457,33154,31390,31132,30059,37535,21502,21531,23989,30649,32014,41364,33945,32758,20690,17286,21528,18052,18691,17130,8577,8987,24636,16379,15529,16216,22320,5239],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04","2015/03","2015/02","2015/01","2014/12","2014/11","2014/10","2014/09","2014/08","2014/07"]}},"id":"6e71e3b6-3531-4861-b3ba-8ba1fc10903a","type":"ColumnDataSource"},{"attributes":{},"id":"53acd72a-c243-4013-b7cd-53d1d78f001a","type":"CategoricalTicker"},{"attributes":{"source":{"id":"6e71e3b6-3531-4861-b3ba-8ba1fc10903a","type":"ColumnDataSource"}},"id":"ccd5bac1-784b-49b2-85a7-0096fdc13216","type":"CDSView"},{"attributes":{"fill_color":{"value":"#30a2da"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"dfd34503-13ec-4a81-a58f-be735c81105a","type":"VBar"},{"attributes":{},"id":"d1c28a84-3f12-4487-8264-d61db9b6d99a","type":"BasicTickFormatter"},{"attributes":{},"id":"79d4b8c0-002b-46c3-bae9-cb7a80b11fa9","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"03defc21-47c2-47d1-9422-489d78f10b53","type":"SaveTool"},{"id":"79d4b8c0-002b-46c3-bae9-cb7a80b11fa9","type":"PanTool"},{"id":"059d4050-cac7-4c23-b7e4-b72556b3c998","type":"WheelZoomTool"},{"id":"68c7ba47-ad64-46d6-9285-8fd890cf7b50","type":"BoxZoomTool"},{"id":"b98c0f9c-c70c-4f9b-b89f-bc37406a27bf","type":"ResetTool"}]},"id":"db3f26ca-00f7-4445-ab63-5af766ba40a0","type":"Toolbar"},{"attributes":{},"id":"7c7e037c-b11c-4ab6-b1e2-d7f9ec4f577a","type":"BasicTicker"},{"attributes":{"callback":null,"end":43457},"id":"821542a9-1600-42a7-b0a8-023df76ca4c5","type":"Range1d"},{"attributes":{},"id":"b9dc57ae-3214-4176-a258-522a284a8e7e","type":"CategoricalTickFormatter"}],"root_ids":["ed7689eb-aae2-4976-ab75-069deff9d8ff"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"c12dc39b-e512-47c7-a279-5b561d8d1790","elementid":"74df44e6-d585-47d5-b0e7-91d055c5784b","modelid":"ed7689eb-aae2-4976-ab75-069deff9d8ff"}];
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