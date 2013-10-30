//棋子能走的着点
com.bylaw ={}
//车
com.bylaw.c = function (x,y,map,my){
        var d=[];
        //左侧检索
        for (var i=x-1; i>= 0; i--){
                if (map[y][i]) {
                        if (com.mans[map[y][i]].my!=my) d.push([i,y]);
                        break
                }else{
                        d.push([i,y])        
                }
        }
        //右侧检索
        for (var i=x+1; i <= 8; i++){
                if (map[y][i]) {
                        if (com.mans[map[y][i]].my!=my) d.push([i,y]);
                        break
                }else{
                        d.push([i,y])        
                }
        }
        //上检索
        for (var i = y-1 ; i >= 0; i--){
                if (map[i][x]) {
                        if (com.mans[map[i][x]].my!=my) d.push([x,i]);
                        break
                }else{
                        d.push([x,i])        
                }
        }
        //下检索
        for (var i = y+1 ; i<= 9; i++){
                if (map[i][x]) {
                        if (com.mans[map[i][x]].my!=my) d.push([x,i]);
                        break
                }else{
                        d.push([x,i])        
                }
        }
        return d;
}

//马
com.bylaw.m = function (x,y,map,my){
        var d=[];
                //1点
                if ( y-2>= 0 && x+1<= 8 && !play.map[y-1][x] &&(!com.mans[map[y-2][x+1]] || com.mans[map[y-2][x+1]].my!=my)) d.push([x+1,y-2]);
                //2点
                if ( y-1>= 0 && x+2<= 8 && !play.map[y][x+1] &&(!com.mans[map[y-1][x+2]] || com.mans[map[y-1][x+2]].my!=my)) d.push([x+2,y-1]);
                //4点
                if ( y+1<= 9 && x+2<= 8 && !play.map[y][x+1] &&(!com.mans[map[y+1][x+2]] || com.mans[map[y+1][x+2]].my!=my)) d.push([x+2,y+1]);
                //5点
                if ( y+2<= 9 && x+1<= 8 && !play.map[y+1][x] &&(!com.mans[map[y+2][x+1]] || com.mans[map[y+2][x+1]].my!=my)) d.push([x+1,y+2]);
                //7点
                if ( y+2<= 9 && x-1>= 0 && !play.map[y+1][x] &&(!com.mans[map[y+2][x-1]] || com.mans[map[y+2][x-1]].my!=my)) d.push([x-1,y+2]);
                //8点
                if ( y+1<= 9 && x-2>= 0 && !play.map[y][x-1] &&(!com.mans[map[y+1][x-2]] || com.mans[map[y+1][x-2]].my!=my)) d.push([x-2,y+1]);
                //10点
                if ( y-1>= 0 && x-2>= 0 && !play.map[y][x-1] &&(!com.mans[map[y-1][x-2]] || com.mans[map[y-1][x-2]].my!=my)) d.push([x-2,y-1]);
                //11点
                if ( y-2>= 0 && x-1>= 0 && !play.map[y-1][x] &&(!com.mans[map[y-2][x-1]] || com.mans[map[y-2][x-1]].my!=my)) d.push([x-1,y-2]);

        return d;
}

