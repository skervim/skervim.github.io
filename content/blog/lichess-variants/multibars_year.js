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
      };var element = document.getElementById("270a2125-1395-4efb-ab6b-f6d36e365fdf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '270a2125-1395-4efb-ab6b-f6d36e365fdf' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0498cf74-2fda-4441-88b0-01ac44049c51":{"roots":{"references":[{"attributes":{},"id":"1884fee2-3095-47dc-a15f-e3b7d791ae36","type":"CategoricalScale"},{"attributes":{"axis_label":"Year, Variant","bounds":"auto","formatter":{"id":"240ccbe9-2bbf-4799-882d-c476b07febc4","type":"CategoricalTickFormatter"},"major_label_orientation":1.5707963267948966,"plot":{"id":"659cea59-c725-4d0b-98d7-b21dedf4a01b","subtype":"Figure","type":"Plot"},"ticker":{"id":"8192f1d0-ff2e-4389-9272-0332045d55c9","type":"CategoricalTicker"}},"id":"d07ec5c9-0c05-490c-91ba-90824f52f668","type":"CategoricalAxis"},{"attributes":{"items":[],"plot":{"id":"659cea59-c725-4d0b-98d7-b21dedf4a01b","subtype":"Figure","type":"Plot"}},"id":"546dbf09-77c9-44e5-b88b-9fa332e81145","type":"Legend"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"659cea59-c725-4d0b-98d7-b21dedf4a01b","subtype":"Figure","type":"Plot"},"ticker":{"id":"8192f1d0-ff2e-4389-9272-0332045d55c9","type":"CategoricalTicker"}},"id":"41fd52a6-5cc9-4590-a351-537c62cc0b1f","type":"Grid"},{"attributes":{"callback":null,"factors":[["2013","threecheck"],["2013","racingkings"],["2013","kingofthehill"],["2013","horde"],["2013","crazyhouse"],["2013","chess960"],["2013","atomic"],["2013","antichess"],["2014","threecheck"],["2014","racingkings"],["2014","kingofthehill"],["2014","horde"],["2014","crazyhouse"],["2014","chess960"],["2014","atomic"],["2014","antichess"],["2015","threecheck"],["2015","racingkings"],["2015","kingofthehill"],["2015","horde"],["2015","crazyhouse"],["2015","chess960"],["2015","atomic"],["2015","antichess"],["2016","threecheck"],["2016","racingkings"],["2016","kingofthehill"],["2016","horde"],["2016","crazyhouse"],["2016","chess960"],["2016","atomic"],["2016","antichess"],["2017","threecheck"],["2017","racingkings"],["2017","kingofthehill"],["2017","horde"],["2017","crazyhouse"],["2017","chess960"],["2017","atomic"],["2017","antichess"],["2018","threecheck"],["2018","racingkings"],["2018","kingofthehill"],["2018","horde"],["2018","crazyhouse"],["2018","chess960"],["2018","atomic"],["2018","antichess"]]},"id":"503d6eaa-387b-43f1-970c-81d728fa4dcb","type":"FactorRange"},{"attributes":{"axis_label":"Games","bounds":"auto","formatter":{"id":"dc0480cc-18d9-4211-a3c4-d10d192176b4","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"659cea59-c725-4d0b-98d7-b21dedf4a01b","subtype":"Figure","type":"Plot"},"ticker":{"id":"745cb3a7-d547-407b-b752-81e9ed03a89c","type":"BasicTicker"}},"id":"4d8c4fb6-0723-491f-8306-231e64381be6","type":"LinearAxis"},{"attributes":{"data_source":{"id":"0e7158e7-3b87-49e5-9352-9790b4821adc","type":"ColumnDataSource"},"glyph":{"id":"e3c17cce-b32b-48d6-95e5-0f306b9649e8","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2cfc536a-ab2f-482c-97d0-fe3a59ccf2dd","type":"VBar"},"selection_glyph":null,"view":{"id":"1908ade9-87a3-4558-8c55-566b6976f642","type":"CDSView"}},"id":"957826e2-d1c5-4042-99db-0c11785b43a1","type":"GlyphRenderer"},{"attributes":{},"id":"240ccbe9-2bbf-4799-882d-c476b07febc4","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["xoffsets","Games","year","variant"],"data":{"Games":{"__ndarray__":"VVVVVWWEAkEAAAAA8hgBQVVVVVUN2PtAVVVVVe2l70AAAAAAgOfcQAAAAADA+/pAVVVVVV0V8UAAAAAAKIPwQFVVVVXtMuBAAAAAANDY8UCrqqqqGrDkQKuqqqqKid5AVVVVVQXt1UCrqqqq2orWQJqZmZmZccdAq6qqqiqOA0GrqqqqQrABQQAAAACsHQJBAAAAAICB00BVVVVVNQbQQFVVVVVVNctAq6qqqiq0xEAAAAAAQK7TQAAAAAAAZ9RAAAAAABDO3ECrqqqqSg7WQFVVVVX1U9BAVVVVVdU2x0Crqqqqaj3GQFVVVVWVocdAVVVVVXUy5kAAAAAA0GDUQFVVVVXFT9BAAAAAAGBFx0AAAAAAoO3VQA==","dtype":"float64","shape":[35]},"variant":["antichess","antichess","antichess","antichess","antichess","atomic","atomic","atomic","atomic","chess960","chess960","chess960","chess960","chess960","chess960","crazyhouse","crazyhouse","crazyhouse","horde","horde","horde","horde","kingofthehill","kingofthehill","kingofthehill","kingofthehill","kingofthehill","racingkings","racingkings","racingkings","threecheck","threecheck","threecheck","threecheck","threecheck"],"xoffsets":[["2018","antichess"],["2017","antichess"],["2016","antichess"],["2015","antichess"],["2014","antichess"],["2018","atomic"],["2017","atomic"],["2016","atomic"],["2015","atomic"],["2018","chess960"],["2017","chess960"],["2016","chess960"],["2015","chess960"],["2014","chess960"],["2013","chess960"],["2018","crazyhouse"],["2017","crazyhouse"],["2016","crazyhouse"],["2018","horde"],["2017","horde"],["2016","horde"],["2015","horde"],["2018","kingofthehill"],["2017","kingofthehill"],["2016","kingofthehill"],["2015","kingofthehill"],["2014","kingofthehill"],["2018","racingkings"],["2017","racingkings"],["2016","racingkings"],["2018","threecheck"],["2017","threecheck"],["2016","threecheck"],["2015","threecheck"],["2014","threecheck"]],"year":["2018","2017","2016","2015","2014","2018","2017","2016","2015","2018","2017","2016","2015","2014","2013","2018","2017","2016","2018","2017","2016","2015","2018","2017","2016","2015","2014","2018","2017","2016","2018","2017","2016","2015","2014"]}},"id":"0e7158e7-3b87-49e5-9352-9790b4821adc","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f770063e-1803-4664-8514-6444e8fa4e23","type":"BoxAnnotation"},{"attributes":{},"id":"8919268c-993a-4016-af61-cfd0358c0a65","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"variant","transform":{"id":"059394e8-cbb4-4459-95d8-9f9a05da1dce","type":"CategoricalColorMapper"}},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"xoffsets"}},"id":"2cfc536a-ab2f-482c-97d0-fe3a59ccf2dd","type":"VBar"},{"attributes":{},"id":"dc0480cc-18d9-4211-a3c4-d10d192176b4","type":"BasicTickFormatter"},{"attributes":{},"id":"a188b6d6-c718-484f-ad47-6515da5628cb","type":"LinearScale"},{"attributes":{},"id":"4750c38f-aacd-4aac-86ed-b27be37b595e","type":"WheelZoomTool"},{"attributes":{"fill_color":{"field":"variant","transform":{"id":"059394e8-cbb4-4459-95d8-9f9a05da1dce","type":"CategoricalColorMapper"}},"line_color":{"value":"#000000"},"top":{"field":"Games"},"width":{"value":0.8},"x":{"field":"xoffsets"}},"id":"e3c17cce-b32b-48d6-95e5-0f306b9649e8","type":"VBar"},{"attributes":{},"id":"745cb3a7-d547-407b-b752-81e9ed03a89c","type":"BasicTicker"},{"attributes":{"overlay":{"id":"f770063e-1803-4664-8514-6444e8fa4e23","type":"BoxAnnotation"}},"id":"465535a4-0a1c-467d-8dfd-80db6d39233e","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":160197.33333333334},"id":"8a1aa22b-e450-4d9a-9fee-581920760f96","type":"Range1d"},{"attributes":{},"id":"3232b5d9-1f41-45b4-9936-d3a717d5a3d7","type":"PanTool"},{"attributes":{"source":{"id":"0e7158e7-3b87-49e5-9352-9790b4821adc","type":"ColumnDataSource"}},"id":"1908ade9-87a3-4558-8c55-566b6976f642","type":"CDSView"},{"attributes":{"below":[{"id":"d07ec5c9-0c05-490c-91ba-90824f52f668","type":"CategoricalAxis"}],"left":[{"id":"4d8c4fb6-0723-491f-8306-231e64381be6","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":400,"plot_width":750,"renderers":[{"id":"d07ec5c9-0c05-490c-91ba-90824f52f668","type":"CategoricalAxis"},{"id":"41fd52a6-5cc9-4590-a351-537c62cc0b1f","type":"Grid"},{"id":"4d8c4fb6-0723-491f-8306-231e64381be6","type":"LinearAxis"},{"id":"2398113a-362f-4b45-81c6-af34a22af81a","type":"Grid"},{"id":"f770063e-1803-4664-8514-6444e8fa4e23","type":"BoxAnnotation"},{"id":"546dbf09-77c9-44e5-b88b-9fa332e81145","type":"Legend"},{"id":"957826e2-d1c5-4042-99db-0c11785b43a1","type":"GlyphRenderer"}],"title":{"id":"70418c80-e8a9-438e-ba88-6ff2947e5c38","type":"Title"},"toolbar":{"id":"10fb7fb3-1fcb-4907-9ddf-c24acb92351c","type":"Toolbar"},"x_range":{"id":"503d6eaa-387b-43f1-970c-81d728fa4dcb","type":"FactorRange"},"x_scale":{"id":"1884fee2-3095-47dc-a15f-e3b7d791ae36","type":"CategoricalScale"},"y_range":{"id":"8a1aa22b-e450-4d9a-9fee-581920760f96","type":"Range1d"},"y_scale":{"id":"a188b6d6-c718-484f-ad47-6515da5628cb","type":"LinearScale"}},"id":"659cea59-c725-4d0b-98d7-b21dedf4a01b","subtype":"Figure","type":"Plot"},{"attributes":{"factors":["antichess","atomic","chess960","crazyhouse","horde","kingofthehill","racingkings","threecheck"],"palette":["#30a2da","#fc4f30","#e5ae38","#6d904f","#8b8b8b","#30a2da","#fc4f30","#e5ae38"]},"id":"059394e8-cbb4-4459-95d8-9f9a05da1dce","type":"CategoricalColorMapper"},{"attributes":{"callback":null,"renderers":[{"id":"957826e2-d1c5-4042-99db-0c11785b43a1","type":"GlyphRenderer"}],"tooltips":[["Year","@{year}"],["Variant","@{variant}"],["Games","@{Games}"]]},"id":"d283879a-8cbc-44c3-87f0-61e081547c9b","type":"HoverTool"},{"attributes":{},"id":"40fa76ac-b777-4312-8f94-a3bf189dee93","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d283879a-8cbc-44c3-87f0-61e081547c9b","type":"HoverTool"},{"id":"40fa76ac-b777-4312-8f94-a3bf189dee93","type":"SaveTool"},{"id":"3232b5d9-1f41-45b4-9936-d3a717d5a3d7","type":"PanTool"},{"id":"4750c38f-aacd-4aac-86ed-b27be37b595e","type":"WheelZoomTool"},{"id":"465535a4-0a1c-467d-8dfd-80db6d39233e","type":"BoxZoomTool"},{"id":"8919268c-993a-4016-af61-cfd0358c0a65","type":"ResetTool"}]},"id":"10fb7fb3-1fcb-4907-9ddf-c24acb92351c","type":"Toolbar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"659cea59-c725-4d0b-98d7-b21dedf4a01b","subtype":"Figure","type":"Plot"},"ticker":{"id":"745cb3a7-d547-407b-b752-81e9ed03a89c","type":"BasicTicker"}},"id":"2398113a-362f-4b45-81c6-af34a22af81a","type":"Grid"},{"attributes":{},"id":"8192f1d0-ff2e-4389-9272-0332045d55c9","type":"CategoricalTicker"},{"attributes":{"plot":null,"text":"","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"70418c80-e8a9-438e-ba88-6ff2947e5c38","type":"Title"}],"root_ids":["659cea59-c725-4d0b-98d7-b21dedf4a01b"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"0498cf74-2fda-4441-88b0-01ac44049c51","elementid":"270a2125-1395-4efb-ab6b-f6d36e365fdf","modelid":"659cea59-c725-4d0b-98d7-b21dedf4a01b"}];
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