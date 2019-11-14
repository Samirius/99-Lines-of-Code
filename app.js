let friends = ["Sameh", "Marco", "Peter", "George", "Mina"]

for (var i=0; i<friends.length; i++){
    console.log(friends[i] + ":")
    for (var x=99; x>=1; x--){
        if (x>2){
            console.log(x +" " + "lines of code in the file," + x + " " + "lines of code;" + friends[i] + "strikes one out, clears it all out," + (x-1) + " " + "lines of code in the file")
        }
        else if (x==2){
            console.log(x +" " + "lines of code in the file," + x + " " + "lines of code;" + friends[i] + "strikes one out, clears it all out," + (x-1) + " " + "line of code in the file")
        }
        else if (x=1){
            console.log(x +" " + "line of code in the file," + x + " " + "line of code;" + friends[i] + "strikes one out, clears it all out, no more lines of code in the file")
        }
    }
}