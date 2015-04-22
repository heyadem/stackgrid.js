(function(){!function($){return $.stackgrid=function(){return{grid:{$container:void 0,$items:void 0,container:{height:0,width:0},column:{index:0,stacks:{ordinal:[],optimized:[]}},items:[],number_of_columns:0,plot:{optimized:{},ordinal:{}}},config:{container_selector:void 0,item_selector:void 0,column_width:320,gutter:20,is_fluid:!0,is_optimized:!0,number_of_columns:4,resize_delay:100,move:function(i,n,t,o){i.css({left:n,top:t}),o()},scale:function(i,n,t,o){i.css({height:n,width:t}),o()}},initialize:function(i,n,t){var o,r,e,d,c,g,u;g=this,$.extend(g.config,t),r=$(window),o=$(document),u={height:r.height(),width:r.width(),is_resizing:!1,resizing:void 0},u.update=function(){u.height=r.height(),u.width=r.width()},g.grid.ordinal={setup:function(){var i;for(i=0,g.grid.column.stacks.ordinal=[];i<g.grid.number_of_columns;)g.grid.column.stacks.ordinal[i]=0,i++;g.grid.container.height=0,g.grid.column.index=0},plot:function(i){g.grid.items[i][2]=g.config.gutter+(g.config.column_width+g.config.gutter)*g.grid.column.index,g.grid.items[i][3]=g.config.gutter+g.grid.column.stacks.ordinal[g.grid.column.index],g.grid.column.stacks.ordinal[g.grid.column.index]+=g.grid.items[i][1]+g.config.gutter,g.grid.column.stacks.ordinal[g.grid.column.index]>g.grid.container.height&&(g.grid.container.height=g.grid.column.stacks.ordinal[g.grid.column.index]),g.grid.column.index++,g.grid.column.index>=g.grid.number_of_columns&&(g.grid.column.index=0)},loop:function(){var i;for(i=0;i<g.grid.items.length;)g.grid.ordinal.plot(i),i++}},g.grid.optimized={setup:function(){var i;for(g.grid.column.stacks.optimized=[],i=0;i<g.grid.number_of_columns;)g.grid.column.stacks.optimized[i]=[i,0],i++;g.grid.container.height=0,g.grid.column.index=0},plot:function(i){g.grid.items[i][2]=g.config.gutter+(g.config.column_width+g.config.gutter)*g.grid.column.stacks.optimized[0][0],g.grid.items[i][3]=g.config.gutter+g.grid.column.stacks.optimized[0][1],g.grid.column.stacks.optimized[0][1]+=g.grid.items[i][1]+g.config.gutter,g.grid.column.stacks.optimized[0][1]>g.grid.container.height&&(g.grid.container.height=g.grid.column.stacks.optimized[0][1]),g.grid.column.stacks.optimized.sort(function(i,n){return i[1]-n[1]}),g.grid.column.index++,g.grid.column.index>=g.grid.number_of_columns&&(g.grid.column.index=0)},loop:function(){var i;for(i=0;i<g.grid.items.length;)g.grid.optimized.plot(i),i++}},g.grid.initialize=function(){g.config.container_selector=i,g.config.item_selector=n},g.grid.setup=function(){var i,n,t,o,r,e,d;for(g.reset(),g.grid.$container=$(g.config.container_selector),g.grid.$items=$(g.grid.$container.find(g.config.item_selector)),d=g.grid.$items,t=r=0,e=d.length;e>r;t=++r)o=d[t],i=$(o),i.width(g.config.column_width),n=i.outerHeight(),g.grid.items[t]=[i,n,0,0]},g.grid.container.scale=function(i){var n,t;g.grid.container.width=g.grid.items.length<g.grid.number_of_columns?(g.config.column_width+g.config.gutter)*g.grid.items.length:(g.config.column_width+g.config.gutter)*g.grid.number_of_columns,n=g.grid.container.height+g.config.gutter,t=g.grid.container.width+g.config.gutter,g.config.scale(g.grid.$container,n,t,i)},g.grid.paint=function(){g.grid.container.scale(function(){var i,n,t,o,r,e,d;for(e=g.grid.items,d=[],n=o=0,r=e.length;r>o;n=++o)t=e[n],i=function(){},d.push(g.config.move(t[0],t[2],t[3],i));return d})},g.grid.stack=function(){g.grid.number_of_columns=g.config.is_fluid?Math.floor((u.width-g.config.gutter)/(g.config.column_width+g.config.gutter)):g.config.number_of_columns,g.config.is_optimized?(g.grid.optimized.setup(),g.grid.optimized.loop()):(g.grid.ordinal.setup(),g.grid.ordinal.loop()),g.grid.paint()},c={handler:function(){u.update()},complete:function(){g.grid.stack()}},d=void 0,e=function(i,n){clearTimeout(d),d=window.setTimeout(i,n)},r.on("resize",function(){c.handler(),e(c.complete,g.config.resize_delay)}),g.grid.initialize(),g.grid.setup(),g.grid.stack()},reset:function(){var i;i=this,i.grid.column.stacks.optimized=[],i.grid.column.stacks.ordinal=[],i.grid.$items=[],i.grid.items=[]},restack:function(){var i;i=this,i.grid.setup(),i.grid.stack()},append:function(i,n){var t,o,r,e;e=this,t=$(i),r=e.grid.items.length,t.width(e.config.column_width),o=t.outerHeight(),e.grid.items[r]=[t,o,0,0],e.config.is_optimized?e.grid.optimized.plot(r):e.grid.ordinal.plot(r),e.grid.container.scale(function(){return e.config.move(e.grid.items[r][0],e.grid.items[r][2],e.grid.items[r][3],n)})}}}}(jQuery)}).call(this);