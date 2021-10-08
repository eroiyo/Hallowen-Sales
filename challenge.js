function howManyGames(p, d, m, s) {
    let result=0;
    while(true){
        s=s-p;
        if(s<0){
            return result
        } else {
            result = result+1;
            p=p-d;
            if(p<m){
                p=m;
            }
        }
    }

}
