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
      };var element = document.getElementById("41d01c43-ae3b-4139-8925-76abc4099ced");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '41d01c43-ae3b-4139-8925-76abc4099ced' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6ba80426-5640-457a-9eef-c447d230c227":{"roots":{"references":[{"attributes":{"below":[{"id":"9d136414-c6e6-43a4-92bf-fbabb80f67e1","type":"CategoricalAxis"}],"left":[{"id":"9f09acdd-f934-4cf7-bcc6-c978b0b82bd5","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":300,"renderers":[{"id":"9d136414-c6e6-43a4-92bf-fbabb80f67e1","type":"CategoricalAxis"},{"id":"000c86d1-41ec-43a6-856a-8b53f46c8d51","type":"Grid"},{"id":"9f09acdd-f934-4cf7-bcc6-c978b0b82bd5","type":"LinearAxis"},{"id":"7c7f0398-179a-40c5-8135-e94d4210fe29","type":"Grid"},{"id":"f0e65b03-6d73-44b0-8960-d2b53c40fa7b","type":"BoxAnnotation"},{"id":"fa8b4657-1e50-43f1-b715-197030827d7f","type":"Legend"},{"id":"a2a2d1cd-195a-48d7-b533-0dc697dd5b35","type":"GlyphRenderer"}],"title":{"id":"ce31eaf6-3254-4bec-abb6-aa49dc779c26","type":"Title"},"toolbar":{"id":"318a6444-02b3-4b37-b200-9501b1a543fb","type":"Toolbar"},"x_range":{"id":"f05c4788-7b4b-44bd-98b1-aeccf87ac730","type":"FactorRange"},"x_scale":{"id":"fc19d807-0c10-4261-8e24-9cd0438719f0","type":"CategoricalScale"},"y_range":{"id":"0e842141-6448-4ea1-aa55-3359849262a2","type":"Range1d"},"y_scale":{"id":"4be55aab-ffb4-4b36-9d88-5f94f42bbf14","type":"LinearScale"}},"id":"84970390-b7d5-45ab-83ae-5cbe91886562","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"213aa91b-9df2-413b-b0be-37011bcb33bf","type":"ColumnDataSource"}},"id":"713eca35-6730-4286-a49f-2cc91f688af7","type":"CDSView"},{"attributes":{},"id":"4c5a18b4-bdc9-4fc1-8805-eff71be051c0","type":"ResetTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"84970390-b7d5-45ab-83ae-5cbe91886562","subtype":"Figure","type":"Plot"},"ticker":{"id":"4443ef23-5c60-422f-9afe-307b111085d4","type":"BasicTicker"}},"id":"7c7f0398-179a-40c5-8135-e94d4210fe29","type":"Grid"},{"attributes":{"data_source":{"id":"213aa91b-9df2-413b-b0be-37011bcb33bf","type":"ColumnDataSource"},"glyph":{"id":"f8cee920-2202-43ab-87bf-552b27f578af","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"00bad2fe-0ef2-42f3-9fbf-8c1995e301db","type":"VBar"},"selection_glyph":null,"view":{"id":"713eca35-6730-4286-a49f-2cc91f688af7","type":"CDSView"}},"id":"a2a2d1cd-195a-48d7-b533-0dc697dd5b35","type":"GlyphRenderer"},{"attributes":{},"id":"d47df553-9aef-4a91-8fea-0ecafe315fee","type":"WheelZoomTool"},{"attributes":{"callback":null,"factors":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04","2015/03","2015/02","2015/01","2014/12","2014/11","2014/10","2014/09","2014/08","2014/07","2014/06","2014/05","2014/04","2014/03","2014/02","2014/01","2013/12","2013/11","2013/10","2013/09","2013/08"]},"id":"f05c4788-7b4b-44bd-98b1-aeccf87ac730","type":"FactorRange"},{"attributes":{},"id":"4be55aab-ffb4-4b36-9d88-5f94f42bbf14","type":"LinearScale"},{"attributes":{},"id":"9d9b59db-84cf-4599-9120-c358519979fc","type":"BasicTickFormatter"},{"attributes":{},"id":"9ae0c89c-115b-4c8d-bfba-84e4d0a753cf","type":"PanTool"},{"attributes":{},"id":"39132855-5cba-4835-a529-fe54ae3d506a","type":"CategoricalTicker"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"9d9b59db-84cf-4599-9120-c358519979fc","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"84970390-b7d5-45ab-83ae-5cbe91886562","subtype":"Figure","type":"Plot"},"ticker":{"id":"4443ef23-5c60-422f-9afe-307b111085d4","type":"BasicTicker"}},"id":"9f09acdd-f934-4cf7-bcc6-c978b0b82bd5","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#30a2da"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"00bad2fe-0ef2-42f3-9fbf-8c1995e301db","type":"VBar"},{"attributes":{"fill_color":{"value":"#30a2da"},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"date"}},"id":"f8cee920-2202-43ab-87bf-552b27f578af","type":"VBar"},{"attributes":{},"id":"4443ef23-5c60-422f-9afe-307b111085d4","type":"BasicTicker"},{"attributes":{"overlay":{"id":"f0e65b03-6d73-44b0-8960-d2b53c40fa7b","type":"BoxAnnotation"}},"id":"e096501e-0358-40b6-b205-69884bd4cd38","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"Chess960","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"ce31eaf6-3254-4bec-abb6-aa49dc779c26","type":"Title"},{"attributes":{},"id":"daedaac1-39a4-4a4e-ac69-e1629d9ca956","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"daedaac1-39a4-4a4e-ac69-e1629d9ca956","type":"SaveTool"},{"id":"9ae0c89c-115b-4c8d-bfba-84e4d0a753cf","type":"PanTool"},{"id":"d47df553-9aef-4a91-8fea-0ecafe315fee","type":"WheelZoomTool"},{"id":"e096501e-0358-40b6-b205-69884bd4cd38","type":"BoxZoomTool"},{"id":"4c5a18b4-bdc9-4fc1-8805-eff71be051c0","type":"ResetTool"}]},"id":"318a6444-02b3-4b37-b200-9501b1a543fb","type":"Toolbar"},{"attributes":{},"id":"fc19d807-0c10-4261-8e24-9cd0438719f0","type":"CategoricalScale"},{"attributes":{},"id":"a7e4c090-8518-4122-8b98-2b30bf626fc8","type":"CategoricalTickFormatter"},{"attributes":{"items":[],"plot":{"id":"84970390-b7d5-45ab-83ae-5cbe91886562","subtype":"Figure","type":"Plot"}},"id":"fa8b4657-1e50-43f1-b715-197030827d7f","type":"Legend"},{"attributes":{"callback":null,"column_names":["date","Games"],"data":{"Games":[77342,79336,62625,58159,58267,45696,43978,41011,41239,41782,37334,33393,38284,32584,36699,34324,34945,32789,33286,30392,29433,26312,33010,30011,29783,30575,30382,29170,31247,29474,26245,23332,20937,19816,18462,18328,17616,16239,18559,23648,29447,26194,23867,23533,23734,21938,24033,21458,18389,18834,21926,17142,11533,11350,9432,10559],"date":["2018/03","2018/02","2018/01","2017/12","2017/11","2017/10","2017/09","2017/08","2017/07","2017/06","2017/05","2017/04","2017/03","2017/02","2017/01","2016/12","2016/11","2016/10","2016/09","2016/08","2016/07","2016/06","2016/05","2016/04","2016/03","2016/02","2016/01","2015/12","2015/11","2015/10","2015/09","2015/08","2015/07","2015/06","2015/05","2015/04","2015/03","2015/02","2015/01","2014/12","2014/11","2014/10","2014/09","2014/08","2014/07","2014/06","2014/05","2014/04","2014/03","2014/02","2014/01","2013/12","2013/11","2013/10","2013/09","2013/08"]}},"id":"213aa91b-9df2-413b-b0be-37011bcb33bf","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"84970390-b7d5-45ab-83ae-5cbe91886562","subtype":"Figure","type":"Plot"},"ticker":{"id":"39132855-5cba-4835-a529-fe54ae3d506a","type":"CategoricalTicker"}},"id":"000c86d1-41ec-43a6-856a-8b53f46c8d51","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f0e65b03-6d73-44b0-8960-d2b53c40fa7b","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":79336},"id":"0e842141-6448-4ea1-aa55-3359849262a2","type":"Range1d"},{"attributes":{"axis_label":"Date","bounds":"auto","formatter":{"id":"a7e4c090-8518-4122-8b98-2b30bf626fc8","type":"CategoricalTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"84970390-b7d5-45ab-83ae-5cbe91886562","subtype":"Figure","type":"Plot"},"ticker":{"id":"39132855-5cba-4835-a529-fe54ae3d506a","type":"CategoricalTicker"}},"id":"9d136414-c6e6-43a4-92bf-fbabb80f67e1","type":"CategoricalAxis"}],"root_ids":["84970390-b7d5-45ab-83ae-5cbe91886562"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"6ba80426-5640-457a-9eef-c447d230c227","elementid":"41d01c43-ae3b-4139-8925-76abc4099ced","modelid":"84970390-b7d5-45ab-83ae-5cbe91886562"}];
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