//相
com.bylaw.x = function (x,y,map,my){
        var d=[];
        if (my===1){ //红方
                //4点半
                if ( y+2<= 9 && x+2<= 8 && !play.map[y+1][x+1] && (!com.mans[map[y+2][x+2]] || com.mans[map[y+2][x+2]].my!=my)) d.push([x+2,y+2]);
                //7点半
                if ( y+2<= 9 && x-2>= 0 && !play.map[y+1][x-1] && (!com.mans[map[y+2][x-2]] || com.mans[map[y+2][x-2]].my!=my)) d.push([x-2,y+2]);
                //1点半
                if ( y-2>= 5 && x+2<= 8 && !play.map[y-1][x+1] && (!com.mans[map[y-2][x+2]] || com.mans[map[y-2][x+2]].my!=my)) d.push([x+2,y-2]);
                //10点半
                if ( y-2>= 5 && x-2>= 0 && !play.map[y-1][x-1] && (!com.mans[map[y-2][x-2]] || com.mans[map[y-2][x-2]].my!=my)) d.push([x-2,y-2]);
        }else{
                //4点半
                if ( y+2<= 4 && x+2<= 8 && !play.map[y+1][x+1] && (!com.mans[map[y+2][x+2]] || com.mans[map[y+2][x+2]].my!=my)) d.push([x+2,y+2]);
                //7点半
                if ( y+2<= 4 && x-2>= 0 && !play.map[y+1][x-1] && (!com.mans[map[y+2][x-2]] || com.mans[map[y+2][x-2]].my!=my)) d.push([x-2,y+2]);
                //1点半
                if ( y-2>= 0 && x+2<= 8 && !play.map[y-1][x+1] && (!com.mans[map[y-2][x+2]] || com.mans[map[y-2][x+2]].my!=my)) d.push([x+2,y-2]);
                //10点半
                if ( y-2>= 0 && x-2>= 0 && !play.map[y-1][x-1] && (!com.mans[map[y-2][x-2]] || com.mans[map[y-2][x-2]].my!=my)) d.push([x-2,y-2]);
        }
        return d;
}

//士
com.bylaw.s = function (x,y,map,my){
        var d=[];
        if (my===1){ //红方
                //4点半
                if ( y+1<= 9 && x+1<= 5 && (!com.mans[map[y+1][x+1]] || com.mans[map[y+1][x+1]].my!=my)) d.push([x+1,y+1]);
                //7点半
                if ( y+1<= 9 && x-1>= 3 && (!com.mans[map[y+1][x-1]] || com.mans[map[y+1][x-1]].my!=my)) d.push([x-1,y+1]);
                //1点半
                if ( y-1>= 7 && x+1<= 5 && (!com.mans[map[y-1][x+1]] || com.mans[map[y-1][x+1]].my!=my)) d.push([x+1,y-1]);
                //10点半
                if ( y-1>= 7 && x-1>= 3 && (!com.mans[map[y-1][x-1]] || com.mans[map[y-1][x-1]].my!=my)) d.push([x-1,y-1]);
        }else{
                //4点半
                if ( y+1<= 2 && x+1<= 5 && (!com.mans[map[y+1][x+1]] || com.mans[map[y+1][x+1]].my!=my)) d.push([x+1,y+1]);
                //7点半
                if ( y+1<= 2 && x-1>= 3 && (!com.mans[map[y+1][x-1]] || com.mans[map[y+1][x-1]].my!=my)) d.push([x-1,y+1]);
                //1点半
                if ( y-1>= 0 && x+1<= 5 && (!com.mans[map[y-1][x+1]] || com.mans[map[y-1][x+1]].my!=my)) d.push([x+1,y-1]);
                //10点半
                if ( y-1>= 0 && x-1>= 3 && (!com.mans[map[y-1][x-1]] || com.mans[map[y-1][x-1]].my!=my)) d.push([x-1,y-1]);
        }
        return d;
                
}

