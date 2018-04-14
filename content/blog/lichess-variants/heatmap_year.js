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
      };var element = document.getElementById("0d7d3671-1006-4c4b-9f94-797ee2dcd4f2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0d7d3671-1006-4c4b-9f94-797ee2dcd4f2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6b291651-d591-423e-bb73-401befbc6436":{"roots":{"references":[{"attributes":{"callback":null,"renderers":[{"id":"d6990933-4c56-40e9-9e5c-0b77373ed151","type":"GlyphRenderer"}],"tooltips":[["year","@{year}"],["variant","@{variant}"],["Games","@{Games}"]]},"id":"9797d8af-e9ee-427b-acd0-6790af857fb7","type":"HoverTool"},{"attributes":{"overlay":{"id":"cdbf0584-807a-42a3-8ade-9339757bd241","type":"BoxAnnotation"}},"id":"342ba1b2-3cea-4fd6-8f76-5c376c5b8937","type":"BoxZoomTool"},{"attributes":{"high":160197.33333333334,"low":10600.333333333334,"nan_color":"white","palette":["#313695","#313896","#323a97","#333d98","#343f99","#34429b","#35449c","#36479d","#37499e","#384c9f","#384ea1","#3951a2","#3a53a3","#3b56a4","#3b58a6","#3c5ba7","#3d5da8","#3e60a9","#3f62aa","#3f64ac","#4067ad","#4169ae","#426caf","#436eb0","#4371b2","#4473b3","#4576b4","#4778b5","#497ab6","#4b7cb7","#4d7eb9","#4f81ba","#5083bb","#5285bc","#5487bd","#5689be","#588cbf","#5a8ec1","#5c90c2","#5d92c3","#5f94c4","#6197c5","#6399c6","#659bc7","#679dc9","#689fca","#6aa2cb","#6ca4cc","#6ea6cd","#70a8ce","#72aacf","#74add1","#76aed1","#78b0d2","#7ab2d3","#7cb3d4","#7eb5d5","#80b7d6","#83b9d7","#85bad8","#87bcd9","#89beda","#8bbfdb","#8dc1dc","#90c3dd","#92c5de","#94c6df","#96c8e0","#98cae1","#9acce1","#9ccde2","#9fcfe3","#a1d1e4","#a3d2e5","#a5d4e6","#a7d6e7","#a9d8e8","#acd9e9","#aedae9","#b0dbea","#b2dceb","#b4ddeb","#b6deec","#b8dfec","#bae0ed","#bce1ed","#bee2ee","#c0e3ef","#c2e4ef","#c4e5f0","#c7e6f0","#c9e7f1","#cbe8f2","#cde9f2","#cfeaf3","#d1ebf3","#d3ecf4","#d5edf5","#d7eef5","#d9eff6","#dbf0f6","#ddf1f7","#e0f3f8","#e1f3f5","#e2f3f3","#e3f4f1","#e4f4ef","#e6f5ec","#e7f5ea","#e8f6e8","#e9f6e6","#eaf7e3","#ecf7e1","#edf8df","#eef8dd","#eff9da","#f1f9d8","#f2fad6","#f3fad4","#f4fbd2","#f5fbcf","#f7fbcd","#f8fccb","#f9fcc9","#fafdc6","#fbfdc4","#fdfec2","#fefec0","#fefebe","#fefdbc","#fefbba","#fefab8","#fef9b6","#fef8b4","#fef7b3","#fef5b1","#fef4af","#fef3ad","#fef2ab","#fef1a9","#feefa7","#feeea6","#feeda4","#feeca2","#feeaa0","#fee99e","#fee89c","#fee79b","#fee699","#fee497","#fee395","#fee293","#fee191","#fee090","#fdde8e","#fddc8c","#fdda8a","#fdd888","#fdd686","#fdd484","#fdd283","#fdd081","#fdce7f","#fdcc7d","#fdca7b","#fdc879","#fdc678","#fdc476","#fdc274","#fdc072","#fdbe70","#fdbc6e","#fdba6c","#fdb86b","#fdb669","#fdb467","#fdb265","#fdb063","#fdae61","#fcac60","#fcaa5f","#fca75e","#fba55c","#fba25b","#fb9f5a","#fa9d59","#fa9a58","#fa9857","#f99555","#f99354","#f89053","#f88e52","#f88b51","#f7894f","#f7864e","#f7834d","#f6814c","#f67e4b","#f67c4a","#f57948","#f57747","#f57446","#f47245","#f46f44","#f46d43","#f26a41","#f16840","#f0653f","#ef633e","#ee613d","#ed5e3c","#ec5c3b","#ea593a","#e95739","#e85538","#e75236","#e65035","#e54d34","#e44b33","#e24932","#e14631","#e04430","#df412f","#de3f2e","#dd3d2d","#dc3a2b","#da382a","#d93529","#d83328","#d73127","#d62f26","#d42d26","#d22b26","#d02926","#ce2726","#cc2526","#ca2326","#c82126","#c62026","#c41e26","#c21c26","#c01a26","#be1826","#bc1626","#ba1426","#b81226","#b61026","#b40f26","#b20d26","#b00b26","#ae0926","#ac0726","#aa0526","#a80326","#a60126","#a50026"]},"id":"2c89e24e-68ea-4a58-aeb8-58fd612e7dcb","type":"LogColorMapper"},{"attributes":{"plot":null,"text":"Average number of games","text_color":{"value":"black"},"text_font_size":{"value":"12pt"}},"id":"3dccadb6-1ef0-4fee-95fa-aedc2ea431a4","type":"Title"},{"attributes":{},"id":"cd47940a-fc85-41ee-8390-8054968f053f","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"variant","bounds":"auto","formatter":{"id":"cd47940a-fc85-41ee-8390-8054968f053f","type":"CategoricalTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"549d8f79-f604-4a96-a49e-d3daf0432fe8","subtype":"Figure","type":"Plot"},"ticker":{"id":"37b10a5e-8958-4b8d-8524-a3f4e57420a5","type":"CategoricalTicker"}},"id":"65cd911d-c5d3-40c2-b84b-627bc9bd139f","type":"CategoricalAxis"},{"attributes":{"fill_color":{"field":"zvalues","transform":{"id":"2c89e24e-68ea-4a58-aeb8-58fd612e7dcb","type":"LogColorMapper"}},"height":{"units":"data","value":1},"line_alpha":{"value":0},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"year"},"y":{"field":"variant"}},"id":"c6ef00d5-3ad8-4874-9574-40daf6dba281","type":"Rect"},{"attributes":{},"id":"c2c8eb83-2986-43b0-b3fe-fb50da8d2780","type":"CategoricalScale"},{"attributes":{"callback":null,"factors":["threecheck","racingkings","kingofthehill","horde","crazyhouse","chess960","atomic","antichess"]},"id":"aa77224f-6f24-4df2-9ff4-abb71f5084da","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"zvalues","transform":{"id":"2c89e24e-68ea-4a58-aeb8-58fd612e7dcb","type":"LogColorMapper"}},"height":{"units":"data","value":1},"line_alpha":{"value":0},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"year"},"y":{"field":"variant"}},"id":"910947ba-99c0-4366-af2b-0cb654ee5652","type":"Rect"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9797d8af-e9ee-427b-acd0-6790af857fb7","type":"HoverTool"},{"id":"cd4fb5d2-85d2-4ded-aec1-7153eceff6dc","type":"SaveTool"},{"id":"c15270e1-e400-4c5c-b36a-7b4b9a302532","type":"PanTool"},{"id":"0f67ff78-5d57-4b76-b609-4b8967382b95","type":"WheelZoomTool"},{"id":"342ba1b2-3cea-4fd6-8f76-5c376c5b8937","type":"BoxZoomTool"},{"id":"513c81cc-1372-4898-83aa-f0ca73d7f2af","type":"ResetTool"}]},"id":"deaf5584-83e2-4820-9c60-95b5d70c6348","type":"Toolbar"},{"attributes":{"bar_line_color":{"value":"black"},"color_mapper":{"id":"2c89e24e-68ea-4a58-aeb8-58fd612e7dcb","type":"LogColorMapper"},"formatter":{"id":"8fe9ed6b-b231-4ed1-b647-478db4533a87","type":"BasicTickFormatter"},"label_standoff":8,"location":[0,0],"major_tick_line_color":{"value":"black"},"plot":{"id":"549d8f79-f604-4a96-a49e-d3daf0432fe8","subtype":"Figure","type":"Plot"},"ticker":{"id":"68021e73-d716-4848-9ded-488970f0538b","type":"LogTicker"}},"id":"0f458332-1d26-41bd-a539-61e05c750812","type":"ColorBar"},{"attributes":{},"id":"65d7ca3d-d87d-4b40-bb64-b34f9b0a102a","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"a258fa8e-5ba6-4168-83ad-34cd098a377f","type":"ColumnDataSource"},"glyph":{"id":"c6ef00d5-3ad8-4874-9574-40daf6dba281","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"910947ba-99c0-4366-af2b-0cb654ee5652","type":"Rect"},"selection_glyph":null,"view":{"id":"a33dc5dd-d94e-4e25-828f-91e188743590","type":"CDSView"}},"id":"d6990933-4c56-40e9-9e5c-0b77373ed151","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"549d8f79-f604-4a96-a49e-d3daf0432fe8","subtype":"Figure","type":"Plot"},"ticker":{"id":"b5d01c68-e5d6-41f8-b2c7-8f84343e759f","type":"CategoricalTicker"}},"id":"00aa0be6-7c92-4fea-9ddb-0a01c0a8496d","type":"Grid"},{"attributes":{"source":{"id":"a258fa8e-5ba6-4168-83ad-34cd098a377f","type":"ColumnDataSource"}},"id":"a33dc5dd-d94e-4e25-828f-91e188743590","type":"CDSView"},{"attributes":{"axis_label":"year","bounds":"auto","formatter":{"id":"53169ead-4199-480e-9641-98e77dc2b2cc","type":"CategoricalTickFormatter"},"major_label_orientation":1.5707963267948966,"plot":{"id":"549d8f79-f604-4a96-a49e-d3daf0432fe8","subtype":"Figure","type":"Plot"},"ticker":{"id":"b5d01c68-e5d6-41f8-b2c7-8f84343e759f","type":"CategoricalTicker"}},"id":"e9292f06-7241-4939-be09-a76e29dc2879","type":"CategoricalAxis"},{"attributes":{},"id":"53169ead-4199-480e-9641-98e77dc2b2cc","type":"CategoricalTickFormatter"},{"attributes":{},"id":"b5d01c68-e5d6-41f8-b2c7-8f84343e759f","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["2013","2014","2015","2016","2017","2018"]},"id":"d056ab8c-e1a9-466d-b06b-e50077c3bfd9","type":"FactorRange"},{"attributes":{},"id":"37b10a5e-8958-4b8d-8524-a3f4e57420a5","type":"CategoricalTicker"},{"attributes":{},"id":"68021e73-d716-4848-9ded-488970f0538b","type":"LogTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"549d8f79-f604-4a96-a49e-d3daf0432fe8","subtype":"Figure","type":"Plot"},"ticker":{"id":"37b10a5e-8958-4b8d-8524-a3f4e57420a5","type":"CategoricalTicker"}},"id":"c68f9b41-a9f8-4ffa-8496-bbd7ff4fd1e0","type":"Grid"},{"attributes":{},"id":"cd4fb5d2-85d2-4ded-aec1-7153eceff6dc","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["year","variant","zvalues","Games"],"data":{"Games":["-","-","12003","-","-","-","-","-","29598","-","23083","-","-","16720","-","22454","64815","33175","22452","-","10600","22585","-","11915","1.1405e+05","67634","31270","1.4841e+05","13931","29496","12099","16703","1.4006e+05","69974","42369","1.449e+05","16409","20892","11387","20867","1.5169e+05","1.1052e+05","73101","1.602e+05","19974","20153","11886","45460"],"variant":["antichess","atomic","chess960","crazyhouse","horde","kingofthehill","racingkings","threecheck","antichess","atomic","chess960","crazyhouse","horde","kingofthehill","racingkings","threecheck","antichess","atomic","chess960","crazyhouse","horde","kingofthehill","racingkings","threecheck","antichess","atomic","chess960","crazyhouse","horde","kingofthehill","racingkings","threecheck","antichess","atomic","chess960","crazyhouse","horde","kingofthehill","racingkings","threecheck","antichess","atomic","chess960","crazyhouse","horde","kingofthehill","racingkings","threecheck"],"year":["2013","2013","2013","2013","2013","2013","2013","2013","2014","2014","2014","2014","2014","2014","2014","2014","2015","2015","2015","2015","2015","2015","2015","2015","2016","2016","2016","2016","2016","2016","2016","2016","2017","2017","2017","2017","2017","2017","2017","2017","2018","2018","2018","2018","2018","2018","2018","2018"],"zvalues":{"__ndarray__":"AAAAAAAA+H8AAAAAAAD4f5qZmZmZccdAAAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAACA59xAAAAAAAAA+H+rqqqq2orWQAAAAAAAAPh/AAAAAAAA+H9VVVVV9VPQQAAAAAAAAPh/AAAAAKDt1UBVVVVV7aXvQFVVVVXtMuBAVVVVVQXt1UAAAAAAAAD4f6uqqqoqtMRAq6qqqkoO1kAAAAAAAAD4fwAAAABgRcdAVVVVVQ3Y+0AAAAAAKIPwQKuqqqqKid5AAAAAAKwdAkFVVVVVVTXLQAAAAAAQztxAVVVVVZWhx0BVVVVVxU/QQAAAAADyGAFBVVVVVV0V8UCrqqqqGrDkQKuqqqpCsAFBVVVVVTUG0EAAAAAAAGfUQKuqqqpqPcZAAAAAANBg1EBVVVVVZYQCQQAAAADA+/pAAAAAANDY8UCrqqqqKo4DQQAAAACAgdNAAAAAAECu00BVVVVV1TbHQFVVVVV1MuZA","dtype":"float64","shape":[48]}}},"id":"a258fa8e-5ba6-4168-83ad-34cd098a377f","type":"ColumnDataSource"},{"attributes":{},"id":"0f67ff78-5d57-4b76-b609-4b8967382b95","type":"WheelZoomTool"},{"attributes":{},"id":"8fe9ed6b-b231-4ed1-b647-478db4533a87","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cdbf0584-807a-42a3-8ade-9339757bd241","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"e9292f06-7241-4939-be09-a76e29dc2879","type":"CategoricalAxis"}],"left":[{"id":"65cd911d-c5d3-40c2-b84b-627bc9bd139f","type":"CategoricalAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":650,"plot_width":750,"renderers":[{"id":"e9292f06-7241-4939-be09-a76e29dc2879","type":"CategoricalAxis"},{"id":"00aa0be6-7c92-4fea-9ddb-0a01c0a8496d","type":"Grid"},{"id":"65cd911d-c5d3-40c2-b84b-627bc9bd139f","type":"CategoricalAxis"},{"id":"c68f9b41-a9f8-4ffa-8496-bbd7ff4fd1e0","type":"Grid"},{"id":"cdbf0584-807a-42a3-8ade-9339757bd241","type":"BoxAnnotation"},{"id":"d6990933-4c56-40e9-9e5c-0b77373ed151","type":"GlyphRenderer"},{"id":"0f458332-1d26-41bd-a539-61e05c750812","type":"ColorBar"}],"right":[{"id":"0f458332-1d26-41bd-a539-61e05c750812","type":"ColorBar"}],"title":{"id":"3dccadb6-1ef0-4fee-95fa-aedc2ea431a4","type":"Title"},"toolbar":{"id":"deaf5584-83e2-4820-9c60-95b5d70c6348","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"d056ab8c-e1a9-466d-b06b-e50077c3bfd9","type":"FactorRange"},"x_scale":{"id":"c2c8eb83-2986-43b0-b3fe-fb50da8d2780","type":"CategoricalScale"},"y_range":{"id":"aa77224f-6f24-4df2-9ff4-abb71f5084da","type":"FactorRange"},"y_scale":{"id":"65d7ca3d-d87d-4b40-bb64-b34f9b0a102a","type":"CategoricalScale"}},"id":"549d8f79-f604-4a96-a49e-d3daf0432fe8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"513c81cc-1372-4898-83aa-f0ca73d7f2af","type":"ResetTool"},{"attributes":{},"id":"c15270e1-e400-4c5c-b36a-7b4b9a302532","type":"PanTool"}],"root_ids":["549d8f79-f604-4a96-a49e-d3daf0432fe8"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"6b291651-d591-423e-bb73-401befbc6436","elementid":"0d7d3671-1006-4c4b-9f94-797ee2dcd4f2","modelid":"549d8f79-f604-4a96-a49e-d3daf0432fe8"}];
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