//将
com.bylaw.j = function (x,y,map,my){
        var d=[];
        var isNull=(function (y1,y2){
                var y1=com.mans["j0"].y;
                var x1=com.mans["J0"].x;
                var y2=com.mans["J0"].y;
                for (var i=y1-1; i>y2; i--){
                        if (map[i][x1]) return false;
                }
                return true;
        })();
        
        if (my===1){ //红方
                //下
                if ( y+1<= 9  && (!com.mans[map[y+1][x]] || com.mans[map[y+1][x]].my!=my)) d.push([x,y+1]);
                //上
                if ( y-1>= 7 && (!com.mans[map[y-1][x]] || com.mans[map[y-1][x]].my!=my)) d.push([x,y-1]);
                //老将对老将的情况
                if ( com.mans["j0"].x == com.mans["J0"].x &&isNull) d.push([com.mans["J0"].x,com.mans["J0"].y]);
                
        }else{
                //下
                if ( y+1<= 2  && (!com.mans[map[y+1][x]] || com.mans[map[y+1][x]].my!=my)) d.push([x,y+1]);
                //上
                if ( y-1>= 0 && (!com.mans[map[y-1][x]] || com.mans[map[y-1][x]].my!=my)) d.push([x,y-1]);
                //老将对老将的情况
                if ( com.mans["j0"].x == com.mans["J0"].x &&isNull) d.push([com.mans["j0"].x,com.mans["j0"].y]);
        }
        //右
        if ( x+1<= 5  && (!com.mans[map[y][x+1]] || com.mans[map[y][x+1]].my!=my)) d.push([x+1,y]);
        //左
        if ( x-1>= 3 && (!com.mans[map[y][x-1]] || com.mans[map[y][x-1]].my!=my))d.push([x-1,y]);
        return d;
}

//炮
com.bylaw.p = function (x,y,map,my){
        var d=[];
        //左侧检索
        var n=0;
        for (var i=x-1; i>= 0; i--){
                if (map[y][i]) {
                        if (n==0){
                                n++;
                                continue;
                        }else{
                                if (com.mans[map[y][i]].my!=my) d.push([i,y]);
                                break        
                        }
                }else{
                        if(n==0) d.push([i,y])        
                }
        }
        //右侧检索
        var n=0;
        for (var i=x+1; i <= 8; i++){
                if (map[y][i]) {
                        if (n==0){
                                n++;
                                continue;
                        }else{
                                if (com.mans[map[y][i]].my!=my) d.push([i,y]);
                                break        
                        }
                }else{
                        if(n==0) d.push([i,y])        
                }
        }
        //上检索
        var n=0;
        for (var i = y-1 ; i >= 0; i--){
                if (map[i][x]) {
                        if (n==0){
                                n++;
                                continue;
                        }else{
                                if (com.mans[map[i][x]].my!=my) d.push([x,i]);
                                break        
                        }
                }else{
                        if(n==0) d.push([x,i])        
                }
        }
        //下检索
        var n=0;
        for (var i = y+1 ; i<= 9; i++){
                if (map[i][x]) {
                        if (n==0){
                                n++;
                                continue;
                        }else{
                                if (com.mans[map[i][x]].my!=my) d.push([x,i]);
                                break        
                        }
                }else{
                        if(n==0) d.push([x,i])        
                }
        }
        return d;
}

//卒
com.bylaw.z = function (x,y,map,my){
        var d=[];
        if (my===1){ //红方
                //上
                if ( y-1>= 0 && (!com.mans[map[y-1][x]] || com.mans[map[y-1][x]].my!=my)) d.push([x,y-1]);
                //右
                if ( x+1<= 8 && y<=4  && (!com.mans[map[y][x+1]] || com.mans[map[y][x+1]].my!=my)) d.push([x+1,y]);
                //左
                if ( x-1>= 0 && y<=4 && (!com.mans[map[y][x-1]] || com.mans[map[y][x-1]].my!=my))d.push([x-1,y]);
        }else{
                //下
                if ( y+1<= 9  && (!com.mans[map[y+1][x]] || com.mans[map[y+1][x]].my!=my)) d.push([x,y+1]);
                //右
                if ( x+1<= 8 && y>=6  && (!com.mans[map[y][x+1]] || com.mans[map[y][x+1]].my!=my)) d.push([x+1,y]);
                //左
                if ( x-1>= 0 && y>=6 && (!com.mans[map[y][x-1]] || com.mans[map[y][x-1]].my!=my))d.push([x-1,y]);
        }
        
        return d;
}
